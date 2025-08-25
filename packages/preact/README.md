# @unlayer/preact-elements

Preact components for building emails, pages, and documents with Unlayer Elements.

## Overview

This package provides Preact components that enable developers to build emails, pages, and documents programmatically. Think of it as Preact elements - this is how you declare a `<Button>`, `<Row>`, `<Image>`, or `<Form>` in Preact.

## Installation

```bash
npm install @unlayer/preact-elements
# or
yarn add @unlayer/preact-elements
# or
pnpm add @unlayer/preact-elements
```

## Usage

```jsx
import { Button, Row, Column, Image, Text } from '@unlayer/preact-elements';

function EmailTemplate() {
  return (
    <Row>
      <Column>
        <Image src="/logo.png" alt="Logo" />
        <Text>Welcome to our newsletter!</Text>
        <Button>Subscribe Now</Button>
      </Column>
    </Row>
  );
}
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
