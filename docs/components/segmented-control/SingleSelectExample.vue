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
  <div class="flex flex-col">
    <p>
      Selected: <strong>{{ value }}</strong>
    </p>
    <GSegmentedControl label="View" :items="items" v-model="value" />
  </div>
</template>
