<script lang="ts" setup>
import { ref } from "vue";

const items = [
  { label: "One", value: 1 },
  { label: "Two", value: "two" },
  { label: "Three", value: { three: 3 } },
];

const selectedValue = ref<number | string | Record<string, number>>(1);
</script>

<template>
  <GSelect :items="items" v-model="selectedValue">
    <template #item="{ item }">
      <div class="flex items-center gap-2">
        <span>{{ item.label }}</span>
        <code>{{ item.value }}</code>
      </div>
    </template>
  </GSelect>
  <pre>{{ { selectedValue } }}</pre>
</template>
