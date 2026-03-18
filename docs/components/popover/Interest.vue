<script setup lang="ts">
import { GButton, GPopover } from "@/components";
</script>

<template>
  <GPopover mode="interest">
    <template #activator="{ binding }">
      <GButton v-bind="binding"> Open popover </GButton>
    </template>

    <div class="card">
      <p>Popovers have position-area="bottom" by default</p>
    </div>
  </GPopover>
</template>
