import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { getProductBySlug } from '../api'

export const useProductBySlug = (slug: string) => {
  const query = useQuery({
    queryKey: ['product-details', slug],
    queryFn: () => getProductBySlug(slug),
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
