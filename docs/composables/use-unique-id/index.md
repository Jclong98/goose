<script setup>
import GeneratedIdExample from './GeneratedIdExample.vue'
import ProvidedIdExample from './ProvidedIdExample.vue'
</script>

# useUniqueId

Returns a stable, unique ID for a component. Prefers an `id` passed via `$attrs` so the consumer can override it, otherwise falls back to Vue's `useId()`.

## Live examples

### Generated ID

<GeneratedIdExample />

### Consumer-provided ID

<ProvidedIdExample id="provided-id-example" />

## Usage

```vue
<script setup lang="ts">
import { useUniqueId } from "@goose-ui/core";

const id = useUniqueId();
</script>

<template>
  <label :for="id">Name</label>
  <input :id="id" type="text" />
</template>
```

If the parent passes an `id` attribute the same value is used, keeping the DOM predictable:

```vue
<!-- parent -->
<MyInput id="user-name" />
```

## Signature

```ts
function useUniqueId(): ComputedRef<string>;
```

## Return value

A `ComputedRef<string>` that is:

- the `id` from `$attrs` if provided by the caller, or
- a Vue-generated unique ID otherwise.
