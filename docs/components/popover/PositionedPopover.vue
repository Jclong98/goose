<template>
  <div class="flex flex-col items-start gap-2">
    <GPopover ref="popover1" position-area="bottom span-right" class="mt-1">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> bottom span-right </GButton>
      </template>

      <div class="card">
        <p>Popovers can be positioned in the many ways using the css position-area property</p>
      </div>
    </GPopover>

    <GPopover ref="popover2" position-area="top span-left" class="mb-1">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> top span-left </GButton>
      </template>

      <div class="card">
        <p>Popovers can be positioned in the many ways using the css position-area property</p>
      </div>
    </GPopover>

    <GPopover ref="popover3" position-area="left span-bottom" class="mr-1">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> left span-bottom </GButton>
      </template>

      <div class="card">
        <p>Popovers can be positioned in the many ways using the css position-area property</p>
      </div>
    </GPopover>

    <GPopover ref="popover4" position-area="right span-top" class="ml-1 w-64">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> right span-top </GButton>
      </template>

      <div class="card">
        <p>Popovers can be positioned in the many ways using the css position-area property</p>
      </div>
    </GPopover>
  </div>
</template>
