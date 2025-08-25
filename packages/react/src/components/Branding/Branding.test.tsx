import React from 'react';
import { render, screen } from '@testing-library/react';
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
    const container = screen.getByText('Made with').closest('div');
    expect(container).toHaveClass('custom-class');
  });

  it('applies custom styles', () => {
    const customStyle = { color: 'red' };
    render(<Branding style={customStyle} />);
    const container = screen.getByText('Made with').closest('div');
    expect(container).toHaveStyle('color: rgb(255, 0, 0)');
  });

  it('applies size classes', () => {
    render(<Branding size="large" />);
    const container = screen.getByText('Made with').closest('div');
    expect(container).toHaveClass('unlayer-branding--large');
  });

  it('applies variant classes', () => {
    render(<Branding variant="minimal" />);
    const container = screen.getByText('Made with Unlayer').closest('div');
    expect(container).toHaveClass('unlayer-branding--minimal');
  });

  it('has correct base classes', () => {
    render(<Branding />);
    const container = screen.getByText('Made with').closest('div');
    expect(container).toHaveClass('unlayer-branding');
  });
});
