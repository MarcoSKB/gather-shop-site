import type { Product } from '@entities/product'

export interface CartItem extends Pick<Product, 'id' | 'slug' | 'title' | 'price'> {
  quantity: number
  image: string
}
