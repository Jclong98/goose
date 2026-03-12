<script setup>
import BasicMultiplierExample from './BasicMultiplierExample.vue'
import TaxMultiplierExample from './TaxMultiplierExample.vue'
</script>

# useMultiplier

Returns a computed `product` of two reactive number values.

## Live examples

### Product from two refs

<BasicMultiplierExample />

### Tax total with multiplier

<TaxMultiplierExample />

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useMultiplier } from '@goose-ui/core'

const price = ref(10)
const quantity = ref(3)

const { product } = useMultiplier(price, quantity)
// product.value === 30
</script>

<template>
  <p>{{ product }}</p>
</template>
```

## Signature

```ts
function useMultiplier(
  value: MaybeRefOrGetter<number>,
  multiplier: MaybeRefOrGetter<number>,
): {
  product: ComputedRef<number>
}
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `MaybeRefOrGetter<number>` | The base value. |
| `multiplier` | `MaybeRefOrGetter<number>` | The multiplier. |

## Return value

| Property | Type | Description |
|----------|------|-------------|
| `product` | `ComputedRef<number>` | Reactive result of `value * multiplier`. |

## Examples

### With static values

```ts
const { product } = useMultiplier(5, 4)
// product.value === 20
```

### With a getter

```ts
const scale = ref(2)
const { product } = useMultiplier(() => baseValue, scale)
```
