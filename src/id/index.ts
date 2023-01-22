import { base58Encode } from "./base58.js";

function genId(prefix: string): string {
  const buf = new ArrayBuffer(19);

  const time = Math.floor(Date.now() / 100);
  new DataView(buf).setBigUint64(0, BigInt(time));

  const uint8arr = new Uint8Array(buf);
  globalThis.crypto.getRandomValues(uint8arr.subarray(8));

  return `${prefix}_${base58Encode(uint8arr.subarray(3))}`;
}

export function idFn(prefix: string): () => string {
  return () => genId(prefix);
}
