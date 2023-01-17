import assert from "node:assert";
import test from "node:test";
import { stringMax, stringMin } from "./string.js";

test("min valid", () => {
  assert.deepStrictEqual(stringMin(5)("Testing"), []);
});

test("min invalid singular", () => {
  assert.deepStrictEqual(stringMin(1)(""), ["must be longer than 1 character"]);
});

test("min invalid plural", () => {
  assert.deepStrictEqual(stringMin(2)("a"), [
    "must be longer than 2 characters",
  ]);
});

test("max valid", () => {
  assert.deepStrictEqual(stringMax(5)("Test"), []);
});

test("max invalid singular", () => {
  assert.deepStrictEqual(stringMax(1)("Test"), [
    "must be shorter than 1 character",
  ]);
});

test("max invalid plural", () => {
  assert.deepStrictEqual(stringMax(2)("Test"), [
    "must be shorter than 2 characters",
  ]);
});
