<script setup lang="ts">
import { clsx } from 'clsx'
import { computed, type ButtonHTMLAttributes } from 'vue'
import { buttonStyles, type ButtonVariantsType } from './BaseButton.styles'

type Props = {
  type?: ButtonHTMLAttributes['type']
  variant?: ButtonVariantsType['variant']
  size?: ButtonVariantsType['size']
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
})

const { variant, size, ...buttonProps } = props
const buttonClasses = computed(() => clsx(buttonStyles({ variant, size }), props.class))
</script>

<template>
  <button v-bind="buttonProps" :class="buttonClasses">
    <slot />
  </button>
</template>
