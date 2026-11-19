# Auto Imports

Goose ships two integrations for Vite projects:

- `GooseVueComponentsResolver` auto-registers Goose components with
  [unplugin-vue-components](https://github.com/vuejs/unplugin-vue-components)
- `GooseAutoImports` a [unimport](https://unimport.unjs.org/) preset for
  [unplugin-auto-import](https://github.com/vuejs/unplugin-auto-import) that
  auto-imports Goose composables and directives

With both configured, you can use Goose in templates and scripts without any
manual imports.

## Installation

```sh
pnpm add -D unplugin-vue-components unplugin-auto-import
```

`unimport` is also a peer dependency of Goose and is required for the
`GooseAutoImports` preset:

```sh
pnpm add -D unimport
```

## Vite setup

```ts
// vite.config.ts
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import { GooseAutoImports, GooseVueComponentsResolver } from "@jclong98/goose/integrations";

export default defineConfig({
  plugins: [
    // Auto-register G* components from @jclong98/goose/components
    Components({
      resolvers: [GooseVueComponentsResolver],
    }),
    // Auto-import composables and directives from @jclong98/goose
    AutoImport({
      imports: [GooseAutoImports],
      vueDirectives: true,
      dts: "src/auto-imports.d.ts",
    }),
  ],
});
```

## What gets auto-imported

### Components

`GooseVueComponentsResolver` resolves any component that starts with `G` to
`@jclong98/goose/components`, so this works without an import:

```vue
<template>
  <GButton @click="save">Save</GButton>
  <GPopover id="help">
    <template #activator="{ binding }">
      <GButton v-bind="binding">Help</GButton>
    </template>
    <p>How do I use Goose?</p>
  </GPopover>
</template>
```

### Composables

`GooseAutoImports` contains every composable exported by Goose, so they can be
used directly in `<script setup>`:

```vue
<script setup lang="ts">
const { highlighted } = useHighlight("goose");
</script>
```

### Directives

With `vueDirectives: true` set, the directives in the preset are auto-imported
and typed whenever they appear in a template:

```vue
<template>
  <input v-focus placeholder="Focused on mount" />
</template>
```
