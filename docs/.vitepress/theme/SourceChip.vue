<script setup lang="ts">
import { computed } from "vue";
import { githubBlobUrl } from "../plugins/github";
import GitHub from "./icons/GitHub.vue";

const { path } = defineProps<{
  /** File path relative to the repo root, e.g. `src/components/GButton/GButton.vue`. */
  path: string;
}>();

const url = computed(() => githubBlobUrl(path));
const label = computed(() => path.split("/").at(-1) ?? path);
</script>

<template>
  <a
    class="source-chip"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    :title="`View ${label} on GitHub`"
    :aria-label="`View ${label} source on GitHub`"
  >
    <GitHub />
    <span class="source-chip-label">{{ label }}</span>
  </a>
</template>

<style scoped>
.source-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.7rem;
  font-size: 0.8rem;
  line-height: 1.4;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 9999px;
  transition:
    color 0.15s,
    border-color 0.15s,
    background-color 0.15s;

  &:hover {
    color: var(--vp-c-brand-1);
    border-color: var(--vp-c-brand-1);
  }

  &:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 1px;
  }
}

.source-chip-label {
  font-family: var(--vp-font-mono);
}
</style>
