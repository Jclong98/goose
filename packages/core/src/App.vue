<script setup lang="ts">
import { ref } from "vue";

import { GTree } from "@/components";

import type { TreeItem } from "./components/GTree/types";

const items = ref<TreeItem<string>[]>([
  {
    label: "Item 1",
  },
  {
    label: "Item 2 (selected by default)",
    selected: true,
    expanded: true,
    children: [
      {
        label: "Item 2.1",
      },
      {
        label: "Item 2.2",
        children: [
          {
            label: "Item 2.2.1 (has data)",
            data: "some extra data",
          },
          {
            label: "Item 2.2.2 also selected by default",
            selected: true,
          },
        ],
      },
    ],
  },
  {
    label: "Item 3",
  },
]);

function onClickItem<T>(item: TreeItem<T>) {
  console.log("Item clicked:", item);
  item.selected = !item.selected;
}
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <h1 class="text-2xl font-semibold">GTree</h1>

    <hr />

    <GTree v-model:items="items" @click:item="onClickItem($event)">
      <template #label="{ item, level }">
        <div>{{ item.label }}</div>
        <div class="opacity-40">level: {{ level }}</div>
        <div v-if="item.data" class="opacity-70">data: {{ item.data }}</div>
      </template>
    </GTree>
  </div>
</template>
