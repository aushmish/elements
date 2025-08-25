# @unlayer/react-elements

React components for building emails, pages, and documents with Unlayer Elements.

## Overview

This package provides React components that enable developers to build emails, pages, and documents programmatically. Think of it as JSX elements - this is how you declare a `<Button>`, `<Row>`, `<Image>`, or `<Form>` in React.

## Installation

```bash
npm install @unlayer/react-elements
# or
yarn add @unlayer/react-elements
# or
pnpm add @unlayer/react-elements
```

## Usage

```jsx
import { Button, Row, Column, Image, Text } from '@unlayer/react-elements';

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
