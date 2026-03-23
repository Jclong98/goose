<template>
  <div
    class="grid h-96 place-content-center rounded-lg border border-(--vp-c-divider)"
    style="anchor-name: --drawer-anchor"
  >
    <GDrawer anchor="--drawer-anchor" class="max-w-64 p-4">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> Open drawer </GButton>
      </template>

      <template #default="{ closeBinding }">
        <p>this drawer has some stuff in it!</p>

        <GButton v-bind="closeBinding"> Close </GButton>
      </template>
    </GDrawer>
  </div>
</template>
