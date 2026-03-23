<script lang="ts" setup>
import { ref } from "vue";

const disabledState = ref<boolean | "lite" | undefined>(true);

function onClick() {
  alert("This button works fine!");
}

function onDisabledClick() {
  alert("Button is disabled");
}
</script>

<template>
  <select v-model="disabledState" class="mb-1 rounded border px-4 py-1">
    <option :value="undefined">Enabled</option>
    <option :value="true">Disabled</option>
    <option :value="'lite'">Disabled Lite</option>
  </select>

  <GButton :disabled="disabledState" @click="onClick" @click:disabled="onDisabledClick">
    Click Me
  </GButton>
</template>
