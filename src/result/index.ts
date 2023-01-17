export type Ok<T> = { value: T };
export type Err<E> = { error: E };
export type Result<T, E> = Ok<T> | Err<E>;

export class ResultError<E> extends Error {
  error: E;

  constructor(error: E) {
    super("Result error");
    this.error = error;

    Object.setPrototypeOf(this, ResultError.prototype);
  }
}

export function Ok<T, E>(value: T): Result<T, E> {
  return { value };
}

export function Err<T, E>(error: E): Result<T, E> {
  return { error };
}

export function isOk<T, E>(r: Result<T, E>): r is Ok<T> {
  return "value" in r;
}

export function isErr<T, E>(r: Result<T, E>): r is Err<E> {
  return "error" in r;
}

export function unwrap<T, E>(r: Result<T, E>): T {
  if (isErr(r)) {
    if (r.error instanceof Error) {
      throw r.error;
    }

    throw new ResultError<E>(r.error);
  }

  return r.value;
}
