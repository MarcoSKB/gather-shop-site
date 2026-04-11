<script setup lang="ts">
import { BaseImage } from '@shared/ui'
</script>

<template>
  <section>
    <h2 class="sr-only">Screen stand advertisement</h2>
    <BaseImage
      src="/assets/images/ads.webp"
      alt="Advertisement banner"
      class="pointer-events-none mx-auto h-full w-full max-w-480 object-cover"
    />
  </section>
</template>
