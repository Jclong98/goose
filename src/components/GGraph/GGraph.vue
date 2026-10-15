<script lang="ts" setup>
import { useRafFn } from "@vueuse/core";
import { computed, reactive, useTemplateRef, watch } from "vue";

import GGraphEdge from "./GGraphEdge.vue";
import GGraphNode from "./GGraphNode.vue";
import { applyEdgeSprings, applyNodeRepulsion } from "./physics";
import type { Graph, Node, ResolvedEdge } from "./types";

const props = withDefaults(
  defineProps<{
    minDistance?: number;
    repulsionFactor?: number;
    speed?: number;
  }>(),
  {
    minDistance: 100,
    repulsionFactor: 0.1,
    speed: 0.1,
  },
);

const modelValue = defineModel<Graph>({ required: true });

const svgElement = useTemplateRef<SVGSVGElement>("svgElement");

const draggingIds = new Set<string>();
const isDragging = (id: string) => draggingIds.has(id);

// Panning the canvas: dragging on empty space (not on a node or edge)
// translates the whole graph via a viewport offset instead of moving each node.
const pan = reactive({ x: 0, y: 0 });
let isPanning = false;
let panStart = { x: 0, y: 0 };

function onCanvasPointerDown(event: PointerEvent) {
  if (event.button !== 0 || event.target !== svgElement.value) return;
  isPanning = true;
  panStart = { x: event.clientX, y: event.clientY };

  if (!svgElement.value) return;

  svgElement.value.setPointerCapture(event.pointerId);
}

function onCanvasPointerMove(event: PointerEvent) {
  if (!isPanning) return;
  pan.x += event.clientX - panStart.x;
  pan.y += event.clientY - panStart.y;
  panStart = { x: event.clientX, y: event.clientY };
}

function onCanvasPointerUp(event: PointerEvent) {
  if (!isPanning) return;
  isPanning = false;
  svgElement.value?.releasePointerCapture(event.pointerId);
}

const nodeById = computed(() => new Map(modelValue.value.nodes.map((node) => [node.id, node])));

type EdgeView = ResolvedEdge & { index: number };

const resolvedEdges = computed<EdgeView[]>(() =>
  modelValue.value.edges.flatMap((edge, index) => {
    const sourceNode = nodeById.value.get(edge.source);
    const targetNode = nodeById.value.get(edge.target);
    if (!sourceNode || !targetNode) return [];
    return [{ ...edge, sourceNode, targetNode, index }];
  }),
);

// While settled, the simulation only verifies that nothing changed (O(n) per
// frame). Any movement, structural change, or drag re-activates it.
let settledNodes: { x: number; y: number }[] | null = null;
let settledEdgeLengths: number[] | null = null;

function getCenter(): { x: number; y: number } | null {
  const svg = svgElement.value;
  const width = svg?.clientWidth ?? 0;
  const height = svg?.clientHeight ?? 0;
  if (!width || !height) return null;
  return { x: width / 2, y: height / 2 };
}

useRafFn(() => {
  const { nodes, edges } = modelValue.value;

  if (settledNodes && settledEdgeLengths) {
    const stillSettled =
      draggingIds.size === 0 &&
      nodes.length === settledNodes.length &&
      settledNodes.every((position, i) => position.x === nodes[i].x && position.y === nodes[i].y) &&
      edges.length === settledEdgeLengths.length &&
      settledEdgeLengths.every((length, i) => length === edges[i].length);
    if (stillSettled) return;
    settledNodes = null;
    settledEdgeLengths = null;
  }

  const displacement =
    applyNodeRepulsion(nodes, props.minDistance, props.repulsionFactor, isDragging) +
    applyEdgeSprings(resolvedEdges.value, props.speed, isDragging);

  if (displacement < 0.01 && draggingIds.size === 0) {
    settledNodes = nodes.map((node) => ({ x: node.x, y: node.y }));
    settledEdgeLengths = edges.map((edge) => edge.length);
    return;
  }
});

// Physics changes require re-running the simulation.
watch(
  () => [props.minDistance, props.repulsionFactor, props.speed],
  () => {
    settledNodes = null;
    settledEdgeLengths = null;
  },
);

function deleteEdge(edge: EdgeView) {
  if (edge.index < 0 || edge.index >= modelValue.value.edges.length) return;
  modelValue.value.edges.splice(edge.index, 1);
}

function deleteNode(node: Node) {
  const index = modelValue.value.nodes.findIndex((_node) => _node.id === node.id);
  if (index === -1) return;

  draggingIds.delete(node.id);
  modelValue.value.nodes.splice(index, 1);
  modelValue.value.edges = modelValue.value.edges.filter(
    (edge) => edge.source !== node.id && edge.target !== node.id,
  );
}
</script>

<template>
  <svg
    ref="svgElement"
    class="cursor-grab touch-none select-none active:cursor-grabbing"
    @pointerdown="onCanvasPointerDown"
    @pointermove="onCanvasPointerMove"
    @pointerup="onCanvasPointerUp"
    @pointercancel="onCanvasPointerUp"
  >
    <g :transform="`translate(${pan.x} ${pan.y})`">
      <GGraphEdge
        v-for="edge in resolvedEdges"
        :key="`${edge.source}-${edge.target}-${edge.index}`"
        :model-value="edge"
        @delete="deleteEdge(edge)"
      />

      <GGraphNode
        v-for="node in modelValue.nodes"
        :key="node.id"
        :model-value="node"
        @delete="deleteNode(node)"
        @drag-start="draggingIds.add(node.id)"
        @drag-end="draggingIds.delete(node.id)"
      />
    </g>
  </svg>
</template>
