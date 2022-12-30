/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
declare type PhoneNumberValidationError = "TOO_SHORT" | "TOO_LONG" | "INVALID_BUT_POSSIBLE" | "INVALID_COUNTRY_CODE" | "INVALID_LENGTH" | "NOT_A_NUMBER";
/**
 * Options to pass to fetch a PhoneNumberInstance
 *
 * @property { string } [fields] A comma-separated list of fields to return. Possible values are caller_name, sim_swap, call_forwarding, live_activity, line_type_intelligence, identity_match.
 * @property { string } [countryCode] The [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) used if the phone number provided is in national format.
 * @property { string } [firstName] User’s first name. This query parameter is only used (optionally) for identity_match package requests.
 * @property { string } [lastName] User’s last name. This query parameter is only used (optionally) for identity_match package requests.
 * @property { string } [addressLine1] User’s first address line. This query parameter is only used (optionally) for identity_match package requests.
 * @property { string } [addressLine2] User’s second address line. This query parameter is only used (optionally) for identity_match package requests.
 * @property { string } [city] User’s city. This query parameter is only used (optionally) for identity_match package requests.
 * @property { string } [state] User’s country subdivision, such as state, province, or locality. This query parameter is only used (optionally) for identity_match package requests.
 * @property { string } [postalCode] User’s postal zip code. This query parameter is only used (optionally) for identity_match package requests.
 * @property { string } [addressCountryCode] User’s country, up to two characters. This query parameter is only used (optionally) for identity_match package requests.
 * @property { string } [nationalId] User’s national ID, such as SSN or Passport ID. This query parameter is only used (optionally) for identity_match package requests.
 * @property { string } [dateOfBirth] User’s date of birth, in YYYYMMDD format. This query parameter is only used (optionally) for identity_match package requests.
 */
export interface PhoneNumberContextFetchOptions {
    fields?: string;
    countryCode?: string;
    firstName?: string;
    lastName?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    addressCountryCode?: string;
    nationalId?: string;
    dateOfBirth?: string;
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
    protected _version: V2;
    protected _solution: PhoneNumberContextSolution;
    protected _uri: string;
    constructor(_version: V2, phoneNumber: string);
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
    calling_country_code?: string | null;
    country_code?: string | null;
    phone_number?: string | null;
    national_format?: string | null;
    valid?: boolean | null;
    validation_errors?: Array<PhoneNumberValidationError> | null;
    caller_name?: any | null;
    sim_swap?: any | null;
    call_forwarding?: any | null;
    live_activity?: any | null;
    line_type_intelligence?: any | null;
    identity_match?: any | null;
    url?: string | null;
}
export declare class PhoneNumberInstance {
    protected _version: V2;
    protected _solution: PhoneNumberContextSolution;
    protected _context?: PhoneNumberContext;
    constructor(_version: V2, payload: PhoneNumberResource, phoneNumber?: string);
    /**
     * International dialing prefix
     */
    callingCountryCode?: string | null;
    /**
     * Phone number\'s ISO country code
     */
    countryCode?: string | null;
    /**
     * Phone number in E.164 format
     */
    phoneNumber?: string | null;
    /**
     * Phone number in national format
     */
    nationalFormat?: string | null;
    /**
     * Boolean which indicates if the phone number is valid
     */
    valid?: boolean | null;
    /**
     * Contains reasons why a phone number is invalid
     */
    validationErrors?: Array<PhoneNumberValidationError> | null;
    /**
     * An object that contains caller name information
     */
    callerName?: any | null;
    /**
     * An object that contains SIM swap information
     */
    simSwap?: any | null;
    /**
     * An object that contains call forwarding status information
     */
    callForwarding?: any | null;
    /**
     * An object that contains live activity information
     */
    liveActivity?: any | null;
    /**
     * An object that contains line type information
     */
    lineTypeIntelligence?: any | null;
    /**
     * An object that contains identity match information
     */
    identityMatch?: any | null;
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
        callingCountryCode: string | null | undefined;
        countryCode: string | null | undefined;
        phoneNumber: string | null | undefined;
        nationalFormat: string | null | undefined;
        valid: boolean | null | undefined;
        validationErrors: PhoneNumberValidationError[] | null | undefined;
        callerName: any;
        simSwap: any;
        callForwarding: any;
        liveActivity: any;
        lineTypeIntelligence: any;
        identityMatch: any;
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
export declare function PhoneNumberListInstance(version: V2): PhoneNumberListInstance;
export {};
