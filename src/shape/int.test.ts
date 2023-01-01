// import { test } from "node:test";
// import assert from "node:assert";
// import { i32, ui32 } from "./int.js";
// import { ShapeError } from "./validation-error.js";

// const i32Type = i32;
// const ui32Type = ui32;

// test("i32 valid coerce", () => {
//   const res = i32Type.coerce(0);
//   assert.strictEqual(res, 0);
// });

// test("i32 invalid coerce", () => {
//   assert.throws(() => i32Type.coerce("test"), ShapeError);
// });

// test("i32 invalid coerce below min", () => {
//   assert.throws(() => i32Type.coerce(-(2 ** 32)), ShapeError);
// });

// test("i32 invalid coerce above max", () => {
//   assert.throws(() => i32Type.coerce(2 ** 32), ShapeError);
// });

// test("ui32 valid coerce", () => {
//   const res = ui32Type.coerce(0);
//   assert.strictEqual(res, 0);
// });

// test("ui32 invalid coerce", () => {
//   assert.throws(() => ui32Type.coerce("test"), ShapeError);
// });

// test("ui32 invalid coerce below min", () => {
//   assert.throws(() => ui32Type.coerce(-1), ShapeError);
// });

// test("ui32 invalid coerce above max", () => {
//   assert.throws(() => ui32Type.coerce(2 ** 32), ShapeError);
// });
