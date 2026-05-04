<script setup lang="ts">
import { BaseButton, BaseContainer, BaseInput, BaseLine } from '@shared/ui'
import { ProductsGrid } from '@widgets/ProductsGrid'
import { ChevronLeft } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import CartTotals from './CartTotals.vue'
import ProductsTable from './ProductsTable.vue'
</script>

<template>
  <BaseLine />
  <BaseContainer class="py-12">
    <h1 class="font-spectral text-primary mb-12 w-full text-center text-lg leading-7 uppercase">
      Cart
    </h1>
    <div class="relative z-0 flex w-full gap-12.5">
      <RouterLink
        :to="{ name: 'product-list' }"
        class="font-poppins group sticky top-26 left-0 z-0 flex h-fit items-center gap-0.5 text-sm leading-4.5 text-nowrap uppercase"
      >
        <ChevronLeft :size="18" class="transition-all ease-in group-hover:-translate-x-1.5" />
        Back to Shop
      </RouterLink>
      <div class="mr-auto flex w-full max-w-183 flex-col items-end gap-9">
        <ProductsTable />
        <div class="max-w-67.5 space-y-3 pb-2.5">
          <BaseInput variant="secondary" size="lg" type="text" placeholder="Coupon code" />
          <BaseButton variant="secondary" size="lg" class="uppercase">Apply coupon</BaseButton>
          <BaseButton class="uppercase">Update basket</BaseButton>
        </div>
      </div>
      <CartTotals />
    </div>
  </BaseContainer>
  <BaseLine />
  <ProductsGrid
    title="YOU MAY BE INTERESTED IN..."
    :params="{
      take: 6,
    }"
  />
</template>
