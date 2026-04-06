<script setup lang="ts">
import { useCartStore } from '@entities/cart'
import type { CartItem } from '@entities/cart/model/types'

const { id } = defineProps<{ id: CartItem['id'] }>()

const cartStore = useCartStore()

const removeFromCart = () => cartStore.remove(id)
</script>

<template>
  <button
    class="font-poppins cursor-pointer text-left font-thin transition-opacity ease-in hover:opacity-80"
    @click.stop="removeFromCart"
  >
    Remove
  </button>
</template>
