import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Branding from './Branding.svelte';

describe('Branding', () => {
  it('renders default branding text', () => {
    const { container } = render(Branding);
    expect(container.textContent).toContain('Made with');
    expect(container.textContent).toContain('Unlayer');
  });

  it('renders minimal variant', () => {
    const { container } = render(Branding, { props: { variant: 'minimal' } });
    expect(container.textContent).toBe('Made with Unlayer');
  });

  it('renders full variant', () => {
    const { container } = render(Branding, { props: { variant: 'full' } });
    expect(container.textContent).toContain('Made with');
    expect(container.textContent).toContain('Unlayer');
  });

  it('applies custom className', () => {
    const { container } = render(Branding, { props: { className: 'custom-class' } });
    const element = container.querySelector('div');
    expect(element?.className).toContain('custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = 'color: red;';
    const { container } = render(Branding, { props: { style: customStyle } });
    const element = container.querySelector('div');
    expect(element?.getAttribute('style')).toContain('color: red');
  });

  it('applies size classes', () => {
    const { container } = render(Branding, { props: { size: 'large' } });
    const element = container.querySelector('div');
    expect(element?.className).toContain('unlayer-branding--large');
  });

  it('applies variant classes', () => {
    const { container } = render(Branding, { props: { variant: 'minimal' } });
    const element = container.querySelector('div');
    expect(element?.className).toContain('unlayer-branding--minimal');
  });

  it('has correct base classes', () => {
    const { container } = render(Branding);
    const element = container.querySelector('div');
    expect(element?.className).toContain('unlayer-branding');
  });

  it('renders with correct HTML structure for default variant', () => {
    const { container } = render(Branding);
    const spans = container.querySelectorAll('span');
    const strongs = container.querySelectorAll('strong');
    expect(spans).toHaveLength(1);
    expect(strongs).toHaveLength(1);
  });

  it('renders with correct HTML structure for minimal variant', () => {
    const { container } = render(Branding, { props: { variant: 'minimal' } });
    const spans = container.querySelectorAll('span');
    expect(spans).toHaveLength(1);
  });
});
