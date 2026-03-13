<script lang="ts" setup>
import { useTemplateRef } from "vue";

const mt1 = useTemplateRef("mt1");
const mt4 = useTemplateRef("mt4");
const mt8 = useTemplateRef("mt8");
</script>

<template>
  <div class="flex gap-2">
    <GButton v-bind="mt1?.activatorBinding"> mt-1 </GButton>
    <GPopover ref="mt1" position-area="bottom" class="card mt-1 max-w-64">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </GPopover>

    <GButton v-bind="mt4?.activatorBinding"> mt-4 </GButton>
    <GPopover ref="mt4" position-area="bottom" class="card mt-4 max-w-64">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </GPopover>

    <GButton v-bind="mt8?.activatorBinding"> mt-8 </GButton>
    <GPopover ref="mt8" position-area="bottom" class="card mt-8 max-w-64">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </GPopover>
  </div>
</template>

<style scoped>
.card {
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 1rem;
}
</style>
