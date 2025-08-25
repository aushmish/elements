import type { Meta, StoryObj } from '@storybook/web-components';
import { Branding } from './Branding';

// Ensure the custom element is registered
if (!customElements.get('unlayer-branding')) {
  customElements.define('unlayer-branding', Branding);
}

const meta: Meta<Branding> = {
  title: 'Components/Branding',
  component: 'unlayer-branding',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A branding component that displays "Made with Unlayer" in various styles and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'full'],
      description: 'The visual variant of the branding',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the branding component',
    },
    className: {
      control: { type: 'text' },
      description: 'Custom CSS class name',
    },
    style: {
      control: { type: 'text' },
      description: 'Custom CSS styles',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Branding>;

export const Default: Story = {
  args: {},
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
  },
};

export const Full: Story = {
  args: {
    variant: 'full',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const CustomStyling: Story = {
  args: {
    className: 'custom-branding',
    style: 'color: #007bff; font-size: 18px; font-weight: bold;',
  },
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 20px; align-items: center;';
    
    const variants = ['default', 'minimal', 'full'] as const;
    variants.forEach(variant => {
      const branding = document.createElement('unlayer-branding') as Branding;
      branding.variant = variant;
      container.appendChild(branding);
    });
    
    return container;
  },
};

export const AllSizes: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 20px; align-items: center;';
    
    const sizes = ['small', 'medium', 'large'] as const;
    sizes.forEach(size => {
      const branding = document.createElement('unlayer-branding') as Branding;
      branding.size = size;
      container.appendChild(branding);
    });
    
    return container;
  },
};
