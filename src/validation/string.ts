import type { Validation } from "./index.js";

export function stringMin(length: number): Validation<string> {
  return (val: string) => {
    if (val.length < length) {
      return [
        `must be longer than ${length} character${length === 1 ? "" : "s"}`,
      ];
    }

    return [];
  };
}

export function stringMax(length: number): Validation<string> {
  return (val: string) => {
    if (val.length > length) {
      return [
        `must be shorter than ${length} character${length === 1 ? "" : "s"}`,
      ];
    }

    return [];
  };
}
