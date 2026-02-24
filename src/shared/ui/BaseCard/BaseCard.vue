<script setup lang="ts">
import clsx from 'clsx'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  class?: string
  to: string
}>()

const cardContentClasses = computed(() => clsx('flex flex-col', props.class))
</script>

<template>
  <RouterLink :to class="group flex w-full flex-col">
    <div class="relative z-0 w-full overflow-hidden">
      <slot name="image" />
    </div>
    <div :class="cardContentClasses">
      <slot name="content" />
    </div>
  </RouterLink>
</template>
