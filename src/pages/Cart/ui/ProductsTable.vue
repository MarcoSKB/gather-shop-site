<script setup lang="ts">
import { useCartStore } from '@entities/cart'
import { gsap } from '@shared/lib/gsap'
import { BaseImage, BaseSelect } from '@shared/ui'
import { X } from 'lucide-vue-next'
import type { RendererElement } from 'vue'

const cartStore = useCartStore()

const quantityOptions = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
]

const listAnimation = {
  onBeforeEnter: (el: RendererElement) => {
    gsap.set(el, {
      opacity: 0,
      x: -20,
      height: 0,
      marginBottom: 0,
      overflow: 'hidden',
    })
  },
  onEnter: (el: RendererElement, done: () => void) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      height: 'auto',
      marginBottom: 20,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(el, { clearProps: 'all' })
        done()
      },
    })
  },
  onLeave: (el: RendererElement, done: () => void) => {
    gsap.to(el, {
      opacity: 0,
      x: 20,
      height: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: done,
    })
  },
}
</script>

<template>
  <table class="relative z-0 w-full table-auto">
    <thead class="bg-inverse sticky top-22.75 left-0 z-10">
      <tr class="divide-primary font-poppins divide-y-2 text-left text-lg leading-6">
        <th class="z-20 py-2.5 pr-4 font-normal">Product</th>
        <th class="px-4 py-2.5 font-normal">Price</th>
        <th class="px-4 py-2.5 font-normal">Quantity</th>
        <th class="px-4 py-2.5 text-end font-normal">Total (USD)</th>
        <th class="border-primary border-b-2 py-2.5 pl-4"><span class="sr-only">Actions</span></th>
      </tr>
    </thead>
    <TransitionGroup v-bind="listAnimation" name="list" tag="tbody">
      <tr
        v-for="product in cartStore.items"
        :key="product.id"
        class="divide-primary font-poppins divide-y text-lg leading-6"
      >
        <td class="py-3 pr-4">
          <div class="flex items-center gap-5">
            <BaseImage :src="product.image" alt="Product image" class="aspect-square size-30" />
            <span class="max-w-49 text-wrap">
              {{ product.title }}
            </span>
          </div>
        </td>
        <td class="px-4 py-3">${{ product.price }}</td>
        <td class="px-4 py-3">
          <BaseSelect
            :modelValue="product.quantity"
            :options="quantityOptions"
            @update:modelValue="cartStore.setQuantity(product.id, $event)"
          />
        </td>
        <td class="px-4 py-3 text-end">${{ product.price * product.quantity }}</td>
        <td class="border-primary border-b py-3 pl-4">
          <button
            class="border-primary flex size-6 cursor-pointer items-center justify-center rounded-full border transition-all ease-in hover:scale-90 active:opacity-80 disabled:pointer-events-none disabled:cursor-default"
            @click="cartStore.remove(product.id)"
          >
            <X :size="16" />
          </button>
        </td>
      </tr>
    </TransitionGroup>
  </table>
</template>
