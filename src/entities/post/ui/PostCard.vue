<script setup lang="ts">
import { BaseCard } from '@shared/ui/BaseCard'
import type { RouteLocationRaw } from 'vue-router'
import type { PreviewPost } from '../model/types'

defineProps<{
  to: RouteLocationRaw
  post: PreviewPost
}>()
</script>

<template>
  <BaseCard :to class="font-spectral w-full gap-3">
    <template #image>
      <img
        :src="post.cover"
        :alt="`Cover image for ${post.title.toLowerCase()}`"
        class="mb-3 w-full object-cover md:scale-105 md:transition-transform md:duration-250 md:ease-in md:group-hover:scale-100"
      />
      <span class="font-poppins mb-4 text-xs leading-3.75 font-light tracking-[10%]">
        {{ post.category }}
      </span>
    </template>
    <template #content>
      <span class="text-xl leading-7 transition-opacity ease-in group-hover:opacity-70">
        {{ post.title.toLowerCase().replace(/^\w|\s\w/g, (c) => c.toUpperCase()) }}
      </span>
      <span class="text-base leading-6 text-pretty opacity-80">{{ post.subtitle }}</span>
    </template>
  </BaseCard>
</template>
