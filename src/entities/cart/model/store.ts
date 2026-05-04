import type { Product } from '@entities/product'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { mapProductToCartItem } from '../lib/mappers'
import type { CartItem } from './types'

export const useCartStore = defineStore(
  'cart',
  () => {
    const items = ref<CartItem[]>([])
    const cartIconRef = ref<HTMLElement | null>(null)

    const add = (product: Product, quantity: number = 1): void => {
      const isProductExist = items.value.find((item) => item.id === product.id)

      if (isProductExist) {
        isProductExist.quantity += quantity
        return
      }
      const newItem = mapProductToCartItem(product, quantity)
      items.value.push(newItem)
    }

    const remove = (id: CartItem['id']): boolean => {
      const isProductExist = items.value.find((item) => item.id === id)

      if (!isProductExist) return false

      items.value = items.value.filter((item) => item.id !== id)
      return true
    }

    const getTotalPrice = (): number => {
      return items.value.reduce((acc, { quantity, price }) => acc + quantity * price, 0)
    }

    const setQuantity = (id: CartItem['id'], quantity: number): void => {
      const isProductExist = items.value.find((item) => item.id === id)

      if (isProductExist) {
        isProductExist.quantity = quantity
      }
    }

    const isInCart = computed(() => {
      return (id: CartItem['id']) => items.value.some((item) => item.id === id)
    })

    const setCartIconRef = (el: HTMLElement | null) => {
      cartIconRef.value = el
    }

    return { items, add, remove, setQuantity, getTotalPrice, isInCart, cartIconRef, setCartIconRef }
  },
  {
    persist: ['items'],
  },
)
