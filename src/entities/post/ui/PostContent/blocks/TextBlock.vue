<script setup lang="ts">
import type { TextBlock } from '../../../model/types'

defineProps<{
  data: TextBlock['data']
}>()
</script>

<template>
  <h2
    v-if="data.type === 'heading'"
    class="font-spectral text-primary my-10 text-3xl leading-tight italic lg:text-4xl"
  >
    {{ data.content }}
  </h2>

  <p v-else-if="data.type === 'quote'" class="text-md italic">
    {{ data.content }}
  </p>

  <p v-else class="text-md">{{ data.content }}</p>
</template>
