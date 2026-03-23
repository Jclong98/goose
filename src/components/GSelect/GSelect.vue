<script lang="ts" setup generic="T">
type SelectItem<T> = {
  label: string;
  value: T;
};

const props = defineProps<{
  items: SelectItem<T>[];
}>();

const modelValue = defineModel<T>();
</script>

<template>
  <select v-model="modelValue" class="rounded-md border px-3 py-2">
    <!-- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select -->
    <button>
      <selectedcontent></selectedcontent>
    </button>

    <option v-for="item in props.items" :key="item.label" :value="item.value">
      <slot name="item" :item="item">
        {{ item.label }}
      </slot>
    </option>
  </select>
</template>

<style scoped>
select {
  appearance: base-select;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 4px 12px;
}

::picker(select) {
  appearance: base-select;
  top: calc(anchor(bottom) + 4px);
  left: anchor(left);
}

select::picker-icon {
  transition: rotate 0.3s ease;
}

select:open::picker-icon {
  rotate: 180deg;
}

::picker(select) {
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 4px;
}

option {
  padding: 4px 8px;
  border-radius: 4px;
  margin: 2px 0;
}

option:checked {
  background-color: var(--color-goose);
}
</style>
