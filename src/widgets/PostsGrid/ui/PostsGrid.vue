<script setup lang="ts">
import { PostCard, type PreviewPost } from '@/src/entities/post'
import { CollectionGrid } from '@shared/ui/CollectionGrid'

defineProps<{
  posts: PreviewPost[]
}>()
</script>

<template>
  <CollectionGrid :items="posts" :getKey="(post) => post.id">
    <template #default="{ item: post }">
      <PostCard :to="`/post/${post.id}`" :post="post" />
    </template>
  </CollectionGrid>
</template>
