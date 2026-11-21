---
prev:
  text: "GDialog"
  link: "/components/dialog"
next:
  text: "GSegmentedControl"
  link: "/components/segmented-control"
---

<script setup>
import BasicUsage from './BasicUsage.vue'
import Side from './Side.vue'
import Hovering from './Hovering.vue'
</script>

# GDrawer

<div class="flex gap-2">
  <SourceChip path="src/components/GDrawer/GDrawer.vue" />
</div>

A side panel drawer using the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) and [CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning). The drawer anchors itself to a reference element via a CSS anchor name.

## Demo

### Basic Usage

<!-- example -->
<BasicUsage />

### Side

<!-- example -->
<Side />

## Hovering

By playing around with the sytyles a bit, you can make it look as though the drawer is hovering over the content, rather than peeking from the side

<!-- example -->
<Hovering />

## API

<!-- component-meta: GDrawer -->
