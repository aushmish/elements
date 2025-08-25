import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Branding from './Branding.svelte';

describe('Branding', () => {
  it('renders default branding text', () => {
    render(Branding);
    expect(screen.getByText('Made with')).toBeInTheDocument();
    expect(screen.getByText('Unlayer')).toBeInTheDocument();
  });

  it('renders minimal variant', () => {
    render(Branding, { props: { variant: 'minimal' } });
    expect(screen.getByText('Made with Unlayer')).toBeInTheDocument();
  });

  it('renders full variant', () => {
    render(Branding, { props: { variant: 'full' } });
    expect(screen.getByText('Made with')).toBeInTheDocument();
    expect(screen.getByText('Unlayer')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(Branding, { props: { className: 'custom-class' } });
    const element = screen.getByText('Made with').closest('div');
    expect(element).toHaveClass('custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = 'color: red;';
    render(Branding, { props: { style: customStyle } });
    const element = screen.getByText('Made with').closest('div');
    expect(element).toHaveStyle('color: red');
  });

  it('applies size classes', () => {
    render(Branding, { props: { size: 'large' } });
    const element = screen.getByText('Made with').closest('div');
    expect(element).toHaveClass('unlayer-branding--large');
  });

  it('applies variant classes', () => {
    render(Branding, { props: { variant: 'minimal' } });
    const element = screen.getByText('Made with Unlayer').closest('div');
    expect(element).toHaveClass('unlayer-branding--minimal');
  });

  it('has correct base classes', () => {
    render(Branding);
    const element = screen.getByText('Made with').closest('div');
    expect(element).toHaveClass('unlayer-branding');
  });

  it('renders with correct HTML structure for default variant', () => {
    render(Branding);
    const spans = screen.getAllByText(/Made with|Unlayer/);
    const strongs = document.querySelectorAll('strong');
    expect(spans).toHaveLength(2);
    expect(strongs).toHaveLength(1);
  });

  it('renders with correct HTML structure for minimal variant', () => {
    render(Branding, { props: { variant: 'minimal' } });
    const spans = screen.getAllByText('Made with Unlayer');
    expect(spans).toHaveLength(1);
  });
});
