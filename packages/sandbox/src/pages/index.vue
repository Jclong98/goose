<script setup lang="ts">
const num = ref(2);
const { product: timesFour } = useMultiplier(num, 4);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Home</h1>

    <div>
      <GButton>auto imported goose button</GButton> <br />

      <button>normal button (unstyled)</button>
    </div>

    <label>
      <span class="block">
        tailwind styled input using colors from
        <code
          class="bg-blue-50 border border-blue-400 px-3 rounded-full inline-flex"
        >
          @goose/core/tw-theme.css
        </code>
      </span>
      <input
        class="border px-4 py-2 rounded bg-goose/20 border-goose active:border-goose/50 focus:outline-none focus:ring-2 focus:ring-goose/50"
        type="number"
        v-model="num"
        v-focus
      />
    </label>

    <pre>{{ { num, timesFour } }}</pre>
  </div>
</template>
