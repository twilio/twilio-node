/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
import { PhoneNumberCapabilities } from "../../../../../../lib/interfaces";
/**
 * Options to pass to each
 *
 * @property { number } [areaCode] The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada.
 * @property { string } [contains] The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters.
 * @property { boolean } [smsEnabled] Whether the phone numbers can receive text messages. Can be: `true` or `false`.
 * @property { boolean } [mmsEnabled] Whether the phone numbers can receive MMS messages. Can be: `true` or `false`.
 * @property { boolean } [voiceEnabled] Whether the phone numbers can receive calls. Can be: `true` or `false`.
 * @property { boolean } [excludeAllAddressRequired] Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeLocalAddressRequired] Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeForeignAddressRequired] Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [beta] Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [nearNumber] Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
 * @property { string } [nearLatLong] Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada.
 * @property { number } [distance] The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada.
 * @property { string } [inPostalCode] Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRegion] Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRateCenter] Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLata] Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLocality] Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
 * @property { boolean } [faxEnabled] Whether the phone numbers can receive faxes. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MachineToMachineListInstanceEachOptions {
    areaCode?: number;
    contains?: string;
    smsEnabled?: boolean;
    mmsEnabled?: boolean;
    voiceEnabled?: boolean;
    excludeAllAddressRequired?: boolean;
    excludeLocalAddressRequired?: boolean;
    excludeForeignAddressRequired?: boolean;
    beta?: boolean;
    nearNumber?: string;
    nearLatLong?: string;
    distance?: number;
    inPostalCode?: string;
    inRegion?: string;
    inRateCenter?: string;
    inLata?: string;
    inLocality?: string;
    faxEnabled?: boolean;
    pageSize?: number;
    callback?: (item: MachineToMachineInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { number } [areaCode] The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada.
 * @property { string } [contains] The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters.
 * @property { boolean } [smsEnabled] Whether the phone numbers can receive text messages. Can be: `true` or `false`.
 * @property { boolean } [mmsEnabled] Whether the phone numbers can receive MMS messages. Can be: `true` or `false`.
 * @property { boolean } [voiceEnabled] Whether the phone numbers can receive calls. Can be: `true` or `false`.
 * @property { boolean } [excludeAllAddressRequired] Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeLocalAddressRequired] Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeForeignAddressRequired] Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [beta] Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [nearNumber] Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
 * @property { string } [nearLatLong] Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada.
 * @property { number } [distance] The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada.
 * @property { string } [inPostalCode] Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRegion] Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRateCenter] Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLata] Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLocality] Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
 * @property { boolean } [faxEnabled] Whether the phone numbers can receive faxes. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MachineToMachineListInstanceOptions {
    areaCode?: number;
    contains?: string;
    smsEnabled?: boolean;
    mmsEnabled?: boolean;
    voiceEnabled?: boolean;
    excludeAllAddressRequired?: boolean;
    excludeLocalAddressRequired?: boolean;
    excludeForeignAddressRequired?: boolean;
    beta?: boolean;
    nearNumber?: string;
    nearLatLong?: string;
    distance?: number;
    inPostalCode?: string;
    inRegion?: string;
    inRateCenter?: string;
    inLata?: string;
    inLocality?: string;
    faxEnabled?: boolean;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { number } [areaCode] The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada.
 * @property { string } [contains] The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters.
 * @property { boolean } [smsEnabled] Whether the phone numbers can receive text messages. Can be: `true` or `false`.
 * @property { boolean } [mmsEnabled] Whether the phone numbers can receive MMS messages. Can be: `true` or `false`.
 * @property { boolean } [voiceEnabled] Whether the phone numbers can receive calls. Can be: `true` or `false`.
 * @property { boolean } [excludeAllAddressRequired] Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeLocalAddressRequired] Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [excludeForeignAddressRequired] Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
 * @property { boolean } [beta] Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
 * @property { string } [nearNumber] Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
 * @property { string } [nearLatLong] Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada.
 * @property { number } [distance] The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada.
 * @property { string } [inPostalCode] Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRegion] Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inRateCenter] Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLata] Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
 * @property { string } [inLocality] Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
 * @property { boolean } [faxEnabled] Whether the phone numbers can receive faxes. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MachineToMachineListInstancePageOptions {
    areaCode?: number;
    contains?: string;
    smsEnabled?: boolean;
    mmsEnabled?: boolean;
    voiceEnabled?: boolean;
    excludeAllAddressRequired?: boolean;
    excludeLocalAddressRequired?: boolean;
    excludeForeignAddressRequired?: boolean;
    beta?: boolean;
    nearNumber?: string;
    nearLatLong?: string;
    distance?: number;
    inPostalCode?: string;
    inRegion?: string;
    inRateCenter?: string;
    inLata?: string;
    inLocality?: string;
    faxEnabled?: boolean;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MachineToMachineListInstance {
    /**
     * Streams MachineToMachineInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: MachineToMachineInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MachineToMachineInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MachineToMachineListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MachineToMachineListInstanceEachOptions, callback?: (item: MachineToMachineInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MachineToMachineInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MachineToMachinePage) => any): Promise<MachineToMachinePage>;
    /**
     * Retrieve a single target page of MachineToMachineInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MachineToMachinePage) => any): Promise<MachineToMachinePage>;
    getPage(params?: any, callback?: any): Promise<MachineToMachinePage>;
    /**
     * Lists MachineToMachineInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MachineToMachineInstance[]) => any): Promise<MachineToMachineInstance[]>;
    /**
     * Lists MachineToMachineInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MachineToMachineListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MachineToMachineListInstanceOptions, callback?: (error: Error | null, items: MachineToMachineInstance[]) => any): Promise<MachineToMachineInstance[]>;
    list(params?: any, callback?: any): Promise<MachineToMachineInstance[]>;
    /**
     * Retrieve a single page of MachineToMachineInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MachineToMachinePage) => any): Promise<MachineToMachinePage>;
    /**
     * Retrieve a single page of MachineToMachineInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MachineToMachineListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MachineToMachineListInstancePageOptions, callback?: (error: Error | null, items: MachineToMachinePage) => any): Promise<MachineToMachinePage>;
    page(params?: any, callback?: any): Promise<MachineToMachinePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MachineToMachineSolution {
    accountSid?: string;
    countryCode?: string;
}
export declare function MachineToMachineListInstance(version: V2010, accountSid: string, countryCode: string): MachineToMachineListInstance;
interface MachineToMachinePayload extends TwilioResponsePayload {
    available_phone_numbers: MachineToMachineResource[];
}
interface MachineToMachineResource {
    friendly_name?: string | null;
    phone_number?: string | null;
    lata?: string | null;
    locality?: string | null;
    rate_center?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    region?: string | null;
    postal_code?: string | null;
    iso_country?: string | null;
    address_requirements?: string | null;
    beta?: boolean | null;
    capabilities?: PhoneNumberCapabilities | null;
}
export declare class MachineToMachineInstance {
    protected _version: V2010;
    constructor(_version: V2010, payload: MachineToMachineResource, accountSid: string, countryCode: string);
    /**
     * A formatted version of the phone number
     */
    friendlyName?: string | null;
    /**
     * The phone number in E.164 format
     */
    phoneNumber?: string | null;
    /**
     * The LATA of this phone number
     */
    lata?: string | null;
    /**
     * The locality or city of this phone number\'s location
     */
    locality?: string | null;
    /**
     * The rate center of this phone number
     */
    rateCenter?: string | null;
    /**
     * The latitude of this phone number\'s location
     */
    latitude?: number | null;
    /**
     * The longitude of this phone number\'s location
     */
    longitude?: number | null;
    /**
     * The two-letter state or province abbreviation of this phone number\'s location
     */
    region?: string | null;
    /**
     * The postal or ZIP code of this phone number\'s location
     */
    postalCode?: string | null;
    /**
     * The ISO country code of this phone number
     */
    isoCountry?: string | null;
    /**
     * The type of Address resource the phone number requires
     */
    addressRequirements?: string | null;
    /**
     * Whether the phone number is new to the Twilio platform
     */
    beta?: boolean | null;
    capabilities?: PhoneNumberCapabilities | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        friendlyName: string | null | undefined;
        phoneNumber: string | null | undefined;
        lata: string | null | undefined;
        locality: string | null | undefined;
        rateCenter: string | null | undefined;
        latitude: number | null | undefined;
        longitude: number | null | undefined;
        region: string | null | undefined;
        postalCode: string | null | undefined;
        isoCountry: string | null | undefined;
        addressRequirements: string | null | undefined;
        beta: boolean | null | undefined;
        capabilities: PhoneNumberCapabilities | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class MachineToMachinePage extends Page<V2010, MachineToMachinePayload, MachineToMachineResource, MachineToMachineInstance> {
    /**
     * Initialize the MachineToMachinePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: MachineToMachineSolution);
    /**
     * Build an instance of MachineToMachineInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MachineToMachineResource): MachineToMachineInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
