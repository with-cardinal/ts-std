export type ValidJSON = ValidJSONPrimitive | ValidJSONArray | ValidJSONObject;

export type ValidJSONPrimitive = string | number | boolean | null;
export type ValidJSONArray = ValidJSON[];
export type ValidJSONObject = { [key in string]: ValidJSON };

export type ToJSON = {
  toJSON: () => JSONible;
};
export type JSONible = ToJSON | ValidJSON;

export { parse } from "./parse.js";
