<script lang="ts" setup generic="TRow extends Record<string, unknown>">
import { computed } from "vue";
import type { TableColumn } from "./types";

type RowKey = Extract<keyof TRow, string>;

const props = defineProps<{
  columns: TableColumn<RowKey>[];
  items: TRow[];
}>();

const gridTemplateColumns = computed(() =>
  props.columns.map((column) => column.width || "auto").join(" "),
);

function getPinClasses(column: TableColumn<RowKey>) {
  return {
    "--pin": column.pin,
    "--pin-left": column.pin === "left",
    "--pin-right": column.pin === "right",
  };
}

type HeaderSlots = {
  [K in TableColumn<RowKey> as `header:${K["key"]}`]?: (props: { column: K }) => void;
};

type CellSlots = {
  [K in TableColumn<RowKey> as `cell:${K["key"]}`]?: (props: { item: TRow }) => void;
};

defineSlots<HeaderSlots & CellSlots>();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in props.columns" :key="column.key" :class="getPinClasses(column)">
          <slot :name="`header:${column.key}`" :column="column">
            {{ column.title }}
          </slot>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in props.items" :key="index">
        <td v-for="column in props.columns" :key="column.key" :class="getPinClasses(column)">
          <slot :name="`cell:${column.key}`" :item="item">
            {{ item[column.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  display: grid;
  grid-template-columns: v-bind(gridTemplateColumns);
  overflow: auto;
  isolation: isolate;
  container: table-container / scroll-state;
}

thead,
tbody,
tr {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;

  &:nth-child(odd) {
    background-color: #f0f0f0;
  }

  &:nth-child(even) {
    background-color: #fff;
  }
}

thead {
  position: sticky;
  top: 0;
  z-index: 2;
}

th,
td {
  background-color: inherit;
  display: flex;
  padding: 8px;
  white-space: nowrap;

  &.--pin {
    position: sticky;
    background-color: inherit;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      width: 8px;
      height: 100%;
    }
  }

  &.--pin-right {
    right: 0;
  }

  &.--pin-left {
    left: 0;
  }
}

@container table-container scroll-state(scrollable: top) {
  thead {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}

@container table-container scroll-state(scrollable: right) {
  .--pin-right::after {
    left: -8px;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.1), transparent);
  }
}

@container table-container scroll-state(scrollable: left) {
  .--pin-left::after {
    right: -8px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent);
  }
}
</style>
