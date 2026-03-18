<script setup lang="ts">
import { useTemplateRef } from "vue";
import { GButton, GPopover } from "./components";

const popover = useTemplateRef("popover");
</script>

<template>
  <GButton v-bind="popover?.activatorBinding"> Open popover </GButton>
  <GPopover ref="popover" position-area="bottom span-right" mode="hover">
    <div class="mt-2 rounded border border-gray-500 p-4">
      <p>A more streamlined way to connect popovers to their activators</p>
    </div>
  </GPopover>
</template>
