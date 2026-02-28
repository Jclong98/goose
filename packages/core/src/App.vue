<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
import { ref, useTemplateRef } from "vue";

import { GButton, GPopover, GSegmentedControl } from "@/components";

function onClick() {
  alert("Button clicked!");
}

const selectedValue = ref("option1");

const container = useTemplateRef("container");
const { style } = useDraggable(container);
</script>

<template>
  <GButton @click="onClick"> Click Me </GButton>

  <GSegmentedControl
    v-model="selectedValue"
    label="Select an option"
    visible-label
    :items="[
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ]"
  />

  <pre>{{ { selectedValue } }}</pre>

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vero amet alias nam? Qui
          sequi incidunt, corrupti rem vel, amet, omnis reiciendis ipsum alias quis nobis ducimus
          enim nostrum dolorem?
        </div>
        <GButton @click="close" class="mt-2">Close</GButton>
      </template>
    </GPopover>
  </div>
</template>

<style scoped></style>
