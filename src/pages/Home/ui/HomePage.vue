<script setup lang="ts">
import { HighlightSection } from '@widgets/HighlightSection'
import HeroSection from './HeroSection.vue'
import StoriesSection from './StoriesSection.vue'
</script>

<template>
  <main class="min-h-full flex-1">
    <HeroSection />
    <StoriesSection />
    <hr class="bg-primary mx-auto my-2.5 h-px w-full max-w-326" />
    <HighlightSection image="/assets/images/films-1.jpg" imageAlt="Thinking person">
      <template #subtitle> FILMS </template>
      <template #title>
        Ruben <br class="hidden sm:inline" />
        Östlund
      </template>
      <template #description>
        Crude, contrary—and killing it: Meet the auteur of awkwardness. Words by Elle Hunt.
        <br class="hidden sm:inline" />
        Photography by Sina Östlund.
      </template>
    </HighlightSection>
  </main>
</template>
