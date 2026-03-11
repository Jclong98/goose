<script setup lang="ts">
import { useHighlight } from "@core/composables/useHighlight";
import { ref } from "vue";

const container = ref<HTMLElement | null>(null);
const query = ref("the");
const { matchCount } = useHighlight(container, query);
</script>

<template>
  <div class="demo" style="flex-direction: column; align-items: flex-start">
    <label>
      Search text:
      <input v-model="query" class="ml-2 rounded border px-2 py-1" placeholder="Type to highlight" />
    </label>
    <p style="margin: 0; color: var(--vp-c-text-2)">Matches: <strong>{{ matchCount }}</strong></p>
    <div ref="container" style="line-height: 1.6">
      The quick brown fox jumps over the lazy dog. The quick brown fox is a common pangram.
    </div>
  </div>
</template>

<style>
::highlight(search-results) {
  background: var(--color-goose);
  color: black;
}
</style>
