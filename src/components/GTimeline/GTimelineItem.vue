<script lang="ts" setup>
import { useUniqueId } from "@/composables";
import { computed, inject, onMounted, onUnmounted, ref, watch } from "vue";
import GTimelineLine from "./GTimelineLine.vue";
import { TimelineInjectionKey } from "./types";

const props = defineProps<{
  state?: "pending" | "active" | "completed";
}>();

const timelineItems = inject(TimelineInjectionKey, ref(new Map()));
const id = useUniqueId();
const anchorName = computed(() => `--${id.value}`);

const previousAnchorName = computed(() => {
  // find the current index of the item with the given id
  const keys = Array.from(timelineItems.value.keys());
  const index = keys.findIndex((key) => key === id.value);

  // if the item is not found or is the first item, return null
  if (index === -1 || index === 0) return null;

  // return the anchor name of the previous item
  const previousKey = keys[index - 1];

  console.log({ id, previousKey, previousItem: timelineItems.value.get(previousKey)?.anchorName });
  return timelineItems.value.get(previousKey)?.anchorName || null;
});

const item = computed(() => ({
  id: id.value,
  anchorName: anchorName.value,
  state: props.state || "pending",
}));

onMounted(() => {
  timelineItems.value.set(id.value, item.value);
});

onUnmounted(() => {
  timelineItems.value.delete(id.value);
});
</script>

<template>
  <li :id="id" :style="{ anchorName }" class="g-timeline-item list-none">
    <GTimelineLine :item="item" :previous-anchor-name="previousAnchorName">
      <template #icon><slot name="icon"></slot></template>
    </GTimelineLine>
    <slot></slot>
  </li>
</template>
