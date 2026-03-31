export type Node = {
  id: string;
  label?: string;
  x: number;
  y: number;
  radius: number;
  isBeingDragged: boolean;
  color: string;
};

export type Edge = {
  label?: string;
  source: Node;
  target: Node;
  length: number;
  color: string;
  width: number;
};

export type Graph = {
  nodes: Node[];
  edges: Edge[];
};
