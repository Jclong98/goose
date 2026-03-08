import { mount } from "@vue/test-utils";
import { effectScope, nextTick, ref } from "vue";

import { useHighlight } from "./useHighlight";

class MockHighlight {
  public readonly ranges: Range[];

  constructor(...ranges: Range[]) {
    this.ranges = ranges;
  }
}

type HighlightStore = Map<string, MockHighlight>;

function createHighlightEnvironment() {
  const store: HighlightStore = new Map();
  const set = vi.fn((key: string, value: MockHighlight) => {
    store.set(key, value);
  });
  const del = vi.fn((key: string) => {
    store.delete(key);
  });

  vi.stubGlobal("CSS", {
    highlights: {
      set,
      delete: del,
    },
  });
  vi.stubGlobal("Highlight", MockHighlight);

  return { del, set, store };
}

function withScope<T>(factory: () => T) {
  const scope = effectScope();
  const result = scope.run(factory);
  if (!result) {
    throw new Error("Expected composable result from effect scope");
  }
  return {
    result,
    stop: () => scope.stop(),
  };
}

describe("useHighlight", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    document.body.innerHTML = "";
  });

  it("highlights search results immediately and reacts to search changes", async () => {
    const { set, store } = createHighlightEnvironment();
    const element = document.createElement("div");
    element.innerHTML = "hello world hello";
    const target = ref<HTMLElement | null>(element);

    const search = ref("hello");
    const { result, stop } = withScope(() => useHighlight(target, search));

    await nextTick();
    expect(result.matchCount.value).toBe(2);
    expect(set).toHaveBeenCalledTimes(1);
    expect(store.get("search-results")?.ranges).toHaveLength(2);

    search.value = "world";
    await nextTick();
    expect(result.matchCount.value).toBe(1);
    expect(store.get("search-results")?.ranges).toHaveLength(1);

    stop();
  });

  it("does not auto-run when manual is enabled", async () => {
    const { set, store } = createHighlightEnvironment();
    const element = document.createElement("div");
    element.textContent = "alpha beta alpha";
    const target = ref<HTMLElement | null>(element);

    const search = ref("alpha");
    const { result, stop } = withScope(() => useHighlight(target, search, { manual: true }));

    await nextTick();
    expect(result.matchCount.value).toBe(0);
    expect(set).not.toHaveBeenCalled();

    result.highlight();
    expect(result.matchCount.value).toBe(2);
    expect(store.get("search-results")?.ranges).toHaveLength(2);

    stop();
  });

  it("respects exclude selectors and ignores invalid selectors", async () => {
    createHighlightEnvironment();
    const element = document.createElement("div");
    element.innerHTML = `
        <p>foo</p>
        <span class="skip">foo</span>
        <div>foo</div>
    `;
    const target = ref<HTMLElement | null>(element);

    const search = ref("foo");
    const exclude = ref([".skip", "[invalid["]);
    const { result, stop } = withScope(() => useHighlight(target, search, { exclude }));

    await nextTick();
    expect(result.matchCount.value).toBe(2);

    stop();
  });

  it("re-runs when target element changes", async () => {
    createHighlightEnvironment();
    const first = document.createElement("div");
    first.textContent = "x x";
    const second = document.createElement("div");
    second.textContent = "x x x";

    const target = ref<HTMLElement | null>(first);
    const search = ref("x");
    const { result, stop } = withScope(() => useHighlight(target, search));

    await nextTick();
    expect(result.matchCount.value).toBe(2);

    target.value = second;
    await nextTick();
    expect(result.matchCount.value).toBe(3);

    stop();
  });

  it("accepts component refs by resolving $el", async () => {
    createHighlightEnvironment();
    const wrapper = mount({
      template: "<div>abc abc</div>",
    });

    const componentRef = ref(wrapper.vm);
    const search = ref("abc");
    const { result, stop } = withScope(() => useHighlight(componentRef, search));

    await nextTick();
    expect(result.matchCount.value).toBe(2);

    stop();
    wrapper.unmount();
  });

  it("clears highlights on clearHighlight and scope disposal", async () => {
    const { del } = createHighlightEnvironment();
    const element = document.createElement("div");
    element.textContent = "term term";
    const target = ref<HTMLElement | null>(element);

    const search = ref("term");
    const { result, stop } = withScope(() => useHighlight(target, search));

    await nextTick();
    expect(result.matchCount.value).toBe(2);

    result.clearHighlight();
    expect(result.matchCount.value).toBe(0);
    expect(del).toHaveBeenCalledWith("search-results");

    stop();
    expect(del).toHaveBeenCalled();
  });

  it("reports unsupported environment when Highlight API is unavailable", async () => {
    vi.stubGlobal("CSS", undefined);
    vi.stubGlobal("Highlight", undefined);

    const element = document.createElement("div");
    element.textContent = "hello";
    const target = ref<HTMLElement | null>(element);

    const search = ref("hello");
    const { result, stop } = withScope(() => useHighlight(target, search));

    await nextTick();
    expect(result.isSupported.value).toBe(false);
    expect(result.matchCount.value).toBe(0);

    result.highlight();
    expect(result.matchCount.value).toBe(0);

    stop();
  });
});
