<script lang="ts" setup>
import { useTemplateRef } from "vue";

const jsPopover = useTemplateRef("jsPopover");
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <!-- no js -->
    <GButton style="anchor-name: --manual-button" popovertarget="manual-popover">
      Open popover no js
    </GButton>

    <GPopover id="manual-popover" anchor="--manual-button" class="mt-1">
      <GCard class="rounded border p-4">
        <p>Manually registered popovers require specifying both the anchor and the popover ID.</p>
      </GCard>
    </GPopover>

    <!-- with js -->
    <GButton v-bind="jsPopover?.activatorBinding"> Open popover with JS </GButton>

    <GPopover ref="jsPopover" class="mt-1">
      <GCard class="rounded border p-4">
        <p>
          This popover is registered to its activator using the exposed activatorBinding from the
          template ref.
        </p>
      </GCard>
    </GPopover>
  </div>
</template>
