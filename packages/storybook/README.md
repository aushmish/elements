# Unlayer Elements - Storybook Hub

This package provides a unified Storybook interface that aggregates all elements packages using Storybook Composition.

## Development

To run the hub locally with all component storybooks:

1. **Start all individual storybooks** (in separate terminals or use the root script):
   ```bash
   # From project root
   pnpm run build-storybook
   ```

2. **Start the hub**:
   ```bash
   cd packages/storybook
   pnpm run storybook
   ```

The hub will be available at `http://localhost:6006` and will compose all the individual storybooks.

## Production Build

To build the hub with all static storybooks:

```bash
# From project root
pnpm run build-storybook
```

This will:
1. Build all individual storybooks
2. Copy them to the hub's storybook-static directory (via the build-storybook-hub.sh script)
3. Build the hub with references to the static builds

## Preview Built Storybook

To preview the built storybook:

```bash
cd packages/storybook
pnpm run preview
```

## Architecture

- **Development**: References static builds copied to subdirectories
- **Production**: References static builds copied to subdirectories
- **Composition**: Uses Storybook's refs feature to aggregate multiple storybooks

## Framework Coverage

- Angular Elements
- React Elements
- Vue Elements
- Preact Elements
- Solid Elements
- Svelte Elements
- Web Component Elements

## How It Works

The storybook hub uses Storybook's Composition feature to combine multiple storybooks into one unified interface. Each framework's storybook is built separately and then referenced by the hub using the `refs` configuration in `.storybook/main.ts`.

When you run the hub, it will display all the stories from all frameworks in a single navigation tree, making it easy to browse and compare components across different frameworks.
