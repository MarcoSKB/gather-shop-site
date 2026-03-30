<script setup lang="ts">
import { gsap } from '@shared/lib/gsap'
import clsx from 'clsx'
import { Plus } from 'lucide-vue-next'
import { computed, ref } from 'vue'

type Props = {
  class?: string
  title: string
}

const { class: className } = defineProps<Props>()
const accordionClasses = computed(() =>
  clsx('w-full overflow-hidden pb-4 text-left text-pretty shadow', className),
)
const iconClass = computed(() =>
  clsx('transition-transform ease-in duration-250 size-5', isOpen.value && 'rotate-135'),
)

const isOpen = ref(false)
const toggleAccordion = () => (isOpen.value = !isOpen.value)

const beforeEnter = (el: Element) => {
  gsap.set(el, { height: 0, opacity: 0, overflow: 'hidden' })
}

const enter = (el: Element, done: () => void) => {
  gsap.fromTo(
    el,
    { height: 0, opacity: 0 },
    {
      height: 'auto',
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(el, { clearProps: 'all' })
        done()
      },
    },
  )
}

const leave = (el: Element, done: () => void) => {
  gsap.to(el, {
    height: 0,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: done,
  })
}
</script>

<template>
  <button
    type="button"
    @click="toggleAccordion"
    class="flex cursor-pointer flex-col disabled:cursor-default"
  >
    <div class="font-poppins flex w-full justify-between gap-2 py-4 leading-5.5 uppercase">
      <span>{{ title }}</span>
      <Plus :class="iconClass" />
    </div>
    <Transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="isOpen" :class="accordionClasses">
        <slot />
      </div>
    </Transition>
  </button>
</template>
