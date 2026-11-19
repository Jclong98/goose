# Getting Started

## Installation

```sh
pnpm add @jclong98/goose
```

Goose declares the following peer dependencies:

| Package        | Version   | Needed for                         |
| -------------- | --------- | ---------------------------------- |
| `vue`          | `^3.5.31` | Everything                         |
| `@vueuse/core` | `^15.0.0` | Composables like `useHighlight`    |
| `vue-router`   | `^5.0.4`  | Only if you use the `GLink` button |
| `unimport`     | `^6.0.2`  | Only if you use `GooseAutoImports` |

## Project setup

### Start from the goose-starter template

The fastest way to get going is to scaffold from the
[goose-starter](https://github.com/Jclong98/goose-starter) template, a
[Vite+](https://viteplus.dev) project that comes with everything Goose needs
already wired up:

- [Vite+](https://viteplus.dev) tooling for dev, build, lint, format, and test
- [Tailwind CSS v4](https://tailwindcss.com) with the `@tailwindcss/vite` plugin
- Vue Router with [auto-generated routes](https://github.com/igorkasyanchuk/vue-router-auto-routes)
- Goose installed, with its styles, fonts, and Tailwind theme imported in
  `src/main.css`
- An example page using a `GButton` inside a `GPopover`

Scaffold a new project from the template:

```sh
vp create github:@jclong98/goose-starter
```

Then install dependencies and start the dev server:

```sh
pnpm install
pnpm dev
```

The starter's `src/main.css` is the reference for the style imports you need:

```css
@import "@jclong98/goose/style.css";
@import "@jclong98/goose/fonts.css";
@import "@jclong98/goose/tw-theme.css";
@import "tailwindcss";
```

### Add Goose to an existing project

If you'd rather add Goose to a project you already have:

1. Install the package and any peers you need:

   ```sh
   pnpm add @jclong98/goose @vueuse/core
   ```

2. If you don't already use Tailwind CSS, install it and add the
   [`@tailwindcss/vite`](https://tailwindcss.com/docs/installation/using-vite)
   plugin to your `vite.config.ts`:

   ```ts
   // vite.config.ts
   import tailwindcss from "@tailwindcss/vite";
   import { defineConfig } from "vite";

   export default defineConfig({
     plugins: [tailwindcss()],
   });
   ```

3. Import Goose's styles in your app's main CSS file:

   ```css
   /* src/main.css */
   @import "@jclong98/goose/style.css";
   @import "@jclong98/goose/fonts.css";
   @import "@jclong98/goose/tw-theme.css";
   @import "tailwindcss";
   ```

   - `style.css` all component styles, plus Goose's Tailwind base styles
   - `fonts.css` optional: the Rubik font family used by Goose components
   - `tw-theme.css` Goose's Tailwind theme (for example the
     `--color-goose` color), so Goose theme values are available to your own
     utilities
   - `tailwindcss` your app's Tailwind entry

## Usage

### Import components

```vue
<script setup>
import { GButton, GDialog } from "@jclong98/goose/components";
</script>

<template>
  <GButton @click="save">Save</GButton>
</template>
```

Each component is also available from the root entry point:

```ts
import { GButton } from "@jclong98/goose";
```

### Use composables

```ts
import { useHighlight } from "@jclong98/goose/composables";

const { highlighted } = useHighlight("goose");
```

### Use directives

```vue
<script setup>
import { Focus } from "@jclong98/goose/directives";
</script>

<template>
  <input v-focus placeholder="Focused on mount" />
</template>
```

Or register a directive globally in your app entry:

```ts
import { createApp } from "vue";

import { Focus } from "@jclong98/goose/directives";

const app = createApp(App);
app.directive("focus", Focus);
```

### Auto-imports

If you're using Vite, Goose ships integrations for
[unplugin-vue-components](https://github.com/vuejs/unplugin-vue-components)
and [unplugin-auto-import](https://github.com/vuejs/unplugin-auto-import) that
eliminate manual imports entirely. See
[Auto Imports](/guide/auto-imports.md) for setup.
