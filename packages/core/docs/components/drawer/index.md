<script setup>
import DrawerExample from './DrawerExample.vue'
</script>

# GDrawer

A side panel drawer using the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) and [CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning). The drawer anchors itself to a reference element via a CSS anchor name.

## Demo

<DrawerExample />

## Props

| Prop     | Type                | Default   | Description                                                                                                        |
| -------- | ------------------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| `anchor` | `string`            | —         | **Required.** CSS anchor name (e.g. `"--main"`) that must match the `anchor-name` property of the trigger element. |
| `side`   | `"left" \| "right"` | `"right"` | Which side of the anchor element the drawer appears on.                                                            |

## Slots

| Slot      | Description                               |
| --------- | ----------------------------------------- |
| `default` | Content rendered inside the drawer panel. |
