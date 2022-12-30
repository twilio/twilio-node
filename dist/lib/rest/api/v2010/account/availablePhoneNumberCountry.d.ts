/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
import { LocalListInstance } from "./availablePhoneNumberCountry/local";
import { MachineToMachineListInstance } from "./availablePhoneNumberCountry/machineToMachine";
import { MobileListInstance } from "./availablePhoneNumberCountry/mobile";
import { NationalListInstance } from "./availablePhoneNumberCountry/national";
import { SharedCostListInstance } from "./availablePhoneNumberCountry/sharedCost";
import { TollFreeListInstance } from "./availablePhoneNumberCountry/tollFree";
import { VoipListInstance } from "./availablePhoneNumberCountry/voip";
/**
 * Options to pass to each
 *
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
export interface AvailablePhoneNumberCountryListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AvailablePhoneNumberCountryInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AvailablePhoneNumberCountryListInstanceOptions {
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AvailablePhoneNumberCountryListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AvailablePhoneNumberCountryContext {
    local: LocalListInstance;
    machineToMachine: MachineToMachineListInstance;
    mobile: MobileListInstance;
    national: NationalListInstance;
    sharedCost: SharedCostListInstance;
    tollFree: TollFreeListInstance;
    voip: VoipListInstance;
    /**
     * Fetch a AvailablePhoneNumberCountryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AvailablePhoneNumberCountryInstance
     */
    fetch(callback?: (error: Error | null, item?: AvailablePhoneNumberCountryInstance) => any): Promise<AvailablePhoneNumberCountryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AvailablePhoneNumberCountryContextSolution {
    accountSid?: string;
    countryCode?: string;
}
export declare class AvailablePhoneNumberCountryContextImpl implements AvailablePhoneNumberCountryContext {
    protected _version: V2010;
    protected _solution: AvailablePhoneNumberCountryContextSolution;
    protected _uri: string;
    protected _local?: LocalListInstance;
    protected _machineToMachine?: MachineToMachineListInstance;
    protected _mobile?: MobileListInstance;
    protected _national?: NationalListInstance;
    protected _sharedCost?: SharedCostListInstance;
    protected _tollFree?: TollFreeListInstance;
    protected _voip?: VoipListInstance;
    constructor(_version: V2010, accountSid: string, countryCode: string);
    get local(): LocalListInstance;
    get machineToMachine(): MachineToMachineListInstance;
    get mobile(): MobileListInstance;
    get national(): NationalListInstance;
    get sharedCost(): SharedCostListInstance;
    get tollFree(): TollFreeListInstance;
    get voip(): VoipListInstance;
    fetch(callback?: any): Promise<AvailablePhoneNumberCountryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AvailablePhoneNumberCountryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AvailablePhoneNumberCountryPayload extends TwilioResponsePayload {
    countries: AvailablePhoneNumberCountryResource[];
}
interface AvailablePhoneNumberCountryResource {
    country_code?: string | null;
    country?: string | null;
    uri?: string | null;
    beta?: boolean | null;
    subresource_uris?: object | null;
}
export declare class AvailablePhoneNumberCountryInstance {
    protected _version: V2010;
    protected _solution: AvailablePhoneNumberCountryContextSolution;
    protected _context?: AvailablePhoneNumberCountryContext;
    constructor(_version: V2010, payload: AvailablePhoneNumberCountryResource, accountSid: string, countryCode?: string);
    /**
     * The ISO-3166-1 country code of the country.
     */
    countryCode?: string | null;
    /**
     * The name of the country
     */
    country?: string | null;
    /**
     * The URI of the Country resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * Whether all phone numbers available in the country are new to the Twilio platform.
     */
    beta?: boolean | null;
    /**
     * A list of related resources identified by their relative URIs
     */
    subresourceUris?: object | null;
    private get _proxy();
    /**
     * Fetch a AvailablePhoneNumberCountryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AvailablePhoneNumberCountryInstance
     */
    fetch(callback?: (error: Error | null, item?: AvailablePhoneNumberCountryInstance) => any): Promise<AvailablePhoneNumberCountryInstance>;
    /**
     * Access the local.
     */
    local(): LocalListInstance;
    /**
     * Access the machineToMachine.
     */
    machineToMachine(): MachineToMachineListInstance;
    /**
     * Access the mobile.
     */
    mobile(): MobileListInstance;
    /**
     * Access the national.
     */
    national(): NationalListInstance;
    /**
     * Access the sharedCost.
     */
    sharedCost(): SharedCostListInstance;
    /**
     * Access the tollFree.
     */
    tollFree(): TollFreeListInstance;
    /**
     * Access the voip.
     */
    voip(): VoipListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        countryCode: string | null | undefined;
        country: string | null | undefined;
        uri: string | null | undefined;
        beta: boolean | null | undefined;
        subresourceUris: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AvailablePhoneNumberCountryListInstance {
    (countryCode: string): AvailablePhoneNumberCountryContext;
    get(countryCode: string): AvailablePhoneNumberCountryContext;
    /**
     * Streams AvailablePhoneNumberCountryInstance records from the API.
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
    each(callback?: (item: AvailablePhoneNumberCountryInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AvailablePhoneNumberCountryInstance records from the API.
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
     * @param { AvailablePhoneNumberCountryListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AvailablePhoneNumberCountryListInstanceEachOptions, callback?: (item: AvailablePhoneNumberCountryInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AvailablePhoneNumberCountryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AvailablePhoneNumberCountryPage) => any): Promise<AvailablePhoneNumberCountryPage>;
    /**
     * Retrieve a single target page of AvailablePhoneNumberCountryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AvailablePhoneNumberCountryPage) => any): Promise<AvailablePhoneNumberCountryPage>;
    getPage(params?: any, callback?: any): Promise<AvailablePhoneNumberCountryPage>;
    /**
     * Lists AvailablePhoneNumberCountryInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AvailablePhoneNumberCountryInstance[]) => any): Promise<AvailablePhoneNumberCountryInstance[]>;
    /**
     * Lists AvailablePhoneNumberCountryInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AvailablePhoneNumberCountryListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AvailablePhoneNumberCountryListInstanceOptions, callback?: (error: Error | null, items: AvailablePhoneNumberCountryInstance[]) => any): Promise<AvailablePhoneNumberCountryInstance[]>;
    list(params?: any, callback?: any): Promise<AvailablePhoneNumberCountryInstance[]>;
    /**
     * Retrieve a single page of AvailablePhoneNumberCountryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AvailablePhoneNumberCountryPage) => any): Promise<AvailablePhoneNumberCountryPage>;
    /**
     * Retrieve a single page of AvailablePhoneNumberCountryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AvailablePhoneNumberCountryListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AvailablePhoneNumberCountryListInstancePageOptions, callback?: (error: Error | null, items: AvailablePhoneNumberCountryPage) => any): Promise<AvailablePhoneNumberCountryPage>;
    page(params?: any, callback?: any): Promise<AvailablePhoneNumberCountryPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AvailablePhoneNumberCountrySolution {
    accountSid?: string;
}
export declare function AvailablePhoneNumberCountryListInstance(version: V2010, accountSid: string): AvailablePhoneNumberCountryListInstance;
export declare class AvailablePhoneNumberCountryPage extends Page<V2010, AvailablePhoneNumberCountryPayload, AvailablePhoneNumberCountryResource, AvailablePhoneNumberCountryInstance> {
    /**
     * Initialize the AvailablePhoneNumberCountryPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: AvailablePhoneNumberCountrySolution);
    /**
     * Build an instance of AvailablePhoneNumberCountryInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AvailablePhoneNumberCountryResource): AvailablePhoneNumberCountryInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
