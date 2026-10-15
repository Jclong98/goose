<script lang="ts" setup>
import { useMouse, useMousePressed, useRafFn } from "@vueuse/core";
import { reactive, useTemplateRef, watch } from "vue";

import type { Node } from "./types";

const emit = defineEmits<{
  delete: [];
  "drag-start": [];
  "drag-end": [];
}>();

const modelValue = defineModel<Node>({ required: true });

const circleElement = useTemplateRef<SVGCircleElement>("circleElement");
const { x: mouseX, y: mouseY } = useMouse();
const { pressed } = useMousePressed({ target: circleElement });

const clickOffsetPosition = reactive({ x: 0, y: 0 });

function toSvgPoint(clientX: number, clientY: number) {
  // Use the circle's own CTM (which includes ancestor transforms like canvas
  // panning) so the point is in the same space the node's x/y live in.
  const ctm = circleElement.value?.getScreenCTM();
  if (!ctm) return { x: clientX, y: clientY };
  const point = new DOMPoint(clientX, clientY).matrixTransform(ctm.inverse());
  return { x: point.x, y: point.y };
}

const dragSpeed = 0.5;

const dragLoop = useRafFn(
  () => {
    if (!pressed.value) return;
    // Ease the node towards the mouse (minus the grab offset) while pressed.
    const point = toSvgPoint(mouseX.value, mouseY.value);
    const targetX = point.x - clickOffsetPosition.x;
    const targetY = point.y - clickOffsetPosition.y;
    modelValue.value.x += (targetX - modelValue.value.x) * dragSpeed;
    modelValue.value.y += (targetY - modelValue.value.y) * dragSpeed;
  },
  // Only run the drag loop while actually dragging.
  { immediate: false },
);

watch(pressed, (isPressed) => {
  if (isPressed) {
    // Record the offset between the mouse and the node's center so the node
    // does not jump to the cursor on grab.
    const point = toSvgPoint(mouseX.value, mouseY.value);
    clickOffsetPosition.x = point.x - modelValue.value.x;
    clickOffsetPosition.y = point.y - modelValue.value.y;
    dragLoop.resume();
    emit("drag-start");
  } else {
    dragLoop.pause();
    emit("drag-end");
  }
});

const keyDeltas: Record<string, [number, number]> = {
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
};

function onNodeKeydown(event: KeyboardEvent) {
  const delta = keyDeltas[event.key];
  if (delta) {
    event.preventDefault();
    const step = event.shiftKey ? 1 : 10;
    modelValue.value.x += delta[0] * step;
    modelValue.value.y += delta[1] * step;
    return;
  }
  if (event.key === "Delete" || event.key === "Backspace") {
    event.preventDefault();
    emit("delete");
  }
}

function onDeleteKeydown(event: KeyboardEvent) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    emit("delete");
  }
}
</script>

<template>
  <g>
    <!-- node -->
    <circle
      ref="circleElement"
      :cx="modelValue.x"
      :cy="modelValue.y"
      :r="modelValue.radius"
      class="node-circle cursor-grab outline-0 focus-visible:stroke-3 active:cursor-grabbing"
      tabindex="0"
      @keydown="onNodeKeydown"
    />

    <!-- label -->
    <text
      v-if="modelValue.label"
      class="select-none"
      :x="modelValue.x"
      :y="modelValue.y - modelValue.radius - 10"
      text-anchor="middle"
      fill="currentColor"
    >
      {{ modelValue.label }}
    </text>

    <!-- delete button -->
    <circle
      role="button"
      :aria-label="`Delete ${modelValue.label ?? modelValue.id}`"
      tabindex="0"
      :cx="modelValue.x + modelValue.radius"
      :cy="modelValue.y - modelValue.radius"
      r="10"
      fill="transparent"
      class="cursor-pointer outline-0 hover:fill-red-400 focus-visible:stroke-red-400 focus-visible:stroke-2 active:fill-red-600"
      @click="emit('delete')"
      @keydown="onDeleteKeydown"
    />
  </g>
</template>

<style scoped>
.node-circle {
  --color: v-bind("modelValue.color");
  fill: var(--color);

  &:hover {
    fill: var(--color);
    fill: oklch(from var(--color) calc(l * 0.9) c h);
  }

  &:active {
    fill: var(--color);
    fill: oklch(from var(--color) calc(l * 0.8) c h);
  }

  &:focus-visible {
    stroke: var(--color);
    stroke: oklch(from var(--color) calc(l * 0.7) c h);
    stroke-width: 3px;
  }
}
</style>
