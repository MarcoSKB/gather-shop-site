<script setup lang="ts">
import FilmsSection from './FilmsSection.vue'
import HeroSection from './HeroSection.vue'
import PosterSection from './PosterSection.vue'
import StoriesSection from './StoriesSection.vue'
</script>

<template>
  <main class="min-h-full flex-1">
    <HeroSection />
    <StoriesSection />
    <FilmsSection />
    <PosterSection />
  </main>
</template>
