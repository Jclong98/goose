<script setup lang="ts">
import { GButton } from "./components";
</script>

<template>
  <div>
    <GButton loading>
      <template #icon> <span>🙂</span> </template>

      Click me
    </GButton>
  </div>
</template>
