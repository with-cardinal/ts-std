import { test } from "node:test";
import assert from "node:assert";
import { str } from "./str.js";
import { ValidationError } from "./validation-error.js";
import { unwrap } from "../result.js";

const testType = str;

test("valid coerce", () => {
  const res = unwrap(testType("foobar"));
  assert.strictEqual(res, "foobar");
});

test("invalid deserialize", () => {
  assert.throws(() => unwrap(testType(12)), ValidationError);
});
