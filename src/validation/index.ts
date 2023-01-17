export type Validation<T> = {
  (val: T): string[];
};
