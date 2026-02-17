<script setup lang="ts">
import { PostsGrid } from '@widgets/PostsGrid'
import { TitledSection } from '@widgets/TitledSection'
import { collectionList } from '../model/collectionList'
</script>

<template>
  <TitledSection title="SCANDINAVIA">
    <PostsGrid :posts="collectionList" />
  </TitledSection>
</template>
