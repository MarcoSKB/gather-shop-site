import { useClickOutside, useLockScroll, useWindowSize } from '@shared/lib/hooks'
import { ref, useTemplateRef, watch } from 'vue'

export const useCartInteraction = () => {
  const isCartOpen = ref(false)
  const cartMenuRef = useTemplateRef<HTMLElement>('cart-menu')

  const { lockScroll, unlockScroll } = useLockScroll()
  const { width } = useWindowSize()

  const toggleCart = () => (isCartOpen.value = !isCartOpen.value)
  const closeCart = () => (isCartOpen.value = false)

  useClickOutside(cartMenuRef, () => {
    if (isCartOpen.value) closeCart()
  })

  watch(
    [isCartOpen, width],
    ([isOpen, currentWidth]) => {
      if (isOpen && currentWidth < 768) {
        lockScroll()
      } else {
        unlockScroll()
      }
    },
    { flush: 'post' },
  )

  return {
    isCartOpen,
    cartMenuRef,
    toggleCart,
  }
}
