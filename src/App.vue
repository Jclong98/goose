<script setup lang="ts">
import { GPopover } from "./components";
</script>

<template>
  <div class="grid h-screen w-screen place-content-center">
    <GPopover position-area="bottom center" class="mt-1" min-w-anchor>
      <template #activator="{ open, binding }">
        <input
          placeholder="some content"
          :style="binding.style"
          class="rounded border px-2 py-1"
          @focus="open"
          @click="open"
        />
      </template>

      <template #default="{ closeBinding }">
        <div class="w-anchor rounded border p-2">popover</div>
      </template>
    </GPopover>
  </div>
</template>
