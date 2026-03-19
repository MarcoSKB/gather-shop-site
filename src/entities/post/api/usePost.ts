import { useQuery } from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import { MOCK_POSTS } from '../model/mocks'

export const usePost = (slug: string) => {
  const query = useQuery({
    queryKey: ['post', slug],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000))
      return MOCK_POSTS.find((post) => post.slug === slug)
    },
    enabled: computed(() => {
      const s = toValue(slug)
      return !!s && s.length > 3
    }),
    retry: 1,
    staleTime: 1000 * 60 * 5,
  })

  const uiStatus = computed(() => {
    if (query.isPending.value) return 'loading'
    if (query.isError.value) return 'error'
    if (query.data.value === undefined) return 'empty'
    return 'success'
  })

  return {
    ...query,
    uiStatus,
  }
}
