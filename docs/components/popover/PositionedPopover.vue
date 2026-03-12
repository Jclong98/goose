<script lang="ts" setup>
import type { PopoverPosition } from '@core/components/GPopover/types';
import { ref } from 'vue';

const positions: PopoverPosition[] = ['topCenter', 'topLeft', 'topRight', 'bottomCenter', 'bottomLeft', 'bottomRight', 'left', 'right'];
const position = ref<PopoverPosition>('bottomCenter');
</script>

<template>
  <div>
    <select name="position" id="position" v-model="position" class="mb-4 px-3 py-2 border rounded-md">
      <option v-for="position in positions" :key="position" :value="position">{{ position }}</option>
    </select>
    <br>

    <GButton style="anchor-name: --positioned-button;" popovertarget="positioned-popover">Open popover</GButton>
    <GPopover id="positioned-popover" v-slot="{ close }" anchor="--positioned-button" :position="position">
      <div class="bg-(--vp-c-bg) border border-(--vp-c-divider) rounded-xl p-3">
        <p class="mb-3">This popover is in the {{ position }} position</p>
        <GButton @click="close">Dismiss</GButton>
      </div>
    </GPopover>
  </div>
</template>
