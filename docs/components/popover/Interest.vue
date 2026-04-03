<script setup lang="ts">
import { GButton, GPopover } from "@/components";
</script>

<template>
  <GPopover mode="interest" class="card mt-1">
    <template #activator="{ binding }">
      <GButton v-bind="binding"> Open popover </GButton>
    </template>

    <p>Popovers have position-area="bottom" by default</p>
  </GPopover>
</template>
