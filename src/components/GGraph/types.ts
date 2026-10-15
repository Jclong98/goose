export type Node = {
  id: string;
  label?: string;
  x: number;
  y: number;
  radius: number;
  color: string;
};

export type Edge = {
  label?: string;
  source: string;
  target: string;
  length: number;
  color: string;
  width: number;
};

export type ResolvedEdge = Edge & {
  sourceNode: Node;
  targetNode: Node;
};

export type Graph = {
  nodes: Node[];
  edges: Edge[];
};
