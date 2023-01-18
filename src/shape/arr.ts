import { Err, isErr, Ok } from "../result/index.js";
import type { Validation } from "../validation/index.js";
import { Shape, validate } from "./base.js";
import {
  appendMessages,
  ValidationMessages,
  message,
  appendValidations,
} from "./validation-messages.js";

export function arr<T>(shape: Shape<T>, ...v: Validation<T[]>[]): Shape<T[]> {
  return (val: unknown) => {
    if (!Array.isArray(val)) {
      return Err(message("must be an array"));
    }

    const out: T[] = [];
    const msgs: ValidationMessages = [];

    for (let i = 0; i < val.length; i++) {
      const result = shape(val[i]);
      if (isErr(result)) {
        appendMessages(msgs, i, result.err);
      } else {
        out[i] = result.value;
      }
    }

    if (msgs.length === 0) {
      appendValidations(msgs, validate(out, v));
    }

    if (msgs.length > 0) {
      return Err(msgs);
    }

    return Ok(out);
  };
}
