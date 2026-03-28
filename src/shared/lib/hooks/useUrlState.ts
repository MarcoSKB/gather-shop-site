import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useUrlState = <T extends string>(key: string, defaultValue: T) => {
  const route = useRoute()
  const router = useRouter()

  const state = computed({
    get: () => (route.query[key] ? route.query[key].toString() : defaultValue),
    set: (newValue) => {
      router.push({
        query: {
          ...route.query,
          [key]: newValue === defaultValue ? undefined : newValue,
        },
      })
    },
  })

  return state
}
