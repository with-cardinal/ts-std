import { test } from "node:test";
import assert from "node:assert";
import { bool } from "./bool.js";
import { message } from "./validation-messages.js";
import { Ok, Err } from "../result/index.js";

const testShape = bool;

test("valid", () => {
  assert.deepStrictEqual(testShape(true), Ok(true));
});

test("invalid", () => {
  assert.deepStrictEqual(testShape(12), Err(message("must be a boolean")));
});
