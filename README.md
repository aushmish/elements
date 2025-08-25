# Unlayer Elements

Framework-native components for building emails, pages, and documents in code.

## Overview

Unlayer Elements provides framework-native components that developers can use to build emails, pages, and documents programmatically. Think of it as JSX elements - this is how you declare a `<Button>`, `<Row>`, `<Image>`, or `<Form>` in your preferred framework.

## Structure

This monorepo contains:

- **`packages/`** - Framework-specific element implementations (React, Vue, Svelte, etc.)
- **`examples/`** - Example applications showing how to use the elements in different frameworks

## Getting Started

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Build and serve Storybook
pnpm storybook:hub
```

## Development

Each package in the `packages/` directory contains framework-specific implementations of the same elements, ensuring developers can use familiar patterns in their preferred framework.
