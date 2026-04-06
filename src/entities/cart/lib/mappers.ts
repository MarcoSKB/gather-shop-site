import type { Product } from '@entities/product'
import type { CartItem } from '../model/types'

export const mapProductToCartItem = (product: Product, quantity: number = 1): CartItem => {
  return {
    id: product.id,
    slug: product.slug,
    title: product.title,
    price: product.price,
    quantity,
    image: product.previewImage,
  }
}
