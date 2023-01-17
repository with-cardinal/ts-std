import { test } from "node:test";
import assert from "node:assert";
import { maybe } from "./maybe.js";
import { bool } from "./bool.js";
import { message } from "./validation-messages.js";
import { Ok, Err } from "../result/index.js";

const testShape = maybe(bool);

test("valid", () => {
  assert.deepStrictEqual(testShape(true), Ok(true));
});

test("valid with undefined", () => {
  assert.deepStrictEqual(testShape(undefined), Ok(undefined));
});

test("valid with null", () => {
  assert.deepStrictEqual(testShape(null), Ok(null));
});

test("invalid", () => {
  assert.deepStrictEqual(testShape(12), Err(message("must be a boolean")));
});
