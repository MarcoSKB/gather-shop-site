<script setup lang="ts">
import { PostCard } from '@features/PostCard'
import { BaseLine } from '@shared/ui/BaseLine'
import { TitledSection } from '@widgets/TitledSection'
import { postsList } from '../model/postsList'
</script>

<template>
  <BaseLine />
  <TitledSection title="SELECTED STORIES FROM ISSUE FORTY-NINE">
    <ul
      class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-6"
    >
      <li v-for="post in postsList" :key="post.id">
        <PostCard
          :image="post.image"
          :imageAlt="post.imageAlt"
          :title="post.title"
          :subtitle="post.subtitle"
          :description="post.description"
          :to="`/post/${post.id}`"
        />
      </li>
    </ul>
  </TitledSection>
</template>
