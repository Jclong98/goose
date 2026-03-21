import type { Awaitable } from "@vueuse/core";
import { ref, toRaw, toValue, type MaybeRefOrGetter, type Ref } from "vue";

function deepCopy<T>(value: MaybeRefOrGetter<T>): T {
  return structuredClone(toRaw(toValue(value)));
}

export function useDialogForm<T>(options: {
  state: Ref<T>;
  onSubmit: (state: T) => Awaitable<void>;
  onCancel?: () => Awaitable<void>;
}) {
  const { state, onSubmit, onCancel } = options;
  const dialogState = ref(deepCopy(state));

  async function _onCancel() {
    await onCancel?.();
    dialogState.value = deepCopy(state); // Reset state when cancelling
  }

  async function _onSubmit(e: SubmitEvent) {
    e.preventDefault(); // prevent form from submitting and closing the dialog immediately

    await onSubmit(dialogState.value); // Call the provided onSubmit callback

    dialogState.value = deepCopy(state); // Reset state after submission

    (e.target as HTMLFormElement).submit(); // Close the dialog
  }

  const bindings = {
    form: {
      onSubmit: _onSubmit,
      method: "dialog",
    },
    dialog: {
      onCancel: _onCancel,
    },
  };

  return {
    dialogState,
    bindings,
  };
}
