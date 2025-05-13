# Goose: a Vue library starter

## Getting started

Install dependencies

```sh
pnpm i
```

Build core and vite plugin

```sh
pnpm run build
```

Test it out

```sh
pnpm run sandbox:dev
```

## Structure

- packages
  - core
    - this is the actual components/composables package
  - vite
    - this is a [tsdown](https://tsdown.dev/) bundled Vite plugin. This includes several built-in Vite plugins so that you don't have to configure them yourself:
      - [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components): Automatically imports Vue components.
      - [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import): Automatically imports Vue and Vue Router utilities.
      - [unplugin-vue-router](https://github.com/posva/unplugin-vue-router): Provides enhanced Vue Router integration.
      - [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue): Official Vue plugin for Vite.
      - [tailwindcss](https://tailwindcss.com/): Built-in support for TailwindCSS.
      - Duplication detection: Ensures no duplicate instances of critical plugins.
      - Vitest settings: Pre-configured settings for Vitest.
  - sandbox
    - a place to test out both the library and the Vite plugin
  - docs
    - TODO
