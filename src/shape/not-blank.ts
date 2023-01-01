// import { Shape, genericSafelyCoerce } from "./base.js";
// import { error } from "./validation-error.js";

// function coerceFn(shape: Shape<string>) {
//   return (val: unknown): string => {
//     const toCheck = shape.coerce(val);

//     if (toCheck.trim().length === 0) {
//       throw error("must not be blank");
//     }

//     return toCheck;
//   };
// }

// export function notBlank(shape: Shape<string>): Shape<string> {
//   const coerce = coerceFn(shape);

//   return {
//     coerce,
//     safelyCoerce: genericSafelyCoerce(coerce),
//   };
// }
