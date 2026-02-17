<script setup lang="ts">
import { BaseLine } from '@shared/ui/BaseLine'
import { PostsGrid } from '@widgets/PostsGrid'
import { TitledSection } from '@widgets/TitledSection'
import { postsList } from '../model/postsList'
</script>

<template>
  <BaseLine />
  <TitledSection title="SELECTED STORIES FROM ISSUE FORTY-NINE">
    <PostsGrid :posts="postsList" />
  </TitledSection>
</template>
