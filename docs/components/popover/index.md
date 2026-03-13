<script setup>
import BasicUsage from './BasicUsage.vue'
import PositionedPopover from './PositionedPopover.vue'
import Offsets from './Offsets.vue'
import Open from './Open.vue'
</script>

# GPopover

A flexible popover component built on the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) with CSS anchor positioning. Exposes an `activator` slot to bind the trigger element.

## Demo

### Basic Usage

<!-- example -->
<BasicUsage />

### Position Area

GPopover is positioned using css anchor positioning's `position-area` property.

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-area)

<!-- example -->
<PositionedPopover />

### Offsets

You can use margins to offset popovers from their anchors. It will automatically flip when a position fallback is triggered.

<!-- example -->
<Offsets />

### Open prop

<!-- example -->
<Open />

## API

<!-- component-meta: GPopover -->
