<script setup lang="ts">
import { cn } from '@shared/lib'
import { computed } from 'vue'
import { RouterLink, type RouterLinkProps } from 'vue-router'
import { linkStyles, type LinkStylesType } from './RouterLink.styles'

interface Props extends RouterLinkProps {
  class?: string
  variant?: LinkStylesType['variant']
  size?: LinkStylesType['size']
}

const { variant, size, class: className, ...props } = defineProps<Props>()

const linkClasses = computed(() => cn(linkStyles({ variant, size }), className))
</script>

<template>
  <RouterLink v-bind="props" :class="linkClasses">
    <slot />
  </RouterLink>
</template>
