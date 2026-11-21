<script lang="ts" setup>
import { GButton } from "@/components/GButton";
import { CARD_VARIANTS, GCard } from "@/components/GCard";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="bg-surface-3 grid h-screen p-8">
    <GCard class="rounded-lg border" is="article">
      <GCard variant="info" class="px-4 py-2" is="header">
        <span class="text-xl font-medium">Card Header</span>
      </GCard>

      <GCard class="flex-1 gap-2 overflow-auto px-4 py-2">
        <div class="flex flex-col gap-2">
          <GCard
            v-for="variant in CARD_VARIANTS"
            :key="variant"
            :variant="variant"
            class="rounded border px-4 py-3"
            is="button"
            interactive
          >
            <p>{{ variant }}</p>
          </GCard>
        </div>
      </GCard>

      <GCard variant="surface-2" class="flex-row justify-end gap-2 border-t p-2" is="footer">
        <GButton @click="toggleDark()">Click</GButton>
        <GButton @click="toggleDark()" variant="primary">Click</GButton>
      </GCard>
    </GCard>
  </div>
</template>
