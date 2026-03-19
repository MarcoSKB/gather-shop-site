<script setup lang="ts">
import type { HeaderBlock } from '../../../model/types'

defineProps<{
  data: HeaderBlock['data']
}>()
</script>

<template>
  <div>header</div>
</template>
