<script setup lang="ts">
import { TitledSection } from '@shared/ui'
import { PostsGrid } from '@widgets/PostsGrid'
</script>

<template>
  <TitledSection title="SCANDINAVIA">
    <PostsGrid :params="{ categoryId: 'CULTURE' }" />
  </TitledSection>
</template>
