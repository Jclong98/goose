<script setup lang="ts">
import { useUniqueId } from "@core/composables/useUniqueId";

const id = useUniqueId();
</script>

<template>
  <div class="demo" style="flex-direction: column; align-items: flex-start">
    <label :for="id">Consumer-provided ID label</label>
    <input :id="id" class="rounded border px-2 py-1" type="text" placeholder="ID is provided through attrs" />
    <p style="margin: 0; color: var(--vp-c-text-2)">Current id: <strong>{{ id }}</strong></p>
  </div>
</template>
