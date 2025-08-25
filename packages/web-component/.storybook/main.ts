import type { StorybookConfig } from '@storybook/web-components';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/web-components',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
