<template>
  <GButton style="anchor-name: --manual-button" popovertarget="manual-popover">
    Open popover
  </GButton>

  <GPopover id="manual-popover" anchor="--manual-button" class="card mt-1">
    <p>Popovers have position-area="bottom" by default.</p>
  </GPopover>
</template>

<style scoped>
.card {
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 1rem;
}
</style>
