<script setup lang="ts">
import { BaseSkeleton } from '@/src/shared/ui'
</script>

<template>
  <div class="flex w-full flex-col gap-3.5">
    <div class="space-y-3">
      <BaseSkeleton class="h-70" />
      <BaseSkeleton class="h-3 max-w-[50%]" />
    </div>
    <div class="space-y-3">
      <BaseSkeleton size="title" class="h-6 w-full" />
      <BaseSkeleton class="h-16 max-w-[80%]" />
    </div>
  </div>
</template>
