<template>
  <GButton popovertarget="drawer-left-example">
    Open drawer
  </GButton>

  <GDrawer id="drawer-left-example" anchor="--body" side="left"
    style="background: var(--vp-c-bg); width: 280px; padding: 1rem; border-right: 1px solid var(--vp-c-divider)">
    <p style="font-weight: 600; margin: 0 0 0.5rem">Left drawer</p>
    <p style="margin: 0; color: var(--vp-c-text-2)">Same component configured with <code>side="left"</code>.</p>
  </GDrawer>
</template>
