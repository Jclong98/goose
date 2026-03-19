<script lang="ts" setup>
import { useUniqueId } from "@/composables";
import { computed, inject, ref, watch } from "vue";
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
</script>

<template>
  <div
    :id="id"
    :style="{ anchorName }"
    class="g-timeline-item"
    :class="`--${props.state || 'pending'}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.g-timeline-item {
  position: relative;
  resize: both;

  &.--pending {
    --indicator-color: var(--color-gray-300);
  }
  &.--active {
    --indicator-color: var(--color-orange-300);
  }
  &.--completed {
    --indicator-color: var(--color-blue-300);
  }

  &::before {
    content: "";
    width: 1em;
    height: 1em;
    border-radius: 100vw;

    position: absolute;
    top: 50%;
    left: -1.5em;
    translate: 0 -50%;
    background-color: var(--indicator-color, lightgray);
  }
}
</style>
