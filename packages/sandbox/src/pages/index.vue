<script setup lang="ts">
import { useMultiplier } from "@goose/core";

const num = ref(2);
const { product: timesFour } = useMultiplier(num, 4);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Home</h1>

    <div>
      <GButton>auto imported goose button</GButton> <br />

      <button>normal button (unstyled)</button>
    </div>

    <label>
      <span class="block"> tailwind styled input </span>
      <input class="border px-4 py-2 rounded" type="number" v-model="num" />
    </label>

    <pre>{{ { num, timesFour } }}</pre>
  </div>
</template>
