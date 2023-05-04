import Button from '../index.vue'

import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';


describe('Button component', () => {
  test('renders base button', async () => {
    const wrapper = shallowMount(Button, {
      props: {
        type: 'primary',
        size: 'default',
      },
      slots: {
        default: 'Button Text',
      },
    });
    expect(wrapper.text()).toMatch('Button Text');
    expect(wrapper.classes()).toContain('text-white');
    expect(wrapper.classes()).toContain('bg-zinc-800');
    expect(wrapper.classes()).toContain('hover:bg-zinc-900');
    expect(wrapper.classes()).toContain('active:bg-zinc-800');
    expect(wrapper.classes()).toContain('w-8');
    expect(wrapper.classes()).toContain('h-4');
  });

  test('renders icon button', async () => {
    const wrapper = shallowMount(Button, {
      props: {
        type: 'info',
        size: 'default',
        icon: 'add',
      },
    });
    expect(wrapper.findComponent({ name: 'back' }).exists()).toBe(false);
    // expect(wrapper.findComponent({ name: 'back' }).props('icon')).toBe('add');
    expect(wrapper.classes()).toContain('text-zinc-800');
    expect(wrapper.classes()).toContain('hover:bg-zinc-300');
    expect(wrapper.classes()).toContain('active:bg-zinc-200');
    expect(wrapper.classes()).toContain('w-4');
    expect(wrapper.classes()).toContain('h-4');
  });

  test('renders loading button', async () => {
    const wrapper = shallowMount(Button, {
      props: {
        type: 'main',
        size: 'small',
        loading: true,
      },
    });
    // expect(wrapper.find('.loading-icon').exists()).toBe(true);
    expect(wrapper.classes()).toContain('text-white');
    expect(wrapper.classes()).toContain('bg-main');
    expect(wrapper.classes()).toContain('dark:bg-zinc-900');
    expect(wrapper.classes()).toContain('w-7');
    expect(wrapper.classes()).toContain('h-3');
  });
});