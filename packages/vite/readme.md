# @goose/vite

A Vite plugin package designed to streamline development with Vue 3 and the [@goose/core](../core/README.md) library in this monorepo. This package includes pre-configured plugins for auto-importing components and utilities, as well as TailwindCSS integration.

## Features

- **Auto-import utilities**: Automatically import Vue and Vue Router utilities using [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import).
- **Component auto-import**: Automatically import Vue components with [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components).
- **TailwindCSS integration**: Built-in support for TailwindCSS via [@tailwindcss/vite](https://tailwindcss.com/).

## Usage

### Minimal setup

```ts
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import goose from "@goose/vite";

export default defineConfig({
  plugins: [vue(), goose()],
});
```

```css
/* ./src/assets/main.css */
/* or wherever your styles are located */
@import "tailwindcss";
```

### Custom setup

```ts
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import goose from "@goose/vite";

export default defineConfig({
  plugins: [
    vue(),
    goose({
      autoImport: {
        // Customize `unplugin-auto-import` options here
      },
      components: {
        // Customize `unplugin-vue-components` options here
      },
    }),
  ],
});
```

## Development

### Scripts

- `pnpm dev`: Run the development build with [tsdown](https://tsdown.dev/) in watch mode.
- `pnpm build`: Build the package using tsdown.

### Build Configuration

The package is built using [tsdown](https://tsdown.dev/). The entry point is defined in `tsdown.config.ts`.
