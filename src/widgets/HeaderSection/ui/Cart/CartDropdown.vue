<script setup lang="ts">
import { useCartStore } from '@entities/cart'
import { ButtonIcon, RouterLink } from '@shared/ui'
import { ShoppingBag } from 'lucide-vue-next'
import { computed, onMounted, useTemplateRef } from 'vue'

import { useCartInteraction } from '../../model/useCartInteraction'
import { modalAnimation } from './CartDropdown.animations'
import CartList from './CartList.vue'

const cartStore = useCartStore()
const { toggleCart, isCartOpen } = useCartInteraction()
const iconRef = useTemplateRef<HTMLElement>('cart-icon-el')

onMounted(() => {
  cartStore.setCartIconRef(iconRef.value)
})

const cartEmptyClass = computed(() =>
  cartStore.items.length <= 0
    ? 'hover:bg-inverse pointer-events-none opacity-75 hover:cursor-default'
    : '',
)
</script>

<template>
  <div class="relative z-0">
    <div ref="cart-icon-el">
      <ButtonIcon title="Cart" @click.stop="toggleCart">
        <ShoppingBag />
      </ButtonIcon>
    </div>

    <Transition v-bind="modalAnimation" :css="false">
      <div
        v-if="isCartOpen"
        ref="cart-menu"
        class="absolute top-[calc(100%+12px)] -right-24 flex h-[calc(100dvh-64px)] w-dvw flex-col bg-white p-5 md:top-[calc(100%+24px)] md:left-1/2 md:h-auto md:w-fit md:-translate-x-1/2 md:border md:border-black md:pr-4 lg:top-[calc(100%+42px)]"
      >
        <CartList :items="cartStore.items" />

        <div class="font-spectral mb-5 flex gap-16.5 text-[20px] leading-7">
          <span>Subtotal:</span>
          <span>${{ cartStore.getTotalPrice() }}</span>
        </div>

        <div class="md:mt-none mt-auto flex gap-3">
          <RouterLink :to="{ name: 'cart-page' }" variant="tertiary">View Cart</RouterLink>
          <RouterLink :to="{ name: 'cart-page' }" variant="tertiary" :class="cartEmptyClass">
            Checkout
          </RouterLink>
        </div>
      </div>
    </Transition>
  </div>
</template>
