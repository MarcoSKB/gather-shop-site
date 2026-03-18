<script setup lang="ts">
import { BaseContainer, RouterLink } from '@shared/ui'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
import { issueList } from '../model/issueList'

const carouselConfig = {
  autoplay: 3000,
  transition: 1200,
  transitionEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  itemsToShow: 1.2,
  pauseAutoplayOnHover: false,
  wrapAround: true,
  breakpoints: {
    768: {
      itemsToShow: 1.8,
    },
    1024: {
      pauseAutoplayOnHover: true,
      itemsToShow: 2.3,
    },
  },
}
</script>

<template>
  <section class="flex flex-col py-30">
    <BaseContainer class="font-spectral mb-12 flex-row justify-center uppercase ease-in">
      CURRENT ISSUE
    </BaseContainer>
    <Carousel v-bind="carouselConfig" class="mx-auto mb-12 w-full max-w-480">
      <Slide v-for="slide in issueList" :key="slide.id" class="px-2 md:px-8 lg:px-20">
        <div class="carousel__item relative z-0 min-h-70 w-full max-w-137 md:min-h-60 lg:min-h-80">
          <img
            :src="slide.image"
            :alt="slide.alt"
            class="absolute top-0 left-0 h-full w-full object-cover object-center"
          />
        </div>
      </Slide>
    </Carousel>
    <BaseContainer class="items-center gap-14">
      <span class="font-spectral text-lg">Inside the cultural powerhouse.</span>
      <RouterLink to="/about" variant="tertiary" class="max-w-fit">Buy Now</RouterLink>
    </BaseContainer>
  </section>
</template>
