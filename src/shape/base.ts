import type { ValidationError } from "./validation-error.js";
import type { Result } from "../result.js";

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
  (val: unknown): Result<T, ValidationError>;
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
