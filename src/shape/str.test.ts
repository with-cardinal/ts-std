import { test } from "node:test";
import assert from "node:assert";
import { str } from "./str.js";
import { Ok, Err } from "../result/index.js";
import { message } from "./validation-messages.js";

const testShape = str;

test("valid", () => {
  assert.deepStrictEqual(testShape("foobar"), Ok("foobar"));
});

test("invalid", () => {
  assert.deepStrictEqual(testShape(12), Err(message("must be a string")));
});
