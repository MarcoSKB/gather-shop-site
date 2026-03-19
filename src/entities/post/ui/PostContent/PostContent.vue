<script setup lang="ts">
import { type Component } from 'vue'
import { type PostBlock } from '../../model/types'
import { EditorialBlock, HeaderBlock, ImageBlock, TextBlock } from './blocks'

defineProps<{
  blocks: PostBlock[]
}>()

const blockMap: Record<PostBlock['type'], Component> = {
  text: TextBlock,
  image: ImageBlock,
  header: HeaderBlock,
  editorial: EditorialBlock,
}
</script>

<template>
  <article class="flex flex-col">
    <template v-for="block in blocks" :key="block.id">
      <component :is="blockMap[block.type]" :data="block.data" />
    </template>
  </article>
</template>
