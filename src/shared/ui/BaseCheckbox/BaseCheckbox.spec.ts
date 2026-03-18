import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseCheckbox from './BaseCheckbox.vue'

describe('BaseCheckbox', () => {
  it('is checked by default', () => {
    const wrapper = mount(BaseCheckbox, {
      props: { modelValue: true },
    })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('is unchecked by default', () => {
    const wrapper = mount(BaseCheckbox, {
      props: { modelValue: false },
    })
    expect(wrapper.find('input').element.checked).toBe(false)
  })

  it('emits update:modelValue when changed', async () => {
    const wrapper = mount(BaseCheckbox, {
      props: { modelValue: false },
    })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('is disabled and has correct styling', () => {
    const wrapper = mount(BaseCheckbox, {
      props: { modelValue: false, disabled: true },
    })
    const input = wrapper.find('input')
    expect(input.element.disabled).toBe(true)
    expect(wrapper.classes()).toContain('cursor-not-allowed')
    expect(wrapper.classes()).toContain('opacity-50')
  })

  it('does not emit events when disabled', async () => {
    const wrapper = mount(BaseCheckbox, {
      props: { modelValue: false, disabled: true },
    })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })
})
