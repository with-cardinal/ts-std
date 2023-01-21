import type { ValidJSON } from "./index.js";
import { Err, Ok, Result, ResultError } from "../result/index.js";

export function parse(text: string): Result<ValidJSON, Error> {
  try {
    return Ok(JSON.parse(text));
  } catch (e) {
    if (e instanceof Error) {
      return Err(e);
    }

    return Err(new ResultError(e));
  }
}
