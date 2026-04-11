<script setup lang="ts">
import { BaseContainer } from '@shared/ui'
import ProductFilter from './ProductFilter.vue'
import ProductList from './ProductList.vue'
</script>

<template>
  <BaseContainer>
    <ProductFilter />
    <ProductList />
  </BaseContainer>
</template>
