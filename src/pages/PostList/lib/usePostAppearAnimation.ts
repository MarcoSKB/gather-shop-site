import { gsap } from '@shared/lib/gsap'
import { nextTick, onUnmounted, type Ref } from 'vue'

export const usePostAppearAnimation = (containerRef: Ref<HTMLElement | null>) => {
  let ctx: gsap.Context

  const animate = async () => {
    if (ctx) ctx.revert()
    await nextTick()

    ctx = gsap.context(() => {
      const cards = containerRef.value?.children
      if (!cards?.length) return

      gsap.from(cards, {
        scrollTrigger: {
          trigger: containerRef.value,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: {
          amount: 0.5,
          grid: 'auto',
        },
        ease: 'power2.out',
      })
    }, containerRef.value!)
  }

  onUnmounted(() => {
    if (ctx) ctx.revert()
  })

  return animate
}
