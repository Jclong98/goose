<script lang="ts" setup>
import type { TableColumn } from "@/components/GTable/types";
import { ref } from "vue";

type Row = {
  i: number;
  pinRight: number;
} & Record<`extra${number}`, string>;

const columns = ref<TableColumn<keyof Row | "pinRight">[]>([
  {
    key: "i",
    title: "Index",
    pin: "left",
  },
  ...Array.from({ length: 20 }, (_, i) => ({
    key: `extra${i}` as `extra${number}`,
    title: `Extra ${i}`,
  })),
  {
    key: "pinRight",
    title: "Pinned Right",
    pin: "right",
  },
]);

const items = ref<Row[]>(
  Array.from({ length: 100 }, (_, i) => ({
    i: i,
    ...Object.fromEntries(
      Array.from({ length: 20 }, (_, j) => [`extra${j}`, `Extra ${j} Value ${i + 1}`]),
    ),
    pinRight: i + 1,
  })) as Row[],
);
</script>

<template>
  <GTable :columns="columns" :items="items" class="max-h-96"></GTable>
</template>
