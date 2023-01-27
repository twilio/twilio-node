import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export interface NumberParser {
  (n: string): number;
}

/**
 * @namespace deserialize
 */

/**
 * Parse a string into a Date object
 *
 * @param s - Date string in YYYY-MM-DD format
 * @returns Date object, or the original date string if the argument is not a valid date
 */
export function iso8601Date(s: string) {
  return parseDate(s, "YYYY-MM-DD");
}

/**
 * Parse a string into a Date object
 *
 * @param s - Date string in YYYY-MM-DD[T]HH:mm:ss[Z] format
 * @returns Date object, or the original date string if the argument is not a valid date
 */
export function iso8601DateTime(s: string) {
  return parseDate(s, "YYYY-MM-DD[T]HH:mm:ss[Z]");
}

/**
 * Parse a string into a Date object
 *
 * @param s - Date string in ddd, DD MMM YYYY HH:mm:ss [+0000] format
 * @returns Date object, or the original date string if the argument is not a valid date
 */
export function rfc2822DateTime(s: string) {
  return parseDate(s, "ddd, DD MMM YYYY HH:mm:ss [+0000]");
}

/**
 * Parse a string into a decimal
 *
 * @param d - Decimal value as string
 * @returns Number, or the original string if the argument is NaN
 */
export function decimal(d: string) {
  return parseNumber(d, parseFloat);
}

/**
 * Parse a string into a integer
 *
 * @param i - Integer value as string
 * @returns Number, or the original string if the argument is NaN
 */
export function integer(i: string) {
  return parseNumber(i, parseInt);
}

function parseDate(s: string, format: string): Date | string {
  var m = dayjs.utc(s, format);
  if (m.isValid()) {
    return m.toDate();
  }

  return s;
}

function parseNumber(n: string, parser: NumberParser) {
  var parsed = parser(n);
  if (typeof parsed === "number" && isNaN(parsed)) {
    return n;
  }

  return parsed;
}
