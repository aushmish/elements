import type { Meta, StoryObj } from '@storybook/angular';
import { BrandingComponent } from './lib/components/branding/branding.component';

const meta: Meta<BrandingComponent> = {
  title: 'Components/Branding',
  component: BrandingComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BrandingComponent>;

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
