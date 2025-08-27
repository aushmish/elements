import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../projects/elements-angular/src/**/*.mdx",
    "../projects/elements-angular/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  "outputDir": "../storybook-static"
};
export default config;