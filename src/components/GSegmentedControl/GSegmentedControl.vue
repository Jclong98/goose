<script lang="ts" setup generic="T">
import type { GSegmentedControlItem } from "./types";

const props = withDefaults(
  defineProps<{
    label: string;
    visibleLabel?: boolean;
    items: GSegmentedControlItem<T>[];
    inputType?: "radio" | "checkbox";
  }>(),
  {
    inputType: "radio",
  },
);

const modelValue = defineModel<T | T[]>();
</script>

<template>
  <fieldset class="isolate flex flex-col gap-4">
    <legend
      :class="{
        'sr-only': !props.visibleLabel,
      }"
    >
      {{ props.label }}
    </legend>

    <div class="flex gap-0.5 rounded-full bg-gray-100 p-0.5">
      <label
        v-for="item in props.items"
        :key="`${item.value}`"
        class="has-checked:ring-goose has-checked:bg-goose/30 flex-1 cursor-pointer px-4 py-1 text-center ring-2 ring-gray-300 first-of-type:rounded-l-full last-of-type:rounded-r-full has-checked:z-1"
      >
        <input
          v-model="modelValue"
          :type="props.inputType"
          :value="item.value"
          :name="props.label"
          class="peer sr-only"
        />
        <slot name="label" :item="item">
          {{ item.label }}
        </slot>
      </label>
    </div>
  </fieldset>
</template>
