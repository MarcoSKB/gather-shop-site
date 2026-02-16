<script setup lang="ts">
import FilmsSection from './FilmsSection.vue'
import HeroSection from './HeroSection.vue'
import IssueSection from './IssueSection.vue'
import PosterSection from './PosterSection.vue'
import PostsSection from './PostsSection.vue'
import StoriesSection from './StoriesSection.vue'
</script>

<template>
  <main class="min-h-full flex-1">
    <HeroSection />
    <StoriesSection />
    <FilmsSection />
    <PosterSection />
    <IssueSection />
    <PostsSection />
  </main>
</template>
