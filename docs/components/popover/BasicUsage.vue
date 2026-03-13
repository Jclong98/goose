<template>
  <div>
    <GButton style="anchor-name: --basic-button" popovertarget="basic-popover">
      Open popover
    </GButton>
  </div>

  <GPopover id="basic-popover" anchor="--basic-button" class="card mt-1">
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
