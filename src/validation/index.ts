export type Validation<T> = {
  (val: T): string[];
};

export {
  stringMin,
  stringMax,
  stringLength,
  stringMatch,
  stringNotBlank,
} from "./string.js";
