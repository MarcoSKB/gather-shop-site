import type { PiniaCustomStateProperties, PiniaPluginContext, StateTree } from 'pinia'

function isCircular<T>(obj: T, stack: Set<unknown> = new Set()): boolean {
  if (obj !== null && typeof obj === 'object') {
    if (stack.has(obj)) return true
    stack.add(obj)
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (isCircular(obj[key], stack)) return true
      }
    }
    stack.delete(obj)
  }
  return false
}

export function persistPlugin({ store, options }: PiniaPluginContext) {
  if (!Array.isArray(options.persist)) return

  const storageKey = `store-${store.$id}`
  const savedState = localStorage.getItem(storageKey)
  const keysToPersist = options.persist

  const setStorage = (state: StateTree & PiniaCustomStateProperties<StateTree>) => {
    localStorage.setItem(storageKey, JSON.stringify(state))
  }

  if (savedState) {
    try {
      store.$patch(JSON.parse(savedState))
    } catch (error) {
      console.error(`Failed to hydrate store ${store.$id}:`, error)
    }
  }

  store.$subscribe(
    (_mutation, state) => {
      const dataToSave: Record<PropertyKey, StateTree[PropertyKey]> = {}

      for (const key of keysToPersist) {
        const value = state[key]

        if (isCircular(value)) {
          console.error(
            `[Persist Error] Store "${store.$id}" cannot be saved. ` +
              `Cyclic reference found in the key: "${key.toString()}". ` +
              `Fix the data structure or remove this key from persist.`,
          )
          return
        }

        dataToSave[key] = value
      }
      try {
        setStorage(dataToSave)
      } catch (e) {
        console.error(`[Persist] Error writing to localStorage for ${store.$id}:`, e)
      }
    },
    { detached: true },
  )
}
