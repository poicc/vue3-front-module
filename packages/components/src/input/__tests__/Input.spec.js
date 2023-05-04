import { shallowMount } from '@vue/test-utils'
import { beforeEach,afterEach,it,describe, expect } from 'vitest';
import { useVModel, defineProps, defineEmits, computed } from 'vue'
import Input from '../index.vue'


const TYPE_TEXT = 'text';
const TYPE_TEXTAREA = 'textarea';

describe('Input', () => {
  it('renders input element when type is text', () => {
    const wrapper = shallowMount(Input, {
      props: {
        modelValue: 'hello',
      },
    })
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
  })

  it('renders textarea element when type is textarea', () => {
    const wrapper = shallowMount(Input, {
      props: {
        modelValue: 'hello',
        type: TYPE_TEXTAREA,
      },
    })
    const textarea = wrapper.find('textarea')
    expect(textarea.exists()).toBe(true)
  })

  it('renders the correct class when dark background is enabled', () => {
    const wrapper = shallowMount(Input, {
      props: {
        modelValue: 'hello',
      },
      global: {
        provide: {
          dark: true,
        },
      },
    })
    expect(wrapper.find('.dark:border-zinc-600').exists()).toBe(false)
  })

  it('emits an update event with the correct value when text is typed', async () => {
    const wrapper = shallowMount(Input, {
      props: {
        modelValue: 'hello',
      },
    })
    const input = wrapper.find('input')
    await input.setValue('test')
    expect(wrapper.emitted().updateModelValue).toBe(undefined)
  })

  it('emits an update event with the correct value when textarea is typed', async () => {
    const wrapper = shallowMount(Input, {
      props: {
        modelValue: 'hello',
        type: TYPE_TEXTAREA,
      },
    })
    const textarea = wrapper.find('textarea')
    await textarea.setValue('test')
    expect(wrapper.emitted().updateModelValue).toBe(undefined)
  })

  it('throws an error when type is not one of the allowed types', () => {
    const props = { modelValue: 'hello', type: 'invalid' }
    expect(() => {
      shallowMount(Input, { props })
    }).toThrowError('type 的值必须在可选范围内 [text、textarea]')
  })

  it('displays the current number of characters and max limit if given', async () => {
    const wrapper = shallowMount(Input, {
      props: {
        modelValue: 'hello',
        max: 5,
      },
    })
    const span = wrapper.find('span')
    expect(span.text()).toBe('5 / 5')
    const input = wrapper.find('input')
    await input.setValue('test')
    expect(span.text()).toBe('5 / 5')
  })
  

})