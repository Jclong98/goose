<script lang="ts" setup>
import { computed, onMounted, useTemplateRef, watch, type IntrinsicElementAttributes } from "vue";

import { useUniqueId } from "@/composables";
import type { PositionArea } from "./types";

defineOptions({ inheritAttrs: false });

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
    /** sets the minimum width of the popover to match the anchor */
    minWAnchor?: boolean;
    /** sets the minimum height of the popover to match the anchor */
    minHAnchor?: boolean;

    /** switch between the popovertarget and interestfor attributes */
    mode?: "click" | "interest";

    is?: string;
  }>(),
  {
    positionArea: "bottom",
    anchor: undefined,
    mode: "click",
    minWAnchor: false,
    minHAnchor: false,
    is: "div",
  },
);

const isOpen = defineModel<boolean>("open");

const popover = useTemplateRef<HTMLElement>("popover");

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

const id = useUniqueId();
const anchorName = computed(() => `--${id.value}-anchor`);
const activatorBinding = computed(() => ({
  style: {
    "anchor-name": anchorName.value,
  },
  [props.mode === "click" ? "popovertarget" : "interestfor"]: id.value,
}));
const closeBinding = computed(() => ({
  commandfor: id.value,
  command: "hide-popover",
}));

defineExpose({
  open,
  close,
  id,
  anchorName,

  /**
   * use v-bind="activatorBinding" on the popover's activator to
   * automatically set the correct attributes for the popover to work.
   * This is especially useful if you have multiple popovers and want
   * to avoid manually managing unique IDs and anchor names.
   */
  activatorBinding,
});
</script>

<template>
  <slot name="activator" :id :binding="activatorBinding" :close :open></slot>

  <component
    :is="props.is"
    v-bind="$attrs"
    ref="popover"
    popover
    class="g-popover"
    :class="{
      '--min-w-anchor': props.minWAnchor,
      '--min-h-anchor': props.minHAnchor,
    }"
    :id="id"
    @toggle="onToggle"
  >
    <slot :id :close-binding></slot>
  </component>
</template>

<style scoped>
.g-popover {
  --gap: 0.5rem;

  /* reset popover styles */
  inset: unset;

  /* position styling */
  position: fixed;
  position-anchor: v-bind("props.anchor ?? anchorName");
  position-area: v-bind("positionArea");
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;

  /* size styling */
  &.--min-w-anchor {
    min-width: anchor-size(width);
  }

  &.--min-h-anchor {
    min-height: anchor-size(height);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .g-popover {
    transition-duration: 0.2s;
    transition-property: opacity, scale, display, overlay;
    transition-behavior: allow-discrete;
    opacity: 0;
    scale: 0.95;

    &:popover-open {
      opacity: 1;
      scale: 1;

      @starting-style {
        opacity: 0;
        scale: 0.95;
      }
    }
  }
}
</style>
