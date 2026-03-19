<script lang="ts" setup>
import { useUniqueId } from "@/composables";
import { computed, inject, onUnmounted, ref, watch } from "vue";
import { TimelineInjectionKey } from "./types";

const props = defineProps<{
  state?: "pending" | "active" | "completed";
}>();

const timelineItems = inject(TimelineInjectionKey, ref(new Map()));
const id = useUniqueId();
const anchorName = computed(() => `--${id.value}`);

watch(
  () => props.state,
  (nv) => {
    timelineItems.value.set(id.value, {
      id: id.value,
      anchorName: `--${id.value}`,
      state: nv || "pending",
    });
  },
  { immediate: true },
);

onUnmounted(() => {
  timelineItems.value.delete(id.value);
});
</script>

<template>
  <li :id="id" :style="{ anchorName }" class="g-timeline-item list-none">
    <slot></slot>
  </li>
</template>
