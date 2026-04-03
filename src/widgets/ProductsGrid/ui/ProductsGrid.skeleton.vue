<script setup lang="ts">
import { ProductCardSkeleton } from '@entities/product'
import { CollectionGrid, TitledSection } from '@shared/ui'
import { computed } from 'vue'

defineProps<{
  title: string
}>()

const skeletonItems = computed(() => Array.from({ length: 6 }, (_, i) => i))
</script>

<template>
  <TitledSection :title="title">
    <CollectionGrid :items="skeletonItems" :getKey="(item) => item">
      <ProductCardSkeleton />
    </CollectionGrid>
  </TitledSection>
</template>
