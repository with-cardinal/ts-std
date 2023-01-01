// import { Shape, genericSafelyCoerce } from "./base.js";

// function coerceFn<T>(type: Shape<T>) {
//   return (val: unknown): T | undefined => {
//     if (typeof val === "undefined") {
//       return undefined;
//     }

//     return type.coerce(val);
//   };
// }

// export function optional<T>(type: Shape<T>): Shape<T | undefined> {
//   const coerce = coerceFn(type);

//   return {
//     coerce,
//     safelyCoerce: genericSafelyCoerce(coerce),
//   };
// }
