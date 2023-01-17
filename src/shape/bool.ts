// import type { Shape } from "./base.js";
// import { ValidationError, message } from "./validation-messages.js";
// import { Result, Ok, Err } from "../result.js";

// export const bool: Shape<boolean> = (
//   val: unknown
// ): Result<boolean, ValidationError> => {
//   if (typeof val === "boolean") {
//     return Ok(val);
//   }

//   return Err(new ValidationError([message("must be a boolean")]));
// };
