/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { HighriskSpecialPrefixListInstance } from "./country/highriskSpecialPrefix";
/**
 * Options to pass to each
 *
 * @property { string } [isoCode] Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
 * @property { string } [continent] Filter to retrieve the country permissions by specifying the continent
 * @property { string } [countryCode] Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
 * @property { boolean } [lowRiskNumbersEnabled] Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`.
 * @property { boolean } [highRiskSpecialNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false`
 * @property { boolean } [highRiskTollfraudNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers enabled. Can be: `true` or `false`.
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
    isoCode?: string;
    continent?: string;
    countryCode?: string;
    lowRiskNumbersEnabled?: boolean;
    highRiskSpecialNumbersEnabled?: boolean;
    highRiskTollfraudNumbersEnabled?: boolean;
    pageSize?: number;
    callback?: (item: CountryInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [isoCode] Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
 * @property { string } [continent] Filter to retrieve the country permissions by specifying the continent
 * @property { string } [countryCode] Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
 * @property { boolean } [lowRiskNumbersEnabled] Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`.
 * @property { boolean } [highRiskSpecialNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false`
 * @property { boolean } [highRiskTollfraudNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers enabled. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CountryListInstanceOptions {
    isoCode?: string;
    continent?: string;
    countryCode?: string;
    lowRiskNumbersEnabled?: boolean;
    highRiskSpecialNumbersEnabled?: boolean;
    highRiskTollfraudNumbersEnabled?: boolean;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [isoCode] Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
 * @property { string } [continent] Filter to retrieve the country permissions by specifying the continent
 * @property { string } [countryCode] Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
 * @property { boolean } [lowRiskNumbersEnabled] Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`.
 * @property { boolean } [highRiskSpecialNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false`
 * @property { boolean } [highRiskTollfraudNumbersEnabled] Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers enabled. Can be: `true` or `false`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CountryListInstancePageOptions {
    isoCode?: string;
    continent?: string;
    countryCode?: string;
    lowRiskNumbersEnabled?: boolean;
    highRiskSpecialNumbersEnabled?: boolean;
    highRiskTollfraudNumbersEnabled?: boolean;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CountryContext {
    highriskSpecialPrefixes: HighriskSpecialPrefixListInstance;
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
    isoCode?: string;
}
export declare class CountryContextImpl implements CountryContext {
    protected _version: V1;
    protected _solution: CountryContextSolution;
    protected _uri: string;
    protected _highriskSpecialPrefixes?: HighriskSpecialPrefixListInstance;
    constructor(_version: V1, isoCode: string);
    get highriskSpecialPrefixes(): HighriskSpecialPrefixListInstance;
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
    content: CountryResource[];
}
interface CountryResource {
    iso_code?: string | null;
    name?: string | null;
    continent?: string | null;
    country_codes?: Array<string> | null;
    low_risk_numbers_enabled?: boolean | null;
    high_risk_special_numbers_enabled?: boolean | null;
    high_risk_tollfraud_numbers_enabled?: boolean | null;
    url?: string | null;
    links?: object | null;
}
export declare class CountryInstance {
    protected _version: V1;
    protected _solution: CountryContextSolution;
    protected _context?: CountryContext;
    constructor(_version: V1, payload: CountryResource, isoCode?: string);
    /**
     * The ISO country code
     */
    isoCode?: string | null;
    /**
     * The name of the country
     */
    name?: string | null;
    /**
     * The name of the continent in which the country is located
     */
    continent?: string | null;
    /**
     * The E.164 assigned country codes(s)
     */
    countryCodes?: Array<string> | null;
    /**
     * Whether dialing to low-risk numbers is enabled
     */
    lowRiskNumbersEnabled?: boolean | null;
    /**
     * Whether dialing to high-risk special services numbers is enabled
     */
    highRiskSpecialNumbersEnabled?: boolean | null;
    /**
     * Whether dialing to high-risk toll fraud numbers is enabled, else `false`
     */
    highRiskTollfraudNumbersEnabled?: boolean | null;
    /**
     * The absolute URL of this resource
     */
    url?: string | null;
    /**
     * A list of URLs related to this resource
     */
    links?: object | null;
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
     * Access the highriskSpecialPrefixes.
     */
    highriskSpecialPrefixes(): HighriskSpecialPrefixListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        isoCode: string | null | undefined;
        name: string | null | undefined;
        continent: string | null | undefined;
        countryCodes: string[] | null | undefined;
        lowRiskNumbersEnabled: boolean | null | undefined;
        highRiskSpecialNumbersEnabled: boolean | null | undefined;
        highRiskTollfraudNumbersEnabled: boolean | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CountryListInstance {
    (isoCode: string): CountryContext;
    get(isoCode: string): CountryContext;
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
