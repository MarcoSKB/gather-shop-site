<script setup lang="ts">
import clsx from 'clsx'
import { computed } from 'vue'
import { RouterLink, type RouterLinkProps } from 'vue-router'
import { linkStyles, type LinkStylesType } from './RouterLink.styles'

interface Props extends RouterLinkProps {
  class?: string
  variant?: LinkStylesType['variant']
  size?: LinkStylesType['size']
}

const props = defineProps<Props>()

const linkClasses = computed(() =>
  clsx(linkStyles({ variant: props.variant, size: props.size }), props.class),
)
</script>

<template>
  <RouterLink v-bind="props" :class="linkClasses">
    <slot />
  </RouterLink>
</template>
