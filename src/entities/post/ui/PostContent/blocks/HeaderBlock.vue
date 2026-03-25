<script setup lang="ts">
import { BaseContainer } from '@shared/ui'
import type { HeaderBlock } from '../../../model/types'

defineProps<{
  data: HeaderBlock['data']
}>()
</script>

<template>
  <section
    class="mx-auto flex h-[calc(100vh-64px)] max-w-480 flex-col-reverse md:h-[calc(100vh-90px)] md:max-h-300 md:min-h-197.5 md:flex-row"
  >
    <BaseContainer class="h-full w-full max-w-1/2 pt-6 pb-7.5 text-center md:pt-13.75">
      <h1 class="font-spectral mb-auto text-3xl leading-[1.15] md:text-[80px] lg:text-[130px]">
        {{ data.title }}
      </h1>
      <p v-if="data.subtitle" class="font-brygada mb-5 text-lg italic md:mb-11.75">
        {{ data.subtitle }}
      </p>
      <p class="text-sm uppercase">{{ data.category }}</p>
    </BaseContainer>
    <img
      :src="data.url"
      alt="Post cover image"
      class="aspect-square w-full object-cover md:max-w-1/2"
    />
  </section>
</template>
