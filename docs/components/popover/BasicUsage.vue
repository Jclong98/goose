<script lang="ts" setup>
import { useTemplateRef } from "vue";

const popover = useTemplateRef("popover");
</script>

<template>
  <GButton v-bind="popover?.activatorBinding"> Open popover </GButton>

  <GPopover ref="popover" position-area="bottom span-right" class="card mt-1">
    <p>Popovers have position-area="bottom" by default.</p>
  </GPopover>
</template>

<style scoped>
.card {
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 1rem;
}
</style>
