<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    /**
     * CSS anchor name (e.g., "--main") that must match the `anchor-name`
     * property of the element this drawer is anchored to.
     */
    anchor: string;
    side?: "left" | "right";
  }>(),
  {
    side: "right",
  },
);

const sideClass = computed(() => `--${props.side}`);
</script>

<template>
  <div :class="['g-drawer', sideClass]" popover role="dialog" aria-modal="true">
    <slot></slot>
  </div>
</template>

<style scoped>
/* GDrawer Layout & Structure */
.g-drawer {
  /* Layout & Reset */
  border: none;
  margin: 0;
  inset: auto;

  /* Anchor Positioning */
  position-anchor: v-bind("props.anchor");

  /* Animation & Transition */
  transition:
    opacity 0.2s,
    translate 0.2s,
    display 0.2s allow-discrete;
  opacity: 0;
  translate: var(--g-drawer-animation-translate);

  &:popover-open {
    /* display: flex;
    flex-direction: column; */
    opacity: 1;
    translate: none;

    @starting-style {
      & {
        opacity: 0;
        translate: var(--g-drawer-animation-translate);
      }
    }
  }

  /* Side-specific Anchor Styles */
  &.--left {
    --g-drawer-animation-translate: -100%;
    left: anchor(left);
    top: anchor(top);
    height: anchor-size();
  }

  &.--right {
    --g-drawer-animation-translate: 100%;
    right: anchor(right);
    top: anchor(top);
    height: anchor-size();
  }
}

/* Backdrop Styling */
.g-drawer::backdrop {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;

  position-anchor: v-bind("props.anchor");
  top: anchor(top);
  left: anchor(left);
  right: anchor(right);
  bottom: anchor(bottom);
}
</style>
