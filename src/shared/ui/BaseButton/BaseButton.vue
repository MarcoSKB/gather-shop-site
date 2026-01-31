<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'
import { buttonStyles } from './BaseButton.styles'

const props = withDefaults(
  defineProps<
    {
      variant?: 'primary' | 'secondary'
      size?: 'md' | 'lg'
    } & /* @vue-ignore */ ButtonHTMLAttributes
  >(),
  {
    type: 'button',
    variant: 'secondary',
    size: 'md',
  },
)

const { variant, size, ...buttonProps } = props
</script>

<template>
  <button v-bind="buttonProps" :class="buttonStyles({ variant, size })">
    <slot />
  </button>
</template>
