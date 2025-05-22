<script lang="ts" setup generic="T">
import type { GSegmentedControlItem } from "./types";

const props = defineProps<{
  label: string;
  visibleLabel?: boolean;
  items: GSegmentedControlItem<T>[];
  inputType?: "radio" | "checkbox";
}>();

const modelValue = defineModel<T | T[]>();
</script>

<template>
  <fieldset class="flex flex-col gap-4 isolate">
    <legend
      :class="{
        'sr-only': !props.visibleLabel,
      }"
    >
      {{ props.label }}
    </legend>

    <div class="flex gap-0.5 p-0.5 bg-gray-100 rounded-full max-w-fit">
      <label
        v-for="item in props.items"
        :key="`${item.value}`"
        class="px-4 py-1 cursor-pointer first-of-type:rounded-l-full last-of-type:rounded-r-full ring-2 ring-gray-300 has-checked:ring-goose has-checked:bg-goose/30 has-checked:z-1"
      >
        <input
          v-model="modelValue"
          :type="props.inputType ?? 'radio'"
          :value="item.value"
          :name="props.label"
          class="sr-only peer"
        />
        <slot name="label" :item="item">
          {{ item.label }}
        </slot>
      </label>
    </div>
  </fieldset>
</template>
