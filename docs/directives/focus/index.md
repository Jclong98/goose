<script setup>
import BasicUsage from './BasicUsage.vue'
</script>

# v-focus

<div class="flex gap-2">
  <SourceChip path="src/directives/focus.ts" />
</div>

Focuses an element when the component is mounted.

## Basic Usage

<!-- example -->
<BasicUsage />

## Registering

Import the `Focus` directive and use it as `v-focus`:

```vue
<script setup>
import { Focus as vFocus } from "@jclong98/goose/directives";
</script>

<template>
  <input v-focus placeholder="Focused on mount" />
</template>
```

Or register it globally:

```ts
import { createApp } from "vue";

import { Focus } from "@jclong98/goose/directives";

const app = createApp(App);
app.directive("focus", Focus);
```

::: tip Auto-import
When using `GooseAutoImports`, using `v-focus` in a template imports the directive for you.
:::

::: info
The directive focuses the element once in `mounted` — it does not re-focus on updates. To restore focus later, call `el.focus()` yourself or re-mount the element with `v-if`.
:::
