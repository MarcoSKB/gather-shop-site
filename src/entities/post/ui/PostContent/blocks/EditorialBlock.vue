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
    <section class="grid grid-cols-1 gap-8 py-16 md:grid-cols-[32fr_40fr_20fr] lg:gap-16 lg:py-24">
      <aside class="sticky top-28 self-start">
        <ImageBlock :data="data.left.data" />
      </aside>

      <main class="flex flex-col">
        <template v-for="item in data.center" :key="item.id">
          <TextBlock :data="item.data" />
        </template>
      </main>

      <aside class="sticky top-28 self-start">
        <ImageBlock :data="data.right.data" />
      </aside>
    </section>
  </BaseContainer>
</template>
