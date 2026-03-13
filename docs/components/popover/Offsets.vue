<template>
  <div class="flex gap-2">
    <GButton style="anchor-name: --offset-button-1" popovertarget="offset-popover-1">
      mt-1
    </GButton>
    <GPopover
      id="offset-popover-1"
      anchor="--offset-button-1"
      position-area="bottom"
      class="card mt-1 max-w-64"
    >
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </GPopover>

    <GButton style="anchor-name: --offset-button-2" popovertarget="offset-popover-2">
      mt-4
    </GButton>
    <GPopover
      id="offset-popover-2"
      anchor="--offset-button-2"
      position-area="bottom"
      class="card mt-4 max-w-64"
    >
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </GPopover>

    <GButton style="anchor-name: --offset-button-3" popovertarget="offset-popover-3">
      mt-8
    </GButton>
    <GPopover
      id="offset-popover-3"
      anchor="--offset-button-3"
      position-area="bottom"
      class="card mt-8 max-w-64"
    >
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
