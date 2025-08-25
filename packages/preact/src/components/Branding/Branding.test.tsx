import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import { Branding } from './Branding';

describe('Branding', () => {
  it('renders default branding text', () => {
    render(<Branding />);
    expect(screen.getByText('Made with')).toBeInTheDocument();
    expect(screen.getByText('Unlayer')).toBeInTheDocument();
  });

  it('renders minimal variant', () => {
    render(<Branding variant="minimal" />);
    expect(screen.getByText('Made with Unlayer')).toBeInTheDocument();
  });

  it('renders full variant', () => {
    render(<Branding variant="full" />);
    expect(screen.getByText('Made with')).toBeInTheDocument();
    expect(screen.getByText('Unlayer')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Branding className="custom-class" />);
    const element = screen.getByText('Made with').closest('div');
    expect(element).toHaveClass('custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { color: 'red' };
    render(<Branding style={customStyle} />);
    const element = screen.getByText('Made with').closest('div');
    expect(element).toHaveStyle('color: rgb(255, 0, 0)');
  });

  it('applies size classes', () => {
    render(<Branding size="large" />);
    const element = screen.getByText('Made with').closest('div');
    expect(element).toHaveClass('unlayer-branding--large');
  });

  it('applies variant classes', () => {
    render(<Branding variant="minimal" />);
    const element = screen.getByText('Made with Unlayer').closest('div');
    expect(element).toHaveClass('unlayer-branding--minimal');
  });

  it('has correct base classes', () => {
    render(<Branding />);
    const element = screen.getByText('Made with').closest('div');
    expect(element).toHaveClass('unlayer-branding');
  });

  it('renders with correct HTML structure for default variant', () => {
    render(<Branding />);
    const spans = screen.getAllByText(/Made with|Unlayer/);
    const strongs = document.querySelectorAll('strong');
    expect(spans).toHaveLength(2);
    expect(strongs).toHaveLength(1);
  });

  it('renders with correct HTML structure for minimal variant', () => {
    render(<Branding variant="minimal" />);
    const spans = screen.getAllByText('Made with Unlayer');
    expect(spans).toHaveLength(1);
  });
});
