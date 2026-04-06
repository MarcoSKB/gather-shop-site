import { onMounted, onUnmounted, ref } from 'vue'

export const useWindowSize = () => {
  const width = ref(window.innerWidth)

  const update = () => {
    width.value = window.innerWidth
  }

  onMounted(() => window.addEventListener('resize', update))
  onUnmounted(() => window.removeEventListener('resize', update))

  return { width }
}
