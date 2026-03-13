<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <GButton @click="count += 1">Clicked {{ count }} times</GButton>
</template>
