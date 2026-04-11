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
      <Transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-500 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <main class="min-h-full flex-1" :key="route.path">
          <component :is="Component" />
        </main>
      </Transition>
    </RouterView>
    <FooterSection />
  </div>
</template>
