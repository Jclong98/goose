export type TreeItem<T> = {
  label: string;
  id?: string;
  data?: T;
  children?: TreeItem<T>[];
  expanded?: boolean;
  selected?: boolean;
  loading?: boolean;
};
