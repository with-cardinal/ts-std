import { test } from "node:test";
import assert from "node:assert";
import {
  ValidationMessages,
  addMessage,
  getMessages,
  getMessage,
} from "./validation-error.js";

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
