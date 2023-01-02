import { test } from "node:test";
import assert from "node:assert";
import { date } from "./date.js";
import { ValidationError } from "./validation-error.js";
import { unwrap } from "../result.js";

test("date valid coerce string", () => {
  const dateString = "2022-03-31T21:34:15.519Z";
  const res = unwrap(date(dateString));
  assert.strictEqual(res.getTime(), new Date(dateString).getTime());
});

test("date valid coerce Date", () => {
  const dateString = "2022-03-31T21:34:15.519Z";
  const res = unwrap(date(new Date(dateString)));
  assert.strictEqual(res.getTime(), new Date(dateString).getTime());
});

test("date invalid coerce", () => {
  assert.throws(() => unwrap(date("test")), ValidationError);
});
