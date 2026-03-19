<script lang="ts" setup>
import { provide, ref } from "vue";
import GTimelineLine from "./GTimelineLine.vue";
import { TimelineInjectionKey, type TimelineItem } from "./types";

const items = ref<Map<string, TimelineItem>>(new Map());
provide(TimelineInjectionKey, items);

function findPreviousAnchorName(id: string) {
  // find the current index of the item with the given id
  const keys = Array.from(items.value.keys());
  const index = keys.findIndex((key) => key === id);

  // if the item is not found or is the first item, return null
  if (index === -1 || index === 0) return null;

  // return the anchor name of the previous item
  const previousKey = keys[index - 1];

  console.log({ id, previousKey, previousItem: items.value.get(previousKey)?.anchorName });
  return items.value.get(previousKey)?.anchorName || null;
}
</script>

<template>
  <div class="g-timeline">
    <GTimelineLine
      v-for="item in items.values()"
      :key="item.id"
      :item="item"
      :previous-anchor-name="findPreviousAnchorName(item.id)"
    ></GTimelineLine>

    <slot></slot>
  </div>
</template>

<style scoped>
.g-timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 32px;
}
</style>
