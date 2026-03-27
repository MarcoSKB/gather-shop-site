import { mapToFeaturedProduct, mapToPreviewProduct } from '../lib/mappers'
import { MOCK_PRODUCTS } from '../model/mocks'

export const getFeaturedProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return MOCK_PRODUCTS.map(mapToFeaturedProduct).splice(0, 4)
}

export const getProductKeys = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  const uniqueKeys: string[] = [...new Set(MOCK_PRODUCTS.flatMap((product) => product.keys))]
  return uniqueKeys
}

export const getProductList = async ({ skip = 0, take = 12 }: { skip: number; take: number }) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return MOCK_PRODUCTS.map(mapToPreviewProduct).slice(skip, skip + take)
}

export const getProductBySlug = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return MOCK_PRODUCTS.find((product) => product.slug === slug)
}
