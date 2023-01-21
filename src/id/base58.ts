// Based on code from https://gist.github.com/diafygi/90a3e80ca1c2793220e5/
const dictionary = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

export function base58Encode(bytes: Uint8Array) {
  let out = "";
  const digits: number[] = [];

  let carry = 0;
  let j = 0;
  let n = 0;

  for (let i = 0; i < bytes.length; i++) {
    j = 0;
    carry = bytes[i] || 0;
    out += carry || out.length ^ i ? "" : 1;
    while (j in digits || carry) {
      n = digits[j] || 0;
      n = n ? n * 256 + carry : carry;
      carry = (n / 58) | 0;
      digits[j] = n % 58;
      j++;
    }
  }

  // reverse it
  while (j--) {
    out += dictionary[digits[j] || 0];
  }
  return out;
}
