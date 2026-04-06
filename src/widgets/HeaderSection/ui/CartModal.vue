<script setup lang="ts">
import { useCartStore } from '@entities/cart'
import { RemoveButton } from '@features/remove-from-cart'
import { gsap } from '@shared/lib/gsap'
import { ButtonIcon, RouterLink } from '@shared/ui'
import { ShoppingBag } from 'lucide-vue-next'
import { computed, type RendererElement } from 'vue'
import { useCartInteraction } from '../model/useCartInteraction'

const cartStore = useCartStore()
const { toggleCart, isCartOpen } = useCartInteraction()

const cartEmptyClass = computed(() =>
  cartStore.items.length <= 0
    ? 'hover:bg-inverse pointer-events-none opacity-75 hover:cursor-default'
    : '',
)

const onEnter = (el: RendererElement, done: () => void) => {
  gsap.fromTo(
    el,
    { opacity: 0, yPercent: 10 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.3,
      onComplete: () => {
        gsap.set(el, { clearProps: 'yPercent,transform' })
        done()
      },
    },
  )
}
const onLeave = (el: RendererElement, done: () => void) => {
  gsap.fromTo(
    el,
    { yPercent: 0 },
    {
      yPercent: 10,
      opacity: 0,
      duration: 0.3,
      onComplete: done,
    },
  )
}
</script>

<template>
  <div class="relative z-0">
    <ButtonIcon title="Cart" @click.stop="toggleCart">
      <ShoppingBag />
    </ButtonIcon>

    <Transition @enter="onEnter" @leave="onLeave" :css="false">
      <div
        v-if="isCartOpen"
        ref="cart-menu"
        class="absolute top-[calc(100%+12px)] -right-24 flex h-[calc(100dvh-64px)] w-dvw flex-col bg-white p-5 md:top-[calc(100%+24px)] md:left-1/2 md:h-auto md:w-fit md:-translate-x-1/2 md:border md:border-black md:pr-4 lg:top-[calc(100%+42px)]"
      >
        <ul
          v-if="cartStore.items.length > 0"
          class="mb-5 flex max-h-full snap-y flex-col gap-5 overflow-y-auto scroll-smooth md:max-h-50 md:pr-4"
        >
          <li
            v-for="cartItem in cartStore.items"
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
        </ul>
        <p v-else class="font-spectral mb-3 text-[20px]">No products in cart</p>

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
