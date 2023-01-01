// import { test } from "node:test";
// import assert from "node:assert";
// import { ui32 } from "./int.js";
// import { obj } from "./obj.js";
// import { str } from "./str.js";
// import { ShapeError } from "./validation-error.js";

// const emptyObj = obj({});

// const testObj = obj({
//   name: str,
//   age: ui32,
// });

// test("obj invalid coerce", () => {
//   assert.throws(() => emptyObj.coerce(12), ShapeError);
// });

// test("obj coerce invalid nested", () => {
//   let err: ShapeError | undefined;
//   try {
//     testObj.coerce({ name: "John", age: "12" });
//   } catch (e) {
//     if (e instanceof ShapeError) {
//       err = e;
//     }
//   }

//   assert.strictEqual(true, err instanceof ShapeError);
//   assert.deepStrictEqual(err?.errors[0]?.path, ["age"]);
// });

// test("obj coerce valid nested", () => {
//   const result = testObj.coerce({ name: "Alan", age: 12 });

//   assert.deepEqual(result, { name: "Alan", age: 12 });
// });
