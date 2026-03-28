<script setup lang="ts">
import clsx from 'clsx'
import { computed } from 'vue'

const props = defineProps<{
  disabled: boolean
}>()

const buttonStyles = computed(() =>
  clsx(
    `before:bg-primary relative z-0 before:absolute before:bottom-0 before:left-0 before:h-px transition-all before:transition-all before:duration-300 before:content-[''] hover:before:w-full active:opacity-50`,
    props.disabled
      ? 'before:w-[100%] pointer-events-none cursor-default'
      : 'before:w-[0%] cursor-pointer',
  ),
)
</script>

<template>
  <li>
    <button type="button" :disabled :class="buttonStyles">
      <slot />
    </button>
  </li>
</template>
