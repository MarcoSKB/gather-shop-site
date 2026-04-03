<script setup lang="ts">
import { usePostsList } from '@entities/post'
import { BaseContainer, BaseSkeleton, RouterLink, UiState } from '@shared/ui'
const { data: storyList, uiStatus } = usePostsList({ take: 6 })
</script>

<template>
  <section>
    <BaseContainer class="py-16 md:py-20 lg:py-28.5">
      <div class="flex flex-col-reverse gap-6 md:mb-24 md:flex-row lg:gap-10">
        <div class="w-full md:max-w-[40%] lg:max-w-1/2">
          <div class="flex w-full flex-col md:sticky md:top-23">
            <img
              src="/assets/images/building.webp"
              alt="Art book preview"
              class="object-contain md:max-h-[50dvh] lg:object-cover"
            />
            <div class="flex flex-col gap-2 px-4 py-4 text-center md:gap-4 lg:px-12 lg:py-7">
              <h2 class="font-spectral text-5xl leading-12 lg:text-6xl lg:leading-20">
                The Art of Elmore
              </h2>
              <p class="font-spectral leading-7">An iconic lens on life and style.</p>
            </div>
          </div>
        </div>
        <div class="w-full md:max-w-[60%] lg:max-w-1/2">
          <ul
            class="flex flex-wrap justify-between gap-x-2 gap-y-16 sm:gap-x-5 md:gap-y-24 lg:gap-x-10"
          >
            <UiState :status="uiStatus">
              <li
                v-for="story in storyList"
                :key="story.id"
                class="flex flex-[0_0_100%] flex-col gap-3 sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(50%-20px)]"
              >
                <RouterLink
                  :to="{ name: 'post-details', params: { slug: story.slug } }"
                  variant="plain"
                >
                  <img
                    :src="story.cover"
                    alt="Story preview"
                    class="h-86 w-full object-cover md:max-w-74"
                  />
                </RouterLink>
                <span class="font-poppins text-xs leading-3.5 uppercase">{{ story.category }}</span>
                <RouterLink
                  :to="{ name: 'post-details', params: { slug: story.slug } }"
                  variant="secondary"
                  size="lg"
                  class="leading-7 text-wrap"
                >
                  {{ story.title }}
                </RouterLink>
                <span class="font-spectral leading-6 opacity-75">{{ story.subtitle }}</span>
              </li>

              <template #loading>
                <li
                  v-for="item in 6"
                  :key="item"
                  class="flex flex-[0_0_100%] flex-col gap-3 sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(50%-20px)]"
                >
                  <BaseSkeleton class="h-86 md:max-w-74" />
                  <BaseSkeleton class="h-3 max-w-[15%]" />
                  <BaseSkeleton class="h-6 max-w-[70%]" />
                  <BaseSkeleton class="h-8 w-full" />
                </li>
              </template>
            </UiState>
          </ul>
        </div>
      </div>
      <RouterLink :to="{ name: 'post-list' }" variant="tertiary" class="mx-auto max-w-fit">
        All Stories
      </RouterLink>
    </BaseContainer>
  </section>
</template>
