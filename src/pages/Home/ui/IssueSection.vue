<script setup lang="ts">
import { useFeaturedProducts } from '@entities/product'
import { BaseContainer, BaseSkeleton, RouterLink, UiState } from '@shared/ui'
import { computed, ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'

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

const { data: productList, uiStatus } = useFeaturedProducts()
const currentSlideIndex = ref(0)

const handleСurrentSlide = (data: { currentSlideIndex: number }) => {
  currentSlideIndex.value = data.currentSlideIndex
}

const currentLink = computed(() => {
  if (!productList.value || productList.value.length === 0) return ''
  const index = currentSlideIndex.value % productList.value.length
  return productList.value[index]?.slug || 'product'
})
</script>

<template>
  <section class="py-30">
    <BaseContainer class="font-spectral mb-12 flex-row justify-center uppercase ease-in">
      CURRENT ISSUE
    </BaseContainer>
    <UiState :status="uiStatus">
      <template #default>
        <Carousel
          v-bind="carouselConfig"
          @slide-end="handleСurrentSlide"
          class="mx-auto mb-12 w-full max-w-480"
        >
          <Slide v-for="product in productList" :key="product.id" class="px-2 md:px-8 lg:px-20">
            <div
              class="carousel__item relative z-0 min-h-70 w-full max-w-137 md:min-h-60 lg:min-h-80"
            >
              <img
                :src="product.image"
                :alt="product.alt"
                class="absolute top-0 left-0 h-full w-full object-cover object-center"
              />
            </div>
          </Slide>
        </Carousel>
      </template>

      <template #loading>
        <div
          class="mx-auto mb-12 grid max-w-480 grid-cols-[8.5%_1fr_8.5%] md:grid-cols-[22.2%_1fr_22.2%] lg:grid-cols-[28.2%_1fr_28.2%]"
        >
          <div class="min-h-70 pr-2 md:min-h-60 md:pr-8 lg:min-h-80 lg:pr-20">
            <BaseSkeleton class="h-full" />
          </div>
          <div class="min-h-70 px-2 md:min-h-60 md:px-8 lg:min-h-80 lg:px-20">
            <BaseSkeleton class="h-full" />
          </div>
          <div class="min-h-70 pl-2 md:min-h-60 md:pl-8 lg:min-h-80 lg:pl-20">
            <BaseSkeleton class="h-full" />
          </div>
        </div>
      </template>
    </UiState>
    <BaseContainer class="items-center gap-14">
      <span class="font-spectral text-lg">Inside the cultural powerhouse.</span>
      <RouterLink
        :disabled="currentLink == ''"
        :to="{ name: 'product-details', params: { slug: currentLink || 'product' } }"
        variant="tertiary"
        class="max-w-fit"
      >
        Buy Now
      </RouterLink>
    </BaseContainer>
  </section>
</template>
