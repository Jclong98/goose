<script setup>
import BasicTableExample from './BasicTableExample.vue'
import Slots from './Slots.vue'
import StickyScrolling from './StickyScrolling.vue'
</script>

# GTable

A generic, strongly-typed data table component using CSS subgrid layout. Supports pinned columns and custom header/cell slot renderers.

## Demo

### Basic table

<BasicTableExample class="vp-raw" />

### Slots

<Slots class="vp-raw" />

### Sticky scrolling

<StickyScrolling class="vp-raw" />

## Usage

```vue
<script setup lang="ts">
import type { TableColumn } from "@jclong98/goose";

const columns: TableColumn<"name" | "role">[] = [
  { key: "name", title: "Name" },
  { key: "role", title: "Role" },
];

const rows = [
  { name: "Alice", role: "Admin" },
  { name: "Bob", role: "Editor" },
];
</script>

<template>
  <GTable :columns="columns" :items="rows" />
</template>
```

## Props

| Prop      | Type                    | Description                              |
| --------- | ----------------------- | ---------------------------------------- |
| `columns` | `TableColumn<RowKey>[]` | **Required.** Column definitions.        |
| `items`   | `TRow[]`                | **Required.** Array of row data objects. |

## Slots

Slots are generated dynamically from your column keys.

### `[key]-header`

Custom header cell for the column with key `[key]`.

| Slot prop | Type          | Description            |
| --------- | ------------- | ---------------------- |
| `column`  | `TableColumn` | The column definition. |

### `[key]-cell`

Custom body cell for the column with key `[key]`.

| Slot prop | Type   | Description          |
| --------- | ------ | -------------------- |
| `item`    | `TRow` | The row data object. |

## Types

```ts
type TableColumn<TKey extends string = string> = {
  key: TKey;
  title: string;
  width?: string; // CSS value for grid column width, e.g. "200px" or "1fr"
  pin?: "left" | "right";
};
```
