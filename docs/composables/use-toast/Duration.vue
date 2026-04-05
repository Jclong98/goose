<script lang="ts" setup>
import { GButton } from "@/components";
import { useToast } from "@/composables/useToast";
import { h } from "vue";

const toast = useToast("--duration");

function infiniteToast() {
  const id = crypto.randomUUID();
  toast.show(
    h("div", { class: "flex items-center gap-2" }, [
      "Infinite",

      h(GButton, { onClick: () => toast.remove(id) }, "Close"),
    ]),
    {
      id,
      duration: -1,
    },
  );
}
</script>

<template>
  <div
    class="grid h-96 place-content-center rounded-lg border border-(--vp-c-divider)"
    style="anchor-name: --duration"
  >
    <GButton @click="toast.show('1 second', { duration: 1000 })">1s</GButton>
    <GButton @click="toast.show('3 seconds', { duration: 3000 })">3s</GButton>
    <GButton @click="infiniteToast">infinite</GButton>
  </div>
</template>
