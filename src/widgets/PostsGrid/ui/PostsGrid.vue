<script setup lang="ts">
import { PostCard, usePostsList } from '@/src/entities/post'
import { CollectionGrid, UiState } from '@shared/ui'

const { params } = defineProps<{
  params?: {
    limit?: number
    categoryId?: string
  }
}>()

const { data: posts, uiStatus } = usePostsList(params)
</script>

<template>
  <UiState :status="uiStatus">
    <CollectionGrid v-if="posts" :items="posts" :getKey="(post) => post.id">
      <template #default="{ item: post }">
        <PostCard :to="{ name: 'post-details', params: { slug: post.slug } }" :post="post" />
      </template>
    </CollectionGrid>
  </UiState>
</template>
