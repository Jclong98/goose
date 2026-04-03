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

  <GPopover class="card mt-1" v-model:open="isOpen">
    <template #activator="{ binding }">
      <GButton v-bind="binding"> Open popover </GButton>
    </template>

    <p>This popover should open by default.</p>
  </GPopover>
</template>
