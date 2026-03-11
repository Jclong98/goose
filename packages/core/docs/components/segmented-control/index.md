<script setup>
import MultiSelectExample from './MultiSelectExample.vue'
import SingleSelectExample from './SingleSelectExample.vue'
</script>

# GSegmentedControl

A segmented control (button group) for selecting one or multiple values from a set. Renders as a `<fieldset>` with radio or checkbox inputs.

## Demo

### Single-select example

<SingleSelectExample />

### Multi-select example

<MultiSelectExample />

## Props

| Prop           | Type                         | Default   | Description                                                                           |
| -------------- | ---------------------------- | --------- | ------------------------------------------------------------------------------------- |
| `label`        | `string`                     | —         | **Required.** Label for the fieldset used for accessibility.                          |
| `visibleLabel` | `boolean`                    | `false`   | When `true`, renders the legend visibly; otherwise it is visually hidden (`sr-only`). |
| `items`        | `GSegmentedControlItem<T>[]` | —         | **Required.** Array of items to display as segments.                                  |
| `inputType`    | `"radio" \| "checkbox"`      | `"radio"` | Input type — use `"checkbox"` for multi-select.                                       |

## Model

| Model        | Type       | Description                                                                  |
| ------------ | ---------- | ---------------------------------------------------------------------------- |
| `modelValue` | `T \| T[]` | The currently selected value(s). Use `T[]` when `inputType` is `"checkbox"`. |

## Slots

### `label`

Custom label renderer for each item.

| Slot prop | Type                       | Description              |
| --------- | -------------------------- | ------------------------ |
| `item`    | `GSegmentedControlItem<T>` | The item being rendered. |

## Types

```ts
type GSegmentedControlItem<T> = {
  label: string;
  value: T;
};
```

## Examples

### Multi-select (checkbox)

```vue
<script setup lang="ts">
import { ref } from "vue";

const features = [
  { label: "Bold", value: "bold" },
  { label: "Italic", value: "italic" },
  { label: "Underline", value: "underline" },
];

const selected = ref<string[]>([]);
</script>

<template>
  <GSegmentedControl
    label="Features"
    inputType="checkbox"
    :items="features"
    v-model="selected"
    :visibleLabel="true"
  />
</template>
```

### Custom label slot

```vue
<GSegmentedControl label="Size" :items="sizes" v-model="size">
  <template #label="{ item }">
    <strong>{{ item.label }}</strong>
  </template>
</GSegmentedControl>
```
