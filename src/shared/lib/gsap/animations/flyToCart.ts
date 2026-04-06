import { gsap } from 'gsap'

export const flyToCart = ({
  toEl,
  image,
  event,
}: {
  toEl: HTMLElement
  image: string
  event: MouseEvent
}) => {
  const toRect = toEl.getBoundingClientRect()

  const flyer = document.createElement('div')
  const flyerSize = 120

  const startX = event.clientX
  const startY = event.clientY

  Object.assign(flyer.style, {
    position: 'fixed',
    top: `${startY - flyerSize / 2}px`,
    left: `${startX - flyerSize / 2}px`,

    width: `${flyerSize}px`,
    height: `${flyerSize}px`,

    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    zIndex: '9999',
    pointerEvents: 'none',
  })

  document.body.appendChild(flyer)

  const tl = gsap.timeline({
    onComplete: () => {
      document.body.removeChild(flyer)
    },
  })

  tl.to(flyer, {
    top: toRect.top - toRect.height,
    left: toRect.left - toRect.width,

    scale: 0.2,
    rotation: 180,
    opacity: 0,

    duration: 0.8,
    ease: 'power2.inOut',
  })

  tl.to(toEl, { scale: 1.2, duration: 0.1, yoyo: true, repeat: 1 }, '-=0.1')

  return tl
}
