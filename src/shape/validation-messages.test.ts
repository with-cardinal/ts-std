import { test } from "node:test";
import assert from "node:assert";
import {
  ValidationMessages,
  addMessage,
  appendValidations,
  getMessages,
  getMessage,
} from "./validation-messages.js";

test("addMessage", () => {
  const msgs: ValidationMessages = [];

  const path = ["foo", "bar"];
  const msg = "an error";
  addMessage(msgs, path, msg);

  assert.deepStrictEqual(getMessages(msgs, path), [msg]);
});

test("getMessage", () => {
  const msgs: ValidationMessages = [];

  const path = ["foo", "bar"];
  const msg = "an error";
  addMessage(msgs, path, msg);
  assert.deepStrictEqual(getMessage(msgs, path), msg);
});

test("appendValidations", () => {
  const add: string[] = ["a", "b"];
  const msgs: ValidationMessages = [];

  appendValidations(msgs, add);

  assert.deepStrictEqual(msgs, [
    { path: [], msg: "a" },
    { path: [], msg: "b" },
  ]);
});
