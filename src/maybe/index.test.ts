import { describe, it } from "node:test";
import assert from "node:assert";
import { maybeUndefined, maybeNull } from "./index.js";

describe("maybeUndefined", () => {
  it("returns value", () => {
    assert.strictEqual(maybeUndefined(12), 12);
  });

  it("returns undefined", () => {
    assert.strictEqual(maybeUndefined(null), undefined);
  });
});

describe("maybeNull", () => {
  it("returns value", () => {
    assert.strictEqual(maybeNull(12), 12);
  });

  it("returns null", () => {
    assert.strictEqual(maybeNull(undefined), null);
  });
});
