// import { Shape, ObjShape, Infer, genericSafelyCoerce } from "./base.js";
// import { error, ShapeError } from "./validation-error.js";

// function coerceFn<T extends ObjShape>(objShape: T) {
//   return (val: unknown): Infer<T> => {
//     if (val === null || typeof val !== "object" || Array.isArray(val)) {
//       throw error("must be an object");
//     }

//     const valObj = val as { [key: string]: unknown };

//     const out = Object.create(null);
//     const errs = new ShapeError();

//     for (const [objKey, objValue] of Object.entries(objShape)) {
//       const result = objValue.safelyCoerce(valObj[objKey]);

//       if (result.success) {
//         out[objKey] = result.value;
//       } else {
//         errs.append(objKey, result.errors);
//       }
//     }

//     if (errs.hasErrors()) {
//       throw errs;
//     }

//     return out;
//   };
// }

// export function obj<T extends ObjShape>(objShape: T): Shape<Infer<T>> {
//   const coerce = coerceFn(objShape);
//   return {
//     coerce,
//     safelyCoerce: genericSafelyCoerce(coerce),
//   };
// }
