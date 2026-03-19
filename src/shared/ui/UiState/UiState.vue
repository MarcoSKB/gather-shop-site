<script setup lang="ts">
export type UiStatus = 'loading' | 'error' | 'success' | 'empty'

defineProps<{ status: UiStatus }>()
</script>

<template>
  <slot v-if="status === 'loading'" name="loading">
    <span>Loading...</span>
  </slot>

  <slot v-else-if="status === 'error'" name="error">
    <span>Something went wrong</span>
  </slot>

  <slot v-else-if="status === 'empty'" name="empty">
    <span>Empty data</span>
  </slot>

  <slot v-else-if="status === 'success'" />
</template>
