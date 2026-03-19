<script lang="ts" setup>
import type { TimelineItem } from "./types";

const props = defineProps<{
  item: TimelineItem;
  previousAnchorName: string | null;
}>();
</script>

<template>
  <div
    :key="props.item.id"
    class="timeline-line"
    :class="[
      `--${props.item.state}`,
      {
        '--no-previous': !props.previousAnchorName,
      },
    ]"
    aria-hidden="true"
  >
    <div class="timeline-line__indicator"></div>
  </div>
</template>

<style scoped>
.timeline-line {
  --indicator-color: var(--color-gray-300);
  position: absolute;
  top: calc(anchor(v-bind("props.previousAnchorName") 50%) + 0.5rem);
  bottom: anchor(v-bind("props.item.anchorName") 50%);
  left: calc(anchor(v-bind("props.item.anchorName") left) - 1rem);

  border: 1px solid var(--indicator-color);
  width: 2px;

  &.--no-previous {
    top: anchor(v-bind("props.item.anchorName") top);
  }

  &.--completed {
    --indicator-color: var(--color-blue-300);
  }

  &.--active {
    --indicator-color: var(--color-orange-300);
  }

  &.--pending {
    border-style: dashed;
  }
}

.timeline-line__indicator {
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 1rem;
  height: 1rem;
  border-radius: 100vw;
  background-color: var(--indicator-color);
}
</style>
