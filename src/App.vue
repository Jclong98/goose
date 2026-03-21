<script setup lang="ts">
import { GDialog } from "./components";

function onSubmit() {
  alert("Form submitted!");
}
</script>

<template>
  <div class="grid h-screen w-screen place-content-center">
    <GDialog @cancel.prevent="(e) => console.log(e)">
      <template #activator="{ binding }">
        <button v-bind="binding" class="rounded bg-blue-500 px-4 py-2 text-white">
          Open Dialog
        </button>
      </template>

      <template #default="{ cancelBinding }">
        <div class="flex flex-col gap-4 rounded bg-white p-4 shadow">
          <h2 class="text-lg font-bold">Dialog Title</h2>

          <p>This is a dialog. It can contain any content you like.</p>

          <ul class="list-disc pl-5">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <button
            autofocus
            v-bind="cancelBinding"
            class="self-end rounded bg-red-500 px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </template>
    </GDialog>
  </div>
</template>
