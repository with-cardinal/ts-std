import { Result, Err, Ok } from "../result/index.js";
import type { Shape } from "./base.js";
import { ValidationMessages, message } from "./validation-messages.js";

export const str: Shape<string> = (
  val: unknown
): Result<string, ValidationMessages> => {
  if (typeof val === "string") {
    return Ok(val);
  }

  return Err(message("must be a string"));
};
