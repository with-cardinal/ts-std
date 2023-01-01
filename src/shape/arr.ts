import { Err, isErr, Ok } from "../result.js";
import type { Shape } from "./base.js";
import {
  appendMessages,
  ValidationError,
  ValidationMessages,
  message,
} from "./validation-error.js";

export function arr<T>(shape: Shape<T>): Shape<T[]> {
  return (val: unknown) => {
    if (!Array.isArray(val)) {
      return Err(new ValidationError([message("must be an array")]));
    }

    const out: T[] = [];
    const msgs: ValidationMessages = [];

    for (let i = 0; i < val.length; i++) {
      const result = shape(val[i]);
      if (isErr(result)) {
        appendMessages(msgs, i, result.error.details);
      } else {
        out[i] = result.value;
      }
    }

    if (msgs.length > 0) {
      return Err(new ValidationError(msgs));
    }

    return Ok(out);
  };
}
