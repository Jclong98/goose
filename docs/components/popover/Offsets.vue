<template>
  <div class="flex gap-2">
    <GPopover class="mt-1">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> mt-1 </GButton>
      </template>

      <GCard class="rounded border p-4">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </GCard>
    </GPopover>

    <GPopover class="mt-4">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> mt-4 </GButton>
      </template>

      <GCard class="rounded border p-4">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </GCard>
    </GPopover>

    <GPopover class="mt-8">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> mt-8 </GButton>
      </template>

      <GCard class="rounded border p-4">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </GCard>
    </GPopover>
  </div>
</template>
