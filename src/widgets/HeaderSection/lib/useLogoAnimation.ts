import { gsap, ScrollTrigger } from '@shared/lib/gsap'
import { nextTick, onUnmounted, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'

export const useLogoAnimation = (logoRef: Ref<HTMLImageElement | null>) => {
  const route = useRoute()
  let mm: gsap.MatchMedia | null = null
  let isFirstLoad = true

  const killAll = () => {
    ScrollTrigger.getAll().forEach((t) => t.kill())
    if (mm) {
      mm.revert()
      mm = null
    }
  }

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

  const handleRouteExit = (isImmediate = false) => {
    if (!mm && !logoRef.value) return

    const currentScale = gsap.getProperty(logoRef.value, 'scale')
    const currentY = gsap.getProperty(logoRef.value, 'y')

    killAll()

    if (isImmediate) {
      gsap.set(logoRef.value, { scale: 1, y: 0, clearProps: 'all' })
    } else {
      gsap.fromTo(
        logoRef.value,
        { scale: currentScale, y: currentY },
        {
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'all',
        },
      )
    }
  }

  watch(
    () => route.path,
    async (path) => {
      await nextTick()
      if (isFirstLoad) {
        handleRouteExit(true)
        isFirstLoad = false
        return
      }

      if (path === '/') {
        gsap.to(logoRef.value, {
          scale: 1.887,
          y: 134,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: createAnimation,
        })
      } else {
        handleRouteExit(false)
      }
    },
    { flush: 'post' },
  )

  const init = async () => {
    await nextTick()
    if (route.path === '/') {
      createAnimation()
    } else {
      handleRouteExit(true)
    }
  }

  init()

  onUnmounted(() => killAll())
}
