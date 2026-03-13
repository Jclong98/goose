<script lang="ts" setup>
import { useTemplateRef } from "vue";

const popover1 = useTemplateRef("popover1");
const popover2 = useTemplateRef("popover2");
const popover3 = useTemplateRef("popover3");
const popover4 = useTemplateRef("popover4");
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <GButton v-bind="popover1?.activatorBinding"> bottom span-right </GButton>
    <GPopover ref="popover1" position-area="bottom span-right" class="card mt-1">
      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>

    <GButton v-bind="popover2?.activatorBinding"> top span-left </GButton>
    <GPopover ref="popover2" position-area="top span-left" class="card mb-1">
      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>

    <GButton v-bind="popover3?.activatorBinding"> left span-bottom </GButton>
    <GPopover ref="popover3" position-area="left span-bottom" class="card mr-1">
      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>

    <GButton v-bind="popover4?.activatorBinding"> right span-top </GButton>
    <GPopover ref="popover4" position-area="right span-top" class="card ml-1 w-64">
      <p>Popovers can be positioned in the many ways using the css position-area property</p>
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
