<script setup lang="ts">
import { BaseContainer } from '@/src/shared/ui'
import { computed } from 'vue'
import type { ImageBlock } from '../../../model/types'

const { data } = defineProps<{
  data: ImageBlock['data']
}>()
const imageClass = computed(() =>
  data.variant == 'default'
    ? 'object-cover mx-auto h-full w-full max-w-480 mb-[10px]'
    : 'w-full object-cover mb-[10px] md:mb-[40px]',
)
const captionClass = computed(() =>
  data.variant == 'default'
    ? 'font-poppins text-sm md:text-[16px] leading-[22px] text-primary text-left text-pretty'
    : 'font-spectral text-sm leading-[17px] text-primary text-left text-pretty',
)
</script>

<template>
  <figure>
    <img :src="data.url" :class="imageClass" />
    <figcaption v-if="data.caption" :class="captionClass">
      <BaseContainer v-if="data.variant == 'default'">
        {{ data.caption }}
      </BaseContainer>
      <template v-else>{{ data.caption }}</template>
    </figcaption>
  </figure>
</template>
