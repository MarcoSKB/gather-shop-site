<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'
import { buttonStyles, type ButtonVariantsType } from './ButtonIcon.styles'

type Props = {
  type?: ButtonHTMLAttributes['type']
  variant?: ButtonVariantsType['variant']
  size?: ButtonVariantsType['size']
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
})

const { variant, size, ...buttonProps } = props
</script>

<template>
  <button v-bind="buttonProps" :class="buttonStyles({ variant, size })">
    <slot />
  </button>
</template>
