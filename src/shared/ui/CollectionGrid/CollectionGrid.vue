<script setup lang="ts" generic="T">
defineProps<{
  items: T[]
  getKey: (item: T) => string | number
}>()
</script>

<template>
  <ul
    class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-6"
  >
    <li v-for="item in items" :key="getKey(item)">
      <slot :item="item" />
    </li>
  </ul>
</template>
