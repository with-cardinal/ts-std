import { describe, it } from "node:test";
import assert from "node:assert";
import { Ok, Err, isErr, isOk } from "./result.js";

describe("ok", () => {
  it("returns true for ok value", () => {
    assert.strictEqual(isOk(Ok(12)), true);
  });

  it("returns false for err", () => {
    assert.strictEqual(isOk(Err(new Error("OH NO"))), false);
  });
});

describe("notOk", () => {
  it("returns true for err value", () => {
    assert.strictEqual(isErr(Err(new Error("OH NO"))), true);
  });

  it("returns false for ok value", () => {
    assert.strictEqual(isErr(Ok(12)), false);
  });
});
