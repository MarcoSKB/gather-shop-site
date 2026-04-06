import { gsap } from '@shared/lib/gsap'
import type { RendererElement } from 'vue'

export const modalAnimation = {
  onEnter: (el: RendererElement, done: () => void) => {
    gsap.fromTo(
      el,
      { opacity: 0, yPercent: 10 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          gsap.set(el, { clearProps: 'yPercent,transform' })
          done()
        },
      },
    )
  },
  onLeave: (el: RendererElement, done: () => void) => {
    gsap.to(el, {
      yPercent: 10,
      opacity: 0,
      duration: 0.3,
      onComplete: done,
    })
  },
}

export const listAnimation = {
  onBeforeEnter: (el: RendererElement) => {
    gsap.set(el, {
      opacity: 0,
      x: -20,
      height: 0,
      marginBottom: 0,
      overflow: 'hidden',
    })
  },
  onEnter: (el: RendererElement, done: () => void) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      height: 'auto',
      marginBottom: 20,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(el, { clearProps: 'all' })
        done()
      },
    })
  },
  onLeave: (el: RendererElement, done: () => void) => {
    gsap.to(el, {
      opacity: 0,
      x: 20,
      height: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: done,
    })
  },
}
