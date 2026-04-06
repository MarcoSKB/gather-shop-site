<script setup lang="ts">
import { useCartStore } from '@entities/cart'
import type { Product } from '@entities/product'
import { flyToCart } from '@shared/lib/gsap'
import { BaseButton } from '@shared/ui'
import { computed } from 'vue'

const { product, quantity } = defineProps<{
  product: Product
  quantity: number
}>()

const cartStore = useCartStore()

const addToCart = (event: MouseEvent) => {
  cartStore.add(product, quantity)

  const toEl = cartStore.cartIconRef
  if (toEl) {
    flyToCart({
      toEl,
      image: product.previewImage,
      event,
    })
  }
}
const isAlreadyInCart = computed(() => cartStore.isInCart(product.id))
</script>

<template>
  <BaseButton size="lg" @click="addToCart($event)" :disabled="isAlreadyInCart">
    {{ isAlreadyInCart ? 'Already in Cart' : 'Add to Basket' }}
  </BaseButton>
</template>
