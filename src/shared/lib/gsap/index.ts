import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { flyToCart } from './animations/flyToCart'

let initialized = false

export const initGsap = () => {
  if (initialized) return
  gsap.registerPlugin(ScrollTrigger)
  initialized = true
}

export { flyToCart, gsap, ScrollTrigger }
