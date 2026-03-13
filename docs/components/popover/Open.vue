<script lang="ts" setup>
import { ref } from "vue";

const isOpen = ref(true);
</script>

<template>
  <div class="flex gap-2">
    <GButton style="anchor-name: --open-button" popovertarget="open-popover">
      Open popover
    </GButton>

    <label>
      <input type="checkbox" v-model="isOpen" class="mr-1" />
      Open with v-model
    </label>
  </div>

  <GPopover id="open-popover" anchor="--open-button" class="card mt-1" v-model:open="isOpen" modal>
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
