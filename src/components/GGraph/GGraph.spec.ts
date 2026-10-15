import { mount } from "@vue/test-utils";
import { nextTick, ref } from "vue";

import GGraph from "./GGraph.vue";
import GGraphEdge from "./GGraphEdge.vue";
import GGraphNode from "./GGraphNode.vue";
import { applyEdgeSprings, applyNodeRepulsion } from "./physics";
import type { Graph, ResolvedEdge } from "./types";
import { createEdge, createNode } from "./utils";

function makeGraph(): { graph: Graph; nodes: Graph["nodes"]; edges: ResolvedEdge[] } {
  const nodes = [createNode({ id: "a", x: 0, y: 0 }), createNode({ id: "b", x: 200, y: 0 })];
  const edge = createEdge({ source: "a", target: "b" });
  const resolved: ResolvedEdge = { ...edge, sourceNode: nodes[0], targetNode: nodes[1] };
  return { graph: { nodes, edges: [edge] }, nodes, edges: [resolved] };
}

describe("physics", () => {
  describe("applyEdgeSprings", () => {
    it("pulls nodes together when the edge is longer than its target length", () => {
      const { nodes, edges } = makeGraph();

      applyEdgeSprings(edges, 0.1);

      // currentLength 200, target 150 → each end moves (200 - 150) * 0.1 = 5px
      expect(nodes[0].x).toBeCloseTo(5);
      expect(nodes[1].x).toBeCloseTo(195);
    });

    it("pushes nodes apart when the edge is shorter than its target length", () => {
      const { nodes, edges } = makeGraph();
      nodes[1].x = 100;

      applyEdgeSprings(edges, 0.1);

      expect(nodes[0].x).toBeCloseTo(-5);
      expect(nodes[1].x).toBeCloseTo(105);
    });

    it("does not move nodes that are being dragged", () => {
      const { nodes, edges } = makeGraph();

      applyEdgeSprings(edges, 0.1, (id) => id === "a");

      expect(nodes[0].x).toBe(0);
      expect(nodes[0].y).toBe(0);
      expect(nodes[1].x).toBeCloseTo(195);
    });
  });

  describe("applyNodeRepulsion", () => {
    it("pushes nodes closer than minDistance apart", () => {
      const nodes = [createNode({ id: "a", x: 0, y: 0 }), createNode({ id: "b", x: 50, y: 0 })];

      applyNodeRepulsion(nodes, 100, 0.1);

      // offset (100 - 50) * 0.1 = 5px each way
      expect(nodes[0].x).toBeCloseTo(-5);
      expect(nodes[1].x).toBeCloseTo(55);
    });

    it("leaves nodes at or beyond minDistance alone", () => {
      const nodes = [createNode({ id: "a", x: 0, y: 0 }), createNode({ id: "b", x: 100, y: 0 })];

      applyNodeRepulsion(nodes, 100, 0.1);

      expect(nodes[0].x).toBe(0);
      expect(nodes[1].x).toBe(100);
    });

    it("does not move nodes that are being dragged", () => {
      const nodes = [createNode({ id: "a", x: 0, y: 0 }), createNode({ id: "b", x: 50, y: 0 })];

      applyNodeRepulsion(nodes, 100, 0.1, (id) => id === "a");

      expect(nodes[0].x).toBe(0);
      expect(nodes[1].x).toBeCloseTo(55);
    });
  });
});

describe("GGraph", () => {
  function mountGraph(graph: Graph) {
    const model = ref(graph);
    const wrapper = mount(GGraph, {
      props: {
        modelValue: graph,
        "onUpdate:modelValue": (value: Graph) => {
          model.value = value;
        },
      },
    });
    return { model, wrapper };
  }

  function makeFullGraph(): Graph {
    const nodes = [
      createNode({ id: "a", x: 100, y: 100 }),
      createNode({ id: "b", x: 300, y: 100 }),
    ];
    const edges = [createEdge({ source: "a", target: "b" })];
    return { nodes, edges };
  }

  it("renders a node and an edge for each model entry", () => {
    const { wrapper } = mountGraph(makeFullGraph());

    expect(wrapper.findAllComponents(GGraphNode)).toHaveLength(2);
    expect(wrapper.findAllComponents(GGraphEdge)).toHaveLength(1);
  });

  it("does not render edges that reference missing nodes", () => {
    const graph = makeFullGraph();
    graph.edges.push(createEdge({ source: "a", target: "missing" }));
    const { wrapper } = mountGraph(graph);

    expect(wrapper.findAllComponents(GGraphEdge)).toHaveLength(1);
  });

  it("deletes a node and its connected edges", async () => {
    const { model, wrapper } = mountGraph(makeFullGraph());

    wrapper.findAllComponents(GGraphNode)[0].vm.$emit("delete");
    await nextTick();

    expect(model.value.nodes).toHaveLength(1);
    expect(model.value.nodes[0].id).toBe("b");
    expect(model.value.edges).toHaveLength(0);
  });

  it("deletes an edge without removing nodes", async () => {
    const { model, wrapper } = mountGraph(makeFullGraph());

    wrapper.findAllComponents(GGraphEdge)[0].vm.$emit("delete");
    await nextTick();

    expect(model.value.edges).toHaveLength(0);
    expect(model.value.nodes).toHaveLength(2);
  });
});
