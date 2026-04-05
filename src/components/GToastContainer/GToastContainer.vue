<script lang="ts" setup>
import { inject, ref, type Component } from "vue";

const props = defineProps<{
  anchorName: string;
}>();

const containers = inject<Map<string, Element>>("containers", new Map());

const toasts = ref<{ id: string; content: string | Component }[]>([]);

function remove(id: string) {
  toasts.value = toasts.value.filter((toast) => toast.id !== id);
}

interface ShowToastOptions {
  duration?: number;
  id?: string;
}

interface ShowToastReturn {
  id: string;
  close: () => void;
}

function show(content: string | Component, options?: ShowToastOptions): ShowToastReturn {
  const { duration = 3000, id = crypto.randomUUID() } = options || {};

  const container = containers.get(props.anchorName);
  if (!container) throw new Error(`Toast container for anchor "${props.anchorName}" not found.`);

  toasts.value.push({ id, content });

  if (duration > 0) {
    setTimeout(() => remove(id), duration);
  }

  return { id, close: () => remove(id) };
}

defineExpose({ show, remove });
</script>

<template>
  <div class="g-toast-container">
    <div class="g-toast" v-for="toast in toasts" :key="toast.id">
      <template v-if="typeof toast.content === 'string'">{{ toast.content }}</template>
      <component v-else :is="toast.content" class="g-toast" />
    </div>
  </div>
</template>

<style scoped>
.g-toast-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 8px;

  position-anchor: v-bind("props.anchorName");
  bottom: calc(anchor(bottom) + 1em);
  left: anchor(center);
  translate: -50% 0;
}

.g-toast {
  display: flex;
  align-items: center;
  border-radius: 4px;
  gap: 0.5em;
  background-color: var(--color-zinc-100);
  color: black;
  border: 1px solid var(--color-zinc-300);
  padding: 0.5em 1em;
}

.dark .g-toast {
  background-color: var(--color-zinc-800);
  color: white;
  border: 1px solid var(--color-zinc-600);
}
</style>
