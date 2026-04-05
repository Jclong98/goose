<script lang="ts" setup>
import { inject, reactive, ref, type Component } from "vue";

const props = defineProps<{
  anchorName: string;
}>();

const containers = inject<Map<string, Element>>("containers", new Map());

const toasts = ref<{ id: string; content: string | Component }[]>([]);

function show(content: string | Component): { id: string; close: () => void } {
  const id = crypto.randomUUID();

  const container = containers.get(props.anchorName);
  if (!container) {
    throw new Error(`Toast container for anchor "${props.anchorName}" not found.`);
  }

  toasts.value.push({ id, content });

  setTimeout(() => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id);
  }, 3000);

  return { id, close: () => {} };
}

defineExpose({ show });
</script>

<template>
  <div class="g-toast-container">
    <component v-for="toast in toasts" :key="toast.id" :is="toast.content" class="g-toast" />
  </div>
</template>

<style scoped>
.g-toast-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 8px;

  position-anchor: v-bind("props.anchorName");
  bottom: anchor(bottom);
  left: anchor(center);
  translate: -50% 0;
}
</style>
