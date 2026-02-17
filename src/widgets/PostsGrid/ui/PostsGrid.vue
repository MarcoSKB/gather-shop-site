<script setup lang="ts">
import type { PreviewPost } from '@features/Post/model/types'
import { PostCard } from '@features/Post/ui'
import { CollectionGrid } from '@shared/ui/CollectionGrid'

defineProps<{
  posts: PreviewPost[]
}>()
</script>

<template>
  <CollectionGrid :items="posts" :getKey="(post) => post.id">
    <template #default="{ item: post }">
      <PostCard
        :image="post.image"
        :imageAlt="post.imageAlt"
        :title="post.title"
        :subtitle="post.subtitle"
        :description="post.description"
        :to="`/post/${post.id}`"
      />
    </template>
  </CollectionGrid>
</template>
