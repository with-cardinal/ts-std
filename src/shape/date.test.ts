// import { test } from "node:test";
// import assert from "node:assert";
// import { date } from "./date.js";
// import { ShapeError } from "./validation-error.js";

// test("date valid coerce string", () => {
//   const dateString = "2022-03-31T21:34:15.519Z";
//   const res = date.coerce(dateString);
//   assert.strictEqual(res.getTime(), new Date(dateString).getTime());
// });

// test("date valid coerce Date", () => {
//   const dateString = "2022-03-31T21:34:15.519Z";
//   const res = date.coerce(new Date(dateString));
//   assert.strictEqual(res.getTime(), new Date(dateString).getTime());
// });

// test("date invalid coerce", () => {
//   assert.throws(() => date.coerce("test"), ShapeError);
// });
