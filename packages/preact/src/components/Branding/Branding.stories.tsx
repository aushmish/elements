import type { Meta, StoryObj } from '@storybook/preact';
import { Branding } from './Branding';

const meta: Meta<typeof Branding> = {
  title: 'Components/Branding',
  component: Branding,
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
      control: { type: 'object' },
      description: 'Custom CSS styles',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

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
    style: { color: '#007bff', fontSize: '18px', fontWeight: 'bold' },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <Branding variant="default" />
      <Branding variant="minimal" />
      <Branding variant="full" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <Branding size="small" />
      <Branding size="medium" />
      <Branding size="large" />
    </div>
  ),
};
