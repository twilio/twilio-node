/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
declare type RegulationEndUserType = "individual" | "business";
/**
 * Options to pass to each
 *
 * @property { RegulationEndUserType } [endUserType] The type of End User the regulation requires - can be `individual` or `business`.
 * @property { string } [isoCountry] The ISO country code of the phone number\'s country.
 * @property { string } [numberType] The type of phone number that the regulatory requiremnt is restricting.
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
export interface RegulationListInstanceEachOptions {
    endUserType?: RegulationEndUserType;
    isoCountry?: string;
    numberType?: string;
    pageSize?: number;
    callback?: (item: RegulationInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { RegulationEndUserType } [endUserType] The type of End User the regulation requires - can be `individual` or `business`.
 * @property { string } [isoCountry] The ISO country code of the phone number\'s country.
 * @property { string } [numberType] The type of phone number that the regulatory requiremnt is restricting.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface RegulationListInstanceOptions {
    endUserType?: RegulationEndUserType;
    isoCountry?: string;
    numberType?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { RegulationEndUserType } [endUserType] The type of End User the regulation requires - can be `individual` or `business`.
 * @property { string } [isoCountry] The ISO country code of the phone number\'s country.
 * @property { string } [numberType] The type of phone number that the regulatory requiremnt is restricting.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface RegulationListInstancePageOptions {
    endUserType?: RegulationEndUserType;
    isoCountry?: string;
    numberType?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface RegulationContext {
    /**
     * Fetch a RegulationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RegulationInstance
     */
    fetch(callback?: (error: Error | null, item?: RegulationInstance) => any): Promise<RegulationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RegulationContextSolution {
    sid?: string;
}
export declare class RegulationContextImpl implements RegulationContext {
    protected _version: V2;
    protected _solution: RegulationContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string);
    fetch(callback?: any): Promise<RegulationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RegulationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface RegulationPayload extends TwilioResponsePayload {
    results: RegulationResource[];
}
interface RegulationResource {
    sid?: string | null;
    friendly_name?: string | null;
    iso_country?: string | null;
    number_type?: string | null;
    end_user_type?: RegulationEndUserType;
    requirements?: any | null;
    url?: string | null;
}
export declare class RegulationInstance {
    protected _version: V2;
    protected _solution: RegulationContextSolution;
    protected _context?: RegulationContext;
    constructor(_version: V2, payload: RegulationResource, sid?: string);
    /**
     * The unique string that identifies the Regulation resource
     */
    sid?: string | null;
    /**
     * A human-readable description of the Regulation resource
     */
    friendlyName?: string | null;
    /**
     * The ISO country code of the phone number\'s country
     */
    isoCountry?: string | null;
    /**
     * The type of phone number restricted by the regulatory requirement
     */
    numberType?: string | null;
    endUserType?: RegulationEndUserType;
    /**
     * The sid of a regulation object that dictates requirements
     */
    requirements?: any | null;
    /**
     * The absolute URL of the Regulation resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a RegulationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RegulationInstance
     */
    fetch(callback?: (error: Error | null, item?: RegulationInstance) => any): Promise<RegulationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        isoCountry: string | null | undefined;
        numberType: string | null | undefined;
        endUserType: RegulationEndUserType | undefined;
        requirements: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RegulationListInstance {
    (sid: string): RegulationContext;
    get(sid: string): RegulationContext;
    /**
     * Streams RegulationInstance records from the API.
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
    each(callback?: (item: RegulationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams RegulationInstance records from the API.
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
     * @param { RegulationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: RegulationListInstanceEachOptions, callback?: (item: RegulationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of RegulationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: RegulationPage) => any): Promise<RegulationPage>;
    /**
     * Retrieve a single target page of RegulationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: RegulationPage) => any): Promise<RegulationPage>;
    getPage(params?: any, callback?: any): Promise<RegulationPage>;
    /**
     * Lists RegulationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: RegulationInstance[]) => any): Promise<RegulationInstance[]>;
    /**
     * Lists RegulationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RegulationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: RegulationListInstanceOptions, callback?: (error: Error | null, items: RegulationInstance[]) => any): Promise<RegulationInstance[]>;
    list(params?: any, callback?: any): Promise<RegulationInstance[]>;
    /**
     * Retrieve a single page of RegulationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: RegulationPage) => any): Promise<RegulationPage>;
    /**
     * Retrieve a single page of RegulationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RegulationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: RegulationListInstancePageOptions, callback?: (error: Error | null, items: RegulationPage) => any): Promise<RegulationPage>;
    page(params?: any, callback?: any): Promise<RegulationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RegulationSolution {
}
export declare function RegulationListInstance(version: V2): RegulationListInstance;
export declare class RegulationPage extends Page<V2, RegulationPayload, RegulationResource, RegulationInstance> {
    /**
     * Initialize the RegulationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: RegulationSolution);
    /**
     * Build an instance of RegulationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: RegulationResource): RegulationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
