<script setup lang="ts">
import { GButton, GPopover } from "./components";

import { vPopover, vPopoverActivator } from "./directives";
</script>

<template>
  <GButton v-popover-activator="'basic-popover'"> Open popover </GButton>
  <GPopover v-popover="'basic-popover'" position-area="bottom span-right">
    <div class="mt-2 rounded border border-gray-500 p-4">
      <p>A more streamlined way to connect popovers to their activators</p>
    </div>
  </GPopover>
</template>
