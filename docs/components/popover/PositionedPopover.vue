<template>
  <div class="flex flex-col items-start gap-2">
    <GButton style="anchor-name: --positioned-button-1" popovertarget="positioned-popover-1">
      bottom span-right
    </GButton>
    <GPopover
      id="positioned-popover-1"
      anchor="--positioned-button-1"
      position-area="bottom span-right"
      class="card mt-1"
    >
      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>

    <GButton style="anchor-name: --positioned-button-2" popovertarget="positioned-popover-2">
      top span-left
    </GButton>
    <GPopover
      id="positioned-popover-2"
      anchor="--positioned-button-2"
      position-area="top span-left"
      class="card mb-1"
    >
      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>

    <GButton style="anchor-name: --positioned-button-3" popovertarget="positioned-popover-3">
      right span-top
    </GButton>
    <GPopover
      id="positioned-popover-3"
      anchor="--positioned-button-3"
      position-area="right span-top"
      class="card ml-1 w-64"
    >
      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>

    <GButton style="anchor-name: --positioned-button-4" popovertarget="positioned-popover-4">
      left span-bottom
    </GButton>
    <GPopover
      id="positioned-popover-4"
      anchor="--positioned-button-4"
      position-area="left span-bottom"
      class="card mr-1"
    >
      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>
  </div>
</template>

<style scoped>
.card {
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 1rem;
}
</style>
