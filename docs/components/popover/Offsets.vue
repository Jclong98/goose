<template>
  <div class="flex gap-2">
    <GPopover class="card mt-1">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> mt-1 </GButton>
      </template>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </GPopover>

    <GPopover class="card mt-4">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> mt-4 </GButton>
      </template>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </GPopover>

    <GPopover class="card mt-8">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> mt-8 </GButton>
      </template>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </GPopover>
  </div>
</template>
