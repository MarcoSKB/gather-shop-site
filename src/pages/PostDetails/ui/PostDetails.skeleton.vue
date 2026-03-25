<script setup lang="ts">
import { BaseContainer, BaseSkeleton } from '@shared/ui'
</script>

<template>
  <div
    class="mx-auto flex h-[calc(100vh-64px)] max-w-480 flex-col-reverse md:h-[calc(100vh-90px)] md:max-h-300 md:min-h-197.5 md:flex-row"
  >
    <BaseContainer class="h-full w-full max-w-1/2 pt-6 pb-7.5 text-center md:pt-13.75">
      <BaseSkeleton class="mx-auto mb-auto h-7.5 max-w-150 md:h-20 lg:h-32.5" />

      <BaseSkeleton class="mx-auto mb-5 h-4.5 max-w-130 md:mb-11.75" />
      <BaseSkeleton class="mx-auto h-3.5 max-w-[320px]" />
    </BaseContainer>

    <BaseSkeleton class="h-full w-full md:max-w-1/2" />
  </div>
</template>
