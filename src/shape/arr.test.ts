import { test } from "node:test";
import assert from "node:assert";
import { arr } from "./arr.js";
import { str } from "./str.js";
import { ValidationError } from "./validation-error.js";
import { unwrap } from "../result.js";

const testArr = arr(str);

test("valid coerce", () => {
  const result = unwrap(testArr(["foo", "bar"]));
  assert.deepStrictEqual(result, ["foo", "bar"]);
});

test("invalid coerce: not array", () => {
  assert.throws(() => unwrap(testArr("foo")), ValidationError);
});

test("invalid coerce: wrong type", () => {
  assert.throws(() => unwrap(testArr(["foo", ["bar"]])), ValidationError);
});
