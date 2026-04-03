<script setup lang="ts">
import { useProductBySlug } from '@entities/product'
import { BaseContainer, BaseLine, UiState } from '@shared/ui'
import { ProductsGrid, ProductsGridSkeleton } from '@widgets/ProductsGrid'
import ProductDetailsSkeleton from './ProductDetails.skeleton.vue'
import ProductGallery from './ProductGallery.vue'
import ProductInfo from './ProductInfo.vue'

const { slug } = defineProps<{
  slug: string
}>()

const { data: product, uiStatus } = useProductBySlug(slug)
</script>

<template>
  <div class="min-h-full flex-1">
    <BaseLine />
    <UiState :status="uiStatus">
      <template v-if="product" #default>
        <BaseContainer>
          <section
            class="grid h-full grid-cols-1 items-start gap-x-6 gap-y-6 py-4 md:grid-cols-[1fr_300px] md:gap-y-0 md:py-8 lg:grid-cols-[1fr_360px] lg:gap-x-10 lg:py-12"
          >
            <h1
              class="font-poppins text-[28px] leading-8 md:col-start-2 md:mb-2 lg:text-[38px] lg:leading-11"
            >
              {{ product.title }}
            </h1>
            <ProductGallery :images="product.images" />
            <ProductInfo :product="product" />
          </section>
        </BaseContainer>
        <BaseLine />
        <ProductsGrid
          title="RELATED PRODUCTS"
          :params="{
            take: 6,
            filter: {
              excludeByProductId: product.id,
            },
          }"
        />
      </template>

      <template #loading>
        <BaseContainer>
          <ProductDetailsSkeleton />
        </BaseContainer>
        <BaseLine />
        <ProductsGridSkeleton title="RELATED PRODUCTS" />
      </template>
    </UiState>
  </div>
</template>
