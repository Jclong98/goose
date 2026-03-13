<template>
  <div>
    <GButton style="anchor-name: --basic-button" popovertarget="basic-popover">
      Open popover
    </GButton>
    <GPopover id="basic-popover" v-slot="{ close }" anchor="--basic-button">
      <div class="rounded-xl border border-(--vp-c-divider) bg-(--vp-c-bg) p-3">
        <p class="mb-3">Popovers have position="bottomCenter" by default.</p>
        <GButton @click="close"> Dismiss </GButton>
      </div>
    </GPopover>
  </div>
</template>
