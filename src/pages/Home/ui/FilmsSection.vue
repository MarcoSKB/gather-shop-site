<script setup lang="ts">
import { BASE_URL } from '@shared/lib'
import { BaseLine } from '@shared/ui'
import { HighlightSection } from '@widgets/HighlightSection'
</script>

<template>
  <BaseLine />
  <HighlightSection :image="BASE_URL + 'assets/images/films-1.webp'" imageAlt="Thinking person">
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
</template>
