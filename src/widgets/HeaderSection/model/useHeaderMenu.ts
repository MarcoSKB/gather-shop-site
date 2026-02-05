import gsap from 'gsap'
import { nextTick, onUnmounted, ref } from 'vue'

export function useHeaderMenu() {
  const isOpen = ref(false)
  const menuRef = ref<HTMLElement | null>(null)

  let tl: gsap.core.Timeline | null = null

  const lockScroll = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  const unlockScroll = () => {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }

  const open = async () => {
    isOpen.value = true
    lockScroll()

    await nextTick()

    if (!menuRef.value) return

    tl = gsap.timeline()
    tl.fromTo(
      menuRef.value,
      { yPercent: -100 },
      {
        yPercent: 0,
        duration: 0.8,
        ease: 'power4.out',
      },
    )
  }

  const close = () => {
    if (!menuRef.value) return

    tl = gsap.timeline({
      onComplete: () => {
        isOpen.value = false
        unlockScroll()
      },
    })

    tl.to(menuRef.value, {
      yPercent: -100,
      duration: 0.6,
      ease: 'power4.in',
    })
  }

  onUnmounted(() => {
    unlockScroll()
  })

  const toggle = () => {
    return isOpen.value ? close() : open()
  }

  return {
    isOpen,
    menuRef,
    open,
    close,
    toggle,
  }
}
