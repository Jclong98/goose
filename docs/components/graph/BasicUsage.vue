<script lang="ts" setup>
import { ref } from "vue";

import type { Edge, Graph, Node } from "@/components";
import { GGraph, createEdge, createNode } from "@/components/GGraph";

const nodes: Node[] = [
  createNode({ id: "1", x: 100, y: 200, label: "Node 1", radius: 20 }),
  createNode({ id: "2", x: 221, y: 100, color: "tomato", label: "Node 2" }),
  createNode({ id: "3", x: 356, y: 300, color: "#bada55", label: "Node 3", radius: 40 }),
  createNode({ id: "4", x: 500, y: 300, color: "var(--color-blue-500)" }),
];

const edges: Edge[] = [
  createEdge({ source: nodes[0], target: nodes[1] }),
  createEdge({ source: nodes[1], target: nodes[2], length: 250, label: "long edge" }),
  createEdge({ source: nodes[2], target: nodes[0], length: 300, label: "longer edge" }),
  createEdge({ source: nodes[2], target: nodes[3] }),
];

const graph = ref<Graph>({ nodes, edges });
</script>

<template>
  <GGraph v-model="graph" class="h-100 w-full" />
</template>
