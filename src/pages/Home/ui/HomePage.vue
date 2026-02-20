<script setup lang="ts">
import AccentSection from './AccentSection.vue'
import AdsSection from './AdsSection.vue'
import CollectionSection from './CollectionSection.vue'
import FashionSection from './FashionSection.vue'
import FilmsSection from './FilmsSection.vue'
import HeroSection from './HeroSection.vue'
import IssueSection from './IssueSection.vue'
import PosterSection from './PosterSection.vue'
import PostsSection from './PostsSection.vue'
import StoriesSection from './StoriesSection.vue'
import SubscribeFormSection from './SubscribeFormSection.vue'
</script>

<template>
  <main class="min-h-full flex-1">
    <HeroSection />
    <StoriesSection />
    <FilmsSection />
    <PosterSection />
    <IssueSection />
    <PostsSection />
    <AccentSection />
    <AdsSection />
    <CollectionSection />
    <FashionSection />
    <SubscribeFormSection />
  </main>
</template>
