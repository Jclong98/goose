<script setup lang="ts">
import { useUniqueId } from "@/composables/useUniqueId";

const id = useUniqueId();
</script>

<template>
  <div class="demo" style="flex-direction: column; align-items: flex-start">
    <label :for="id">Generated ID label</label>
    <input :id="id" class="rounded border px-2 py-1" type="text" placeholder="Type here" />
    <p>
      Current id: <strong>{{ id }}</strong>
    </p>
  </div>
</template>
