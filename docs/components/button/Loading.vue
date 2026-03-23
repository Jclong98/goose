<script setup lang="ts"></script>

<template>
  <div class="flex flex-wrap gap-2">
    <GButton loading>
      <template #icon> <span>🙂</span> </template>

      Loading Button
    </GButton>

    <GButton loading>
      <template #loading> <span class="animate-spin">WOAH</span> </template>
      Custom Loading Slot
    </GButton>
  </div>
</template>
