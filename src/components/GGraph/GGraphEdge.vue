<script lang="ts" setup>
import { computed } from "vue";

import type { Edge } from "./types";

const emit = defineEmits<{
  delete: [];
}>();

const modelValue = defineModel<Edge>({ required: true });

const midPoint = computed(() => ({
  x: (modelValue.value.source.x + modelValue.value.target.x) / 2,
  y: (modelValue.value.source.y + modelValue.value.target.y) / 2,
}));
</script>

<template>
  <g>
    <line
      :x1="modelValue.source.x"
      :y1="modelValue.source.y"
      :x2="modelValue.target.x"
      :y2="modelValue.target.y"
      :style="{
        stroke: modelValue.color,
      }"
      :stroke-width="modelValue.width"
    />

    <text
      v-if="modelValue.label"
      class="select-none"
      :x="midPoint.x"
      :y="midPoint.y"
      text-anchor="middle"
    >
      {{ modelValue.label }}
    </text>

    <circle
      :cx="midPoint.x"
      :cy="midPoint.y"
      r="10"
      fill="transparent"
      class="cursor-pointer hover:fill-red-400 active:fill-red-600"
      @click="emit('delete')"
    />
  </g>
</template>
