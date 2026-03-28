<script setup lang="ts">
import { BaseContainer } from '@shared/ui'
import ProductFilter from './ProductFilter.vue'
import ProductList from './ProductList.vue'
</script>

<template>
  <section class="min-h-full flex-1">
    <BaseContainer>
      <ProductFilter />
      <ProductList />
    </BaseContainer>
  </section>
</template>
