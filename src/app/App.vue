<script setup lang="ts">
import { initGsap } from '@shared/lib/gsap'
import { FooterSection } from '@widgets/FooterSection'
import { HeaderSection } from '@widgets/HeaderSection'
import { RouterView } from 'vue-router'

initGsap()
</script>

<template>
  <div class="flex min-h-dvh flex-col pt-16 md:pt-0">
    <HeaderSection />
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.fullPath" />
    </RouterView>
    <FooterSection />
  </div>
</template>
