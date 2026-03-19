<script setup lang="ts">
import type { ImageBlock } from '../../../model/types'

defineProps<{
  data: ImageBlock['data']
}>()
</script>

<template>
  <figure>
    <img :src="data.url" class="w-full object-cover shadow-sm" />
    <figcaption
      v-if="data.caption"
      class="font-spectral mt-4 text-center text-sm italic opacity-60"
    >
      {{ data.caption }}
    </figcaption>
  </figure>
</template>
