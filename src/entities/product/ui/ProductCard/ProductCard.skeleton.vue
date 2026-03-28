<script setup lang="ts">
import { BaseSkeleton } from '@shared/ui'
</script>

<template>
  <div class="flex flex-col">
    <BaseSkeleton class="mb-1.5 aspect-square h-full w-full md:mb-2.5" />
    <BaseSkeleton class="mb-2.5 h-3 max-w-[25%] md:mb-4" />
    <BaseSkeleton class="mb-1 h-4.25 max-w-[75%]" />
    <BaseSkeleton class="h-4 max-w-[15%]" />
  </div>
</template>
