<script lang="ts" setup>
function onDisabledClick(event: MouseEvent) {
  alert("Button is disabled!");
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <GButton disabled variant="primary" @click:disabled="onDisabledClick"> Primary </GButton>
    <GButton disabled variant="secondary" @click:disabled="onDisabledClick">
      Secondary (default)
    </GButton>
    <GButton disabled variant="ghost" @click:disabled="onDisabledClick"> Ghost </GButton>
    <GButton disabled variant="link" @click:disabled="onDisabledClick"> Link </GButton>
  </div>
</template>
