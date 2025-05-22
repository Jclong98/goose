<script setup lang="ts">
import { ref } from "vue";

import { GButton, GSegmentedControl } from "@/components";

function onClick() {
  alert("Button clicked!");
}

const selectedValue = ref("option1");
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
</template>

<style scoped></style>
