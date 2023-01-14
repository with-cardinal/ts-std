import { Result, Ok, Err } from "../result.js";
import type { Shape } from "./base.js";
import { message, ValidationError } from "./validation-error.js";

function intCoerce(min: number, max: number) {
  return (val: unknown): Result<number, ValidationError> => {
    if (typeof val === "number") {
      if (val > max) {
        return Err(
          new ValidationError([message(`must be an integer less than ${max}`)])
        );
      } else if (val < min) {
        return Err(
          new ValidationError([
            message(`must be an integer greater than ${min}`),
          ])
        );
      }
      return Ok(val);
    }

    return Err(
      new ValidationError([
        message(`must be an integer between ${min} and ${max}`),
      ])
    );
  };
}

export const i32: Shape<number> = intCoerce(-(2 ** 31) + 1, 2 ** 31 - 1);
export const ui32: Shape<number> = intCoerce(0, 2 ** 32 - 1);
