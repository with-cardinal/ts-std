import { test } from "node:test";
import assert from "node:assert";
import { date } from "./date.js";
import { Err, Ok } from "../result/index.js";
import { message } from "./validation-messages.js";

test("date valid string", () => {
  const dateString = "2022-03-31T21:34:15.519Z";
  assert.deepStrictEqual(date(dateString), Ok(new Date(dateString)));
});

test("date valid Date", () => {
  const dateString = "2022-03-31T21:34:15.519Z";
  assert.deepStrictEqual(date(dateString), Ok(new Date(dateString)));
});

test("date invalid number", () => {
  assert.deepStrictEqual(date(12), Err(message("must be a string or date")));
});
