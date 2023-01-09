import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

/**
 * @namespace serialize
 */

/**
 * Turns a Date object into a string if parameter is a Date otherwise returns the parameter
 *
 * @param d - date object to format
 * @returns date formatted in YYYY-MM-DD form, otherwise the
 * provided parameter.
 */
export function iso8601Date<T>(date: T | Date): T | string {
  if (!date || !(date instanceof Date)) {
    return date as T;
  } else {
    return dayjs.utc(date).format("YYYY-MM-DD");
  }
}

/**
 * Turns a Date object into a string if parameter is a Date otherwise returns the parameter
 *
 * @param  d - date object to format
 * @returns date formatted in YYYY-MM-DD[T]HH:mm:ss[Z] form, otherwise the
 * provided parameter.
 */
export function iso8601DateTime<T>(date: T | Date): T | string {
  if (!date || !(date instanceof Date)) {
    return date as T;
  } else {
    return dayjs.utc(date).format("YYYY-MM-DD[T]HH:mm:ss[Z]");
  }
}

/**
 * Turns a map of params int oa flattened map separated by dots if the parameter is an object, otherwise returns an empty map
 *
 * @param m - map to transform
 * @param prefix - to append to each flattened value
 * @returns flattened map
 */
export function prefixedCollapsibleMap<T extends {}>(m: T, prefix?: string): T;
export function prefixedCollapsibleMap<T>(m: T, prefix?: string): {} {
  if (
    !m ||
    typeof m !== "object" ||
    Object.prototype.toString.call(m) !== "[object Object]"
  ) {
    return {};
  }

  function flatten(m, result?, previous?) {
    result = result || {};
    previous = previous || [];

    Object.keys(m).forEach((key) => {
      const unionKeys = [...previous];
      if (!unionKeys.includes(key)) {
        unionKeys.push(key);
      }
      if (
        typeof m[key] === "object" &&
        Object.prototype.toString.call(m[key]) === "[object Object]"
      ) {
        flatten(m[key], result, unionKeys);
      } else {
        result[unionKeys.join(".")] = m[key];
      }
    });

    return result;
  }

  var flattened = flatten(m);
  var result = flattened;
  if (prefix) {
    result = {};
    Object.keys(flattened).forEach((key) => {
      result[prefix + "." + key] = flattened[key];
    });
  }

  return result;
}

/**
 * Turns an object into a JSON string if the parameter is an object, otherwise returns the passed in object
 *
 * @param o - json object or array
 * @returns stringified object
 */
export function object<T>(o: T): T;
export function object(o: object | Array<any>): string {
  if (typeof o === "object") {
    return JSON.stringify(o);
  }

  return o;
}

/**
 * Coerces a boolean literal into a string
 *
 * @param input - boolean or string to be coerced
 * @returns a string 'true' or 'false' if passed a boolean, else the value
 */
export function bool(input: string | boolean): string | "true" | "false" {
  if (typeof input === "string") {
    return input;
  }
  if (
    typeof input === "boolean" ||
    (typeof input === "object" &&
      Object.prototype.toString.call(input) === "[object Boolean]")
  ) {
    return input.toString();
  }

  return input;
}

type MapFunction<TInput, TOutput> = (input: TInput) => TOutput;

/**
 * Maps transform over each element in input if input is an array
 *
 * @param input - array to map transform over, if not an array then it is
 * returned as is.
 * @returns new array with transform applied to each element.
 */
export function map<T>(input: T, transform?: (T) => any): T;
export function map<TInput, TOutput>(
  input: Array<TInput>,
  transform: MapFunction<TInput, TOutput>
): Array<TOutput> {
  if (typeof input === "object" && Array.isArray(input)) {
    return input.map((element) => transform(element));
  }
  return input;
}
