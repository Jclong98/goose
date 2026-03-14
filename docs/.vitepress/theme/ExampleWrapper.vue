<script setup lang="ts">
import { ref } from "vue";
import ChevronUp from "./icons/ChevronUp.vue";
import Code from "./icons/Code.vue";
const showCode = ref(false);
</script>

<template>
  <div class="example-wrapper overflow-hidden rounded-lg border border-(--vp-c-divider)">
    <!-- rendered example -->
    <div class="vp-raw p-2">
      <slot />
    </div>

    <!-- code toggle button -->
    <div
      class="example-wrapper-actions flex border-t border-(--vp-c-divider)"
      :class="{ 'border-b': showCode }"
    >
      <button class="example-wrapper-toggle border-t" @click="showCode = !showCode">
        <Code v-if="!showCode" />
        <ChevronUp v-else />

        {{ showCode ? "Hide code" : "View code" }}
      </button>
    </div>

    <!-- code block -->
    <div class="code-block" :class="{ '--open': showCode }">
      <slot name="code" />
    </div>
  </div>
</template>

<style scoped>
.example-wrapper-toggle {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  width: 100%;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
  background: transparent;
  border: none;
  transition:
    color 0.15s,
    background-color 0.15s;

  &:hover {
    color: var(--vp-c-brand-1);
    background-color: var(--vp-c-bg-soft);
  }
}

/* the only thing that should ever be in here is code so !important should be okay */
.code-block {
  interpolate-size: allow-keywords;

  transition: height 0.2s ease;

  height: 0;

  &.--open {
    height: auto;
  }

  & > * {
    margin: 0 !important;
  }
}
</style>
