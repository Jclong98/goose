<script lang="ts" setup>
type ButtonVariant = "primary" | "secondary" | "ghost" | "link";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
  }>(),
  {
    variant: "secondary",
  },
);
</script>

<template>
  <button class="g-button" :class="`--${props.variant}`">
    <slot />
  </button>
</template>

<style scoped>
.g-button {
  white-space: nowrap;
  padding: 0.25em 1em;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.1s ease;

  &.--primary {
    background-color: #ffe07b;
    color: black;

    &:hover {
      background-color: #ffd54f;
    }

    &:active {
      background-color: #ffc107;
    }
  }

  &.--secondary {
    background-color: #eee;
    color: black;
    border: 1px solid #ccc;

    &:hover {
      background-color: #ddd;
    }

    &:active {
      background-color: #ccc;
    }
  }

  &.--ghost {
    background-color: transparent;
    color: black;

    &:hover {
      background-color: #eee;
    }

    &:active {
      background-color: #ddd;
    }
  }

  &.--link {
    background-color: transparent;
    color: #007bff;
    text-decoration: underline;

    &:hover {
      color: #0056b3;
    }

    &:active {
      color: #004085;
    }
  }
}
</style>
