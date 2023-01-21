import { test } from "node:test";
import assert from "node:assert";
import { parse } from "./parse.js";
import { isErr, isOk } from "../result/index.js";

test("valid json", () => {
  const res = parse(`{"valid": "json"}`);
  assert(isOk(res));
});

test("invalid json", () => {
  const res = parse(`{garbage}`);
  assert(isErr(res));
});
