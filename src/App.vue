<script lang="ts" setup>
import { GGraph } from "@/components";
import { ref } from "vue";
import { createEdge, createNode, type Edge, type Graph, type Node } from "./components/GGraph";

const nodes: Node[] = [
  createNode({ id: "1", x: 125, y: 250, label: "Node 1", radius: 20 }),
  createNode({ id: "2", x: 221, y: 135, label: "Node 2" }),
  createNode({ id: "3", x: 356, y: 345, label: "Node 3", radius: 40 }),
  createNode({ id: "4", x: 500, y: 314 }),
];

const edges: Edge[] = [
  createEdge({ source: nodes[0], target: nodes[1] }),
  createEdge({ source: nodes[1], target: nodes[2], length: 250, label: "longer edge 1" }),
  createEdge({ source: nodes[2], target: nodes[0], length: 250, label: "longer edge 2" }),
  createEdge({ source: nodes[2], target: nodes[3] }),
];

const graph = ref<Graph>({ nodes, edges });
</script>

<template>
  <div class="h-screen">
    <GGraph v-model="graph" class="h-full w-full" />
  </div>
</template>
