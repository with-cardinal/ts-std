import type { ExpectExtends, ExpectFalse } from "@type-challenges/utils";
import type { ValidJSON } from "./valid-json";

export const anObject = { a: true, b: "text", c: { d: true }, e: [0, 1, 2] };
export const aDate = new Date();

export type checks = [
  ExpectExtends<ValidJSON, typeof anObject>,
  ExpectFalse<ExpectExtends<ValidJSON, typeof aDate>>
];
