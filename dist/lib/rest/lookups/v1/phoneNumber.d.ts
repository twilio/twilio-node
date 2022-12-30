/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to fetch a PhoneNumberInstance
 *
 * @property { string } [countryCode] The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the phone number to fetch. This is used to specify the country when the phone number is provided in a national format.
 * @property { Array<string> } [type] The type of information to return. Can be: `carrier` or `caller-name`. The default is null.  Carrier information costs $0.005 per phone number looked up.  Caller Name information is currently available only in the US and costs $0.01 per phone number looked up.  To retrieve both types on information, specify this parameter twice; once with `carrier` and once with `caller-name` as the value.
 * @property { Array<string> } [addOns] The `unique_name` of an Add-on you would like to invoke. Can be the `unique_name` of an Add-on that is installed on your account. You can specify multiple instances of this parameter to invoke multiple Add-ons. For more information about  Add-ons, see the [Add-ons documentation](https://www.twilio.com/docs/add-ons).
 * @property { object } [addOnsData] Data specific to the add-on you would like to invoke. The content and format of this value depends on the add-on.
 */
export interface PhoneNumberContextFetchOptions {
    countryCode?: string;
    type?: Array<string>;
    addOns?: Array<string>;
    addOnsData?: object;
}
export interface PhoneNumberContext {
    /**
     * Fetch a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Fetch a PhoneNumberInstance
     *
     * @param { PhoneNumberContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    fetch(params: PhoneNumberContextFetchOptions, callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    fetch(params?: any, callback?: any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PhoneNumberContextSolution {
    phoneNumber?: string;
}
export declare class PhoneNumberContextImpl implements PhoneNumberContext {
    protected _version: V1;
    protected _solution: PhoneNumberContextSolution;
    protected _uri: string;
    constructor(_version: V1, phoneNumber: string);
    fetch(params?: any, callback?: any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PhoneNumberContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PhoneNumberResource {
    caller_name?: any | null;
    country_code?: string | null;
    phone_number?: string | null;
    national_format?: string | null;
    carrier?: any | null;
    add_ons?: any | null;
    url?: string | null;
}
export declare class PhoneNumberInstance {
    protected _version: V1;
    protected _solution: PhoneNumberContextSolution;
    protected _context?: PhoneNumberContext;
    constructor(_version: V1, payload: PhoneNumberResource, phoneNumber?: string);
    /**
     * The name of the phone number\'s owner
     */
    callerName?: any | null;
    /**
     * The ISO country code for the phone number
     */
    countryCode?: string | null;
    /**
     * The phone number in E.164 format
     */
    phoneNumber?: string | null;
    /**
     * The phone number, in national format
     */
    nationalFormat?: string | null;
    /**
     * The telecom company that provides the phone number
     */
    carrier?: any | null;
    /**
     * A JSON string with the results of the Add-ons you specified
     */
    addOns?: any | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Fetch a PhoneNumberInstance
     *
     * @param { PhoneNumberContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    fetch(params: PhoneNumberContextFetchOptions, callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        callerName: any;
        countryCode: string | null | undefined;
        phoneNumber: string | null | undefined;
        nationalFormat: string | null | undefined;
        carrier: any;
        addOns: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PhoneNumberListInstance {
    (phoneNumber: string): PhoneNumberContext;
    get(phoneNumber: string): PhoneNumberContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PhoneNumberSolution {
}
export declare function PhoneNumberListInstance(version: V1): PhoneNumberListInstance;
export {};
