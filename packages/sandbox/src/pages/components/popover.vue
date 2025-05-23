<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
import { useTemplateRef } from "vue";

const container = useTemplateRef("container");
const { style } = useDraggable(container);
</script>

<template>
  <div class="container" ref="container" :style="style" style="position: fixed">
    <GPopover position="topLeft" :is-open="true">
      <template #activator="{ props, isOpen }">
        <GButton v-bind="props">
          <span v-if="!isOpen">Open</span>
          <span v-else>Close</span>
          popover
        </GButton>
      </template>

      <template #default="{ close }">
        <div class="border bg-white border-goose/50 w-64 p-4 rounded-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero
          amet alias nam? Qui sequi incidunt, corrupti rem vel, amet, omnis
          reiciendis ipsum alias quis nobis ducimus enim nostrum dolorem?
        </div>
        <GButton @click="close" class="mt-2">Close</GButton>
      </template>
    </GPopover>
  </div>
</template>

<style scoped></style>
