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
  <div :class="['g-side-panel', sideClass]" popover role="dialog" aria-modal="true">
    <slot></slot>
  </div>
</template>

<style scoped>
.g-side-panel {
  border: none;
  margin: 0;
  inset: auto;
  max-height: 100dvh;

  position-anchor: v-bind("props.anchor");

  &:popover-open {
    display: flex;
    flex-direction: column;
  }

  &.--left {
    left: anchor(left);
    top: anchor(top);
    height: anchor-size();
  }

  &.--right {
    right: anchor(right);
    top: anchor(top);
    height: anchor-size();
  }
}

.g-side-panel::backdrop {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;

  position-anchor: v-bind("props.anchor");
  top: anchor(top);
  left: anchor(left);
  right: anchor(right);
  bottom: anchor(bottom);
}
</style>
