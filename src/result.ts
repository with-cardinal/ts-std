export type ResultOk<T> = { ok: true; value: T };
export type ResultErr<E extends Error> = { ok: false; error: E };
export type Result<T, E extends Error = Error> = ResultOk<T> | ResultErr<E>;

export function Ok<T>(value: T): ResultOk<T> {
  return { ok: true, value };
}

export function Err<E extends Error>(error: E): ResultErr<E> {
  return { ok: false, error };
}

export function isOk<T>(r: Result<T, Error>): r is ResultOk<T> {
  return r.ok;
}

export function isErr<T, E extends Error>(r: Result<T, E>): r is ResultErr<E> {
  return !r.ok;
}

export function unwrap<T, E extends Error>(r: Result<T, E>): T {
  if (isErr(r)) {
    throw r.error;
  }

  return r.value;
}
