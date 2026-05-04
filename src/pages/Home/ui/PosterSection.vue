<script setup lang="ts">
import { BASE_URL } from '@shared/lib'
import { BaseImage } from '@shared/ui'
</script>

<template>
  <section class="relative h-dvh max-h-250 min-h-150">
    <BaseImage
      :src="BASE_URL + 'assets/images/poster-1.webp'"
      alt="Book of romans by Alabaster"
      class="pointer-events-none absolute top-0 left-1/2 z-[-1] h-full w-full max-w-480 -translate-x-1/2 object-cover object-center md:pt-24"
    />
  </section>
</template>
