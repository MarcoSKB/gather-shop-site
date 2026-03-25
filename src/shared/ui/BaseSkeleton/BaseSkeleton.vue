<script setup lang="ts">
import { clsx } from 'clsx'
import { computed } from 'vue'
import { skeletonStyles, type SkeletonVariantsType } from './BaseSkeleton.styles'

type Props = {
  class?: string
  shape?: SkeletonVariantsType['shape']
  size?: SkeletonVariantsType['size']
}

const { shape, size, class: className } = defineProps<Props>()
const skeletonClasses = computed(() => clsx(skeletonStyles({ shape, size }), className))
</script>

<template>
  <div :class="skeletonClasses" />
</template>
