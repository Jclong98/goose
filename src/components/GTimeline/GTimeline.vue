<script lang="ts" setup>
import { provide, ref } from "vue";
import { TimelineInjectionKey, type TimelineItem } from "./types";

const items = ref<Map<string, TimelineItem>>(new Map());
provide(TimelineInjectionKey, items);
</script>

<template>
  <ul class="g-timeline">
    <slot></slot>
  </ul>
</template>

<style scoped>
.g-timeline {
  --g-timeline-circle-radius: 8px;
  --g-timeline-circle-diameter: calc(var(--g-timeline-circle-radius) * 2);
  --g-timeline-gutter-width: calc(var(--g-timeline-circle-radius) * 3);

  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: var(--g-timeline-gutter-width);
}
</style>
