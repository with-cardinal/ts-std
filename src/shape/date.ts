import { Result, Ok, Err } from "../result/index.js";
import type { Shape } from "./base.js";
import { message, ValidationMessages } from "./validation-messages.js";

export const date: Shape<Date> = (
  val: unknown
): Result<Date, ValidationMessages> => {
  if (val instanceof Date) {
    return Ok(val);
  }

  if (typeof val === "string") {
    const ts = Date.parse(val);
    if (!isNaN(ts)) {
      return Ok(new Date(ts));
    }
  }

  return Err(message("must be a string or date"));
};
