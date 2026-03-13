<script lang="ts" setup>
import { ref, useTemplateRef } from "vue";

const isOpen = ref(true);
const popover = useTemplateRef("popover");
</script>

<template>
  <div class="flex gap-2">
    <GButton v-bind="popover?.activatorBinding"> Open popover </GButton>

    <label>
      <input type="checkbox" v-model="isOpen" class="mr-1" />
      Open with v-model
    </label>
  </div>

  <GPopover ref="popover" class="card mt-1" v-model:open="isOpen" modal>
    <p>This popover should open by default.</p>
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
