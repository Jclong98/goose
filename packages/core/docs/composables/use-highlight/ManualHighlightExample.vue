<script setup lang="ts">
import { useHighlight } from "@core/composables/useHighlight";
import { ref } from "vue";

const container = ref<HTMLElement | null>(null);
const query = ref("fox");

const { highlight, clearHighlight } = useHighlight(container, query, { manual: true });
</script>

<template>
  <div class="demo" style="flex-direction: column; align-items: flex-start">
    <div class="flex gap-2">
      <input v-model="query" class="rounded border px-2 py-1" placeholder="Query" />
      <GButton @click="highlight(query)">Highlight</GButton>
      <GButton @click="clearHighlight">Clear</GButton>
    </div>
    <div ref="container" style="line-height: 1.6">
      Foxes are fast. A fox can jump quickly and another fox might follow.
    </div>
  </div>
</template>
