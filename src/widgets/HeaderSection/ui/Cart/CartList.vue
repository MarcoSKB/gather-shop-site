<script setup lang="ts">
import type { CartItem } from '@entities/cart/model/types'
import { RemoveButton } from '@features/remove-from-cart'
import { RouterLink } from '@shared/ui'
import { listAnimation } from './CartDropdown.animations'

defineProps<{
  items: CartItem[]
}>()
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-200 ease-out"
    leave-active-class="transition-opacity duration-200 ease-in"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    name="fade"
    mode="out-in"
  >
    <TransitionGroup
      v-if="items.length > 0"
      v-bind="listAnimation"
      tag="ul"
      class="mb-5 flex max-h-full snap-y flex-col gap-5 overflow-y-auto scroll-smooth md:max-h-50 md:pr-4"
      :css="false"
    >
      <li
        v-for="cartItem in items"
        :key="cartItem.id"
        class="grid snap-start grid-cols-2 justify-between gap-3"
      >
        <RouterLink
          :to="{ name: 'product-details', params: { slug: cartItem.slug } }"
          variant="plain"
          class="block aspect-square w-full max-w-24 cursor-pointer transition-opacity ease-in hover:opacity-80 md:max-w-17.5"
        >
          <img :src="cartItem.image" alt="Product image" class="size-full object-cover" />
        </RouterLink>
        <div class="flex flex-col text-[12px] leading-4">
          <RouterLink
            :to="{ name: 'product-details', params: { slug: cartItem.slug } }"
            variant="plain"
            class="font-spectral cursor-pointer text-sm leading-4 transition-opacity ease-in hover:opacity-80 md:text-[12px]"
          >
            {{ cartItem.title }}
          </RouterLink>
          <span class="font-spectral">{{ cartItem.quantity }} x ${{ cartItem.price }}</span>
          <RemoveButton :id="cartItem.id" />
        </div>
      </li>
    </TransitionGroup>
    <p v-else class="font-spectral mb-3 text-[20px]">No products in cart</p>
  </Transition>
</template>
