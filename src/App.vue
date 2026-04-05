<script lang="ts" setup>
import { GButton } from "@/components";
import { useToast } from "./composables/useToast";

const defaultToast = useToast();
const leftToast = useToast("--left");
const rightToast = useToast("--right");
</script>

<template>
  <div
    class="grid h-screen grid-cols-2 grid-rows-[auto_1fr] justify-center"
    style="anchor-name: --g-toast-container"
  >
    <div class="col-span-full">
      <GButton @click="defaultToast.show('Hello, world!')">Show Toast</GButton>
    </div>
    <div class="bg-red-200" style="anchor-name: --left">
      <GButton @click="leftToast.show('Left toast')">left</GButton>
    </div>
    <div class="bg-green-200" style="anchor-name: --right">
      <GButton @click="rightToast.show('Right toast')">right</GButton>
    </div>
  </div>
</template>
