export type TableColumn<TKey extends string = string> = {
  key: TKey;
  title: string;
  width?: string;
  pin?: "left" | "right";
};
