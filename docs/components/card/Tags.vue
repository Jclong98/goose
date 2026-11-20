<template>
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
</template>
