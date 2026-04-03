<script setup lang="ts">
import { BaseCard } from '@shared/ui'
import type { RouteLocationRaw } from 'vue-router'
import type { PreviewProduct } from '../../model/types'

defineProps<{
  to: RouteLocationRaw
  product: PreviewProduct
}>()
</script>

<template>
  <BaseCard :to>
    <template #image>
      <img
        :src="product.image"
        :alt="`Preview image of ${product.title.toLowerCase()}`"
        class="mb-1.5 aspect-square w-full object-cover object-center transition-opacity ease-in group-hover:opacity-95 md:mb-2.5"
      />
    </template>
    <template #content>
      <span class="font-poppins mb-2.5 text-sm font-light uppercase md:mb-4">
        {{ product.category }}
      </span>
      <span
        class="font-spectral text-md leading-5 text-balance transition-opacity ease-in group-hover:opacity-70 md:text-[17px] md:leading-6"
      >
        {{ product.title }}
      </span>
      <span class="font-spectral text-md leading-6">{{ product.price }}$</span>
    </template>
  </BaseCard>
</template>
