export type ResultOk<T> = { ok: true; value: T };
export type ResultErr<E> = { ok: false; error: E };
export type Result<T, E extends Error = Error> = ResultOk<T> | ResultErr<E>;

export function Ok<T>(value: T): ResultOk<T> {
  return { ok: true, value };
}

export function Err<E>(error: E): ResultErr<E> {
  return { ok: false, error };
}

export function isOk<T>(r: Result<T, Error>): r is ResultOk<T> {
  return r.ok;
}

export function isErr<E extends Error>(
  r: Result<unknown, E>
): r is ResultErr<E> {
  return !r.ok;
}
