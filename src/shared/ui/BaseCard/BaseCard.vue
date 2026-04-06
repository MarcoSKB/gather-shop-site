<script setup lang="ts">
import { cn } from '@shared/lib'
import { computed } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  class?: string
  to: RouteLocationRaw
}>()

const cardContentClasses = computed(() => cn('flex flex-col', props.class))
</script>

<template>
  <article>
    <RouterLink :to class="group flex w-full flex-col">
      <figure class="relative z-0 w-full overflow-hidden">
        <slot name="image" />
      </figure>
      <div :class="cardContentClasses">
        <slot name="content" />
      </div>
    </RouterLink>
  </article>
</template>
