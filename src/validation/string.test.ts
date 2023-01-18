import assert from "node:assert";
import test from "node:test";
import {
  stringLength,
  stringMatch,
  stringMax,
  stringMin,
  stringNotBlank,
} from "./string.js";

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

test("stringLength valid", () => {
  assert.deepStrictEqual(stringLength(5)("Tests"), []);
});

test("stringLength invalid singular", () => {
  assert.deepStrictEqual(stringLength(1)("Test"), ["must be 1 character"]);
});

test("stringLength invalid plural", () => {
  assert.deepStrictEqual(stringLength(2)("Test"), ["must be 2 characters"]);
});

test("stringMatch valid", () => {
  assert.deepStrictEqual(stringMatch(/a/, "be a")("a"), []);
});

test("stringMatch invalid", () => {
  assert.deepStrictEqual(stringMatch(/a/, "be a")("b"), ["be a"]);
});

test("stringNotBlank valid", () => {
  assert.deepStrictEqual(stringNotBlank("a"), []);
});

test("stringNotBlank invalid", () => {
  assert.deepStrictEqual(stringNotBlank("    "), ["must not be blank"]);
});
