<script lang="ts" setup>
import type { Component } from "vue";
import type { GCardVariant } from "./types";

const props = withDefaults(
  defineProps<{
    is?: string | Component;
    variant?: GCardVariant;
  }>(),
  { is: "div", border: false },
);
</script>

<template>
  <component :is="props.is" class="g-card" :class="[`--${props.variant}`]">
    <slot></slot>
  </component>
</template>

<style scoped>
@layer components {
  .g-card {
    --background: var(--color-surface-1);
    --border: var(--color-border-surface-1);
    --color: var(--color-on-surface-1);

    display: flex;
    flex-direction: column;
    overflow: hidden;

    background: var(--background);
    border-color: var(--border);
    color: var(--color);

    &.--surface-2 {
      --background: var(--color-surface-2);
      --border: var(--color-border-surface-2);
      --color: var(--color-on-surface-2);
    }

    &.--surface-3 {
      --background: var(--color-surface-3);
      --border: var(--color-border-surface-3);
      --color: var(--color-on-surface-3);
    }

    &.--success {
      --background: var(--color-surface-success);
      --border: var(--color-border-success);
      --color: var(--color-on-success);
    }

    &.--error {
      --background: var(--color-surface-error);
      --border: var(--color-border-error);
      --color: var(--color-on-error);
    }

    &.--warning {
      --background: var(--color-surface-warning);
      --border: var(--color-border-warning);
      --color: var(--color-on-warning);
    }

    &.--info {
      --background: var(--color-surface-info);
      --border: var(--color-border-info);
      --color: var(--color-on-info);
    }
  }
}
</style>
