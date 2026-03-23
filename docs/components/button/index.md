<script setup>
import BasicUsage from './BasicUsage.vue'
import Variants from './Variants.vue'
import Disabled from './Disabled.vue'
import Loading from './Loading.vue'
import Icons from './Icons.vue'
</script>

# GButton

A simple styled button component.

## Demo

### Basic Usage

<!-- example -->
<BasicUsage />

### Variants

<!-- example -->
<Variants />

### Icons

<!-- example -->
<Icons />

### Disabled

Disabled buttons are still accessible via keyboard and screen readers because they use `aria-disabled` instead of the `disabled` attribute. This means you can still tab to them and click on them, but the component doesn't emit the normal `@click` event. You will need to use `@click:disabled` if you want a different behavior when the button is disabled.

<!-- example -->
<Disabled />

### Loading

<!-- example -->
<Loading />

::: info
The `loading` slot overrides the `icon` slot
:::

## API

<!-- component-meta: GButton -->
