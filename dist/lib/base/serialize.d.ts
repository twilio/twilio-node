/**
 * @namespace serialize
 */
/**
 * @function iso8601Date
 * @memberOf serialize
 * @description turns a Date object into a string if parameter is a Date
 * otherwise returns the parameter
 *
 * @param d date object to format
 * @return date formatted in YYYY-MM-DD form, otherwise the
 * provided parameter.
 */
export declare function iso8601Date<T>(date: T | Date): T | string;
/**
 * @function iso8601DateTime
 * @memberOf serialize
 * @description turns a Date object into a string if parameter is a Date
 * otherwise returns the parameter
 *
 * @param  d date object to format
 * @return date formatted in YYYY-MM-DD[T]HH:mm:ss[Z] form, otherwise the
 * provided parameter.
 */
export declare function iso8601DateTime<T>(date: T | Date): T | string;
/**
 * @function prefixedCollapsibleMap
 * @memberOf serialize
 *
 * @description turns a map of params int oa flattened map separated by dots
 * if the parameter is an object, otherwise returns an empty map
 *
 * @param m map to transform
 * @param prefix to append to each flattened value
 * @returns flattened map
 */
export declare function prefixedCollapsibleMap<T extends {}>(m: T, prefix?: string): T;
/**
 * @function object
 * @memberOf serialize
 *
 * @description Turns an object into a JSON string if the parameter is an
 * object, otherwise returns the passed in object
 *
 * @param o json object or array
 * @returns stringified object
 */
export declare function object<T>(o: T): T;
/**
 * @function bool
 * @memberOf serialize
 * @description Coerces a boolean literal into a string
 *
 * @param input boolean or string to be coerced
 * @returns a string 'true' or 'false' if passed a boolean, else the value
 */
export declare function bool(input: string | boolean): string | "true" | "false";
/**
 * @function map
 * @memberOf serialize
 * @description  Maps transform over each element in input if input is an array
 *
 * @param input array to map transform over, if not an array then it is
 * returned as is.
 * @returns new array with transform applied to each element.
 */
export declare function map<T>(input: T, transform?: (T: any) => any): T;
