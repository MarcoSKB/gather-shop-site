<script setup lang="ts">
import { BaseContainer, RouterLink } from '@shared/ui'
</script>

<template>
  <footer>
    <BaseContainer class="gap-2 pb-6 md:gap-5">
      <hr class="bg-primary h-0.5" />
      <div class="flex flex-col-reverse items-center justify-between gap-2 md:flex-row md:gap-1.5">
        <span>© 2026 Elmore</span>
        <div class="flex items-center gap-6">
          <a
            target="_blank"
            href="https://www.facebook.com"
            class="font-spectral text-primary text-xl transition-opacity duration-200 ease-in hover:opacity-60"
            >Facebook</a
          >
          <a
            target="_blank"
            href="https://x.com/"
            class="font-spectral text-primary text-xl transition-opacity duration-200 ease-in hover:opacity-60"
            >X</a
          >
          <a
            target="_blank"
            href="https://www.instagram.com"
            class="font-spectral text-primary text-xl transition-opacity duration-200 ease-in hover:opacity-60"
            >Instagram</a
          >
        </div>
        <div class="flex items-center gap-5">
          <RouterLink to="/">Terms</RouterLink>
          <RouterLink to="/">Subscribe</RouterLink>
        </div>
      </div>
    </BaseContainer>
  </footer>
</template>
