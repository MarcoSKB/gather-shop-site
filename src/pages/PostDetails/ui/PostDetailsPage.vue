<script setup lang="ts">
import { PostContent, usePost } from '@entities/post'
import { TitledSection, UiState } from '@shared/ui'
import { PostsGrid } from '@widgets/PostsGrid'
import PostDetailsSkeleton from './PostDetails.skeleton.vue'

const { slug } = defineProps<{ slug: string }>()
const { data: postDetails, uiStatus } = usePost(slug)
</script>

<template>
  <UiState :status="uiStatus">
    <template v-if="postDetails" #default>
      <PostContent :blocks="postDetails.blocks" />
      <TitledSection title="RELATED STORIES">
        <PostsGrid
          :params="{
            categoryId: postDetails.category,
            excludePostId: postDetails.id,
          }"
        />
      </TitledSection>
    </template>

    <template #loading>
      <PostDetailsSkeleton />
    </template>
  </UiState>
</template>
