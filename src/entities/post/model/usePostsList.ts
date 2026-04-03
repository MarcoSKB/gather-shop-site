import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { getPostsList } from '../api'
import type { GetPostListParams } from './types'

export const usePostsList = ({
  skip = 0,
  take = 6,
  categoryId,
  excludePostId,
}: GetPostListParams = {}) => {
  const query = useQuery({
    queryKey: ['posts', { skip, take, categoryId, excludePostId }],
    queryFn: () => getPostsList({ skip, take, categoryId, excludePostId }),
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
