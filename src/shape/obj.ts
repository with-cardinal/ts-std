import { Err, Ok, isOk, Result } from "../result/index.js";
import type { ObjShape, Shape, Infer } from "./base.js";
import {
  appendMessages,
  message,
  ValidationMessages,
} from "./validation-messages.js";

export function obj<S extends ObjShape>(shape: S): Shape<Infer<S>> {
  return (val: unknown): Result<Infer<S>, ValidationMessages> => {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return Err(message("must be an object"));
    }

    const valObj = val as { [key: string]: unknown };
    const out = Object.create({});
    const msgs: ValidationMessages = [];

    for (const [objKey, objValue] of Object.entries(shape)) {
      const result = objValue(valObj[objKey]);
      if (isOk(result)) {
        out[objKey] = result.value;
      } else {
        appendMessages(msgs, objKey, result.err);
      }
    }

    if (msgs.length > 0) {
      return Err(msgs);
    }

    return Ok(out as Infer<S>);
  };
}
