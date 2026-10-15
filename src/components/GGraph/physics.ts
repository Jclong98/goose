import type { Node, ResolvedEdge } from "./types";

export type DragPredicate = (id: string) => boolean;

/**
 * Pushes node pairs closer than `minDistance` apart.
 * Returns the total distance (in px) that nodes were moved.
 */
export function applyNodeRepulsion(
  nodes: Node[],
  minDistance: number,
  repulsionFactor: number,
  isDragging: DragPredicate = () => false,
): number {
  let total = 0;

  for (const [i, nodeA] of nodes.entries()) {
    for (const nodeB of nodes.slice(i + 1)) {
      const dx = nodeB.x - nodeA.x;
      const dy = nodeB.y - nodeA.y;
      const distance = Math.hypot(dx, dy);

      if (distance >= minDistance) continue;

      const angle = Math.atan2(dy, dx);
      const offset = (minDistance - distance) * repulsionFactor;
      const offsetX = Math.cos(angle) * offset;
      const offsetY = Math.sin(angle) * offset;

      if (!isDragging(nodeA.id)) {
        nodeA.x -= offsetX;
        nodeA.y -= offsetY;
        total += offset;
      }
      if (!isDragging(nodeB.id)) {
        nodeB.x += offsetX;
        nodeB.y += offsetY;
        total += offset;
      }
    }
  }

  return total;
}

/**
 * Springs each edge towards its target length.
 * Returns the total distance (in px) that nodes were moved.
 */
export function applyEdgeSprings(
  edges: ResolvedEdge[],
  speed: number,
  isDragging: DragPredicate = () => false,
): number {
  let total = 0;

  for (const edge of edges) {
    const { sourceNode, targetNode } = edge;

    const dx = targetNode.x - sourceNode.x;
    const dy = targetNode.y - sourceNode.y;
    const currentLength = Math.hypot(dx, dy);

    if (currentLength === 0) continue;

    const scale = (currentLength - edge.length) * speed;
    const offsetX = (dx / currentLength) * scale;
    const offsetY = (dy / currentLength) * scale;

    if (!isDragging(targetNode.id)) {
      targetNode.x -= offsetX;
      targetNode.y -= offsetY;
      total += Math.hypot(offsetX, offsetY);
    }
    if (!isDragging(sourceNode.id)) {
      sourceNode.x += offsetX;
      sourceNode.y += offsetY;
      total += Math.hypot(offsetX, offsetY);
    }
  }

  return total;
}
