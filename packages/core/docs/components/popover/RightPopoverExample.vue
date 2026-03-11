<template>
  <ClientOnly>
    <div class="demo">
      <GPopover position="right">
        <template #activator="{ props }">
          <GButton v-bind="props">Open right popover</GButton>
        </template>

        <div style="background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 0.75rem; box-shadow: 0 4px 16px rgba(0,0,0,0.12)">
          Right-positioned popover.
        </div>
      </GPopover>
    </div>
  </ClientOnly>
</template>
