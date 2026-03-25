<script setup lang="ts">
import { PostCard, PostCardSkeleton, usePostsList } from '@/src/entities/post'
import { CollectionGrid, UiState } from '@shared/ui'
import { computed } from 'vue'

const { params } = defineProps<{
  params?: {
    limit?: number
    categoryId?: string
    excludePostId?: string
  }
}>()

const { data: posts, uiStatus } = usePostsList(params)
const skeletonItems = computed(() => Array.from({ length: 6 }, (_, i) => i))
</script>

<template>
  <UiState :status="uiStatus">
    <CollectionGrid v-if="posts" :items="posts" :getKey="(post) => post.id">
      <template #default="{ item: post }">
        <PostCard :to="{ name: 'post-details', params: { slug: post.slug } }" :post="post" />
      </template>
    </CollectionGrid>

    <template #loading>
      <CollectionGrid :items="skeletonItems" :getKey="(item) => item">
        <PostCardSkeleton />
      </CollectionGrid>
    </template>
  </UiState>
</template>
