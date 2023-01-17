type Left<L> = { left: L };
type Right<R> = { right: R };

export type Either<L, R> = Left<L> | Right<R>;

export function Left<L, R>(l: L): Either<L, R> {
  return { left: l };
}

export function Right<L, R>(r: R): Either<L, R> {
  return { right: r };
}

export function isLeft<L, R>(e: Either<L, R>): boolean {
  if ("left" in e) {
    return true;
  }

  return false;
}

export function isRight<L, R>(e: Either<L, R>): boolean {
  if ("right" in e) {
    return true;
  }

  return false;
}
