import { Err, isErr, Ok } from "../result/index.js";
import type { Shape } from "./base.js";
import {
  appendMessages,
  ValidationMessages,
  message,
} from "./validation-messages.js";

export function arr<T>(shape: Shape<T>): Shape<T[]> {
  return (val: unknown) => {
    if (!Array.isArray(val)) {
      return Err(message("must be an array"));
    }

    const out: T[] = [];
    const msgs: ValidationMessages = [];

    for (let i = 0; i < val.length; i++) {
      const result = shape(val[i]);
      if (isErr(result)) {
        appendMessages(msgs, i, result.error);
      } else {
        out[i] = result.value;
      }
    }

    if (msgs.length > 0) {
      return Err(msgs);
    }

    return Ok(out);
  };
}
