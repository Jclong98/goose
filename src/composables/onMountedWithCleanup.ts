import { tryOnMounted, tryOnScopeDispose } from "@vueuse/core";

export function onMountedWithCleanup(cb: () => (() => void) | void) {
  tryOnMounted(() => {
    const cleanup = cb();
    tryOnScopeDispose(() => {
      cleanup?.();
    });
  });
}
