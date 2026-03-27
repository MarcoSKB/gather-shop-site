import type { FeaturedProduct, PreviewProduct, Product } from '../model/types'

export const mapToFeaturedProduct = (product: Product): FeaturedProduct => {
  return {
    id: product.id,
    slug: product.slug,
    image: product.bannerImage,
    alt: `Product image of ${product.title}`,
  }
}

export const mapToPreviewProduct = (product: Product): PreviewProduct => {
  return {
    id: product.id,
    slug: product.slug,
    title: product.title,
    price: product.price,
    image: product.previewImage,
    category: product.keys[0] ?? 'ART',
  }
}
