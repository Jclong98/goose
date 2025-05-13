import { computed, type MaybeRefOrGetter,toValue } from "vue";

export function useMultiplier(
  value: MaybeRefOrGetter<number>,
  multiplier: MaybeRefOrGetter<number>
) {
  const product = computed(() => toValue(value) * toValue(multiplier));
  return { product };
}
