<script setup lang="ts">
import { useCartStore } from '@entities/cart'
import type { Product } from '@entities/product'
import { BaseButton } from '@shared/ui'
import { computed } from 'vue'

const { product, quantity } = defineProps<{
  product: Product
  quantity: number
}>()

const cartStore = useCartStore()
const addToCart = () => cartStore.add(product, quantity)
const isAlreadyInCart = computed(() => cartStore.isInCart(product.id))
</script>

<template>
  <BaseButton size="lg" @click="addToCart" :disabled="isAlreadyInCart">
    {{ isAlreadyInCart ? 'Already in Cart' : 'Add to Basket' }}
  </BaseButton>
</template>
