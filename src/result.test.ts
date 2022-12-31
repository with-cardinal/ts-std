import { describe, it } from "node:test";
import assert from "node:assert";
import { Ok, Err, isErr, isOk, unwrap } from "./result.js";

describe("isOk", () => {
  it("returns true for Ok value", () => {
    assert.strictEqual(isOk(Ok(12)), true);
  });

  it("returns false for Err", () => {
    assert.strictEqual(isOk(Err(new Error("OH NO"))), false);
  });
});

describe("isErr", () => {
  it("returns true for Err value", () => {
    assert.strictEqual(isErr(Err(new Error("OH NO"))), true);
  });

  it("returns false for Ok value", () => {
    assert.strictEqual(isErr(Ok(12)), false);
  });
});

describe("unwrap", () => {
  it("returns value for Ok", () => {
    assert.strictEqual(unwrap(Ok(12)), 12);
  });

  it("throws for Err", () => {
    const err = new Error("Something broke");
    assert.throws(() => unwrap(Err(err)));
  });
});
