<script setup>
import BasicUsage from './BasicUsage.vue'
import DifferentAnchors from './DifferentAnchors.vue'
import CustomContent from './CustomContent.vue'
import Duration from './Duration.vue'
</script>

# useToast

<div class="flex gap-2">
  <SourceChip path="src/composables/useToast.ts" />
</div>

::: info How toasts are rendered
`useToast` creates and mounts a `GToastContainer` at your anchor position automatically, so there is nothing to add to your template.
:::

## Basic Usage

<!-- example -->
<BasicUsage />

## Different Anchors

<!-- example -->
<DifferentAnchors />

## Custom Content

<!-- example -->
<CustomContent />

## Duration

<!-- example -->
<Duration />
