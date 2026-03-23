import { computed, type ComputedRef, useAttrs, useId } from "vue";

export function useUniqueId(): ComputedRef<string> {
  const attrs = useAttrs();
  const uniqueId = useId();
  return computed(() => {
    const attrId = attrs.id as string | undefined;
    return attrId || uniqueId;
  });
}
