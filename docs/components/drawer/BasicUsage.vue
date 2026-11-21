<template>
  <div
    class="grid h-96 place-content-center rounded-lg border border-(--vp-c-divider)"
    style="anchor-name: --drawer-anchor"
  >
    <GDrawer anchor="--drawer-anchor">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> Open drawer </GButton>
      </template>

      <template #default="{ closeBinding }">
        <GCard class="flex-1 p-4">
          <p>this drawer has some stuff in it!</p>

          <GButton class="mt-auto" v-bind="closeBinding"> Close </GButton>
        </GCard>
      </template>
    </GDrawer>
  </div>
</template>
