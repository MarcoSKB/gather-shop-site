<script setup lang="ts">
import { BaseContainer, RouterLink } from '@shared/ui'
import { storyList } from '../model/storyList.ts'
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
            <li
              v-for="story in storyList"
              :key="story.id"
              class="flex flex-[0_0_100%] flex-col gap-3 sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(50%-20px)]"
            >
              <RouterLink to="/stories/id" variant="plain">
                <img
                  :src="story.image"
                  alt="Story preview"
                  class="h-86 w-full object-cover md:max-w-74"
                />
              </RouterLink>
              <span class="font-poppins text-xs leading-3.5 uppercase">{{ story.subtitle }}</span>
              <RouterLink
                to="/stories/id"
                variant="secondary"
                size="lg"
                class="leading-7 text-wrap"
              >
                {{ story.title }}
              </RouterLink>
              <span class="font-spectral leading-6 opacity-75">{{ story.description }}</span>
            </li>
          </ul>
        </div>
      </div>
      <RouterLink to="/stories" variant="tertiary" class="mx-auto max-w-fit">
        All Stories
      </RouterLink>
    </BaseContainer>
  </section>
</template>
