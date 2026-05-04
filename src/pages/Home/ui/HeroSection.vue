<script setup lang="ts">
import { BASE_URL } from '@shared/lib'
import { BaseContainer, BaseImage } from '@shared/ui'
</script>

<template>
  <section
    class="relative z-0 flex h-full min-h-dvh flex-col items-center justify-center md:min-h-324 md:pt-24"
  >
    <div class="absolute top-0 z-[-1] h-full w-full overflow-hidden md:pt-24">
      <BaseImage
        :src="BASE_URL + 'assets/images/hero-1.webp'"
        alt="Watercolor painting with people"
        class="pointer-events-none relative left-1/2 h-full w-full max-w-480 -translate-x-1/2 object-cover object-top"
        fetchpriority="high"
      />
    </div>
    <BaseContainer class="items-center justify-center gap-7 text-center">
      <h2
        class="font-spectral text-inverse text-5xl leading-12 uppercase md:text-7xl md:leading-20"
      >
        The art of elmore
      </h2>
      <span class="font-spectral text-inverse text-lg leading-7">
        An iconic lens on life and style.
      </span>
    </BaseContainer>
  </section>
</template>
