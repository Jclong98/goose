<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "ghost" | "link";
    disabled?: boolean;
  }>(),
  {
    variant: "secondary",
    disabled: false,
  },
);

const emit = defineEmits<{
  click: [event: MouseEvent];
  "click:disabled": [event: MouseEvent];
}>();

function onClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault();
    emit("click:disabled", event);
    return;
  }
  emit("click", event);
}
</script>

<template>
  <button
    class="g-button"
    :class="`--${props.variant}`"
    :aria-disabled="props.disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<style scoped>
.g-button {
  --g-button-padding: 0.25em 1em;

  white-space: nowrap;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.1s ease;

  &[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.--primary {
    background-color: var(--color-goose);
    color: black;
    padding: var(--g-button-padding);

    &:hover {
      background-color: oklch(from var(--color-goose) 0.85 c h);
    }

    &:active {
      background-color: oklch(from var(--color-goose) 0.8 c h);
    }
  }

  &.--secondary {
    background-color: var(--color-zinc-100);
    color: black;
    border: 1px solid var(--color-zinc-300);
    padding: var(--g-button-padding);

    &:hover {
      background-color: var(--color-zinc-200);
    }

    &:active {
      background-color: var(--color-zinc-300);
    }
  }

  &.--ghost {
    background-color: transparent;
    color: black;
    padding: var(--g-button-padding);

    &:hover {
      background-color: var(--color-zinc-100);
    }

    &:active {
      background-color: var(--color-zinc-200);
    }
  }

  &.--link {
    background-color: transparent;
    color: var(--color-blue-500);
    text-decoration: underline;

    &:hover {
      color: var(--color-blue-600);
    }

    &:active {
      color: var(--color-blue-700);
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
    background-color: var(--color-zinc-800);
    color: var(--color-white);
    border: 1px solid var(--color-zinc-600);

    &:hover {
      background-color: var(--color-zinc-700);
    }

    &:active {
      background-color: var(--color-zinc-600);
    }
  }

  &.--ghost {
    background-color: transparent;
    color: var(--color-white);

    &:hover {
      background-color: var(--color-zinc-800);
    }

    &:active {
      background-color: var(--color-zinc-700);
    }
  }

  &.--link {
    background-color: transparent;
    color: var(--color-blue-400);
    text-decoration: underline;

    &:hover {
      color: var(--color-blue-300);
    }

    &:active {
      color: var(--color-blue-200);
    }
  }
}
</style>
