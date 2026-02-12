<script setup lang="ts">
import clsx from 'clsx'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { linkStyles, type LinkStylesType } from './RouterLink.styles'

const props = defineProps<{
  class?: string
  variant?: LinkStylesType['variant']
  size?: LinkStylesType['size']
  to: string
}>()

const linkClasses = computed(() =>
  clsx(linkStyles({ variant: props.variant, size: props.size }), props.class),
)
</script>

<template>
  <RouterLink :to :class="linkClasses">
    <slot />
  </RouterLink>
</template>
