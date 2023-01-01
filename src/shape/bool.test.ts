import { test } from "node:test";
import assert from "node:assert";
import { bool } from "./bool.js";
import { ValidationError } from "./validation-error.js";
import { unwrap } from "../result.js";

const testType = bool;

test("valid coerce", () => {
  const res = unwrap(testType(true));
  assert.strictEqual(res, true);
});

test("invalid coerce", () => {
  assert.throws(() => unwrap(testType(12)), ValidationError);
});
