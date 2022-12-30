/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
import { DependentPhoneNumberListInstance } from "./address/dependentPhoneNumber";
/**
 * Options to pass to update a AddressInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the address. It can be up to 64 characters long.
 * @property { string } [customerName] The name to associate with the address.
 * @property { string } [street] The number and street address of the address.
 * @property { string } [city] The city of the address.
 * @property { string } [region] The state or region of the address.
 * @property { string } [postalCode] The postal code of the address.
 * @property { boolean } [emergencyEnabled] Whether to enable emergency calling on the address. Can be: `true` or `false`.
 * @property { boolean } [autoCorrectAddress] Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won\\\'t alter the address you provide.
 * @property { string } [streetSecondary] The additional number and street address of the address.
 */
export interface AddressContextUpdateOptions {
    friendlyName?: string;
    customerName?: string;
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    emergencyEnabled?: boolean;
    autoCorrectAddress?: boolean;
    streetSecondary?: string;
}
/**
 * Options to pass to create a AddressInstance
 *
 * @property { string } customerName The name to associate with the new address.
 * @property { string } street The number and street address of the new address.
 * @property { string } city The city of the new address.
 * @property { string } region The state or region of the new address.
 * @property { string } postalCode The postal code of the new address.
 * @property { string } isoCountry The ISO country code of the new address.
 * @property { string } [friendlyName] A descriptive string that you create to describe the new address. It can be up to 64 characters long.
 * @property { boolean } [emergencyEnabled] Whether to enable emergency calling on the new address. Can be: `true` or `false`.
 * @property { boolean } [autoCorrectAddress] Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won\\\'t alter the address you provide.
 * @property { string } [streetSecondary] The additional number and street address of the address.
 */
export interface AddressListInstanceCreateOptions {
    customerName: string;
    street: string;
    city: string;
    region: string;
    postalCode: string;
    isoCountry: string;
    friendlyName?: string;
    emergencyEnabled?: boolean;
    autoCorrectAddress?: boolean;
    streetSecondary?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [customerName] The `customer_name` of the Address resources to read.
 * @property { string } [friendlyName] The string that identifies the Address resources to read.
 * @property { string } [isoCountry] The ISO country code of the Address resources to read.
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
export interface AddressListInstanceEachOptions {
    customerName?: string;
    friendlyName?: string;
    isoCountry?: string;
    pageSize?: number;
    callback?: (item: AddressInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [customerName] The `customer_name` of the Address resources to read.
 * @property { string } [friendlyName] The string that identifies the Address resources to read.
 * @property { string } [isoCountry] The ISO country code of the Address resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AddressListInstanceOptions {
    customerName?: string;
    friendlyName?: string;
    isoCountry?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [customerName] The `customer_name` of the Address resources to read.
 * @property { string } [friendlyName] The string that identifies the Address resources to read.
 * @property { string } [isoCountry] The ISO country code of the Address resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AddressListInstancePageOptions {
    customerName?: string;
    friendlyName?: string;
    isoCountry?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AddressContext {
    dependentPhoneNumbers: DependentPhoneNumberListInstance;
    /**
     * Remove a AddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressInstance
     */
    fetch(callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
    /**
     * Update a AddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressInstance
     */
    update(callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
    /**
     * Update a AddressInstance
     *
     * @param { AddressContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressInstance
     */
    update(params: AddressContextUpdateOptions, callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
    update(params?: any, callback?: any): Promise<AddressInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AddressContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class AddressContextImpl implements AddressContext {
    protected _version: V2010;
    protected _solution: AddressContextSolution;
    protected _uri: string;
    protected _dependentPhoneNumbers?: DependentPhoneNumberListInstance;
    constructor(_version: V2010, accountSid: string, sid: string);
    get dependentPhoneNumbers(): DependentPhoneNumberListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<AddressInstance>;
    update(params?: any, callback?: any): Promise<AddressInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AddressContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AddressPayload extends TwilioResponsePayload {
    addresses: AddressResource[];
}
interface AddressResource {
    account_sid?: string | null;
    city?: string | null;
    customer_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    iso_country?: string | null;
    postal_code?: string | null;
    region?: string | null;
    sid?: string | null;
    street?: string | null;
    uri?: string | null;
    emergency_enabled?: boolean | null;
    validated?: boolean | null;
    verified?: boolean | null;
    street_secondary?: string | null;
}
export declare class AddressInstance {
    protected _version: V2010;
    protected _solution: AddressContextSolution;
    protected _context?: AddressContext;
    constructor(_version: V2010, payload: AddressResource, accountSid: string, sid?: string);
    /**
     * The SID of the Account that is responsible for the resource
     */
    accountSid?: string | null;
    /**
     * The city in which the address is located
     */
    city?: string | null;
    /**
     * The name associated with the address
     */
    customerName?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The ISO country code of the address
     */
    isoCountry?: string | null;
    /**
     * The postal code of the address
     */
    postalCode?: string | null;
    /**
     * The state or region of the address
     */
    region?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The number and street address of the address
     */
    street?: string | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * Whether emergency calling has been enabled on this number
     */
    emergencyEnabled?: boolean | null;
    /**
     * Whether the address has been validated to comply with local regulation
     */
    validated?: boolean | null;
    /**
     * Whether the address has been verified to comply with regulation
     */
    verified?: boolean | null;
    /**
     * The additional number and street address of the address
     */
    streetSecondary?: string | null;
    private get _proxy();
    /**
     * Remove a AddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressInstance
     */
    fetch(callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
    /**
     * Update a AddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressInstance
     */
    update(callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
    /**
     * Update a AddressInstance
     *
     * @param { AddressContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressInstance
     */
    update(params: AddressContextUpdateOptions, callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
    /**
     * Access the dependentPhoneNumbers.
     */
    dependentPhoneNumbers(): DependentPhoneNumberListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        city: string | null | undefined;
        customerName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        isoCountry: string | null | undefined;
        postalCode: string | null | undefined;
        region: string | null | undefined;
        sid: string | null | undefined;
        street: string | null | undefined;
        uri: string | null | undefined;
        emergencyEnabled: boolean | null | undefined;
        validated: boolean | null | undefined;
        verified: boolean | null | undefined;
        streetSecondary: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AddressListInstance {
    (sid: string): AddressContext;
    get(sid: string): AddressContext;
    /**
     * Create a AddressInstance
     *
     * @param { AddressListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressInstance
     */
    create(params: AddressListInstanceCreateOptions, callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
    create(params: any, callback?: any): Promise<AddressInstance>;
    /**
     * Streams AddressInstance records from the API.
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
    each(callback?: (item: AddressInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AddressInstance records from the API.
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
     * @param { AddressListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AddressListInstanceEachOptions, callback?: (item: AddressInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
    /**
     * Retrieve a single target page of AddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
    getPage(params?: any, callback?: any): Promise<AddressPage>;
    /**
     * Lists AddressInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AddressInstance[]) => any): Promise<AddressInstance[]>;
    /**
     * Lists AddressInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AddressListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AddressListInstanceOptions, callback?: (error: Error | null, items: AddressInstance[]) => any): Promise<AddressInstance[]>;
    list(params?: any, callback?: any): Promise<AddressInstance[]>;
    /**
     * Retrieve a single page of AddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
    /**
     * Retrieve a single page of AddressInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AddressListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AddressListInstancePageOptions, callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
    page(params?: any, callback?: any): Promise<AddressPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AddressSolution {
    accountSid?: string;
}
export declare function AddressListInstance(version: V2010, accountSid: string): AddressListInstance;
export declare class AddressPage extends Page<V2010, AddressPayload, AddressResource, AddressInstance> {
    /**
     * Initialize the AddressPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: AddressSolution);
    /**
     * Build an instance of AddressInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AddressResource): AddressInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
