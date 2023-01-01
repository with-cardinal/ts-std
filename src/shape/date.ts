// import { Shape, genericSafelyCoerce } from "./base.js";
// import { error } from "./validation-error.js";

// function coerce(val: unknown): Date {
//   if (val instanceof Date) {
//     return val;
//   }

//   if (typeof val === "string") {
//     const ts = Date.parse(val);
//     if (!isNaN(ts)) {
//       return new Date(ts);
//     }
//   }

//   throw error("must be a string or date");
// }

// export const date: Shape<Date> = {
//   coerce,
//   safelyCoerce: genericSafelyCoerce(coerce),
// };
