import { test } from "node:test";
import assert from "node:assert";
import { Left, Right, isLeft, isRight } from "./index.js";

test("left creates left value", () => {
  assert.deepStrictEqual(Left("Yes"), { left: "Yes" });
});

test("right creates right value", () => {
  assert.deepStrictEqual(Right("Yes"), { right: "Yes" });
});

test("isLeft on left is true", () => {
  assert.ok(isLeft(Left("Yes")));
});

test("isLeft on right is false", () => {
  assert.ok(!isLeft(Right("Yes")));
});

test("isRight on left is false", () => {
  assert.ok(!isRight(Left("Yes")));
});

test("isRight on right is true", () => {
  assert.ok(isRight(Right("Yes")));
});
