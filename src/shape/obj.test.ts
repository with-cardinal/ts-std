import { test } from "node:test";
import assert from "node:assert";
import { ui32 } from "./int.js";
import { obj } from "./obj.js";
import { str } from "./str.js";
import { message } from "./validation-messages.js";
import { Err, Ok } from "../result/index.js";

const emptyShape = obj({});

const testShape = obj({
  name: str,
  age: ui32,
});

test("obj invalid", () => {
  assert.deepStrictEqual(emptyShape(12), Err(message("must be an object")));
});

test("obj invalid nested", () => {
  assert.deepStrictEqual(
    testShape({ name: "John", age: "12" }),
    Err([{ msg: "must be an integer between 0 and 4294967295", path: ["age"] }])
  );
});

test("obj valid", () => {
  assert.deepEqual(
    testShape({ name: "Alan", age: 12 }),
    Ok({ name: "Alan", age: 12 })
  );
});
