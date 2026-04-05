<script lang="ts" setup>
import { GButton } from "@/components";
import { useToast } from "@/composables/useToast";

const toast = useToast();
</script>

<template>
  <div
    class="grid h-96 place-content-center rounded-lg border border-(--vp-c-divider)"
    style="anchor-name: --g-toast-anchor"
  >
    <GButton @click="toast.show('Hello, world!')">Show Toast</GButton>
  </div>
</template>
