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
export declare function iso8601Date(s: any): string | Date;
/**
 * @function iso8601DateTime
 * @memberOf deserialize
 * @description parse a string into a Date object
 *
 * @param {string} s Date string in YYYY-MM-DD[T]HH:mm:ss[Z] format
 * @return {(Date|string)} Date object, or the original date string if the argument is not a valid date
 */
export declare function iso8601DateTime(s: any): string | Date;
/**
 * @function rfc2822DateTime
 * @memberOf deserialize
 * @description parse a string into a Date object
 *
 * @param {string} s Date string in ddd, DD MMM YYYY HH:mm:ss [+0000] format
 * @return {(Date|string)} Date object, or the original date string if the argument is not a valid date
 */
export declare function rfc2822DateTime(s: any): string | Date;
/**
 * @function decimal
 * @memberOf deserialize
 * @description parse a string into a decimal
 *
 * @param  {string} d Decimal value as string
 * @return {(number|string)} Number, or the original string if the argument is NaN
 */
export declare function decimal(d: any): string | number;
/**
 * @function integer
 * @memberOf deserialize
 * @description parse a string into a integer
 *
 * @param  {string} i Integer value as string
 * @return {(number|string)} Number, or the original string if the argument is NaN
 */
export declare function integer(i: any): string | number;
