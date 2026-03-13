<script lang="ts" setup>
import { onMounted, useTemplateRef, watch } from "vue";

import type { PositionArea } from "./types";

const props = withDefaults(
  defineProps<{
    /**
     * The position area of the popover. This determines where the popover will be positioned relative to its anchor.
     * [See MDN for more details](https://developer.mozilla.org/en-US/docs/Web/CSS/position-area).
     */
    positionArea?: PositionArea;

    /**
     * The anchor name of the popover. This can be used to anchor the popover to any element with a matching `anchor-name` style property. For example, if `anchor="--my-anchor"`, the popover will be anchored to any element with `style="anchor-name: --my-anchor"`.
     */
    anchor?: string;
  }>(),
  {
    positionArea: "bottom",
  },
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
  <div
    ref="popover"
    popover
    class="g-popover"
    :style="{
      positionAnchor: props.anchor,
      positionArea: props.positionArea,
    }"
    @toggle="onToggle"
  >
    <slot :close="close"></slot>
  </div>
</template>

<style scoped>
.g-popover {
  --gap: 0.5rem;

  border: none;
  background: transparent;

  /* reset popover styles */
  inset: unset;

  /* position styling */
  position: fixed;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
</style>
