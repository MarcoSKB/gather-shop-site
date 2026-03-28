import { useQuery } from '@tanstack/vue-query'
import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { getProductList } from '../api'
import type { GetProductListParams } from '../model/types'

export const useProductList = (params: MaybeRefOrGetter<GetProductListParams> = {}) => {
  const query = useQuery({
    queryKey: ['product-list', () => toValue(params).filter?.keyword],
    queryFn: () => getProductList(toValue(params)),
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
