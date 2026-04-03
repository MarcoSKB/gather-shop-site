<script setup lang="ts">
import { ProductCard, useProductList, type GetProductListParams } from '@entities/product'
import { CollectionGrid, TitledSection, UiState } from '@shared/ui'
import { ProductsGridSkeleton } from '..'

const { params } = defineProps<{
  title: string
  params?: GetProductListParams
}>()

const { data: products, uiStatus } = useProductList(params)
</script>

<template>
  <UiState :status="uiStatus">
    <TitledSection :title="title">
      <CollectionGrid v-if="products" :items="products" :getKey="(product) => product.id">
        <template #default="{ item: product }">
          <ProductCard :product="product" />
        </template>
      </CollectionGrid>
    </TitledSection>

    <template #loading>
      <ProductsGridSkeleton :title="title" />
    </template>
  </UiState>
</template>
