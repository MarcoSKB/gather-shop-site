<script setup lang="ts">
import { BaseContainer } from '@shared/ui'
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="pt-4 pb-16 md:pt-8 md:pb-20 lg:pt-12.5 lg:pb-23.75">
    <BaseContainer>
      <h2
        class="text-primary font-spectral mb-4 text-center text-lg leading-7 uppercase md:mb-8 lg:mb-12"
      >
        {{ title }}
      </h2>
      <slot />
    </BaseContainer>
  </section>
</template>
