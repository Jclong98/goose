import { createApp } from "vue";
import GToastContainer from "../components/GToastContainer/GToastContainer.vue";

/**
 * map of container names to their dom elements.
 * this will be filled with css position anchor names like --toast-container
 */
const containers: Map<string, Element> = new Map();

function getOrCreateContainer(anchorName: string): Element {
  let container = containers.get(anchorName);
  if (!container) {
    container = document.createElement("div");
    container.classList.add("toast-container");
    document.body.appendChild(container);
    containers.set(anchorName, container);
  }
  return container;
}

export function useToast(anchorName: string = "--g-toast-container") {
  const container = getOrCreateContainer(anchorName);

  const app = createApp(GToastContainer, { anchorName });
  app.provide("containers", containers);
  const root = app.mount(container) as InstanceType<typeof GToastContainer>;

  function cleanup() {
    app.unmount();
    container?.remove();
    containers.delete(anchorName);
  }

  return { show: root.show, cleanup };
}
