<script lang="ts" setup>
import "./GButton.css";
import LoadingThrobber from "./LoadingThrobber.vue";

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "neutral" | "ghost" | "link";
    disabled?: boolean | "lite";
    loading?: boolean;
  }>(),
  {
    variant: "neutral",
    disabled: false,
    loading: false,
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
    :class="[`--${props.variant}`, { '--disabled': props.disabled === true }]"
    :aria-disabled="!!props.disabled"
    @click="onClick"
  >
    <slot v-if="props.loading" name="loading">
      <LoadingThrobber />
    </slot>
    <slot v-else name="icon"></slot>

    <slot />
  </button>
</template>
