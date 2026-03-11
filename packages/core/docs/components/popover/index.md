<script setup>
import BottomPopoverExample from './BottomPopoverExample.vue'
import RightPopoverExample from './RightPopoverExample.vue'
</script>

# GPopover

A flexible popover component built on the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) with CSS anchor positioning. Exposes an `activator` slot to bind the trigger element.

## Demo

### Bottom-center popover

<BottomPopoverExample />

### Right-positioned popover

<RightPopoverExample />

## Props

| Prop       | Type              | Description                                                      |
| ---------- | ----------------- | ---------------------------------------------------------------- |
| `position` | `PopoverPosition` | **Required.** Position of the popover relative to the activator. |

## Model

| Model  | Type      | Default | Description                              |
| ------ | --------- | ------- | ---------------------------------------- |
| `open` | `boolean` | `false` | Controls whether the popover is visible. |

## Slots

### `activator`

Slot for the element that triggers the popover.

| Slot prop    | Type         | Description                                                           |
| ------------ | ------------ | --------------------------------------------------------------------- |
| `toggle`     | `() => void` | Toggles the popover open/closed.                                      |
| `isOpen`     | `boolean`    | Whether the popover is currently open.                                |
| `id`         | `string`     | Auto-generated ID linking activator and popover for accessibility.    |
| `anchorName` | `string`     | CSS anchor name applied to the activator element.                     |
| `props`      | `object`     | Spread-ready object with `aria-*` attributes, `onClick`, and `style`. |

### `default`

Content rendered inside the popover.

| Slot prop | Type         | Description         |
| --------- | ------------ | ------------------- |
| `close`   | `() => void` | Closes the popover. |

## Types

### `PopoverPosition`

```ts
type PopoverPosition =
  | "topCenter"
  | "topLeft"
  | "topRight"
  | "bottomCenter"
  | "bottomLeft"
  | "bottomRight"
  | "left"
  | "right";
```
