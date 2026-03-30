<script setup lang="ts">
defineProps<{
  images: string[]
}>()
</script>

<template>
  <img
    :src="images[0]"
    alt="Product image"
    class="row-span-2 aspect-video h-fit w-full object-cover md:col-start-1 md:row-start-1"
  />
</template>
