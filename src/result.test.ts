import { describe, it } from "node:test";
import assert from "node:assert";
import { notOk, ok } from "./result.js";

describe("ok", () => {
  it("returns true for ok value", () => {
    assert.strictEqual(ok(12), true);
  });

  it("returns false for not ok", () => {
    assert.strictEqual(ok(new Error("OH NO")), false);
  });
});

describe("notOk", () => {
  it("returns true for notOk value", () => {
    assert.strictEqual(notOk(new Error("OH NO")), true);
  });

  it("returns false for ok value", () => {
    assert.strictEqual(notOk(12), false);
  });
});
