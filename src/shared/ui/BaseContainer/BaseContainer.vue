<script setup lang="ts">
import clsx from 'clsx'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const baseClasses = 'mx-auto flex w-full max-w-326 flex-col px-4'

const containerClasses = computed(() => clsx(baseClasses, props.class))
</script>

<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>
