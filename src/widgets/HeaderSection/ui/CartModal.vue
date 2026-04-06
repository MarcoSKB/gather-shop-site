<script setup lang="ts">
import { useCartStore } from '@entities/cart'
import { RemoveButton } from '@features/remove-from-cart'
import { gsap } from '@shared/lib/gsap'
import { useClickOutside } from '@shared/lib/hooks'
import { ButtonIcon, RouterLink } from '@shared/ui'
import { ShoppingBag } from 'lucide-vue-next'
import { computed, ref, useTemplateRef, type RendererElement } from 'vue'

const isCartOpen = ref(false)
const cartMenuRef = useTemplateRef<HTMLElement>('cart-menu')

const cartStore = useCartStore()
useClickOutside(cartMenuRef, () => {
  if (isCartOpen.value) isCartOpen.value = false
})

const toggleCart = () => (isCartOpen.value = !isCartOpen.value)

const cartEmptyClass = computed(() =>
  cartStore.items.length <= 0
    ? 'hover:bg-inverse pointer-events-none opacity-75 hover:cursor-default'
    : '',
)

const onEnter = (el: RendererElement, done: () => void) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 0 },
    {
      y: 16,
      opacity: 1,
      duration: 0.3,
      onComplete: done,
    },
  )
}
const onLeave = (el: RendererElement, done: () => void) => {
  gsap.fromTo(
    el,
    { y: 16 },
    {
      y: 0,
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
        class="absolute top-[calc(100%+42px)] left-1/2 -translate-x-1/2 gap-6 border border-black bg-white p-5 md:pr-4"
      >
        <ul
          v-if="cartStore.items.length > 0"
          class="mb-5 flex max-h-50 snap-y flex-col gap-5 overflow-y-auto scroll-smooth md:pr-4"
        >
          <li
            v-for="cartItem in cartStore.items"
            :key="cartItem.id"
            class="grid snap-start grid-cols-2 justify-between gap-3"
          >
            <RouterLink
              :to="{ name: 'product-details', params: { slug: cartItem.slug } }"
              variant="plain"
              class="block aspect-square w-full max-w-17.5 cursor-pointer transition-opacity ease-in hover:opacity-80"
            >
              <img :src="cartItem.image" alt="Product image" class="size-full object-cover" />
            </RouterLink>
            <div class="flex flex-col text-[12px] leading-4">
              <RouterLink
                :to="{ name: 'product-details', params: { slug: cartItem.slug } }"
                variant="plain"
                class="font-spectral cursor-pointer text-[12px] leading-4 transition-opacity ease-in hover:opacity-80"
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
        <div class="flex gap-3">
          <RouterLink :to="{ name: 'cart-page' }" variant="tertiary">View Cart</RouterLink>
          <RouterLink :to="{ name: 'cart-page' }" variant="tertiary" :class="cartEmptyClass">
            Checkout
          </RouterLink>
        </div>
      </div>
    </Transition>
  </div>
</template>
