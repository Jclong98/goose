<script setup lang="ts">
import { GButton, GPopover } from "./components";
</script>

<template>
  <GPopover mode="interest">
    <template #activator="{ binding }">
      <GButton v-bind="binding"> Open popover </GButton>
    </template>

    <div class="mt-2 rounded border border-gray-500 p-4">
      <p>A more streamlined way to connect popovers to their activators</p>
    </div>
  </GPopover>
</template>
