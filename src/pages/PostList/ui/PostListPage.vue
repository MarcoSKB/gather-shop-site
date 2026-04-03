<script setup lang="ts">
import { PostCard, PostCardSkeleton, usePostsList } from '@entities/post'
import { BaseContainer, UiState } from '@shared/ui'
import { ref, watch } from 'vue'
import { usePostAppearAnimation } from '../lib/usePostAppearAnimation'

const containerRef = ref<HTMLElement | null>(null)

const animate = usePostAppearAnimation(containerRef)
const { data: posts, uiStatus } = usePostsList({ take: 12 })

watch(
  posts,
  async (newVal) => {
    if (newVal?.length) {
      await animate()
    }
  },
  { immediate: true, flush: 'post' },
)
</script>

<template>
  <section>
    <BaseContainer>
      <UiState :status="uiStatus">
        <ul
          ref="containerRef"
          class="grid grid-cols-2 gap-x-3 gap-y-6 py-5 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-5 md:gap-y-10 md:py-8 lg:gap-x-10 lg:gap-y-14 lg:py-12"
        >
          <li v-for="post in posts" :key="post.id">
            <PostCard :post="post" />
          </li>
        </ul>

        <template #loading>
          <ul
            class="grid grid-cols-2 gap-x-3 gap-y-6 py-5 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-5 md:gap-y-10 md:py-8 lg:gap-x-10 lg:gap-y-14 lg:py-12"
          >
            <li v-for="i in 12" :key="i">
              <PostCardSkeleton />
            </li>
          </ul>
        </template>
      </UiState>
    </BaseContainer>
  </section>
</template>
