<script setup lang="ts">
import { ref } from "vue";

const selected = ref<string[]>([]);
const items = [
  { label: "Bold", value: "bold" },
  { label: "Italic", value: "italic" },
  { label: "Underline", value: "underline" },
];
</script>

<template>
  <div class="flex flex-col">
    <p>
      Selected: <strong>{{ selected.join(", ") || "none" }}</strong>
    </p>
    <GSegmentedControl label="Formatting" :items="items" inputType="checkbox" v-model="selected" />
  </div>
</template>
