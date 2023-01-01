// import { Shape, genericSafelyCoerce } from "./base.js";
// import { error } from "./validation-error.js";

// function coerce(val: unknown): boolean {
//   if (typeof val === "boolean") {
//     return val;
//   }

//   throw error("must be a boolean");
// }

// export const bool: Shape<boolean> = {
//   coerce,
//   safelyCoerce: genericSafelyCoerce(coerce),
// };
