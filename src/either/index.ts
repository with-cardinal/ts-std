type Left<L> = { left: L };
type Right<R> = { right: R };

export type Either<L, R> = Left<L> | Right<R>;

export function Left<L = never, R = never>(l: L): Either<L, R> {
  return { left: l };
}

export function Right<L = never, R = never>(r: R): Either<L, R> {
  return { right: r };
}

export function isLeft<L = never, R = never>(e: Either<L, R>): boolean {
  if ("left" in e) {
    return true;
  }

  return false;
}

export function isRight<L = never, R = never>(e: Either<L, R>): boolean {
  if ("right" in e) {
    return true;
  }

  return false;
}
