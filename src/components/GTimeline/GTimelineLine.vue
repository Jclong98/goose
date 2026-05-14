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
    <div class="g-timeline-line__line"></div>
    <div class="g-timeline-line__circle">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<style scoped>
.g-timeline-line {
  --previous-anchor-name: v-bind("props.previousAnchorName");
  --anchor-name: v-bind("props.item.anchorName");

  position: absolute;
  top: calc(anchor(var(--previous-anchor-name) 50%) + var(--g-timeline-circle-radius));
  bottom: anchor(var(--anchor-name) 50%);
  left: calc(anchor(var(--anchor-name) left) - var(--g-timeline-gutter-width) / 2);

  &.--no-previous {
    top: 0;
  }

  &.--completed {
    --timeline-color: var(--color-blue-300);
  }

  &.--active {
    --timeline-color: var(--color-orange-300);
  }

  &.--pending {
    --timeline-color: var(--color-gray-300);

    & .g-timeline-line__line {
      background-color: transparent;
    }

    /* moving dashes on the pending line */
    & .g-timeline-line__line::before {
      content: "";
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        to bottom,
        var(--timeline-color, currentColor) 0 6px,
        transparent 6px 8px
      );
      background-size: 100% 8px;
      animation: g-timeline-moving-dashes 1.5s linear infinite;
    }
  }

  & .g-timeline-line__line {
    position: relative;
    width: 2px;
    height: 100%;
    background-color: var(--timeline-color, currentColor);
  }

  & .g-timeline-line__circle {
    position: absolute;
    bottom: calc(-1 * var(--g-timeline-circle-radius));
    left: 50%;
    translate: -50% 0;
    width: var(--g-timeline-circle-diameter);
    height: var(--g-timeline-circle-diameter);
    border-radius: 100vw;
    background-color: var(--timeline-color, currentColor);
    display: grid;
    place-content: center;
  }
}

@keyframes g-timeline-moving-dashes {
  to {
    background-position: 0 8px;
  }
}
</style>
