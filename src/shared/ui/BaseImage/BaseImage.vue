<script setup lang="ts">
import { cn } from '@shared/lib'
import { computed, onMounted, ref, type ImgHTMLAttributes } from 'vue'

interface Props {
  src: string
  alt?: string
  class?: string
  loading?: 'lazy' | 'eager'
  fetchpriority?: ImgHTMLAttributes['fetchpriority']
}

const { class: className, ...imgProps } = defineProps<Props>()

const isLoaded = ref(false)
const isError = ref(false)
const imgRef = ref<HTMLImageElement | null>(null)

const handleLoad = () => {
  isLoaded.value = true
}

const handleError = () => {
  isLoaded.value = false
  isError.value = true
}

onMounted(() => {
  if (imgRef.value?.complete) {
    handleLoad()
  }
})

const imageStyles = computed(() => cn('relative overflow-hidden bg-inverse z-0', className))
</script>

<template>
  <div :class="imageStyles">
    <div v-if="!isLoaded" class="absolute inset-0 z-10 animate-pulse bg-gray-300">
      <div v-if="isError" class="flex h-full items-center justify-center text-gray-400">
        Error loading image
      </div>
    </div>

    <img
      ref="imgRef"
      v-bind="imgProps"
      @load="handleLoad"
      @error="handleError"
      class="h-full w-full object-cover transition-opacity duration-500 ease-in-out"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'"
      loading="lazy"
    />
  </div>
</template>
