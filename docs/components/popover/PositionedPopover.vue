<template>
  <div class="flex flex-col items-start gap-2">
    <GPopover ref="popover1" position-area="bottom span-right" class="card mt-1">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> bottom span-right </GButton>
      </template>

      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>

    <GPopover ref="popover2" position-area="top span-left" class="card mb-1">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> top span-left </GButton>
      </template>

      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>

    <GPopover ref="popover3" position-area="left span-bottom" class="card mr-1">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> left span-bottom </GButton>
      </template>

      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>

    <GPopover ref="popover4" position-area="right span-top" class="card ml-1 w-64">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> right span-top </GButton>
      </template>

      <p>Popovers can be positioned in the many ways using the css position-area property</p>
    </GPopover>
  </div>
</template>
