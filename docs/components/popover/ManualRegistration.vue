<template>
  <GButton style="anchor-name: --manual-button" popovertarget="manual-popover">
    Open popover
  </GButton>

  <GPopover id="manual-popover" anchor="--manual-button">
    <div class="card">
      <p>Manually registered popovers require specifying both the anchor and the popover ID.</p>
    </div>
  </GPopover>
</template>
