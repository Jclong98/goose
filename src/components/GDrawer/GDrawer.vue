<script lang="ts" setup>
import { useUniqueId } from "@/composables";
import { computed } from "vue";

defineOptions({ inheritAttrs: false });

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

const id = useUniqueId();
const activatorBinding = computed(() => ({
  popovertarget: id.value,
}));

const closeBinding = computed(() => ({
  commandfor: id.value,
  command: "hide-popover",
}));
</script>

<template>
  <slot name="activator" :binding="activatorBinding"></slot>

  <div
    v-bind="$attrs"
    :id="id"
    :class="['g-drawer', sideClass]"
    popover
    role="dialog"
    aria-modal="true"
  >
    <slot :closeBinding="closeBinding"></slot>
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

  /* Side-specific Anchor Styles */
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

  /* Backdrop Styling */
  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;

    position-anchor: v-bind("props.anchor");
    top: anchor(top);
    left: anchor(left);
    right: anchor(right);
    bottom: anchor(bottom);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .g-drawer {
    transition:
      opacity 0.2s,
      translate 0.2s,
      display 0.2s allow-discrete;
    opacity: 0;
    translate: var(--g-drawer-animation-translate);

    &:popover-open {
      opacity: 1;
      translate: none;

      @starting-style {
        opacity: 0;
        translate: var(--g-drawer-animation-translate);
      }
    }

    &.--left {
      --g-drawer-animation-translate: -100%;
    }
    &.--right {
      --g-drawer-animation-translate: 100%;
    }
  }
}
</style>
