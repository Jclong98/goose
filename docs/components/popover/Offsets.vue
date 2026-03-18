<template>
  <div class="flex gap-2">
    <GPopover ref="mt1" position-area="bottom" class="mt-1">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> mt-1 </GButton>
      </template>

      <div class="card">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </GPopover>

    <GPopover ref="mt4" position-area="bottom" class="mt-4">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> mt-4 </GButton>
      </template>

      <div class="card">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </GPopover>

    <GPopover ref="mt8" position-area="bottom" class="mt-8">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> mt-8 </GButton>
      </template>

      <div class="card">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </GPopover>
  </div>
</template>
