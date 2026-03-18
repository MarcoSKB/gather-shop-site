<script setup lang="ts">
import { BaseContainer } from '@shared/ui'

defineProps<{
  image: string
  imageAlt: string
}>()
</script>

<template>
  <section>
    <BaseContainer
      class="flex justify-between gap-5 pt-6 pb-16 sm:flex-row md:pt-12 md:pb-24 lg:pb-30"
    >
      <div class="flex flex-col justify-between">
        <div class="flex flex-col gap-1 md:gap-2.5">
          <span class="font-poppins text-xs uppercase">
            <slot name="subtitle">SUBTITLE</slot>
          </span>
          <h2
            class="font-spectral text-[42px] leading-14 font-light tracking-[1.3%] md:text-[65px] md:leading-18 lg:text-[90px] lg:leading-24.25"
          >
            <slot name="title">Title</slot>
          </h2>
        </div>
        <span
          class="font-brygada text-[17px] leading-7.5 text-pretty italic sm:text-sm md:text-base lg:text-[17px]"
        >
          <slot name="description"> Description </slot>
        </span>
      </div>
      <img
        :src="image"
        :alt="imageAlt"
        class="w-full max-w-75 self-center sm:w-[70%] md:max-w-130.25 lg:w-full"
      />
    </BaseContainer>
  </section>
</template>
