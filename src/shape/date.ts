import { Result, Ok, Err } from "../result.js";
import type { Shape } from "./base.js";
import { message, ValidationError } from "./validation-error.js";

export const date: Shape<Date> = (
  val: unknown
): Result<Date, ValidationError> => {
  if (val instanceof Date) {
    return Ok(val);
  }

  if (typeof val === "string") {
    const ts = Date.parse(val);
    if (!isNaN(ts)) {
      return Ok(new Date(ts));
    }
  }

  return Err(new ValidationError([message("must be a string or date")]));
};
