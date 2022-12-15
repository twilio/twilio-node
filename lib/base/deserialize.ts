"use strict";

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
 * @function iso8601Date
 * @memberOf deserialize
 * @description parse a string into a Date object
 *
 * @param {string} s Date string in YYYY-MM-DD format
 * @return {(Date|string)} Date object, or the original date string if the argument is not a valid date
 */
export function iso8601Date(s) {
  return parseDate(s, "YYYY-MM-DD");
}

/**
 * @function iso8601DateTime
 * @memberOf deserialize
 * @description parse a string into a Date object
 *
 * @param {string} s Date string in YYYY-MM-DD[T]HH:mm:ss[Z] format
 * @return {(Date|string)} Date object, or the original date string if the argument is not a valid date
 */
export function iso8601DateTime(s) {
  return parseDate(s, "YYYY-MM-DD[T]HH:mm:ss[Z]");
}

/**
 * @function rfc2822DateTime
 * @memberOf deserialize
 * @description parse a string into a Date object
 *
 * @param {string} s Date string in ddd, DD MMM YYYY HH:mm:ss [+0000] format
 * @return {(Date|string)} Date object, or the original date string if the argument is not a valid date
 */
export function rfc2822DateTime(s) {
  return parseDate(s, "ddd, DD MMM YYYY HH:mm:ss [+0000]");
}

/**
 * @function decimal
 * @memberOf deserialize
 * @description parse a string into a decimal
 *
 * @param  {string} d Decimal value as string
 * @return {(number|string)} Number, or the original string if the argument is NaN
 */
export function decimal(d) {
  return parseNumber(d, parseFloat);
}

/**
 * @function integer
 * @memberOf deserialize
 * @description parse a string into a integer
 *
 * @param  {string} i Integer value as string
 * @return {(number|string)} Number, or the original string if the argument is NaN
 */
export function integer(i) {
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
