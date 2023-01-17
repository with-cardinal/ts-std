import type { Shape } from "./base.js";
import { message, ValidationMessages } from "./validation-messages.js";
import { Result, Ok, Err } from "../result/index.js";

export const bool: Shape<boolean> = (
  val: unknown
): Result<boolean, ValidationMessages> => {
  if (typeof val === "boolean") {
    return Ok(val);
  }

  return Err(message("must be a boolean"));
};
