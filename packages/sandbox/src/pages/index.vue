<script setup lang="ts">
const num = ref(2);
const { product: timesFour } = useMultiplier(num, 4);
const selectedValue = ref("option1");
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Home</h1>

    <h2 class="text-xl font-semibold">Auto imported components</h2>
    <div>
      <GButton>auto imported goose button</GButton> <br />

      <button>
        normal button
        <span>(unstyled)</span>
      </button>

      <GSegmentedControl
        v-model="selectedValue"
        label="Select an option"
        visible-label
        :items="[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]"
      />
    </div>

    <h2 class="text-xl font-semibold">Tailwindcss theming</h2>
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
        v-model="num"
        v-focus
        class="border px-4 py-2 rounded bg-goose/20 border-goose active:border-goose/50 focus:outline-none focus:ring-2 focus:ring-goose/50"
        type="number"
      />
    </label>

    <pre>{{ { num, timesFour } }}</pre>
  </div>
</template>
