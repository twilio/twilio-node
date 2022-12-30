/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
export declare class PricingV1VoiceVoiceCountryInstanceInboundCallPrices {
    "basePrice"?: number;
    "currentPrice"?: number;
    "numberType"?: string;
}
export declare class PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices {
    "prefixes"?: Array<string>;
    "basePrice"?: number;
    "currentPrice"?: number;
    "friendlyName"?: string;
}
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
export interface CountryListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: CountryInstance, done: (err?: Error) => void) => void;
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
export interface CountryListInstanceOptions {
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
export interface CountryListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CountryContext {
    /**
     * Fetch a CountryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CountryInstance
     */
    fetch(callback?: (error: Error | null, item?: CountryInstance) => any): Promise<CountryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CountryContextSolution {
    isoCountry?: string;
}
export declare class CountryContextImpl implements CountryContext {
    protected _version: V1;
    protected _solution: CountryContextSolution;
    protected _uri: string;
    constructor(_version: V1, isoCountry: string);
    fetch(callback?: any): Promise<CountryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CountryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CountryPayload extends TwilioResponsePayload {
    countries: CountryResource[];
}
interface CountryResource {
    country?: string | null;
    iso_country?: string | null;
    outbound_prefix_prices?: Array<PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices> | null;
    inbound_call_prices?: Array<PricingV1VoiceVoiceCountryInstanceInboundCallPrices> | null;
    price_unit?: string | null;
    url?: string | null;
}
export declare class CountryInstance {
    protected _version: V1;
    protected _solution: CountryContextSolution;
    protected _context?: CountryContext;
    constructor(_version: V1, payload: CountryResource, isoCountry?: string);
    /**
     * The name of the country
     */
    country?: string | null;
    /**
     * The ISO country code
     */
    isoCountry?: string | null;
    /**
     * The list of OutboundPrefixPrice records
     */
    outboundPrefixPrices?: Array<PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices> | null;
    /**
     * The list of InboundCallPrice records
     */
    inboundCallPrices?: Array<PricingV1VoiceVoiceCountryInstanceInboundCallPrices> | null;
    /**
     * The currency in which prices are measured, in ISO 4127 format (e.g. usd, eur, jpy)
     */
    priceUnit?: string | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a CountryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CountryInstance
     */
    fetch(callback?: (error: Error | null, item?: CountryInstance) => any): Promise<CountryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        country: string | null | undefined;
        isoCountry: string | null | undefined;
        outboundPrefixPrices: PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices[] | null | undefined;
        inboundCallPrices: PricingV1VoiceVoiceCountryInstanceInboundCallPrices[] | null | undefined;
        priceUnit: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CountryListInstance {
    (isoCountry: string): CountryContext;
    get(isoCountry: string): CountryContext;
    /**
     * Streams CountryInstance records from the API.
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
    each(callback?: (item: CountryInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CountryInstance records from the API.
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
     * @param { CountryListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CountryListInstanceEachOptions, callback?: (item: CountryInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CountryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
    /**
     * Retrieve a single target page of CountryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
    getPage(params?: any, callback?: any): Promise<CountryPage>;
    /**
     * Lists CountryInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CountryInstance[]) => any): Promise<CountryInstance[]>;
    /**
     * Lists CountryInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CountryListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CountryListInstanceOptions, callback?: (error: Error | null, items: CountryInstance[]) => any): Promise<CountryInstance[]>;
    list(params?: any, callback?: any): Promise<CountryInstance[]>;
    /**
     * Retrieve a single page of CountryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
    /**
     * Retrieve a single page of CountryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CountryListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CountryListInstancePageOptions, callback?: (error: Error | null, items: CountryPage) => any): Promise<CountryPage>;
    page(params?: any, callback?: any): Promise<CountryPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CountrySolution {
}
export declare function CountryListInstance(version: V1): CountryListInstance;
export declare class CountryPage extends Page<V1, CountryPayload, CountryResource, CountryInstance> {
    /**
     * Initialize the CountryPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CountrySolution);
    /**
     * Build an instance of CountryInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CountryResource): CountryInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
