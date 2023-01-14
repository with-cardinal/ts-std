import { test } from "node:test";
import assert from "node:assert";
import { ui32, i32 } from "./int.js";
import { Ok, unwrap } from "../result.js";
import { ValidationError } from "./validation-error.js";

test("i32 valid coerce", () => {
  const res = i32(0);
  assert.deepStrictEqual(res, Ok(0));
});

test("i32 invalid coerce", () => {
  assert.throws(() => unwrap(i32("test")), ValidationError);
});

test("i32 invalid coerce below min", () => {
  assert.throws(() => unwrap(i32(-(2 ** 32))), ValidationError);
});

test("i32 invalid coerce above max", () => {
  assert.throws(() => unwrap(i32(2 ** 32)), ValidationError);
});

test("ui32 valid coerce", () => {
  assert.deepStrictEqual(ui32(0), Ok(0));
});

test("ui32 invalid coerce", () => {
  assert.throws(() => unwrap(ui32("test")), ValidationError);
});

test("ui32 invalid coerce below min", () => {
  assert.throws(() => unwrap(ui32(-1)), ValidationError);
});

test("ui32 invalid coerce above max", () => {
  assert.throws(() => unwrap(ui32(2 ** 32)), ValidationError);
});
