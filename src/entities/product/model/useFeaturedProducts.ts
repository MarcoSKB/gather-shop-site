import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { getFeaturedProducts } from '../api'

export const useFeaturedProducts = () => {
  const query = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => getFeaturedProducts(),
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
