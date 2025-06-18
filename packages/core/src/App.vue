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

/**
 * selecting/unselecting an item based on click
 */
function onClickItem<T>(item: TreeItem<T>) {
  console.log("Item clicked:", item);
  item.selected = !item.selected;
}

/**
 * simulating an api call on expanding an item
 */
function onItemExpanded<T>(item: TreeItem<T>) {
  console.log("Item expanded:", item);

  item.loading = true;
  // mock api call
  setTimeout(() => {
    if (item.children) {
      item.children.push({
        label: `Item ${item.children.length + 1} (added on expand)`,
        children: [],
      });
    }
    item.loading = false;
  }, 1000);
}
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <h1 class="text-2xl font-semibold">GTree</h1>

    <hr />

    <GTree
      v-model:items="items"
      @click:item="onClickItem($event)"
      @expand:item="onItemExpanded($event)"
    >
      <template #label="{ item, level }">
        <div>{{ item.label }}</div>
        <div class="opacity-40">level: {{ level }}</div>
        <div v-if="item.data" class="opacity-70">data: {{ item.data }}</div>
      </template>
    </GTree>
  </div>
</template>
