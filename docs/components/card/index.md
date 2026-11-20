---
prev:
  text: "GButton"
  link: "/components/button"
next:
  text: "GPopover"
  link: "/components/popover"
---

<script setup>
import BasicUsage from './BasicUsage.vue'
import Variants from './Variants.vue'
import Dialog from './Dialog.vue'
import Tags from './Tags.vue'
</script>

# GCard

GCard is a very bare-bones customizable component. It is designed to be as flexible as possible, leveraging Tailwindcss classes to turn it into what designs require.

GCard is mostly used for theming background colors, borders, and text.

## Basic Usage

<!-- example -->
<BasicUsage />

## Variants

The card comes in three surfaces, plus some semantic colors. Notice that when the tailwind `border` class is applied, each variant comes with its own border color

<!-- example -->
<Variants />

## Dialog Example

You can override the underlying element of GCard using the `is` prop. In this example, the dialog card is an `<article>` that contains a `<header>` and `<footer>` element.

<!-- example -->
<Dialog />

## Tags

<!-- example -->
<Tags />
