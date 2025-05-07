<script setup lang="ts">
import { useMultiplier } from "j-lib";

const num1 = ref(2);
const num2 = ref(4);
const { product } = useMultiplier(num1, num2);
</script>

<template>
  <header>JLib Playground</header>

  <JButton>auto imported button</JButton>

  <button>asdf</button>

  <br />

  <input type="number" v-model="num1" />

  <pre>{{ { num1, num2, product } }}</pre>
</template>

<style scoped></style>
