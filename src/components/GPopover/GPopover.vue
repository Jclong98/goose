<script lang="ts" setup>
import { computed, onMounted, useTemplateRef, watch, type StyleValue } from "vue";

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

    /**
     * The popover attribute specifies the type of popover.
     * [See MDN for more details](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover#values).
     */
    popover?: "auto" | "hint" | "manual";

    /**
     * The popovertargetaction attribute specifies the action to perform when the popovertarget is activated. This attribute is only applicable when `mode="click"`.
     * [See MDN for more details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#popovertargetaction).
     */
    popovertargetaction?: "toggle" | "show";

    is?: string;
  }>(),
  {
    positionArea: "bottom",
    anchor: undefined,
    mode: "click",
    minWAnchor: false,
    minHAnchor: false,
    is: "div",
    popover: "auto",
    popovertargetaction: "toggle",
  },
);

const isOpen = defineModel<boolean>("open");

const popoverElement = useTemplateRef<HTMLElement>("popover");

const open = () => popoverElement.value?.showPopover();
const close = () => popoverElement.value?.hidePopover();

const onToggle = (event: ToggleEvent) => {
  isOpen.value = event.newState === "open";
};

// If the popover is initially open, we need to call open() to set the correct state and position.
onMounted(() => {
  watch(isOpen, (nv) => (nv ? open() : close()), { immediate: true });
});

const id = useUniqueId();
const anchorName = computed(() => `--${id.value}-anchor`);
const selfAnchorName = computed(() => `--${id.value}-popover`);
const activatorBinding = computed(() => {
  const style: StyleValue = {
    "anchor-name": anchorName.value,
  };

  if (props.mode === "interest") {
    return {
      style,
      interestfor: id.value,
    };
  }

  return {
    style,
    popovertarget: id.value,
    popovertargetaction: props.popovertargetaction,
  };
});
const closeBinding = computed(() => ({
  commandfor: id.value,
  command: "hide-popover",
}));

defineExpose({
  open,
  close,
  id,
  anchorName,
  selfAnchorName,

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
    :popover="props.popover"
    class="g-popover"
    :class="{
      '--min-w-anchor': props.minWAnchor,
      '--min-h-anchor': props.minHAnchor,
    }"
    :id
    @toggle="onToggle"
  >
    <slot :id :close-binding :self-anchor-name></slot>
  </component>
</template>

<style scoped>
.g-popover {
  --gap: 0.5rem;

  /* position styling */
  position: fixed;
  position-anchor: v-bind("props.anchor ?? anchorName");
  anchor-name: v-bind("selfAnchorName");
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
