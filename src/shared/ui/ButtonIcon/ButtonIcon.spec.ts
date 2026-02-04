import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ButtonIcon from './ButtonIcon.vue'

describe('ButtonIcon component', () => {
  it('renders button with default classes', () => {
    const wrapper = mount(ButtonIcon)
    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.classes()).toContain('box-border')
    expect(button.classes()).toContain('flex')
    expect(button.classes()).toContain('cursor-pointer')
    expect(button.classes()).toContain('items-center')
    expect(button.classes()).toContain('justify-center')
    expect(button.classes()).toContain('disabled:cursor-default')
  })

  it('applies variant classes when variant is primary', () => {
    const wrapper = mount(ButtonIcon, {
      props: { variant: 'primary' },
    })
    const button = wrapper.find('button')

    expect(button.classes()).toContain('bg-transparent')
    expect(button.classes()).toContain('transition-all')
    expect(button.classes()).toContain('duration-100')
    expect(button.classes()).toContain('ease-in')
    expect(button.classes()).toContain('hover:translate-y-0.5')
    expect(button.classes()).toContain('active:scale-90')
  })

  it('applies size classes when size is md', () => {
    const wrapper = mount(ButtonIcon, {
      props: { size: 'md' },
    })
    const button = wrapper.find('button')

    expect(button.classes()).toContain('size-10')
  })

  // it('does not apply size classes when size is not md', () => {
  //   const wrapper = mount(ButtonIcon, {
  //     props: { size: 'sm' },
  //   })
  //   const button = wrapper.find('button')

  //   expect(button.classes()).not.toContain('size-10')
  // })

  it('passes through additional props', () => {
    const wrapper = mount(ButtonIcon, {
      props: { disabled: true },
    })
    const button = wrapper.find('button')

    expect(button.attributes('disabled')).toBe('true')
  })
})
