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
async function mockApiCall<T>(item: TreeItem<T>) {
  item.loading = true;

  // mock api call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (item.children) {
    item.children.push({
      label: `Item ${item.children.length + 1} (added on expand)`,
      children: [],
    });
  }

  item.loading = false;
}
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <h1 class="text-2xl font-semibold">GTree</h1>

    <hr />

    <GTree
      v-model:items="items"
      @click:item="onClickItem($event)"
      @expand:item="mockApiCall($event)"
    >
      <template #label="{ item, level }">
        <div class="text-gray-400">{{ level }}</div>
        <div>{{ item.label }}</div>
        <div v-if="item.data" class="text-red-400">{{ item.data }}</div>
      </template>

      <template #after="{ item, level }">
        <button
          v-if="item.children && item.expanded"
          class="text-blue-400 disabled:text-gray-500 disabled:bg-gray-200"
          :disabled="item.loading"
          :style="{ marginLeft: `calc(${level} * 1rem + 1rem)` }"
          @click="mockApiCall(item)"
        >
          Load more
        </button>
      </template>
    </GTree>
  </div>
</template>
