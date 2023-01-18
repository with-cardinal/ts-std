import type { ValidationMessages } from "./validation-messages.js";
import type { Result } from "../result/index.js";
import type { Validation } from "../validation/index.js";

/**
 * Shape lets you serialize and deserialize data to plain objects
 */
export interface Shape<T = unknown> {
  /**
   * coerces an unknown value shape into a T. Throws a ShapeError
   * if the value cannot be coerced.
   *
   * @param val - unknown value to be coerced
   * @returns typed shaped value or Errs
   */
  (val: unknown): Result<T, ValidationMessages>;
}

export function validate<T>(val: T, v: Validation<T>[]): string[] {
  let out: string[] = [];

  for (const validation of v) {
    out = out.concat(validation(val));
  }

  return out;
}

export type ObjShape = { [key: string]: Shape };

/**
 * Infer infers the type from a Shape, allowing for type definitions.
 */
export type Infer<T> = T extends ObjShape
  ? { [K in keyof T]: Infer<T[K]> }
  : T extends Shape<infer U>
  ? U
  : never;
