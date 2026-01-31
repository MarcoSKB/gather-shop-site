import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('applies default classes when no props are provided', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'secondary',
        size: 'md',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('bg-primary')
    expect(button.classes()).toContain('text-inverse')
    expect(button.classes()).toContain('border-primary')
    expect(button.classes()).toContain('border-solid')
    expect(button.classes()).toContain('px-6')
    expect(button.classes()).toContain('py-2')
  })

  it('applies primary variant classes', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'primary',
        size: 'md',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('text-primary')
    expect(button.classes()).toContain('border-primary')
    expect(button.classes()).toContain('hover:bg-primary')
    expect(button.classes()).toContain('hover:text-inverse')
    expect(button.classes()).toContain('border')
    expect(button.classes()).toContain('border-solid')
    expect(button.classes()).toContain('px-6')
    expect(button.classes()).toContain('py-2')
  })

  it('applies secondary variant classes', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'secondary',
        size: 'lg',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('bg-primary')
    expect(button.classes()).toContain('text-inverse')
    expect(button.classes()).toContain('hover:bg-inverse')
    expect(button.classes()).toContain('border-primary')
    expect(button.classes()).toContain('border-solid')
    expect(button.classes()).toContain('hover:text-primary')
    expect(button.classes()).toContain('p-6')
  })

  it('applies large size classes', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'primary',
        size: 'lg',
      },
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('p-6')
  })
})
