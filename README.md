# Goose UI Library (@jclong98/goose)

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

## Usage

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
import { vFocus } from "@jclong98/goose/directives";

const app = createApp();
app.directive("focus", vFocus);
```

## Documentation

See the [docs](https://goose.jacoblong.dev) for usage examples and API details for each component, composable, and directive.

## Development

```sh
pnpm dev      # Start playground/dev server
pnpm test     # Run tests
pnpm build    # Build library
```

## License

ISC
