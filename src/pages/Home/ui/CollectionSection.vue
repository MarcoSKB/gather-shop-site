<script setup lang="ts">
import { PostsGrid } from '@widgets/PostsGrid'
import { TitledSection } from '@widgets/TitledSection'
</script>

<template>
  <TitledSection title="SCANDINAVIA">
    <PostsGrid :params="{ categoryId: 'CULTURE' }" />
  </TitledSection>
</template>
