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
    class="g-timeline-line"
    :class="[
      `--${props.item.state}`,
      {
        '--no-previous': !props.previousAnchorName,
      },
    ]"
    aria-hidden="true"
  >
    <svg
      class="g-timeline-line__svg"
      :class="[`--${props.item.state}`]"
      viewBox="0 0 2 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="100"
        stroke="currentColor"
        stroke-width="2"
        :stroke-dasharray="props.item.state === 'pending' ? '6,6' : '0'"
      />
    </svg>
    <div class="g-timeline-line__indicator"></div>
  </div>
</template>

<style scoped>
.g-timeline-line {
  position: absolute;
  top: calc(anchor(v-bind("props.previousAnchorName") 50%) + 0.5rem);
  bottom: anchor(v-bind("props.item.anchorName") 50%);
  left: calc(anchor(v-bind("props.item.anchorName") left) - 1rem);
  width: 2px;
  height: auto;
  pointer-events: none;

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
    --indicator-color: var(--color-gray-300);
  }
}

.g-timeline-line__svg {
  width: 2px;
  height: 100%;
  color: var(--indicator-color);
}

.g-timeline-line__indicator {
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
