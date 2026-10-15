<script lang="ts" setup>
import { Focus as vFocus } from "@/directives";
</script>

<template>
  <input
    v-focus
    class="rounded-md border border-(--vp-c-divider) bg-(--vp-c-bg) px-3 py-2"
    placeholder="This input is focused when the example loads"
  />
</template>
