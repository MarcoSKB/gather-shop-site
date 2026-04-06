<script setup lang="ts">
import { useCartStore } from '@entities/cart'
import type { CartItem } from '@entities/cart/model/types'

const { id } = defineProps<{ id: CartItem['id'] }>()

const cartStore = useCartStore()

const removeFromCart = () => cartStore.remove(id)
</script>

<template>
  <button
    class="font-poppins text-md cursor-pointer py-2 text-left font-thin transition-opacity ease-in hover:opacity-80 md:py-0 md:text-base"
    @click.stop="removeFromCart"
  >
    Remove
  </button>
</template>
