import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseContainer from './BaseContainer.vue'

describe('BaseContainer', () => {
  it('applies base classes when no props are provided', async () => {
    const wrapper = mount(BaseContainer)
    expect(wrapper.find('div').classes()).toContain('mx-auto')
    expect(wrapper.find('div').classes()).toContain('flex')
  })

  it('merges base classes with provided class prop', async () => {
    const wrapper = mount(BaseContainer, {
      props: {
        class: 'custom-class',
      },
    })
    expect(wrapper.find('div').classes()).toContain('mx-auto')
    expect(wrapper.find('div').classes()).toContain('flex')
    expect(wrapper.find('div').classes()).toContain('custom-class')
  })

  it('renders slot content correctly', async () => {
    const wrapper = mount(BaseContainer, {
      slots: {
        default: '<div>Test Content</div>',
      },
    })
    expect(wrapper.find('div').text()).toContain('Test Content')
  })
})
