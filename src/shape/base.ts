import {
  appendValidations,
  ValidationMessages,
} from "./validation-messages.js";
import { Err, isErr, Result } from "../result/index.js";
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

export function validate<T>(s: Shape<T>, ...v: Validation<T>[]): Shape<T> {
  return (val: unknown) => {
    const res = s(val);

    if (isErr(res)) {
      return res;
    }

    let vMsgs: string[] = [];
    for (const validation of v) {
      vMsgs = vMsgs.concat(validation(res.value));
    }

    if (vMsgs.length > 0) {
      const msgs: ValidationMessages = [];
      appendValidations(msgs, vMsgs);
      return Err(msgs);
    }

    return res;
  };
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
