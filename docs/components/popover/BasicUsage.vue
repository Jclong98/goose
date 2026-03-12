<template>
    <div>
        <GButton style="anchor-name: --basic-button;" popovertarget="basic-popover">Open popover</GButton>
        <GPopover id="basic-popover" v-slot="{ close }" anchor="--basic-button">
            <div class="bg-(--vp-c-bg) border border-(--vp-c-divider) rounded-xl p-3">
                <p class="mb-3">Popovers have position="bottomCenter" by default.</p>
                <GButton @click="close">Dismiss</GButton>
            </div>
        </GPopover>
    </div>
</template>
