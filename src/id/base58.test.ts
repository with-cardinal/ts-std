import { test } from "node:test";
import assert from "node:assert";
import { base58Encode } from "./base58.js";

test("simple string", () => {
  const buf = Buffer.from("testing", "utf-8");
  assert.strictEqual(base58Encode(buf), "5QqG6hNRBU");
});

test("with leading 0s", () => {
  const buf = Uint8Array.from([0, 0, 0, 0, 57]);
  assert.strictEqual(base58Encode(buf), "1111z");
});
