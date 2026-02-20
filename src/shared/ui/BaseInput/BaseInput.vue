<script setup lang="ts">
import clsx from 'clsx'
import { computed } from 'vue'
import { inputStyles, type InputVariantsType } from './BaseInput.styles'

type Props = {
  class?: string
  type: 'number' | 'text' | 'search' | 'email' | 'password' | 'tel'
  placeholder?: string
  variant?: InputVariantsType['variant']
  size?: InputVariantsType['size']
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const { variant, size, ...inputProps } = props
const inputClasses = computed(() => clsx(inputStyles({ variant, size }), props.class))
</script>

<template>
  <input v-bind="inputProps" :class="inputClasses" />
</template>
