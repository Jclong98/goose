<script lang="ts" setup>
import { computed, onMounted, useId, useTemplateRef, watch } from "vue";

import type { PopoverPosition } from "./types";

const props = withDefaults(
  defineProps<{
    position?: PopoverPosition;
    anchor?: string;
  }>(),
  {
    position: "bottomCenter",
  }
);

const isOpen = defineModel("open", { default: false });

const popover = useTemplateRef("popover");

const open = () => popover.value?.showPopover();
const close = () => popover.value?.hidePopover();

const onToggle = (event: ToggleEvent) => {
  isOpen.value = event.newState === "open";
};

// watch is inside onMounted because you can't
// open a popover that isn't mounted
onMounted(() => {
  watch(isOpen, (nv) => (nv ? open() : close()), { immediate: true });
});
</script>

<template>
  <div ref="popover" popover class="g-popover" :class="[`--${props.position}`]" :style="{
    'position-anchor': props.anchor,
  }" @toggle="onToggle">
    <slot :close="close"></slot>
  </div>
</template>

<style scoped>
.g-popover {
  --gap: 0.5rem;

  border: none;
  background: transparent;
  margin: 0;
  inset: unset;
  /* white-space: nowrap; */

  /* position styling */
  position: fixed;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;

  &.--topCenter {
    justify-self: anchor-center;
    bottom: anchor(top);
    margin-block-end: var(--gap);
  }

  &.--topLeft {
    bottom: anchor(top);
    left: anchor(left);
    margin-block-end: var(--gap);
  }

  &.--topRight {
    bottom: anchor(top);
    right: anchor(right);
    margin-block-end: var(--gap);
  }

  &.--bottomCenter {
    justify-self: anchor-center;
    top: anchor(bottom);
    margin-block-start: var(--gap);
  }

  &.--bottomLeft {
    top: anchor(bottom);
    left: anchor(left);
    margin-block-start: var(--gap);
  }

  &.--bottomRight {
    top: anchor(bottom);
    right: anchor(right);
    margin-block-start: var(--gap);
  }

  &.--left {
    align-self: anchor-center;
    right: anchor(left);
    margin-inline-end: var(--gap);
  }

  &.--right {
    align-self: anchor-center;
    left: anchor(right);
    margin-inline-start: var(--gap);
  }
}
</style>
