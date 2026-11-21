<template>
  <GCard class="rounded-lg border" is="article">
    <GCard variant="info" class="px-4 py-2" is="header">
      <span class="text-xl">Card Header</span>
    </GCard>

    <GCard class="gap-2 overflow-auto px-4 py-2">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa deserunt modi
        rem. Atque eveniet optio est deleniti officia non vel cum minus voluptatum quibusdam, odit
        iure, repellendus libero assumenda?
      </p>
    </GCard>

    <GCard variant="surface-2" class="flex-row justify-end gap-2 border-t p-2" is="footer">
      <GButton>Cancel</GButton>
      <GButton variant="primary">OK</GButton>
    </GCard>
  </GCard>
</template>
