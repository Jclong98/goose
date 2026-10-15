<script setup>
import BasicUsage from './BasicUsage.vue'
</script>

# GGraph

A force-directed graph rendered as SVG. Nodes can be dragged with the mouse or moved with the arrow keys (hold Shift for single-pixel steps), and both nodes and edges have delete buttons that can also be triggered from the keyboard. The canvas can be panned by clicking and dragging on empty space, which translates all nodes and edges together. Edges reference nodes by id. Graph state is two-way bound via `v-model`.

## Basic Usage

<!-- example -->
<BasicUsage />

## API

<!-- component-meta: GGraph -->
