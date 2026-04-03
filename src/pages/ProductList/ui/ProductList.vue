<script setup lang="ts">
import { ProductCard, ProductCardSkeleton, useProductList } from '@entities/product'
import { useStaggerAppear, useUrlState } from '@shared/lib/hooks'
import { UiState } from '@shared/ui'
import { computed, ref, watch } from 'vue'

const listRef = ref<HTMLElement | null>(null)

const category = useUrlState('category', 'all')
const productParams = computed(() => ({
  filter: { keyword: category.value },
}))
const { data: products, uiStatus } = useProductList(productParams)
const { animate } = useStaggerAppear(listRef, '.product-item')

watch(
  () => products.value,
  async (newVal) => {
    if (newVal?.length) {
      await animate()
    }
  },
  { immediate: true, flush: 'post' },
)
</script>

<template>
  <UiState :status="uiStatus">
    <ul
      ref="listRef"
      class="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:gap-10"
    >
      <li
        v-for="product in products"
        :key="product.id"
        class="product-item will-change-[transform,opacity]"
      >
        <ProductCard :product />
      </li>
    </ul>

    <template #empty>
      <div class="font-poppins text-primary text-sm font-light text-nowrap uppercase">
        <span>No products found.</span>
      </div>
    </template>

    <template #loading>
      <div class="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:gap-10">
        <div v-for="i in 12" :key="i"><ProductCardSkeleton /></div>
      </div>
    </template>
  </UiState>
</template>
