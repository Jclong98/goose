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

  <GPopover class="ml-1" position-area="right span-all" v-model:open="isOpen" popover="manual">
    <template #activator="{ binding }">
      <GButton v-bind="binding"> Open popover </GButton>
    </template>

    <template #default="{ closeBinding }">
      <GCard class="rounded border">
        <p class="p-2">This popover should open by default.</p>

        <div class="p-1">
          <GButton v-bind="closeBinding"> Close </GButton>
        </div>
      </GCard>
    </template>
  </GPopover>
</template>
