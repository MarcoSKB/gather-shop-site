import { mapToFeaturedProduct, mapToPreviewProduct } from '../lib/mappers'
import { MOCK_PRODUCTS } from '../model/mocks'
import type { GetProductListParams } from '../model/types'

export const getFeaturedProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return MOCK_PRODUCTS.map(mapToFeaturedProduct).splice(0, 4)
}

export const getProductKeys = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const uniqueKeys: string[] = [...new Set(MOCK_PRODUCTS.flatMap((product) => product.keys))]
  return uniqueKeys
}

export const getProductList = async ({
  skip = 0,
  take = 12,
  filter,
}: GetProductListParams = {}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  let result = [...MOCK_PRODUCTS]

  if (filter && filter.keyword && filter.keyword !== 'all') {
    const search = filter.keyword.toLowerCase()
    result = result.filter((product) => product.keys.find((key) => key.toLowerCase() === search))
  }

  const previewProductList = result.map(mapToPreviewProduct)
  return previewProductList.slice(skip, skip + take)
}

export const getProductBySlug = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return MOCK_PRODUCTS.find((product) => product.slug === slug)
}
