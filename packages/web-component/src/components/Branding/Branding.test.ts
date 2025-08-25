import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Branding } from './Branding';

describe('Branding Web Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('renders default branding text', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    container.appendChild(branding);
    
    expect(branding.shadowRoot?.textContent).toContain('Made with');
    expect(branding.shadowRoot?.textContent).toContain('Unlayer');
  });

  it('renders minimal variant', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    branding.variant = 'minimal';
    container.appendChild(branding);
    
    const div = branding.shadowRoot?.querySelector('div');
    expect(div?.textContent?.trim()).toBe('Made with Unlayer');
  });

  it('renders full variant', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    branding.variant = 'full';
    container.appendChild(branding);
    
    expect(branding.shadowRoot?.textContent).toContain('Made with');
    expect(branding.shadowRoot?.textContent).toContain('Unlayer');
  });

  it('applies custom className', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    branding.className = 'custom-class';
    container.appendChild(branding);
    
    const div = branding.shadowRoot?.querySelector('div');
    expect(div?.className).toContain('custom-class');
  });

  it('applies custom styles', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    branding.style = 'color: red;';
    container.appendChild(branding);
    
    const div = branding.shadowRoot?.querySelector('div');
    expect(div?.getAttribute('style')).toContain('color: red');
  });

  it('applies size classes', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    branding.size = 'large';
    container.appendChild(branding);
    
    const div = branding.shadowRoot?.querySelector('div');
    expect(div?.className).toContain('unlayer-branding--large');
  });

  it('applies variant classes', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    branding.variant = 'minimal';
    container.appendChild(branding);
    
    const div = branding.shadowRoot?.querySelector('div');
    expect(div?.className).toContain('unlayer-branding--minimal');
  });

  it('has correct base classes', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    container.appendChild(branding);
    
    const div = branding.shadowRoot?.querySelector('div');
    expect(div?.className).toContain('unlayer-branding');
  });

  it('renders with correct HTML structure for default variant', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    container.appendChild(branding);
    
    const spans = branding.shadowRoot?.querySelectorAll('span');
    const strongs = branding.shadowRoot?.querySelectorAll('strong');
    expect(spans?.length).toBe(1);
    expect(strongs?.length).toBe(1);
    expect(spans?.[0].textContent).toBe('Made with ');
    expect(strongs?.[0].textContent).toBe('Unlayer');
  });

  it('renders with correct HTML structure for minimal variant', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    branding.variant = 'minimal';
    container.appendChild(branding);
    
    const spans = branding.shadowRoot?.querySelectorAll('span');
    expect(spans?.length).toBe(1);
    expect(spans?.[0].textContent).toBe('Made with Unlayer');
  });

  it('updates when attributes change', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    container.appendChild(branding);
    
    // Change variant via attribute
    branding.setAttribute('variant', 'minimal');
    const div = branding.shadowRoot?.querySelector('div');
    expect(div?.textContent?.trim()).toBe('Made with Unlayer');
    
    // Change size via attribute
    branding.setAttribute('size', 'large');
    const sizeDiv = branding.shadowRoot?.querySelector('div');
    expect(sizeDiv?.className).toContain('unlayer-branding--large');
  });

  it('updates when properties change', () => {
    const branding = document.createElement('unlayer-branding') as Branding;
    container.appendChild(branding);
    
    // Change variant via property
    branding.variant = 'full';
    expect(branding.shadowRoot?.textContent).toContain('Made with');
    expect(branding.shadowRoot?.textContent).toContain('Unlayer');
    
    // Change size via property
    branding.size = 'small';
    const div = branding.shadowRoot?.querySelector('div');
    expect(div?.className).toContain('unlayer-branding--small');
  });
});
