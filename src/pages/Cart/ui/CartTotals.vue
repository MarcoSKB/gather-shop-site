<script setup lang="ts">
import { useCartStore } from '@entities/cart'
import { BaseButton } from '@shared/ui'

const cartStore = useCartStore()
</script>

<template>
  <div class="sticky top-22.75 left-0 h-fit w-full max-w-75">
    <div class="font-poppins mb-9">
      <h2 class="border-primary border-b-2 py-3 text-[38px] leading-11">BASKET totals</h2>
      <div class="flex justify-between gap-3 border-b py-6 text-lg">
        <span>Subtotal</span><span>${{ cartStore.getTotalPrice() }}</span>
      </div>
      <div class="flex flex-col gap-3.5 border-b py-6 text-lg">
        <div class="flex justify-between gap-3"><span>Shipping</span><span>$52</span></div>
        <span class="text-end">Shipping to <b>New York</b></span>
      </div>
      <div class="flex justify-between gap-3 border-b py-6 text-lg">
        <span>Total</span><span>${{ cartStore.getTotalPrice() + 52 }}</span>
      </div>
    </div>
    <BaseButton variant="secondary" size="lg" class="uppercase">Proceed to checkout</BaseButton>
  </div>
</template>
