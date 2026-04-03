<script lang="ts" setup>
import { GButton, GPopover } from "@/components";
import { ref } from "vue";
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <GPopover class="mt-1 max-w-32 rounded border p-4" popover="manual">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Open Popover</GButton>
      </template>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod recusandae ab consequatur
        voluptates nostrum iste quas earum quaerat harum nam ipsa repellendus praesentium, ullam
        minus molestias iure cumque nulla laudantium?
      </p>
    </GPopover>

    <GPopover class="mt-1 max-w-32 rounded border p-4" popover="hint">
      <template #activator="{ binding }">
        <GButton v-bind="binding">Open Popover</GButton>
      </template>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod recusandae ab consequatur
        voluptates nostrum iste quas earum quaerat harum nam ipsa repellendus praesentium, ullam
        minus molestias iure cumque nulla laudantium?
      </p>
    </GPopover>
  </div>
</template>
