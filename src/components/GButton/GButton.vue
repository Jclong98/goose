<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "ghost" | "link";
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
    background-color: var(--color-goose);
    color: black;

    &:hover {
      background-color: oklch(from var(--color-goose) 0.85 c h);
    }

    &:active {
      background-color: oklch(from var(--color-goose) 0.8 c h);
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

.dark .g-button {
  &.--primary {
    &:hover {
      background-color: oklch(from var(--color-goose) 0.8 c h);
    }

    &:active {
      background-color: oklch(from var(--color-goose) 0.7 c h);
    }
  }

  &.--secondary {
    background-color: #333;
    color: white;
    border: 1px solid #555;

    &:hover {
      background-color: #444;
    }

    &:active {
      background-color: #555;
    }
  }

  &.--ghost {
    background-color: transparent;
    color: white;

    &:hover {
      background-color: #333;
    }

    &:active {
      background-color: #444;
    }
  }

  &.--link {
    background-color: transparent;
    color: #66b2ff;
    text-decoration: underline;

    &:hover {
      color: #3399ff;
    }

    &:active {
      color: #007acc;
    }
  }
}
</style>
