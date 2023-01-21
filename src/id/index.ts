import { base58Encode } from "./base58.js";

export function genId(prefix: string): string {
  const buf = new Uint8Array(16);

  buf.fill(new Date().getTime(), 0, 5);
  globalThis.crypto.getRandomValues(buf.subarray(5));

  return `${prefix}_${base58Encode(buf)}`;
}
