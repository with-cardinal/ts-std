export type ValidJSON = ValidJSONPrimitive | ValidJSONArray | ValidJSONObject;

export type ValidJSONPrimitive = string | number | boolean | null;
export type ValidJSONArray = ValidJSON[];
export type ValidJSONObject = { [key in string]: ValidJSON };
