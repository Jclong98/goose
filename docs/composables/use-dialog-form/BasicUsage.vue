<script setup lang="ts">
import { ref } from "vue";

import { useDialogForm } from "@/composables/useDialogForm";

const data = ref<{ name: string; age: number }>({
  name: "John Doe",
  age: 30,
});

const { dialogState, bindings } = useDialogForm({
  state: data,
  onSubmit: async (state) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
    data.value = state;
  },
});
</script>

<template>
  <div>
    <pre>{{ data }}</pre>

    <GDialog v-bind="bindings.dialog">
      <template #activator="{ binding }">
        <GButton v-bind="binding"> Open Dialog </GButton>
      </template>

      <template #default="{ cancelBinding }">
        <form v-bind="bindings.form" class="card flex flex-col gap-4">
          <h2 class="text-lg font-bold">Edit Profile</h2>

          <label>
            Name:
            <input v-model="dialogState.name" class="ml-2 rounded border px-2 py-1" type="text" />
          </label>

          <label>
            Age:
            <input v-model="dialogState.age" class="ml-2 rounded border px-2 py-1" type="number" />
          </label>

          <div class="flex justify-end gap-2">
            <GButton v-bind="cancelBinding"> Close </GButton>

            <GButton type="submit" variant="primary"> Save </GButton>
          </div>
        </form>
      </template>
    </GDialog>
  </div>
</template>
