<script lang="ts" setup generic="T">
import type { EmitsOptions, FunctionalComponent, VNode } from "vue";
import { h } from "vue";

import { type TreeItem } from "./types";

const items = defineModel<TreeItem<T>[]>("items", { required: true });

const emit = defineEmits<{
  "click:item": [item: TreeItem<T>];
  "expand:item": [item: TreeItem<T>];
}>();

const GTreeItem: FunctionalComponent<
  { item: TreeItem<T>; level: number },
  EmitsOptions,
  { label(props: { item: TreeItem<T>; level: number }): VNode }
> = (props, { slots }) => {
  const paddingLeft = `${props.level}rem`;

  const selectedClasses = "bg-blue-100 hover:bg-blue-200";
  const unselectedClasses = "hover:bg-blue-50";

  return h("li", [
    // main item
    h(
      "div",
      {
        onClick: () => emit("click:item", props.item),
        class: [
          "flex gap-2",
          props.item.selected ? selectedClasses : unselectedClasses,
        ],
        style: { paddingLeft },
      },
      [
        // expand button
        props.item.children
          ? h(
              "button",
              {
                class: "cursor-pointer",
                onClick: (e) => {
                  e.stopPropagation();
                  props.item.expanded = !props.item.expanded;
                  if (props.item.expanded) {
                    emit("expand:item", props.item);
                  }
                },
              },
              h("span", props.item.expanded ? "▼" : "►")
            )
          : null,

        // loading spinner
        props.item.loading ? h("span", { class: "animate-spin" }, "⏳") : null,

        // label
        slots.label({ item: props.item, level: props.level }),
      ]
    ),

    // children
    props.item.children && props.item.expanded
      ? h(
          "ul",
          props.item.children.map((child) =>
            h(
              GTreeItem,
              { item: child, level: props.level + 1 },
              {
                label: ({ item, level }) => slots.label({ item, level }),
              }
            )
          )
        )
      : null,
  ]);
};
</script>

<template>
  <ul>
    <GTreeItem v-for="item in items" :key="item" :item :level="0">
      <template #label="{ item, level }">
        <slot name="label" :item="item" :level="level">
          {{ item.label }}
        </slot>
      </template>
    </GTreeItem>
  </ul>
</template>
