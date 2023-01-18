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

export function stringLength(length: number): Validation<string> {
  return (val: string) => {
    if (val.length !== length) {
      return [`must be ${length} character${length === 1 ? "" : "s"}`];
    }

    return [];
  };
}

export function stringMatch(
  regex: RegExp,
  message: string
): Validation<string> {
  return (val: string) => {
    if (!val.match(regex)) {
      return [message];
    }

    return [];
  };
}

export const stringNotBlank: Validation<string> = (val: string) => {
  if (val.trim() === "") {
    return ["must not be blank"];
  }

  return [];
};
