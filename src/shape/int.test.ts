import { test } from "node:test";
import assert from "node:assert";
import { i32, ui32 } from "./int.js";
import { Ok, Err } from "../result/index.js";
import { message } from "./validation-messages.js";

test("i32 valid coerce", () => {
  assert.deepStrictEqual(i32(0), Ok(0));
});

test("i32 invalid", () => {
  assert.deepStrictEqual(
    i32("test"),
    Err(message("must be an integer between -2147483647 and 2147483647"))
  );
});

test("i32 invalid below min", () => {
  assert.deepStrictEqual(
    i32(-(2 ** 32)),
    Err(message("must be an integer greater than -2147483647"))
  );
});

test("i32 invalid above max", () => {
  assert.deepStrictEqual(
    i32(2 ** 32),
    Err(message("must be an integer less than 2147483647"))
  );
});

test("ui32 valid", () => {
  assert.deepStrictEqual(ui32(0), Ok(0));
});

test("ui32 invalid ", () => {
  assert.deepStrictEqual(
    ui32("test"),
    Err(message("must be an integer between 0 and 4294967295"))
  );
});

test("ui32 invalid  below min", () => {
  assert.deepStrictEqual(
    ui32(-1),
    Err(message("must be an integer greater than 0"))
  );
});

test("ui32 invalid coerce above max", () => {
  assert.deepStrictEqual(
    ui32(2 ** 32),
    Err(message("must be an integer less than 4294967295"))
  );
});
