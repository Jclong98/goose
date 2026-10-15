<script lang="ts" setup>
import { computed } from "vue";

import type { ResolvedEdge } from "./types";

const emit = defineEmits<{
  delete: [];
}>();

const modelValue = defineModel<ResolvedEdge>({ required: true });

const midPoint = computed(() => ({
  x: (modelValue.value.sourceNode.x + modelValue.value.targetNode.x) / 2,
  y: (modelValue.value.sourceNode.y + modelValue.value.targetNode.y) / 2,
}));

function onDeleteKeydown(event: KeyboardEvent) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    emit("delete");
  }
}
</script>

<template>
  <g>
    <line
      :x1="modelValue.sourceNode.x"
      :y1="modelValue.sourceNode.y"
      :x2="modelValue.targetNode.x"
      :y2="modelValue.targetNode.y"
      :stroke="modelValue.color"
      :stroke-width="modelValue.width"
    />

    <text
      v-if="modelValue.label"
      class="select-none"
      :x="midPoint.x"
      :y="midPoint.y - 8"
      text-anchor="middle"
      fill="currentColor"
    >
      {{ modelValue.label }}
    </text>

    <circle
      role="button"
      :aria-label="`Delete edge between ${modelValue.source} and ${modelValue.target}`"
      tabindex="0"
      :cx="midPoint.x"
      :cy="midPoint.y"
      r="10"
      fill="transparent"
      class="cursor-pointer outline-0 hover:fill-red-400 focus-visible:stroke-red-400 focus-visible:stroke-2 active:fill-red-600"
      @click="emit('delete')"
      @keydown="onDeleteKeydown"
    />
  </g>
</template>
