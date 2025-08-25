# @unlayer/angular-elements

Angular components for building emails, pages, and documents with Unlayer Elements.

## Overview

This package provides Angular components that enable developers to build emails, pages, and documents programmatically. Think of it as Angular elements - this is how you declare a `<unlayer-button>`, `<unlayer-row>`, `<unlayer-image>`, or `<unlayer-form>` in Angular.

## Installation

```bash
npm install @unlayer/angular-elements
# or
yarn add @unlayer/angular-elements
# or
pnpm add @unlayer/angular-elements
```

## Usage

```typescript
import { ButtonComponent, RowComponent, ColumnComponent, ImageComponent, TextComponent } from '@unlayer/angular-elements';

@Component({
  selector: 'app-email-template',
  template: `
    <unlayer-row>
      <unlayer-column>
        <unlayer-image src="/logo.png" alt="Logo"></unlayer-image>
        <unlayer-text>Welcome to our newsletter!</unlayer-text>
        <unlayer-button>Subscribe Now</unlayer-button>
      </unlayer-column>
    </unlayer-row>
  `
})
export class EmailTemplateComponent {
  // Component logic here
}
```

## Components

The following components are available (will be populated by automation):

- **Layout**: `RowComponent`, `ColumnComponent`, `ContainerComponent`, `SectionComponent`
- **Content**: `TextComponent`, `ImageComponent`, `ButtonComponent`, `LinkComponent`
- **Forms**: `FormComponent`, `InputComponent`, `SelectComponent`, `CheckboxComponent`
- **Media**: `VideoComponent`, `AudioComponent`, `GalleryComponent`

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
