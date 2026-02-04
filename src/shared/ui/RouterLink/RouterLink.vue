<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { linkStyles, type LinkStylesType } from './RouterLink.styles'

defineProps<{
  variant?: LinkStylesType['variant']
  to: string
}>()
</script>

<template>
  <RouterLink :to :class="linkStyles({ variant })">
    <slot />
  </RouterLink>
</template>
