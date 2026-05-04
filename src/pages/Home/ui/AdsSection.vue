<script setup lang="ts">
import { BASE_URL } from '@shared/lib'
import { BaseImage } from '@shared/ui'
</script>

<template>
  <section>
    <h2 class="sr-only">Screen stand advertisement</h2>
    <BaseImage
      :src="BASE_URL + 'assets/images/ads.webp'"
      alt="Advertisement banner"
      class="pointer-events-none mx-auto h-full w-full max-w-480 object-cover"
    />
  </section>
</template>
