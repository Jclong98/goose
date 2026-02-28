# @goose/vite

Opinionated Vite plugin for Goose projects. It bundles common Vue tooling so apps can use a single plugin with sane defaults.

## Features

- Configures [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)
- Configures [vue-router/vite](https://router.vuejs.org/)
- Auto-imports Vue and Vue Router APIs via [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
- Auto-registers components via [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
- Enables Tailwind CSS through [@tailwindcss/vite](https://tailwindcss.com/)
- Applies Vitest defaults (`globals: true`, `environment: "jsdom"`)
- Detects duplicate plugin registration for bundled plugins

## Usage

### Minimal setup

```ts
// vite.config.ts
import { defineConfig } from "vite";
import goose from "@goose/vite";

export default defineConfig({
  plugins: [goose()],
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

- `pnpm -C packages/vite dev`: Run [tsdown](https://tsdown.dev/) in watch mode.
- `pnpm -C packages/vite build`: Build package output with tsdown.

### Build Configuration

The package is built using [tsdown](https://tsdown.dev/). The entry point is defined in `tsdown.config.ts`.

## Options

`goose(options)` accepts partial overrides for the bundled plugins:

- `autoImport`
- `components`
- `vueRouter`
- `vue`
