import type { Edge, Node } from "./types";

export function createNode(node: Partial<Node> & Pick<Node, "id" | "x" | "y">): Node {
  return {
    radius: 30,
    isBeingDragged: false,
    color: "gray",
    ...node,
  };
}

export function createEdge(edge: Partial<Edge> & Pick<Edge, "source" | "target">): Edge {
  return {
    length: 150,
    color: "gray",
    width: 1,
    ...edge,
  };
}
