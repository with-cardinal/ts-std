export type Maybe<T> = T | undefined | null;

export function isPresent<T>(m: Maybe<T>): m is T {
  if (m === undefined || m === null) {
    return false;
  }

  return true;
}

export function maybeUndefined<T>(m: Maybe<T>): T | undefined {
  if (isPresent(m)) {
    return m;
  }

  return undefined;
}

export function maybeNull<T>(m: Maybe<T>): T | null {
  if (isPresent(m)) {
    return m;
  }

  return null;
}
