export type Ok<T> = { value: T };
export type Err<E> = { err: E };
export type Result<T, E> = Ok<T> | Err<E>;

export class ResultError<E> extends Error {
  err: E;

  constructor(err: E) {
    super("Result error");
    this.err = err;

    Object.setPrototypeOf(this, ResultError.prototype);
  }
}

export function Ok<T, E>(value: T): Result<T, E> {
  return { value };
}

export function Err<T, E>(err: E): Result<T, E> {
  return { err };
}

export function isOk<T, E>(r: Result<T, E>): r is Ok<T> {
  return "value" in r;
}

export function isErr<T, E>(r: Result<T, E>): r is Err<E> {
  return "err" in r;
}

export function unwrap<T, E>(r: Result<T, E>): T {
  if (isErr(r)) {
    if (r.err instanceof Error) {
      throw r.err;
    }

    throw new ResultError<E>(r.err);
  }

  return r.value;
}
