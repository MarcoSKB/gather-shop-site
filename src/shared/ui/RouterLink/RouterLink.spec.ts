import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import RouterLink from './RouterLink.vue'

describe('RouterLink.vue', () => {
  it('passes the "to" prop to RouterLink component', () => {
    const wrapper = mount(RouterLink, {
      props: {
        to: '/example',
      },
    })

    const routerLink = wrapper.findComponent({ name: 'RouterLink' })
    expect(routerLink.exists()).toBe(true)
    expect(routerLink.props().to).toBe('/example')
  })

  it('applies primary variant by default', () => {
    const wrapper = mount(RouterLink, {
      props: {
        to: '/example',
      },
    })

    const linkElement = wrapper.find('a')
    expect(linkElement.exists()).toBe(true)
    expect(linkElement.classes()).toContain('text-primary')
    expect(linkElement.classes()).toContain('before:bg-primary')
    expect(linkElement.classes()).toContain('relative')
    expect(linkElement.classes()).toContain('z-0')
    expect(linkElement.classes()).toContain('py-1.5')
    expect(linkElement.classes()).toContain('transition-opacity')
    expect(linkElement.classes()).toContain('before:absolute')
    expect(linkElement.classes()).toContain('before:bottom-2')
    expect(linkElement.classes()).toContain('before:left-0')
    expect(linkElement.classes()).toContain('before:h-px')
    expect(linkElement.classes()).toContain('before:w-[0%]')
    expect(linkElement.classes()).toContain('before:transition-all')
    expect(linkElement.classes()).toContain('before:duration-300')
    expect(linkElement.classes()).toContain('before:content-[""]')
    expect(linkElement.classes()).toContain('hover:before:w-full')
    expect(linkElement.classes()).toContain('active:opacity-50')
  })

  it('applies custom variant when provided', () => {
    const wrapper = mount(RouterLink, {
      props: {
        to: '/example',
        variant: 'primary',
      },
    })

    const linkElement = wrapper.find('a')
    expect(linkElement.exists()).toBe(true)
    expect(linkElement.classes()).toContain('text-primary')
    expect(linkElement.classes()).toContain('before:bg-primary')
    expect(linkElement.classes()).toContain('relative')
    expect(linkElement.classes()).toContain('z-0')
    expect(linkElement.classes()).toContain('py-1.5')
    expect(linkElement.classes()).toContain('transition-opacity')
    expect(linkElement.classes()).toContain('before:absolute')
    expect(linkElement.classes()).toContain('before:bottom-2')
    expect(linkElement.classes()).toContain('before:left-0')
    expect(linkElement.classes()).toContain('before:h-px')
    expect(linkElement.classes()).toContain('before:w-[0%]')
    expect(linkElement.classes()).toContain('before:transition-all')
    expect(linkElement.classes()).toContain('before:duration-300')
    expect(linkElement.classes()).toContain('before:content-[""]')
    expect(linkElement.classes()).toContain('hover:before:w-full')
    expect(linkElement.classes()).toContain('active:opacity-50')
  })

  it('defaults to primary variant when not provided', () => {
    const wrapper = mount(RouterLink, {
      props: {
        to: '/example',
      },
    })

    const linkElement = wrapper.find('a')
    expect(linkElement.exists()).toBe(true)
    expect(linkElement.classes()).toContain('text-primary')
    expect(linkElement.classes()).toContain('before:bg-primary')
    expect(linkElement.classes()).toContain('relative')
    expect(linkElement.classes()).toContain('z-0')
    expect(linkElement.classes()).toContain('py-1.5')
    expect(linkElement.classes()).toContain('transition-opacity')
    expect(linkElement.classes()).toContain('before:absolute')
    expect(linkElement.classes()).toContain('before:bottom-2')
    expect(linkElement.classes()).toContain('before:left-0')
    expect(linkElement.classes()).toContain('before:h-px')
    expect(linkElement.classes()).toContain('before:w-[0%]')
    expect(linkElement.classes()).toContain('before:transition-all')
    expect(linkElement.classes()).toContain('before:duration-300')
    expect(linkElement.classes()).toContain('before:content-[""]')
    expect(linkElement.classes()).toContain('hover:before:w-full')
    expect(linkElement.classes()).toContain('active:opacity-50')
  })
})
