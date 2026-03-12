<script setup lang="ts">
import { ref } from "vue";

const value = ref("week");
const items = [
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
];
</script>

<template>
  <div class="demo" style="flex-direction: column; align-items: flex-start">
    <p style="margin: 0; color: var(--vp-c-text-2)">Selected: <strong>{{ value }}</strong></p>
    <GSegmentedControl label="View" :items="items" v-model="value" />
  </div>
</template>
