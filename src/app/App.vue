<script setup lang="ts">
import { FooterSection } from '@widgets/FooterSection'
import { HeaderSection } from '@widgets/HeaderSection'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderSection />
  <RouterView />
  <FooterSection />
</template>
