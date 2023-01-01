// import { test } from "node:test";
// import assert from "node:assert";
// import { optional } from "./optional.js";
// import { bool } from "./bool.js";
// import { ShapeError } from "./validation-error.js";

// const testType = optional(bool);

// test("valid coerce", () => {
//   const res = testType.coerce(true);
//   assert.strictEqual(res, true);
// });

// test("valid coerce with undefined", () => {
//   const res = testType.coerce(undefined);
//   assert.strictEqual(res, undefined);
// });

// test("invalid coerce", () => {
//   assert.throws(() => testType.coerce(12), ShapeError);
// });
