<script setup lang="ts">
import JButton from "./components/JButton.vue";

function onClick() {
  alert("Button clicked!");
}
</script>

<template>
  <JButton @click="onClick">Click Me</JButton>
</template>

<style scoped></style>
