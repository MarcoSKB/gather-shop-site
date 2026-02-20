<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  modelValue: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const inputRef = ref<HTMLInputElement | null>(null)

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <label
    class="inline-flex cursor-pointer items-center gap-3 select-none"
    :class="{ 'cursor-not-allowed opacity-50': disabled }"
  >
    <input
      ref="inputRef"
      type="checkbox"
      class="peer sr-only"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    />
    <span
      class="ring-primary peer-checked:bg-primary size-4 ring ring-offset-2 transition-all duration-200 peer-focus:opacity-80"
    />
    <span class="font-spectral text-primary text-sm leading-4.25">
      <slot />
    </span>
  </label>
</template>
