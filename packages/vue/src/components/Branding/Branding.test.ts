import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Branding from './Branding.vue';

describe('Branding', () => {
  it('renders default branding text', () => {
    const wrapper = mount(Branding);
    expect(wrapper.text()).toContain('Made with');
    expect(wrapper.text()).toContain('Unlayer');
  });

  it('renders minimal variant', () => {
    const wrapper = mount(Branding, {
      props: { variant: 'minimal' }
    });
    expect(wrapper.text()).toBe('Made with Unlayer');
  });

  it('renders full variant', () => {
    const wrapper = mount(Branding, {
      props: { variant: 'full' }
    });
    expect(wrapper.text()).toContain('Made with');
    expect(wrapper.text()).toContain('Unlayer');
  });

  it('applies custom className', () => {
    const wrapper = mount(Branding, {
      props: { className: 'custom-class' }
    });
    expect(wrapper.classes()).toContain('custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { color: 'red' };
    const wrapper = mount(Branding, {
      props: { style: customStyle }
    });
    expect(wrapper.attributes('style')).toContain('color: red');
  });

  it('applies size classes', () => {
    const wrapper = mount(Branding, {
      props: { size: 'large' }
    });
    expect(wrapper.classes()).toContain('unlayer-branding--large');
  });

  it('applies variant classes', () => {
    const wrapper = mount(Branding, {
      props: { variant: 'minimal' }
    });
    expect(wrapper.classes()).toContain('unlayer-branding--minimal');
  });

  it('has correct base classes', () => {
    const wrapper = mount(Branding);
    expect(wrapper.classes()).toContain('unlayer-branding');
  });

  it('renders with correct HTML structure for default variant', () => {
    const wrapper = mount(Branding);
    const spans = wrapper.findAll('span');
    const strongs = wrapper.findAll('strong');
    expect(spans).toHaveLength(1);
    expect(strongs).toHaveLength(1);
    expect(spans[0].text()).toBe('Made with');
    expect(strongs[0].text()).toBe('Unlayer');
  });

  it('renders with correct HTML structure for minimal variant', () => {
    const wrapper = mount(Branding, {
      props: { variant: 'minimal' }
    });
    const spans = wrapper.findAll('span');
    expect(spans).toHaveLength(1);
    expect(spans[0].text()).toBe('Made with Unlayer');
  });
});
