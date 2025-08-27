import type { StorybookConfig } from 'storybook-solidjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: 'storybook-solidjs-vite',
    options: {},
  },
};

export default config;
