<script setup lang="ts">
import { useMultiplier } from "@/composables/useMultiplier";
import { ref } from "vue";

const price = ref(25);
const quantity = ref(2);
const { product } = useMultiplier(price, quantity);
</script>

<template>
    <div class="demo" style="align-items: center">
        <label>
            Price
            <input v-model.number="price" type="number" class="ml-2 w-20 rounded border px-2 py-1" />
        </label>
        <label>
            Quantity
            <input v-model.number="quantity" type="number" class="ml-2 w-20 rounded border px-2 py-1" />
        </label>
        <p style="margin: 0; font-weight: 600">Total: {{ product }}</p>
    </div>
</template>
