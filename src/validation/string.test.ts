import assert from "node:assert";
import test from "node:test";
import { stringMax, stringMin } from "./string.js";

test("stringMin valid", () => {
  assert.deepStrictEqual(stringMin(5)("Testing"), []);
});

test("stringMin invalid singular", () => {
  assert.deepStrictEqual(stringMin(1)(""), ["must be longer than 1 character"]);
});

test("stringMin invalid plural", () => {
  assert.deepStrictEqual(stringMin(2)("a"), [
    "must be longer than 2 characters",
  ]);
});

test("stringMax valid", () => {
  assert.deepStrictEqual(stringMax(5)("Test"), []);
});

test("stringMax invalid singular", () => {
  assert.deepStrictEqual(stringMax(1)("Test"), [
    "must be shorter than 1 character",
  ]);
});

test("stringMax invalid plural", () => {
  assert.deepStrictEqual(stringMax(2)("Test"), [
    "must be shorter than 2 characters",
  ]);
});
