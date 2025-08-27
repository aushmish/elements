import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: true,
      vite: {
        build: {
          rollupOptions: {
            external: []
          }
        },
        define: {
          'process.env': {}
        }
      }
    }
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  refs: {
    'angular': {
      title: 'Angular Elements',
      url: './angular',
      expanded: false,
    },
    'react': {
      title: 'React Elements', 
      url: './react',
      expanded: false,
    },
    'vue': {
      title: 'Vue Elements',
      url: './vue', 
      expanded: false,
    },
    'preact': {
      title: 'Preact Elements',
      url: './preact',
      expanded: false,
    },
    'solid': {
      title: 'Solid Elements',
      url: './solid',
      expanded: false,
    },
    'svelte': {
      title: 'Svelte Elements',
      url: './svelte',
      expanded: false,
    },
    'web-component': {
      title: 'Web Component Elements',
      url: './web-component',
      expanded: false,
    },
  },
};

export default config;
