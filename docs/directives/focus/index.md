<script setup>
import FocusExample from './FocusExample.vue'
</script>

# v-focus

Focuses an element when the component is mounted.

## Live example

<!-- example -->
<FocusExample />

## Usage

Import the `Focus` directive and use it as `v-focus`:

```vue
<script setup>
import { Focus } from "@jclong98/goose/directives";
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
