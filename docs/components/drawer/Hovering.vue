<template>
  <div
    class="grid h-96 place-content-center rounded-lg border border-(--vp-c-divider)"
    style="anchor-name: --hovering-drawer-anchor"
  >
    <GDrawer anchor="--hovering-drawer-anchor" class="p-4">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> Open drawer </GButton>
      </template>

      <template #default="{ closeBinding }">
        <GCard class="flex-1 rounded-xl p-4">
          <p>this drawer has some stuff in it!</p>

          <GButton class="mt-auto" v-bind="closeBinding"> Close </GButton>
        </GCard>
      </template>
    </GDrawer>
  </div>
</template>
