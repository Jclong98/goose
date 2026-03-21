<script lang="ts" setup>
import { useUniqueId } from "@/composables";
import { computed, onMounted, useTemplateRef, watch } from "vue";

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    /**
     * - none: requires manual closing via button or JavaScript
     * - close-request: pressing escape, pressing "back" on mobile, clicking a button with the `request-close` command
     * - any: close-request+ allows clicking outside the dialog to close it
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby
     */
    closedby?: "none" | "close-request" | "any";
  }>(),
  {
    closedby: "close-request",
  },
);

const isOpen = defineModel<boolean>("open");

const emit = defineEmits<{
  toggle: [event: ToggleEvent];
}>();

const dialogElement = useTemplateRef("dialogElement");
const open = () => dialogElement.value?.showModal();
const close = () => dialogElement.value?.close();

const onToggle = (event: ToggleEvent) => {
  isOpen.value = event.newState === "open";
};

// watch is inside onMounted because you can't
// open a popover that isn't mounted
onMounted(() => {
  watch(isOpen, (nv) => (nv ? open() : close()), { immediate: true });
});

const id = useUniqueId();
const activatorBinding = computed(() => ({
  commandfor: id.value,
  command: "show-modal",
}));

const cancelBinding = computed(() => ({
  commandfor: id.value,
  command: "request-close",
}));
</script>

<template>
  <slot name="activator" :binding="activatorBinding"></slot>
  <dialog
    v-bind="$attrs"
    class="g-dialog"
    :id="id"
    ref="dialogElement"
    @toggle="onToggle"
    :closedby="props.closedby"
  >
    <slot :cancelBinding="cancelBinding"></slot>
  </dialog>
</template>

<style scoped>
.g-dialog {
  background: transparent;
  max-width: unset;
  width: min(95vw, 600px);
  max-height: 95dvh;
  margin: auto;
}
</style>

<style>
/* global style to disable scrolling when a dialog is open */
html:has(.g-dialog[open]) {
  overflow: hidden;
}
</style>
