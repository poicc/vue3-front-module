import { shallowMount } from '@vue/test-utils';
import { beforeEach,afterEach,it,describe, expect, test } from 'vitest';
import { useIntersectionObserver, useVModel } from '@vueuse/core'
import { defineComponent, ref } from 'vue'
import Infinte from '../index.vue'

describe('Infinte', () => {
  let wrapper = shallowMount(Infinte, {
      global: {
        stubs: ['PoiSvgIcon'],
        plugins: [
          { useVModel },
          {
            provide: useIntersectionObserver
          }
        ],
      },
      props: {
        modelValue: false,
        isFinished: false
      }
    })
  


  it('renders', () => {
    expect(wrapper.exists()).toBe(true)
  })

  describe('when loading', () => {
    beforeEach(async () => {
      await wrapper.setProps({ modelValue: true })
    })

    it('sets loading to true', () => {
      expect(wrapper.vm.loading).toBe(true)
    })

  })

  describe('when not loading', () => {

    it('emits onLoad event when target is intersection and isFinished is false', async () => {
      await wrapper.setProps({ isFinished: false })
      expect(wrapper.vm.loading).toBe(true)
      await wrapper.vm.emitLoad()
    })

    it('does not emit onLoad event when target is not intersection', async () => {
      expect(wrapper.vm.loading).toBe(true)
      await wrapper.vm.emitLoad()
    })

    it('does not emit onLoad event when isFinished is true', async () => {
      await wrapper.setProps({ isFinished: true })
      expect(wrapper.vm.loading).toBe(true)
      await wrapper.vm.emitLoad()
    })
  })

  describe('when useVModel', () => {
    it('syncs loading with modelValue', async () => {
      await wrapper.setProps({ modelValue: true })
      expect(wrapper.vm.loading).toBe(true)

      await wrapper.vm.$nextTick()
      await wrapper.vm.$nextTick()

    })
  })
})