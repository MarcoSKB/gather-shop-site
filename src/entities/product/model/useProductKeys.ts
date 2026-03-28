import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { getProductKeys } from '../api'

export const useProductKeys = () => {
  const query = useQuery({
    queryKey: ['product-keys'],
    queryFn: () => getProductKeys(),
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
