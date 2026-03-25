import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { getPostsList } from '../api'

export const usePostsList = ({
  limit = 6,
  categoryId,
  excludePostId,
}: { limit?: number; categoryId?: string; excludePostId?: string } = {}) => {
  const query = useQuery({
    queryKey: ['posts', { limit, categoryId, excludePostId }],
    queryFn: () => getPostsList({ limit, categoryId, excludePostId }),
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
