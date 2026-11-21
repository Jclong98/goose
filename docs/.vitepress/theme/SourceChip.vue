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
  <GCard
    class="text-on-surface-2! flex cursor-pointer flex-row items-center gap-2 rounded-full border px-2 py-1 text-sm no-underline!"
    variant="surface-2"
    is="a"
    interactive
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    :title="`View ${label} on GitHub`"
    :aria-label="`View ${label} source on GitHub`"
  >
    <GitHub />
    <span>{{ label }}</span>
  </GCard>
</template>
