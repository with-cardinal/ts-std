import type { Shape } from "./base.js";
import { isPresent, Maybe } from "../maybe/index.js";
import { Ok } from "../result/index.js";

export function maybe<T>(shape: Shape<T>): Shape<Maybe<T>> {
  return (val: unknown) => {
    if (!isPresent(val)) {
      return Ok(val);
    }

    return shape(val);
  };
}
