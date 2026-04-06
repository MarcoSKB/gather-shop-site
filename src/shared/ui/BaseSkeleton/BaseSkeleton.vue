<script setup lang="ts">
import { cn } from '@shared/lib'
import { computed } from 'vue'
import { skeletonStyles, type SkeletonVariantsType } from './BaseSkeleton.styles'

type Props = {
  class?: string
  shape?: SkeletonVariantsType['shape']
  size?: SkeletonVariantsType['size']
}

const { shape, size, class: className } = defineProps<Props>()
const skeletonClasses = computed(() => cn(skeletonStyles({ shape, size }), className))
</script>

<template>
  <div :class="skeletonClasses" />
</template>
