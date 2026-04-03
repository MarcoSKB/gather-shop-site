<script setup lang="ts">
import { useProductBySlug } from '@entities/product'
import { BaseContainer, BaseLine, BaseSkeleton, UiState } from '@shared/ui'
import ProductGallery from './ProductGallery.vue'
import ProductInfo from './ProductInfo.vue'
const { slug } = defineProps<{
  slug: string
}>()

const { data: product, uiStatus } = useProductBySlug(slug)
</script>

<template>
  <section class="min-h-full flex-1">
    <BaseLine />
    <BaseContainer class="flex flex-col py-4 md:py-8 lg:py-12">
      <UiState :status="uiStatus">
        <template v-if="product" #default>
          <div
            class="grid h-full grid-cols-1 items-start gap-x-6 gap-y-6 md:grid-cols-[1fr_300px] md:gap-y-0 lg:grid-cols-[1fr_360px] lg:gap-x-10"
          >
            <h1
              class="font-poppins text-[28px] leading-8 md:col-start-2 md:mb-2 lg:text-[38px] lg:leading-11"
            >
              {{ product.title }}
            </h1>
            <ProductGallery :images="product.images" />
            <ProductInfo :product="product" />
          </div>
        </template>

        <template #loading>
          <div
            class="grid h-full grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-[1fr_300px] md:gap-y-0 lg:grid-cols-[1fr_360px] lg:gap-x-10"
          >
            <BaseSkeleton class="h-7 max-w-[40%] md:col-start-2 md:mb-2 md:max-w-[70%] lg:h-10" />
            <div class="row-span-2 items-start md:col-start-1 md:row-start-1">
              <BaseSkeleton class="mb-2.5 aspect-16/11 h-auto w-full" />
              <BaseSkeleton class="h-20 w-full" />
            </div>
            <div class="flex flex-col">
              <BaseSkeleton class="mb-3 h-4.5 max-w-[33%] md:mb-5 lg:mb-8" />
              <BaseSkeleton class="mb-8 h-87.5 max-w-[90%]" />
              <div class="space-y-5.5">
                <div class="flex w-full flex-col">
                  <BaseSkeleton class="h-13.25" />
                  <BaseSkeleton class="h-13.25" />
                </div>
                <BaseSkeleton class="h-13.25" />
                <BaseSkeleton class="h-13.25" />
              </div>
            </div>
          </div>
        </template>
      </UiState>
    </BaseContainer>
  </section>
</template>
