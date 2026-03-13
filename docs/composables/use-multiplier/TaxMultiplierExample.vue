<script setup lang="ts">
import { useMultiplier } from "@/composables/useMultiplier";
import { ref } from "vue";

const subtotal = ref(100);
const taxRate = ref(1.07);
const { product: total } = useMultiplier(subtotal, taxRate);
</script>

<template>
  <div class="demo" style="align-items: center">
    <label>
      Subtotal
      <input v-model.number="subtotal" type="number" class="ml-2 w-24 rounded border px-2 py-1" />
    </label>
    <label>
      Tax multiplier
      <input
        v-model.number="taxRate"
        step="0.01"
        type="number"
        class="ml-2 w-24 rounded border px-2 py-1"
      />
    </label>
    <p class="font-semibold">Total with tax: {{ total.toFixed(2) }}</p>
  </div>
</template>
