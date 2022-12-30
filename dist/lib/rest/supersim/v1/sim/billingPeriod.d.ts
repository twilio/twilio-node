/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type BillingPeriodBpType = "ready" | "active";
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
export interface BillingPeriodListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: BillingPeriodInstance, done: (err?: Error) => void) => void;
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
export interface BillingPeriodListInstanceOptions {
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
export interface BillingPeriodListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface BillingPeriodListInstance {
    /**
     * Streams BillingPeriodInstance records from the API.
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
    each(callback?: (item: BillingPeriodInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams BillingPeriodInstance records from the API.
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
     * @param { BillingPeriodListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: BillingPeriodListInstanceEachOptions, callback?: (item: BillingPeriodInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of BillingPeriodInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: BillingPeriodPage) => any): Promise<BillingPeriodPage>;
    /**
     * Retrieve a single target page of BillingPeriodInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: BillingPeriodPage) => any): Promise<BillingPeriodPage>;
    getPage(params?: any, callback?: any): Promise<BillingPeriodPage>;
    /**
     * Lists BillingPeriodInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: BillingPeriodInstance[]) => any): Promise<BillingPeriodInstance[]>;
    /**
     * Lists BillingPeriodInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BillingPeriodListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: BillingPeriodListInstanceOptions, callback?: (error: Error | null, items: BillingPeriodInstance[]) => any): Promise<BillingPeriodInstance[]>;
    list(params?: any, callback?: any): Promise<BillingPeriodInstance[]>;
    /**
     * Retrieve a single page of BillingPeriodInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: BillingPeriodPage) => any): Promise<BillingPeriodPage>;
    /**
     * Retrieve a single page of BillingPeriodInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BillingPeriodListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: BillingPeriodListInstancePageOptions, callback?: (error: Error | null, items: BillingPeriodPage) => any): Promise<BillingPeriodPage>;
    page(params?: any, callback?: any): Promise<BillingPeriodPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BillingPeriodSolution {
    simSid?: string;
}
export declare function BillingPeriodListInstance(version: V1, simSid: string): BillingPeriodListInstance;
interface BillingPeriodPayload extends TwilioResponsePayload {
    billing_periods: BillingPeriodResource[];
}
interface BillingPeriodResource {
    sid?: string | null;
    account_sid?: string | null;
    sim_sid?: string | null;
    start_time?: Date | null;
    end_time?: Date | null;
    period_type?: BillingPeriodBpType;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class BillingPeriodInstance {
    protected _version: V1;
    constructor(_version: V1, payload: BillingPeriodResource, simSid: string);
    /**
     * The SID of the Billing Period
     */
    sid?: string | null;
    /**
     * The SID of the Account the Super SIM belongs to
     */
    accountSid?: string | null;
    /**
     * The SID of the Super SIM the Billing Period belongs to
     */
    simSid?: string | null;
    /**
     * The start time of the Billing Period
     */
    startTime?: Date | null;
    /**
     * The end time of the Billing Period
     */
    endTime?: Date | null;
    periodType?: BillingPeriodBpType;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        simSid: string | null | undefined;
        startTime: Date | null | undefined;
        endTime: Date | null | undefined;
        periodType: BillingPeriodBpType | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class BillingPeriodPage extends Page<V1, BillingPeriodPayload, BillingPeriodResource, BillingPeriodInstance> {
    /**
     * Initialize the BillingPeriodPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: BillingPeriodSolution);
    /**
     * Build an instance of BillingPeriodInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: BillingPeriodResource): BillingPeriodInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
