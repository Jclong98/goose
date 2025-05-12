<script setup lang="ts">
import { useMultiplier } from "@goose/core";

const num = ref(2);
const { product: timesFour } = useMultiplier(num, 4);
</script>

<template>
  <div>
    <div>
      <GButton>auto imported button</GButton> <br />

      <button>normal button (unstyled)</button>
    </div>

    <label>
      <span class="block"> Multiplier input </span>
      <input type="number" v-model="num" />
    </label>

    <pre>{{ { num, timesFour } }}</pre>
  </div>
</template>

<style scoped></style>
