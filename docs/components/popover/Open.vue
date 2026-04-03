<script lang="ts" setup>
import { ref } from "vue";

const isOpen = ref(true);
</script>

<template>
  <div class="flex gap-2">
    <label>
      <input type="checkbox" v-model="isOpen" class="mr-1" />
      Open with v-model
    </label>
  </div>

  <GPopover class="card ml-1" position-area="right span-all" v-model:open="isOpen" popover="manual">
    <template #activator="{ binding }">
      <GButton v-bind="binding"> Open popover </GButton>
    </template>

    <template #default="{ closeBinding }">
      <p>This popover should open by default.</p>
      <GButton v-bind="closeBinding" class="mt-2"> Close </GButton>
    </template>
  </GPopover>
</template>
