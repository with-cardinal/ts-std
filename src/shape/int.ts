// import { Shape, genericSafelyCoerce } from "./base.js";
// import { error } from "./validation-error.js";

// function intCoerce(min: number, max: number) {
//   return (val: unknown): number => {
//     if (typeof val === "number") {
//       if (val > max) {
//         throw error(`must be an integer less than ${max}`);
//       } else if (val < min) {
//         throw error(`must be an integer greater than ${min}`);
//       }
//       return val;
//     }

//     throw error(`must be an integer between ${min} and ${max}`);
//   };
// }

// const i32Coerce = intCoerce(-(2 ** 31) + 1, 2 ** 31 - 1);
// export const i32: Shape<number> = {
//   coerce: i32Coerce,
//   safelyCoerce: genericSafelyCoerce(i32Coerce),
// };

// const ui32Coerce = intCoerce(0, 2 ** 32 - 1);
// export const ui32 = {
//   coerce: ui32Coerce,
//   safelyCoerce: genericSafelyCoerce(ui32Coerce),
// };
