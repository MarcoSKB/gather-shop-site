<script setup lang="ts">
import { BaseButton } from '@shared/ui/BaseButton'
import { BaseContainer } from '@shared/ui/BaseContainer'
import { ButtonIcon } from '@shared/ui/ButtonIcon'
import { RouterLink } from '@shared/ui/RouterLink'
import { X } from 'lucide-vue-next'
import { headerMenu } from '../model/headerMenu'

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
          <nav class="font-spectral flex w-full flex-col gap-5 text-2xl md:gap-8">
            <ul class="flex flex-col gap-0.5">
              <RouterLink
                v-for="link in headerMenu[0]"
                :key="link.href"
                :to="link.href"
                variant="secondary"
                size="lg"
              >
                {{ link.title }}
              </RouterLink>
            </ul>
            <hr />
            <ul class="flex flex-col gap-0.5">
              <RouterLink
                v-for="link in headerMenu[1]"
                :key="link.href"
                :to="link.href"
                variant="secondary"
                size="lg"
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
