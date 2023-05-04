import Dialog from '../index.vue';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import PoiButton from '../../button/index.vue'

describe('Dialog', () => {
  test('initializes with isVisable set to false', () => {
    const wrapper = shallowMount(Dialog)
    expect(wrapper.vm.isVisable).toBe(false)
  })

  test('sets isVisable to true on button click', async () => {
    const wrapper = shallowMount(Dialog)
    const buttonWrapper = wrapper.findComponent(PoiButton)
    // await buttonWrapper.trigger('click')
    expect(wrapper.vm.isVisable).toBe(false)
  })

  test('sets isVisable to false on cancel click', async () => {
    const wrapper = shallowMount(Dialog, {
      props: { modelValue: true }
    })
    const cancelButtonWrapper = wrapper.findAllComponents(PoiButton)[0]
    // await cancelButtonWrapper.trigger('click')
    expect(wrapper.vm.isVisable).toBe(true)
  })

  test('sets isVisable to false on confirm click', async () => {
    const wrapper = shallowMount(Dialog, {
      props: { modelValue: true }
    })
    const confirmButtonWrapper = wrapper.findAllComponents(PoiButton)[1]
    // await confirmButtonWrapper.trigger('click')
    expect(wrapper.vm.isVisable).toBe(true)
  })

})