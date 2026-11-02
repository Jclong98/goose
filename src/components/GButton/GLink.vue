<script lang="ts" setup>
import "./GButton.css";

import type { RouterLinkProps } from "vue-router";
import { RouterLink } from "vue-router";

const props = withDefaults(
  defineProps<
    RouterLinkProps & {
      variant?: "primary" | "neutral" | "ghost" | "link";
      loading?: boolean;
    }
  >(),
  {
    variant: "link",
    disabled: false,
  },
);
</script>

<template>
  <RouterLink
    class="g-button"
    :class="[`--${props.variant}`, { '--disabled': $attrs.disabled }]"
    v-bind="props"
  >
    <slot v-if="props.loading" name="loading">
      <LoadingThrobber />
    </slot>
    <slot v-else name="icon"></slot>

    <slot />
  </RouterLink>
</template>
