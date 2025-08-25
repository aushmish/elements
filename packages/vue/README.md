# @unlayer/vue-elements

Vue components for building emails, pages, and documents with Unlayer Elements.

## Overview

This package provides Vue components that enable developers to build emails, pages, and documents programmatically. Think of it as Vue elements - this is how you declare a `<Button>`, `<Row>`, `<Image>`, or `<Form>` in Vue.

## Installation

```bash
npm install @unlayer/vue-elements
# or
yarn add @unlayer/vue-elements
# or
pnpm add @unlayer/vue-elements
```

## Usage

```vue
<template>
  <Row>
    <Column>
      <Image src="/logo.png" alt="Logo" />
      <Text>Welcome to our newsletter!</Text>
      <Button>Subscribe Now</Button>
    </Column>
  </Row>
</template>

<script setup>
import { Row, Column, Image, Text, Button } from '@unlayer/vue-elements';
</script>
```

## Components

The following components are available (will be populated by automation):

- **Layout**: `Row`, `Column`, `Container`, `Section`
- **Content**: `Text`, `Image`, `Button`, `Link`
- **Forms**: `Form`, `Input`, `Select`, `Checkbox`
- **Media**: `Video`, `Audio`, `Gallery`

## Types

This package includes TypeScript definitions and integrates with `unlayer-types` for comprehensive type safety.

## Development

```bash
# Build the package
pnpm build

# Run tests
pnpm test

# Run Storybook
pnpm storybook
```

## License

MIT License - see [LICENSE](../../LICENSE) file for details.
