import { base58Encode } from "./base58.js";

function genId(prefix: string): string {
  const buf = new ArrayBuffer(16);

  new DataView(buf).setUint32(0, new Date().getTime());

  const uint8arr = new Uint8Array(buf);
  globalThis.crypto.getRandomValues(uint8arr.subarray(5));

  return `${prefix}_${base58Encode(uint8arr)}`;
}

export function idFn(prefix: string): () => string {
  return () => genId(prefix);
}
