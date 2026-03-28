<script setup lang="ts">
import { ProductCard, ProductCardSkeleton, useProductList } from '@entities/product'
import { useUrlState } from '@shared/lib/hooks'
import { UiState } from '@shared/ui'
import { computed } from 'vue'

const category = useUrlState('category', 'all')
const productParams = computed(() => ({
  filter: { keyword: category.value },
}))
const { data: products, uiStatus } = useProductList(productParams)
</script>

<template>
  <ul class="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:gap-10">
    <UiState :status="uiStatus">
      <li v-for="product in products" :key="product.id">
        <ProductCard :to="{ name: 'product-details', params: { slug: product.slug } }" :product />
      </li>

      <template #empty>
        <div class="font-poppins text-primary text-sm font-light text-nowrap uppercase">
          <span>No products found.</span>
        </div>
      </template>

      <template #loading>
        <li v-for="i in 12" :key="i"><ProductCardSkeleton /></li>
      </template>
    </UiState>
  </ul>
</template>
