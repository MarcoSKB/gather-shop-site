import { onUnmounted } from 'vue'

export const useLockScroll = () => {
  const lockScroll = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }
  }

  const unlockScroll = () => {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }

  onUnmounted(unlockScroll)

  return { lockScroll, unlockScroll }
}
