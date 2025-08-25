# @unlayer/web-component-elements

Web Components for building emails, pages, and documents with Unlayer Elements.

## Overview

This package provides Web Components that enable developers to build emails, pages, and documents programmatically. Think of it as vanilla web components - this is how you declare a `<unlayer-button>`, `<unlayer-row>`, `<unlayer-image>`, or `<unlayer-form>` in any HTML or framework.

## Installation

```bash
npm install @unlayer/web-component-elements
# or
yarn add @unlayer/web-component-elements
# or
pnpm add @unlayer/web-component-elements
```

## Usage

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="@unlayer/web-component-elements"></script>
</head>
<body>
  <unlayer-row>
    <unlayer-column>
      <unlayer-image src="/logo.png" alt="Logo"></unlayer-image>
      <unlayer-text>Welcome to our newsletter!</unlayer-text>
      <unlayer-button>Subscribe Now</unlayer-button>
    </unlayer-column>
  </unlayer-row>
</body>
</html>
```

## Components

The following components are available (will be populated by automation):

- **Layout**: `RowElement`, `ColumnElement`, `ContainerElement`, `SectionElement`
- **Content**: `TextElement`, `ImageElement`, `ButtonElement`, `LinkElement`
- **Forms**: `FormElement`, `InputElement`, `SelectElement`, `CheckboxElement`
- **Media**: `VideoElement`, `AudioElement`, `GalleryElement`

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
