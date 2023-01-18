import { test } from "node:test";
import assert from "node:assert";
import { str } from "./str.js";
import { Err } from "../result/index.js";
import { message } from "./validation-messages.js";
import { validate } from "./base.js";
import { stringLength } from "../validation/string.js";

test("with validate", () => {
  assert.deepStrictEqual(
    validate(str, stringLength(5))("Test"),
    Err(message("must be 5 characters"))
  );
});
