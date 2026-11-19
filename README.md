# Goose UI ![NPM Version](https://img.shields.io/npm/v/%40jclong98%2Fgoose) [![build status](https://github.com/Jclong98/goose/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Jclong98/goose/actions/workflows/ci.yml)

**Goose** is a library of Vue 3 components, composables, and directives that leans heavily into modern html and css.

## Features

- 🧩 **Components**: Buttons, Dialogs, Drawers, Popovers, Segmented Controls, Selects, Tables, Timelines, and more
- 🪝 **Composables**: Useful Vue composables like `useHighlight` and `useUniqueId`
- 🏷️ **Directives**: Directives such as `v-focus`
- 🎨 **Theming**: Includes core and Tailwind-compatible theme CSS
- 🛠️ **TypeScript**: Full type support for all exports
- 📦 **Tree-shakable**: Import only what you need

## Installation

```sh
pnpm add @jclong98/goose
```

### Example project scaffolding

[This project](https://github.com/Jclong98/goose-starter) shows how to import `@jclong98/goose` components and styles

```sh
vp create github:@jclong98/goose-starter
```

## Usage

### Import Individual Components

```ts
import { GButton, GDialog } from "@jclong98/goose";
```

### Use Composables

```ts
import { useHighlight } from "@jclong98/goose/composables";
const { highlighted } = useHighlight("text");
```

### Use Directives

```ts
import { createApp } from "vue";
import { Focus } from "@jclong98/goose/directives";

const app = createApp();
app.directive("focus", Focus);
```

### Auto Import Components

```ts
// vite.config.ts
import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import { GooseVueComponentsResolver } from "@jclong98/goose/integrations";

export default defineConfig({
  plugins: [
    // https://github.com/unplugin/unplugin-vue-components
    Components({
      resolvers: [GooseVueComponentsResolver],
    }),
  ],
});
```

### Auto Import Composables and Directives

```ts
// vite.config.ts
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";

import { GooseAutoImports } from "@jclong98/goose/integrations";

export default defineConfig({
  plugins: [
    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: [GooseAutoImports],
    }),
  ],
});
```

## Development

```sh
vp check      # Format, lint, and type-check (also run automatically on staged files)
pnpm dev      # Start the playground dev server (playground/)
pnpm test     # Run tests (unit: *.spec.ts in jsdom, browser: *.b.spec.ts)
pnpm build    # Type-check and build the library to dist/
pnpm fmt      # Format code
pnpm lint     # Lint with type-aware rules
pnpm docs:dev # Start the VitePress docs dev server
```

## Releasing

Releases are published automatically to npm by GitHub Actions when a `vX.Y.Z` tag is pushed from `main`. The tag must match the `version` in `package.json`; the workflow verifies this, then checks linting and formatting, then publishes.

```sh
pnpm version patch          # Bump version, commit, and tag vX.Y.Z
git push origin main v0.0.7 # Push the tag to trigger the publish
```

Use `pnpm version minor` or `major` as needed, and watch the run under the repo's [Actions](https://github.com/Jclong98/goose/actions) tab.

## License

ISC
