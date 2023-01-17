export type Validation<T> = {
  (val: T): string[];
};

export { stringMin, stringMax } from "./string.js";
