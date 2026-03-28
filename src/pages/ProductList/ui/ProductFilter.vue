<script setup lang="ts">
import { useProductKeys } from '@entities/product'
import { useUrlState } from '@shared/lib/hooks'
import { BaseSkeleton, UiState } from '@shared/ui'
import FilterButton from './FilterButton.vue'

const { data: productKeys, uiStatus } = useProductKeys()
const category = useUrlState('category', 'all')

const setCategory = (value: string) => {
  category.value = value
}
</script>

<template>
  <div class="flex justify-center py-6 md:py-10 lg:py-18">
    <UiState :status="uiStatus">
      <div
        class="font-poppins text-primary flex max-w-full items-center gap-3.5 text-sm font-light text-nowrap uppercase"
      >
        <span class="pointer-events-none">SHOP:</span>
        <ul class="flex items-center gap-3.5 overflow-x-auto py-2">
          <FilterButton :disabled="category === 'all'" @click="setCategory('all')">
            ALL
          </FilterButton>
          <FilterButton
            v-for="key in productKeys"
            :key="key"
            :disabled="category === key.toLowerCase()"
            @click="setCategory(key.toLowerCase())"
          >
            {{ key }}
          </FilterButton>
        </ul>
      </div>

      <template #loading>
        <div
          class="font-poppins text-primary flex max-w-full items-center gap-3.5 text-sm font-light text-nowrap uppercase"
        >
          <span class="pointer-events-none">SHOP:</span>
          <ul class="flex items-center gap-3.5 overflow-x-auto py-2">
            <li v-for="i in 6" :key="i">
              <BaseSkeleton class="h-3 min-w-17" />
            </li>
          </ul>
        </div>
      </template>
    </UiState>
  </div>
</template>
