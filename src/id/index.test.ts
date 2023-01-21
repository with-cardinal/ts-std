import { test } from "node:test";
import assert from "node:assert";
import { genId } from "./index.js";

test("genId", () => {
  const id = genId("a");
  assert(id.startsWith("a_"));
});
