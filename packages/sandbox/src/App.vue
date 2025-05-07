<script setup lang="ts">
import { useMultiplier } from "@goose/core";

const num1 = ref(2);
const num2 = ref(4);
const { product } = useMultiplier(num1, num2);
</script>

<template>
  <div class="flex flex-col gap-4">
    <header>Goose Playground</header>

    <div>
      <GButton>auto imported button</GButton> <br />

      <button>normal button (unstyled)</button>
    </div>

    <label>
      <span class="block"> tailwind styled input </span>
      <input class="border px-4 py-2 rounded" type="number" v-model="num1" />
    </label>

    <pre>{{ { num1, num2, product } }}</pre>
  </div>
</template>

<style scoped></style>
