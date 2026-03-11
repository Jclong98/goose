<template>
  <ClientOnly>
    <div class="demo">
      <GPopover position="bottomCenter">
        <template #activator="{ props }">
          <GButton v-bind="props">Open popover</GButton>
        </template>

        <template #default="{ close }">
          <div style="background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 1rem; min-width: 180px; box-shadow: 0 4px 16px rgba(0,0,0,0.12)">
            <p style="margin: 0 0 0.75rem">Bottom centered popover content.</p>
            <GButton @click="close">Dismiss</GButton>
          </div>
        </template>
      </GPopover>
    </div>
  </ClientOnly>
</template>
