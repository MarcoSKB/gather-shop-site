import { gsap, ScrollTrigger } from '@shared/lib/gsap'
import { nextTick, onMounted, onUnmounted, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'

export const useLogoAnimation = (logoRef: Ref<HTMLImageElement | null>) => {
  const route = useRoute()
  let mm: gsap.MatchMedia | null = null

  const createAnimation = () => {
    if (mm) return

    mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      gsap.fromTo(
        logoRef.value!,
        { scale: 1.887, y: 134 },
        {
          scale: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: '+=300',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        },
      )
    })

    mm.add('(max-width: 767px)', () => {
      gsap.set(logoRef.value!, { clearProps: 'all' })
    })
  }

  const handleRouteExit = () => {
    if (mm && logoRef.value) {
      const currentScale = gsap.getProperty(logoRef.value, 'scale')
      const currentY = gsap.getProperty(logoRef.value, 'y')

      ScrollTrigger.getAll().forEach((t) => t.kill())

      gsap.fromTo(
        logoRef.value,
        { scale: currentScale, y: currentY },
        {
          scale: 1,
          y: 0,
          duration: 0.5,
          overwrite: 'auto',
          ease: 'power2.out',
          onComplete: () => {
            mm?.revert()
            mm = null
          },
        },
      )
    }
  }

  watch(
    () => route.path,
    async (path) => {
      await nextTick()

      if (path === '/') {
        if (logoRef.value) {
          createAnimation()
        }
      } else {
        handleRouteExit()
      }
    },
    { immediate: true, flush: 'post' },
  )

  onMounted(async () => {
    await nextTick()
    if (route.path === '/' && logoRef.value) {
      createAnimation()
    }
  })

  onUnmounted(() => {
    if (mm) mm.revert()
  })
}
