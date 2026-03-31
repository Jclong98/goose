<script lang="ts" setup>
import { useRafFn } from "@vueuse/core";

import GGraphEdge from "./GGraphEdge.vue";
import GGraphNode from "./GGraphNode.vue";
import type { Edge, Graph, Node } from "./types";

const { minDistance = 100, repulsionFactor = 0.1 } = defineProps<{
  minDistance?: number;
  repulsionFactor?: number;
}>();

const modelValue = defineModel<Graph>({ required: true });

const speed = 0.1;

function moveTowardsLength(edge: Edge) {
  const { source, target } = edge;

  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const currentLength = Math.sqrt(dx * dx + dy * dy);

  if (currentLength === 0) return;

  const scale = (currentLength - edge.length) * speed;
  const offsetX = (dx / currentLength) * scale;
  const offsetY = (dy / currentLength) * scale;

  // move the nodes
  target.x -= offsetX;
  target.y -= offsetY;

  source.x += offsetX;
  source.y += offsetY;
}

function applyNodeRepulsion(nodes: Node[]) {
  for (const [i, nodeA] of nodes.entries()) {
    for (const nodeB of nodes.slice(i + 1)) {
      const dx = nodeB.x - nodeA.x;
      const dy = nodeB.y - nodeA.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < minDistance) {
        const angle = Math.atan2(dy, dx);
        const offset = (minDistance - distance) * repulsionFactor;
        const offsetX = Math.cos(angle) * offset;
        const offsetY = Math.sin(angle) * offset;

        nodeA.x -= offsetX;
        nodeA.y -= offsetY;
        nodeB.x += offsetX;
        nodeB.y += offsetY;
      }
    }
  }
}

useRafFn(() => {
  applyNodeRepulsion(modelValue.value.nodes);

  for (const edge of modelValue.value.edges) {
    moveTowardsLength(edge);
  }
});

function deleteEdge(edge: Edge) {
  const index = modelValue.value.edges.findIndex(
    (e) => e.source.id === edge.source.id && e.target.id === edge.target.id,
  );
  if (index === -1) throw new Error("Edge not found");

  modelValue.value.edges.splice(index, 1);
}

function deleteNode(node: Node) {
  // Find the index of the node to be deleted
  const index = modelValue.value.nodes.findIndex((_node) => _node.id === node.id);
  if (index === -1) throw new Error("Node not found");

  // remove the node and its edges
  const nodeId = modelValue.value.nodes[index].id;
  modelValue.value.nodes.splice(index, 1);
  modelValue.value.edges = modelValue.value.edges.filter(
    (edge) => edge.source.id !== nodeId && edge.target.id !== nodeId,
  );
}
</script>

<template>
  <svg>
    <GGraphEdge
      v-for="(edge, index) in modelValue.edges"
      :key="`${edge.source}-${edge.target}`"
      :model-value="edge"
      @update:model-value="modelValue.edges[index] = $event"
      @delete="deleteEdge(edge)"
    />

    <GGraphNode
      v-for="(node, index) in modelValue.nodes"
      :key="node.id"
      :model-value="node"
      @update:model-value="modelValue.nodes[index] = $event"
      @delete="deleteNode(node)"
    />
  </svg>
</template>
