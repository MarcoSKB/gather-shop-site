<script setup lang="ts">
import { BaseButton, BaseContainer, ButtonIcon, RouterLink } from '@shared/ui'
import { X } from 'lucide-vue-next'
import { menuLinks } from '../model/menuLinks'

defineProps<{
  onClose: () => void
}>()

const menuRef = defineModel<HTMLElement | null>('menuRef')
</script>

<template>
  <div ref="menuRef" class="bg-inverse fixed inset-0 z-50">
    <BaseContainer class="h-full">
      <div class="flex justify-end py-3 md:py-6">
        <ButtonIcon @click="onClose">
          <X />
        </ButtonIcon>
      </div>
      <div
        class="no-scrollbar flex h-full flex-col justify-between gap-5 overflow-y-auto pb-3 md:gap-8"
      >
        <div class="flex flex-col-reverse items-end gap-6 md:flex-row">
          <BaseButton>Subscribe</BaseButton>
          <nav
            class="font-spectral divide-primary flex w-full flex-col divide-y divide-solid text-2xl"
          >
            <ul
              v-for="(linksGroup, idx) in menuLinks"
              :key="idx"
              class="flex flex-col gap-0.5 not-first:pt-2 not-last:pb-2 md:not-first:pt-4 md:not-last:pb-4"
            >
              <RouterLink
                v-for="link in linksGroup"
                :key="link.href"
                :to="link.href"
                @click="onClose"
                variant="secondary"
                size="lg"
                class="w-fit aria-[current='page']:pointer-events-auto"
              >
                {{ link.title }}
              </RouterLink>
            </ul>
          </nav>
        </div>
        <div class="flex flex-col gap-1">
          <hr class="bg-primary mb-4 h-0.5" />
          <a
            target="_blank"
            href="https://www.facebook.com"
            class="font-poppins text-primary text-sm transition-opacity duration-200 ease-in hover:opacity-60"
            >Facebook</a
          >
          <a
            target="_blank"
            href="https://x.com/"
            class="font-poppins text-primary text-sm transition-opacity duration-200 ease-in hover:opacity-60"
            >X</a
          >
          <a
            target="_blank"
            href="https://www.instagram.com"
            class="font-poppins text-primary text-sm transition-opacity duration-200 ease-in hover:opacity-60"
            >Instagram</a
          >
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
