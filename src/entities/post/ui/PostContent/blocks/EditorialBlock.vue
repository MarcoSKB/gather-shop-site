<script setup lang="ts">
import { BaseContainer } from '@shared/ui'
import type { EditorialBlock } from '../../../model/types'
import ImageBlock from './ImageBlock.vue'
import TextBlock from './TextBlock.vue'
defineProps<{
  data: EditorialBlock['data']
}>()
</script>

<template>
  <BaseContainer>
    <section
      class="grid grid-cols-1 gap-8 py-16 md:grid-cols-[42.57fr_42.57fr_14.86fr] lg:gap-10 lg:py-18"
    >
      <aside
        class="top-28 mx-auto w-1/2 min-w-72.5 self-start md:sticky md:mx-0 md:w-full md:min-w-auto"
      >
        <ImageBlock :data="data.left.data" />
      </aside>

      <main class="flex flex-col gap-5">
        <template v-for="item in data.center" :key="item.id">
          <TextBlock :data="item.data" />
        </template>
      </main>

      <aside
        class="top-28 mx-auto w-1/2 min-w-72.5 self-start md:sticky md:mx-0 md:w-full md:min-w-auto"
      >
        <ImageBlock :data="data.right.data" />
      </aside>
    </section>
  </BaseContainer>
</template>
