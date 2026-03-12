<script setup lang="ts">
import { ref } from "vue";

const showCode = ref(false);
</script>

<template>
    <div class="example-wrapper rounded-lg overflow-hidden border border-(--vp-c-divider)">
        <div class="p-2 flex flex-col gap-2">
            <slot />
        </div>
        <hr class="border-(--vp-c-divider)">
        <div class="example-wrapper-actions flex">
            <button class="example-wrapper-toggle" @click="showCode = !showCode">
                <svg v-if="!showCode" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    aria-hidden="true">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    aria-hidden="true">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
                {{ showCode ? "Hide source" : "View source" }}
            </button>
        </div>
        <hr v-if="showCode" class="border-(--vp-c-divider)">
        <div v-if="showCode" class="px-4 py-2">
            <slot name="source" />
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
</style>