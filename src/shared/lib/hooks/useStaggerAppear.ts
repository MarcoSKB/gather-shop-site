import { nextTick, type Ref } from 'vue'
import { gsap } from '../gsap'

export const useStaggerAppear = (container: Ref<HTMLElement | null>, itemSelector: string) => {
  const animate = async () => {
    await nextTick()

    const el = container.value
    if (!el) return

    const items = el.querySelectorAll(itemSelector)
    if (!items.length) return

    gsap.killTweensOf(items)

    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        overwrite: true,
      },
    )
  }

  return { animate }
}
