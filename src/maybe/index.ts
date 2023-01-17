export type Maybe<T> = T | undefined | null;

function present<T>(m: Maybe<T>): m is T {
  if (m === undefined || m === null) {
    return false;
  }

  return true;
}

export function maybeUndefined<T>(m: Maybe<T>): T | undefined {
  if (present(m)) {
    return m;
  }

  return undefined;
}

export function maybeNull<T>(m: Maybe<T>): T | null {
  if (present(m)) {
    return m;
  }

  return null;
}
