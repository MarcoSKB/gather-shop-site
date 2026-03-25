<script setup lang="ts">
import type { TextBlock } from '../../../model/types'

defineProps<{
  data: TextBlock['data']
}>()
</script>

<template>
  <h2
    v-if="data.type === 'heading'"
    class="font-spectral text-primary my-3.5 text-[22px] leading-tight text-pretty md:my-5 md:text-[26px]"
  >
    {{ data.content }}
  </h2>

  <p
    v-else-if="data.type === 'quote'"
    class="text-primary font-brygada text-[17px] leading-7.5 text-pretty italic"
  >
    {{ data.content }}
  </p>

  <p v-else class="text-md text-primary font-spectral leading-6 text-pretty">{{ data.content }}</p>
</template>
