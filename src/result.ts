export type Result<T, E = Error> = T | E;

export function ok<T>(r: Result<T>): r is T {
  return !(r instanceof Error);
}

export function notOk<E>(r: Result<unknown, E>): r is E {
  return r instanceof Error;
}
