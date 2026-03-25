import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { mapToPreviewPost } from '../lib/mappers'
import { MOCK_POSTS } from '../model/mocks'

export const usePostsList = ({
  limit = 6,
  categoryId,
  excludePostId,
}: { limit?: number; categoryId?: string; excludePostId?: string } = {}) => {
  const query = useQuery({
    queryKey: ['posts', { limit, categoryId, excludePostId }],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000))

      let filtered = [...MOCK_POSTS]
      if (categoryId) {
        filtered = filtered.filter(
          (post) => post.category.toLowerCase() === categoryId.toLowerCase(),
        )
      }
      if (excludePostId) {
        filtered = filtered.filter((post) => post.id !== excludePostId)
      }

      return filtered.slice(0, limit).map(mapToPreviewPost)
    },
    staleTime: 1000 * 60 * 5,
  })

  const uiStatus = computed(() => {
    if (query.isPending.value) return 'loading'
    if (query.isError.value) return 'error'
    if (query.data.value?.length === 0) return 'empty'
    return 'success'
  })

  return {
    ...query,
    uiStatus,
  }
}
