<script setup lang="ts">
import GButton from "./components/GButton.vue";

function onClick() {
  alert("Button clicked!");
}
</script>

<template>
  <GButton @click="onClick">Click Me</GButton>
</template>

<style scoped></style>
