import { Result, Err, Ok } from "../result.js";
import type { Shape } from "./base.js";
import { ValidationError, message } from "./validation-error.js";

export const str: Shape<string> = (
  val: unknown
): Result<string, ValidationError> => {
  if (typeof val === "string") {
    return Ok(val);
  }

  return Err(new ValidationError([message("must be a string")]));
};
