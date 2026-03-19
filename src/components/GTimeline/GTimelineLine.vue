<script lang="ts" setup>
import type { TimelineItem } from "./types";

const props = defineProps<{
  item: TimelineItem;
  previousAnchorName: string | null;
}>();
</script>

<template>
  <!-- @vue-ignore -->
  <div
    :key="props.item.id"
    class="timeline__line"
    :class="[
      `--${props.item.state}`,
      {
        '--no-previous': !props.previousAnchorName,
      },
    ]"
    aria-hidden="true"
  ></div>
</template>

<style scoped>
.timeline__line {
  position: absolute;
  top: anchor(v-bind("props.previousAnchorName") 50%);
  bottom: anchor(v-bind("props.item.anchorName") 50%);
  left: calc(anchor(v-bind("props.item.anchorName") left) - 1rem);

  border: 1px solid black;
  width: 2px;

  &.--no-previous {
    top: anchor(v-bind("props.item.anchorName") top);
  }

  &.--completed {
    border-color: var(--color-blue-300);
  }

  &.--active {
    border-color: var(--color-orange-300);
  }

  &.--pending {
    border-style: dashed;
    border-color: var(--color-gray-300);
  }
}
</style>
