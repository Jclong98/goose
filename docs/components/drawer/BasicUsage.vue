<template>
  <div
    class="grid h-96 place-content-center rounded-lg border border-(--vp-c-divider)"
    style="anchor-name: --drawer-anchor"
  >
    <GButton popovertarget="anchored-example"> Open drawer </GButton>
  </div>

  <GDrawer id="anchored-example" anchor="--drawer-anchor" class="max-w-64 p-4">
    <p>this drawer has some stuff in it!</p>

    <GButton popovertarget="anchored-example" class="mt-auto"> Close </GButton>
  </GDrawer>
</template>
