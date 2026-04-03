<script setup>
import BasicUsage from './BasicUsage.vue'
import PositionedPopover from './PositionedPopover.vue'
import Offsets from './Offsets.vue'
import Open from './Open.vue'
import ManualRegistration from './ManualRegistration.vue'
import Interest from './Interest.vue'
import PopoverAttribute from './PopoverAttribute.vue'
import Nesting from './Nesting.vue'
</script>

# GPopover

A flexible popover component built on the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) with CSS anchor positioning. Exposes an `activator` slot to bind the trigger element.

## Demo

### Basic Usage

<!-- example -->
<BasicUsage />

### Interest mode

Using the mode prop, you can open popovers by hovering/focusing the activator by setting `mode="interest"`

<!-- example -->
<Interest />

### Manual Registration

If you don't want to bind the activator with a slot for layout or other reasons, you can manually register the anchor style and popovertarget/interestfor attributes manually, or use `templateRef` to access the `activatorBinding` to connect an activator to a popover.

<!-- example -->
<ManualRegistration />

### Position Area

GPopover is positioned using css anchor positioning's `position-area` property.

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-area)

<!-- example -->
<PositionedPopover />

### Offsets

You can use margins to offset popovers from their anchors. It will automatically flip when a position fallback is triggered.

<!-- example -->
<Offsets />

### Modeling Open

<!-- example -->
<Open />

### Popover Attribute

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover#values)

<!-- example -->
<PopoverAttribute />

### Nesting

Nested popovers don't close their parents when opened. They can all be closed at once by clicking outisde or closed sequentially in the reverse order they were opened by pressing escape.

This example anchors the popovers to their parent popover, rather than to their activator.

<!-- example -->
<Nesting />

## API

<!-- component-meta: GPopover -->
