// import { describe, it } from "node:test";
// import assert from "node:assert";
// import { notBlank } from "./not-blank.js";
// import { str } from "./str.js";
// import { ShapeError } from "./validation-error.js";

// describe("notBlank", () => {
//   const shape = notBlank(str);

//   it("should error when blank", () => {
//     assert.throws(() => shape.coerce(""), ShapeError);
//   });

//   it("shouldn't error when not blank", () => {
//     assert.strictEqual(shape.coerce("foo"), "foo");
//   });
// });
