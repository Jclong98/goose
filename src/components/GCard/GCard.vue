<script lang="ts" setup>
import type { Component } from "vue";
import type { GCardVariant } from "./types";

const props = withDefaults(
  defineProps<{
    is?: string | Component;
    variant?: GCardVariant;
    interactive?: boolean;
  }>(),
  { is: "div", variant: "surface-1", interactive: false },
);
</script>

<template>
  <component
    :is="props.is"
    class="g-card"
    :class="[`--${props.variant}`, { '--interactive': props.interactive }]"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
@layer components {
  .g-card {
    /* layout */
    display: flex;
    flex-direction: column;
    overflow: hidden;

    /* colors */
    --background: var(--color-surface-1);
    --border: var(--color-border-surface-1);
    --color: var(--color-on-surface-1);

    background: var(--background);
    border-color: var(--border);
    color: var(--color);

    &.--interactive {
      &:hover {
        --background: var(--color-surface-1-hover);
      }

      &:active {
        --background: var(--color-surface-1-active);
      }
    }

    &.--surface-2 {
      --background: var(--color-surface-2);
      --border: var(--color-border-surface-2);
      --color: var(--color-on-surface-2);

      &.--interactive {
        &:hover {
          --background: var(--color-surface-2-hover);
        }

        &:active {
          --background: var(--color-surface-2-active);
        }
      }
    }

    &.--surface-3 {
      --background: var(--color-surface-3);
      --border: var(--color-border-surface-3);
      --color: var(--color-on-surface-3);

      &.--interactive {
        &:hover {
          --background: var(--color-surface-3-hover);
        }

        &:active {
          --background: var(--color-surface-3-active);
        }
      }
    }

    &.--success {
      --background: var(--color-surface-success);
      --border: var(--color-border-success);
      --color: var(--color-on-success);

      &.--interactive {
        &:hover {
          --background: var(--color-surface-success-hover);
        }

        &:active {
          --background: var(--color-surface-success-active);
        }
      }
    }

    &.--danger {
      --background: var(--color-surface-danger);
      --border: var(--color-border-danger);
      --color: var(--color-on-danger);

      &.--interactive {
        &:hover {
          --background: var(--color-surface-danger-hover);
        }

        &:active {
          --background: var(--color-surface-danger-active);
        }
      }
    }

    &.--warning {
      --background: var(--color-surface-warning);
      --border: var(--color-border-warning);
      --color: var(--color-on-warning);

      &.--interactive {
        &:hover {
          --background: var(--color-surface-warning-hover);
        }

        &:active {
          --background: var(--color-surface-warning-active);
        }
      }
    }

    &.--info {
      --background: var(--color-surface-info);
      --border: var(--color-border-info);
      --color: var(--color-on-info);

      &.--interactive {
        &:hover {
          --background: var(--color-surface-info-hover);
        }

        &:active {
          --background: var(--color-surface-info-active);
        }
      }
    }
  }
}
</style>
