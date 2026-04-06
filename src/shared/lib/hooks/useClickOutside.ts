import { onMounted, onUnmounted, type Ref } from 'vue'

export const useClickOutside = (elRef: Ref<HTMLElement | null>, callback: () => void) => {
  const handler = (e: MouseEvent) => {
    const target = e.target as Node

    if (!elRef.value || elRef.value.contains(target)) {
      return
    }

    callback()
  }

  onMounted(() => document.addEventListener('click', handler))
  onUnmounted(() => document.removeEventListener('click', handler))
}
