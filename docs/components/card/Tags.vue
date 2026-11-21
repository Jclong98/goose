<template>
  <div class="flex flex-col gap-2">
    <ul class="flex gap-1">
      <GCard
        v-for="i in 5"
        :key="i"
        is="li"
        variant="surface-3"
        class="rounded-full border px-3 py-1 text-sm"
      >
        tag {{ i }}
      </GCard>
    </ul>

    <ul class="flex gap-1">
      <GCard
        v-for="variant in ['info', 'success', 'warning', 'danger']"
        :key="variant"
        is="li"
        :variant="variant"
        class="py-.5 rounded border px-3 text-sm"
      >
        {{ variant }}
      </GCard>
    </ul>
  </div>
</template>
