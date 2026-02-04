<script setup lang="ts">
import { BaseContainer } from '@/src/shared/ui/BaseContainer'
import { ButtonIcon } from '@/src/shared/ui/ButtonIcon'
import { RouterLink } from '@/src/shared/ui/RouterLink'
import { Menu, Search, ShoppingBag } from 'lucide-vue-next'
import { RouterLink as VueRouterLink } from 'vue-router'
</script>

<template>
  <header>
    <BaseContainer class="flex-row justify-between py-6">
      <div class="flex w-full max-w-[30%] items-center gap-8">
        <div class="max-w-32"><BaseButton variant="primary">Subscribe</BaseButton></div>
        <RouterLink to="/">Issue 49</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
      </div>
      <VueRouterLink to="/" title="To Home page">
        <img src="/assets/images/logo.svg" alt="Elmore logotype" class="w-75" />
      </VueRouterLink>
      <div class="flex w-full max-w-[30%] items-center justify-end gap-10">
        <ButtonIcon title="Cart">
          <ShoppingBag />
        </ButtonIcon>
        <ButtonIcon title="Search">
          <Search />
        </ButtonIcon>
        <ButtonIcon title="Menu">
          <Menu />
        </ButtonIcon>
      </div>
    </BaseContainer>
  </header>
</template>
