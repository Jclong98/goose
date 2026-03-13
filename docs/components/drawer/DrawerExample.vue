<script lang="ts" setup>
import { ref } from "vue";

const side = ref<"left" | "right">("left");
</script>

<template>
  <div>
    <GButton popovertarget="drawer-left-example"> Open drawer </GButton>
  </div>

  <GDrawer id="drawer-left-example" anchor="--body" :side="side" class="w-96 p-4">
    <p>Drawer component</p>

    <select v-model="side" name="side" id="side" class="border">
      <option value="left">Left</option>
      <option value="right">Right</option>
    </select>
  </GDrawer>
</template>
