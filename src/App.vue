<script lang="ts" setup>
import { tryOnScopeDispose } from "@vueuse/core";
import { createApp } from "vue";

import { GButton, GPopover } from "@/components";
import GToastContainer from "./components/GToastContainer/GToastContainer.vue";

const containers: Map<string, Element> = new Map();

function useToast(anchorName: string) {
  // create or find the toast container
  let container = document.querySelector(`.toast-container[data-anchor-name="${anchorName}"]`);
  if (!container) {
    container = document.createElement("div");
    container.classList.add("toast-container");
    container.setAttribute("data-anchor-name", anchorName);
    document.body.appendChild(container);
  }

  containers.set(anchorName, container);

  const app = createApp(GToastContainer, { anchorName });
  app.provide("containers", containers);
  app.mount(container);

  tryOnScopeDispose(() => {
    app.unmount();
    container?.remove();
  });

  return { show: app.show };
}

const leftToast = useToast("--left");
const rightToast = useToast("--right");
</script>

<template>
  <div class="grid h-screen grid-cols-2 justify-center">
    <div class="bg-red-200" style="anchor-name: --left">
      <GButton @click="leftToast.show('Left toast')">left</GButton>
    </div>
    <div class="bg-green-200" style="anchor-name: --right">
      <GButton @click="rightToast.show('Right toast')">right</GButton>
    </div>
  </div>
</template>

<style>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  max-width: 300px;
}
</style>
