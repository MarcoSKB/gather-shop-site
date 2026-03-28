export interface Product {
  id: string
  slug: string
  title: string
  description: string
  price: number
  previewImage: string
  bannerImage: string
  images: string[]
  details: string
  keys: string[]
}

export interface FeaturedProduct {
  id: string
  slug: string
  image: string
  alt: string
}

export interface PreviewProduct {
  id: string
  slug: string
  title: string
  price: number
  image: string
  category: string
}

export interface ProductFilters {
  keyword?: string
}

export interface GetProductListParams {
  skip?: number
  take?: number
  filter?: ProductFilters
}
