<script lang="ts" setup>
import { GButton } from "@/components";
import { useToast } from "@/composables/useToast";

const leftToast = useToast("--left");
const rightToast = useToast("--right");
</script>

<template>
  <div class="grid h-96 grid-cols-2 rounded-lg border border-(--vp-c-divider)">
    <div class="bg-red-200" style="anchor-name: --left">
      <GButton @click="leftToast.show('Hello, world!')">Show Left Toast</GButton>
    </div>
    <div class="bg-green-200" style="anchor-name: --right">
      <GButton @click="rightToast.show('Hello, world!')">Show Right Toast</GButton>
    </div>
  </div>
</template>
