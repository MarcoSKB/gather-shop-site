<script setup lang="ts" generic="T extends string | number">
import { gsap } from '@shared/lib/gsap'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-vue-next'
import { computed, onMounted, onUnmounted, ref } from 'vue'

interface Option {
  label: string | number
  value: T
}

const { class: className } = defineProps<{
  modelValue: T
  options: Option[]
  placeholder?: string
  class?: string
}>()
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: Option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

const handleCloseDropdown = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

const handleBlur = (event: FocusEvent) => {
  const nextFocusedElement = event.relatedTarget as Node
  if (!selectRef.value?.contains(nextFocusedElement)) {
    isOpen.value = false
  }
}

onMounted(() => window.addEventListener('click', handleCloseDropdown))
onUnmounted(() => window.removeEventListener('click', handleCloseDropdown))

const selectButtonStyles = computed(() =>
  clsx(
    'border-primary flex cursor-pointer group w-full justify-between border px-2.5 py-4',
    className,
  ),
)

const beforeEnter = (el: Element) => {
  gsap.set(el, { opacity: 0, y: -10, transformOrigin: 'top' })
}
const enter = (el: Element, done: () => void) => {
  gsap.to(el, { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out', onComplete: done })
}
const leave = (el: Element, done: () => void) => {
  gsap.to(el, { opacity: 0, y: -10, duration: 0.2, ease: 'power2.in', onComplete: done })
}
</script>

<template>
  <div ref="selectRef" @focusout="handleBlur" class="relative w-full">
    <button type="button" @click="toggleDropdown" :class="selectButtonStyles">
      <span class="font-poppins text-base leading-5.5 transition-opacity group-hover:opacity-70">
        {{ options.find((opt) => opt.value === modelValue)?.label || placeholder || 'Select' }}
      </span>
      <ChevronDown
        class="size-5 transition-transform duration-300 group-hover:translate-y-0.5"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <Transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div
        v-if="isOpen"
        class="border-primary bg-inverse divide-primary absolute top-[calc(100%+0.5rem)] z-50 max-h-60 w-full divide-y overflow-y-auto border"
      >
        <button
          v-for="option in options"
          :key="option.value"
          :disabled="option.value === modelValue"
          @click="selectOption(option)"
          class="font-poppins active:bg-primary active:text-inverse focus:bg-primary focus:text-inverse disabled:active:bg-primary/10 disabled:active:text-primary w-full cursor-pointer px-4 py-2.5 text-left transition-colors disabled:cursor-default"
          :class="{ 'bg-primary/10 text-primary font-semibold': option.value === modelValue }"
        >
          {{ option.label }}
        </button>
      </div>
    </Transition>
  </div>
</template>
