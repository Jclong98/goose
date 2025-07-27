import { computed, type ComputedRef, useAttrs, useId } from "vue";

export function useIdAttr(): ComputedRef<string> {
  const id = useId();
  const attrs = useAttrs();

  return computed(() => (attrs.id as string) ?? id);
}
