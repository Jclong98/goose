<script lang="ts" setup>
import { GButton } from "@/components";
import { useToast } from "@/composables/useToast";
import { h } from "vue";

const toast = useToast("--custom-content");

function onClick() {
  toast.show(h("div", [h("mark", "Woah!"), " This is a custom toast!"]));
}
</script>

<template>
  <div
    class="grid h-96 place-content-center rounded-lg border border-(--vp-c-divider)"
    style="anchor-name: --custom-content"
  >
    <GButton @click="onClick">Show Toast</GButton>
  </div>
</template>
