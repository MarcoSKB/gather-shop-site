<script setup lang="ts">
import { BaseLine } from '@shared/ui'
import { HighlightSection } from '@widgets/HighlightSection'
</script>

<template>
  <BaseLine />
  <HighlightSection image="/assets/images/fashion.webp" imageAlt="Woman walking to the right">
    <template #subtitle> FASHION </template>
    <template #title>
      URBAN <br class="hidden sm:inline" />
      DOOM
    </template>
    <template #description>
      A saturnine mélange of subversive styles. Photography by Zhong Lin. Styling by Chen Yu. Set
      Design by Yu Ting Tung. Hair by Juno Ko. Makeup by Sting Hsieh.
      <br class="hidden sm:inline" />
      Nail Art by Rong at Partner in Crime.
    </template>
  </HighlightSection>
</template>
