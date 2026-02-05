import { gsap } from '@shared/lib/gsap'
import { onMounted, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'

export const useLogoAnimation = (logoRef: Ref<HTMLImageElement | null>) => {
  const route = useRoute()
  let ctx: gsap.Context | null
  let mm: gsap.MatchMedia | null = null

  onMounted(() => {
    watch(
      () => route.path,
      (path) => {
        if (path === '/' && logoRef.value) {
          ctx = gsap.context(() => {
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
                    scrub: true,
                  },
                },
              )
            })

            mm.add('(max-width: 767px)', () => {
              gsap.set(logoRef.value!, { clearProps: 'all' })
            })
          })
        } else {
          ctx?.revert()
          ctx = null
        }
      },
      { immediate: true, flush: 'post' },
    )
  })
}
