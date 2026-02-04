<script setup lang="ts">
import { FooterSection } from '@widgets/FooterSection'
import { HeaderSection } from '@widgets/HeaderSection'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <HeaderSection />
    <RouterView />
    <FooterSection />
  </div>
</template>
