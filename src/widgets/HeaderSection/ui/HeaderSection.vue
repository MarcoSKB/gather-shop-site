<script setup lang="ts">
import { BaseButton, BaseContainer, ButtonIcon, RouterLink } from '@shared/ui'
import { Menu, Search, ShoppingBag } from 'lucide-vue-next'
import { ref } from 'vue'
import { useLogoAnimation } from '../lib/useLogoAnimation'
import { useHeaderMenu } from '../model/useHeaderMenu'
import HeaderMenuOverlay from './HeaderMenuOverlay.vue'

const logoRef = ref<HTMLImageElement | null>(null)
useLogoAnimation(logoRef)

const { isOpen, menuRef, toggle, close } = useHeaderMenu()
</script>

<template>
  <header class="bg-inverse fixed top-0 z-10 h-auto w-full md:sticky">
    <BaseContainer class="flex-row justify-between py-3 md:py-6">
      <div class="hidden w-full max-w-[33%] items-center gap-8 md:flex">
        <BaseButton variant="primary" class="hidden max-w-32 lg:flex">Subscribe</BaseButton>
        <RouterLink :to="{ name: 'post-list' }">Stories</RouterLink>
        <RouterLink :to="{ name: 'product-list' }">Shop</RouterLink>
      </div>
      <RouterLink
        to="/"
        title="To Home page"
        variant="plain"
        class="flex w-full items-center md:max-w-[33%] md:justify-center"
      >
        <img
          src="/assets/images/logo.svg"
          alt="Elmore logotype"
          ref="logoRef"
          class="w-full max-w-60 origin-center will-change-transform lg:max-w-75"
        />
      </RouterLink>
      <div class="flex w-full items-center justify-end md:max-w-[33%] md:gap-4 lg:gap-10">
        <ButtonIcon title="Cart">
          <ShoppingBag />
        </ButtonIcon>
        <ButtonIcon title="Search">
          <Search />
        </ButtonIcon>
        <ButtonIcon title="Menu" @click="toggle">
          <Menu />
        </ButtonIcon>
      </div>
    </BaseContainer>
  </header>
  <HeaderMenuOverlay v-if="isOpen" v-model:menuRef="menuRef" :onClose="close" />
</template>
