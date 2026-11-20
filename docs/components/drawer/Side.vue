<template>
  <div
    class="grid h-96 place-content-center rounded-lg border border-(--vp-c-divider)"
    style="anchor-name: --side-drawer-anchor"
  >
    <div class="flex gap-2">
      <GButton popovertarget="left-example"> Left drawer </GButton>
      <GButton popovertarget="right-example"> Right drawer </GButton>
    </div>
  </div>

  <!-- left -->
  <GDrawer id="left-example" anchor="--side-drawer-anchor" side="left">
    <GCard class="flex-1 p-4">
      <p>This drawer is on the left</p>

      <GButton popovertarget="left-example" class="mt-auto"> Close </GButton>
    </GCard>
  </GDrawer>

  <!-- right -->
  <GDrawer id="right-example" anchor="--side-drawer-anchor" side="right">
    <GCard class="flex-1 p-4">
      <p>This drawer is on the right</p>

      <GButton popovertarget="right-example" class="mt-auto"> Close </GButton>
    </GCard>
  </GDrawer>
</template>
