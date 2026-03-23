<script setup lang="ts"></script>

<template>
  <div class="flex flex-wrap gap-2">
    <GButton loading> Loading Button </GButton>

    <GButton loading>
      <template #icon> <span>🙂</span> </template>
      <template #loading> <span class="animate-spin">😵‍💫</span> </template>
      Custom Loading Slot
    </GButton>
  </div>
</template>
