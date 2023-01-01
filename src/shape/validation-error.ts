export type ValidationPath = (string | number)[];
export type ValidationMessage = { path: ValidationPath; msg: string };
export type ValidationMessages = ValidationMessage[];

export class ValidationError extends Error {
  details: ValidationMessage[];

  constructor(details: ValidationMessage[] = []) {
    super("Validation error");
    this.details = details;

    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  getMessage(path: ValidationPath) {
    return getMessage(this.details, path);
  }

  getMessages(path: ValidationPath) {
    return getMessages(this.details, path);
  }
}

/**
 * addMessage adds an additional message to a set of messages
 * @param msgs - the ValidationMessages to add to
 * @param path - the path to the field that the error relates to
 * @param err - the error to add
 */
export function addMessage(
  msgs: ValidationMessages,
  path: ValidationPath,
  msg: string
): void {
  msgs.push({ path, msg });
}

/**
 * append appends a set of errors from one Errs object into this one,
 * prefixing them with prefix
 *
 * @param msgs - the ValidationMessages to append to
 * @param prefix - prefix for the errors to be appended
 * @param appendMessages - The ValidationMessages to append
 */
export function appendMessages(
  msgs: ValidationMessages,
  prefix: string | number,
  appendMsgs: ValidationMessages
): void {
  for (const err of appendMsgs) {
    addMessage(msgs, [prefix, ...err.path], err.msg);
  }
}

/**
 * getMessage returns the first error at the given path
 *
 * @param msgs - the validation messages to read from
 * @param path - the path to the field to read the first from
 * @returns the first error for the given path
 */
export function getMessage(
  msgs: ValidationMessages,
  path: ValidationPath
): string | undefined {
  const found = msgs.find((msg) =>
    path.every((part, index) => part === msg.path[index])
  );
  if (found) {
    return found.msg;
  }

  return undefined;
}

/**
 * getMessages returns the errors set to a particular field
 * @param msgs - the messages to read from
 * @param path - the path for field to inspect errors on
 * @returns the errors on that field
 */
export function getMessages(
  msgs: ValidationMessages,
  path: ValidationPath
): string[] | undefined {
  return msgs
    .filter((err) => path.every((part, index) => part === err.path[index]))
    .map((err) => err.msg);
}

/**
 * Creates a ValidationMessage object with an error at the empty path
 *
 * @param msg - the error message to add
 */
export function message(msg: string): ValidationMessage {
  return { path: [], msg };
}
