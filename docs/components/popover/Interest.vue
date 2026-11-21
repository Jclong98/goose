<script setup lang="ts">
import { GButton, GPopover } from "@/components";
</script>

<template>
  <GPopover mode="interest" class="mt-1">
    <template #activator="{ binding }">
      <GButton v-bind="binding"> Open popover </GButton>
    </template>

    <GCard class="rounded border p-4">
      <p>Popovers have position-area="bottom" by default</p>
    </GCard>
  </GPopover>
</template>
