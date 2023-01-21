import { test } from "node:test";
import assert from "node:assert";
import { idFn } from "./index.js";

test("idFn", () => {
  const genId = idFn("a");
  const id = genId();
  const id2 = genId();

  console.log(id, id2);
  assert(id.startsWith("a_"));
  assert.strictEqual(id.slice(0, 6), id2.slice(0, 6));
});
