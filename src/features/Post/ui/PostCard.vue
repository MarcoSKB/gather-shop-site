<script setup lang="ts">
import { BaseCard } from '@shared/ui/BaseCard'

defineProps<{
  image: string
  imageAlt: string
  title: string
  subtitle: string
  description: string
  to: string
}>()
</script>

<template>
  <BaseCard :to class="font-spectral w-full gap-3">
    <template #image>
      <img
        :src="image"
        :alt="imageAlt"
        class="mb-3 w-full object-cover md:scale-105 md:transition-transform md:duration-250 md:ease-in md:group-hover:scale-100"
      />
      <span class="font-poppins mb-4 text-xs leading-3.75 font-light tracking-[10%]">
        {{ subtitle }}
      </span>
    </template>
    <template #content>
      <span class="text-xl leading-7 transition-opacity ease-in group-hover:opacity-70">
        {{ title }}
      </span>
      <span class="text-base leading-6 text-pretty opacity-80">{{ description }}</span>
    </template>
  </BaseCard>
</template>
