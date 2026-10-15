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
  createEdge({ source: "1", target: "2" }),
  createEdge({ source: "2", target: "3", length: 250, label: "long edge" }),
  createEdge({ source: "3", target: "1", length: 300, label: "longer edge" }),
  createEdge({ source: "3", target: "4" }),
];

const graph = ref<Graph>({ nodes, edges });
</script>

<template>
  <GGraph v-model="graph" class="h-100 w-full" />
</template>
