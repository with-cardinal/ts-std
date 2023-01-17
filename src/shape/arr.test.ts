import { test } from "node:test";
import assert from "node:assert";
import { arr } from "./arr.js";
import { str } from "./str.js";
import { Ok, Err } from "../result/index.js";
import { message } from "./validation-messages.js";

const testArr = arr(str);

test("valid coerce", () => {
  assert.deepStrictEqual(testArr(["foo", "bar"]), Ok(["foo", "bar"]));
});

test("invalid coerce: not array", () => {
  assert.deepStrictEqual(testArr("foo"), Err(message("must be an array")));
});

test("invalid coerce: wrong type", () => {
  assert.deepStrictEqual(
    testArr(["foo", ["bar"]]),
    Err([{ msg: "must be a string", path: [1] }])
  );
});
