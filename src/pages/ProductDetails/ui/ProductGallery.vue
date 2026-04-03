<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

defineProps<{
  images: string[]
}>()

const currentSlide = ref(0)

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide)

const galleryConfig = {
  transition: 1200,
  transitionEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  itemsToShow: 1,
  ignoreAnimations: true,
  wrapAround: true,
}

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 4,
  touchDrag: false,
  gap: 10,
  breakpoints: {
    768: {
      itemsToShow: 5,
    },
    1024: {
      itemsToShow: 6,
    },
  },
}
</script>

<template>
  <div class="row-span-2 h-full max-w-full overflow-hidden md:col-start-1 md:row-start-1">
    <Carousel v-bind="galleryConfig" v-model="currentSlide" class="mb-2.5 bg-gray-200">
      <Slide
        v-for="(image, idx) in images"
        :key="image + idx"
        class="relative z-0 aspect-16/11 h-auto w-full px-2 md:px-8 lg:px-20"
      >
        <img
          :src="image"
          alt="Product Image"
          class="pointer-events-none absolute top-0 left-0 aspect-16/11 h-full w-full object-cover object-center"
        />
      </Slide>
    </Carousel>

    <Carousel v-bind="thumbnailsConfig" v-model="currentSlide">
      <Slide v-for="(image, idx) in images" :key="image + idx">
        <template #default="{ currentIndex, isActive }">
          <div
            @click="slideTo(currentIndex)"
            :class="[
              'aspect-16/11 h-auto w-full cursor-pointer opacity-60 transition-opacity duration-300 ease-in hover:opacity-100',
              { 'opacity-100': isActive },
            ]"
          >
            <img
              :src="image"
              alt="Thumbnail Image"
              class="aspect-16/11 h-full w-full object-cover"
            />
          </div>
        </template>
      </Slide>
    </Carousel>
  </div>
</template>
