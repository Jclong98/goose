<script setup>
import BasicUsage from './BasicUsage.vue'
import Closedby from './Closedby.vue'
</script>

# GDialog

A simple styled button component.

## Demo

### Basic Usage

<!-- example -->
<BasicUsage />

### Closedby

You can limit how the user closes the dialog with `closedby`.

- `none`: requires manual closing via button or JavaScript
- `close-request`: **(default)** pressing escape, pressing "back" on mobile, clicking a button with the `request-close` command
- `any`: this is basically close-request+ because allows clicking outside the dialog to close it

<!-- example -->
<Closedby />

## API

<!-- component-meta: GDialog -->
