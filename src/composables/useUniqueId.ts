import { computed, type ComputedRef, useAttrs, useId } from "vue";

export function useUniqueId(): ComputedRef<string> {
  const attrs = useAttrs();
  const attrId = attrs.id as string | undefined;
  if (attrId) return computed(() => attrId);

  const uniqueId = useId();
  return computed(() => uniqueId);
}
