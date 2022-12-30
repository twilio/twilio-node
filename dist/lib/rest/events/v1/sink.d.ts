/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { SinkTestListInstance } from "./sink/sinkTest";
import { SinkValidateListInstance } from "./sink/sinkValidate";
declare type SinkSinkType = "kinesis" | "webhook" | "segment";
declare type SinkStatus = "initialized" | "validating" | "active" | "failed";
/**
 * Options to pass to update a SinkInstance
 *
 * @property { string } description A human readable description for the Sink **This value should not contain PII.**
 */
export interface SinkContextUpdateOptions {
    description: string;
}
/**
 * Options to pass to create a SinkInstance
 *
 * @property { string } description A human readable description for the Sink **This value should not contain PII.**
 * @property { any } sinkConfiguration The information required for Twilio to connect to the provided Sink encoded as JSON.
 * @property { SinkSinkType } sinkType
 */
export interface SinkListInstanceCreateOptions {
    description: string;
    sinkConfiguration: any;
    sinkType: SinkSinkType;
}
/**
 * Options to pass to each
 *
 * @property { boolean } [inUse] A boolean query parameter filtering the results to return sinks used/not used by a subscription.
 * @property { string } [status] A String query parameter filtering the results by status `initialized`, `validating`, `active` or `failed`.
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
export interface SinkListInstanceEachOptions {
    inUse?: boolean;
    status?: string;
    pageSize?: number;
    callback?: (item: SinkInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { boolean } [inUse] A boolean query parameter filtering the results to return sinks used/not used by a subscription.
 * @property { string } [status] A String query parameter filtering the results by status `initialized`, `validating`, `active` or `failed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SinkListInstanceOptions {
    inUse?: boolean;
    status?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { boolean } [inUse] A boolean query parameter filtering the results to return sinks used/not used by a subscription.
 * @property { string } [status] A String query parameter filtering the results by status `initialized`, `validating`, `active` or `failed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SinkListInstancePageOptions {
    inUse?: boolean;
    status?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SinkContext {
    sinkTest: SinkTestListInstance;
    sinkValidate: SinkValidateListInstance;
    /**
     * Remove a SinkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SinkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SinkInstance
     */
    fetch(callback?: (error: Error | null, item?: SinkInstance) => any): Promise<SinkInstance>;
    /**
     * Update a SinkInstance
     *
     * @param { SinkContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SinkInstance
     */
    update(params: SinkContextUpdateOptions, callback?: (error: Error | null, item?: SinkInstance) => any): Promise<SinkInstance>;
    update(params: any, callback?: any): Promise<SinkInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SinkContextSolution {
    sid?: string;
}
export declare class SinkContextImpl implements SinkContext {
    protected _version: V1;
    protected _solution: SinkContextSolution;
    protected _uri: string;
    protected _sinkTest?: SinkTestListInstance;
    protected _sinkValidate?: SinkValidateListInstance;
    constructor(_version: V1, sid: string);
    get sinkTest(): SinkTestListInstance;
    get sinkValidate(): SinkValidateListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SinkInstance>;
    update(params: any, callback?: any): Promise<SinkInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SinkContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SinkPayload extends TwilioResponsePayload {
    sinks: SinkResource[];
}
interface SinkResource {
    date_created?: Date | null;
    date_updated?: Date | null;
    description?: string | null;
    sid?: string | null;
    sink_configuration?: any | null;
    sink_type?: SinkSinkType;
    status?: SinkStatus;
    url?: string | null;
    links?: object | null;
}
export declare class SinkInstance {
    protected _version: V1;
    protected _solution: SinkContextSolution;
    protected _context?: SinkContext;
    constructor(_version: V1, payload: SinkResource, sid?: string);
    /**
     * The date this Sink was created
     */
    dateCreated?: Date | null;
    /**
     * The date this Sink was updated
     */
    dateUpdated?: Date | null;
    /**
     * Sink Description
     */
    description?: string | null;
    /**
     * A string that uniquely identifies this Sink.
     */
    sid?: string | null;
    /**
     * JSON Sink configuration.
     */
    sinkConfiguration?: any | null;
    sinkType?: SinkSinkType;
    status?: SinkStatus;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    /**
     * Nested resource URLs.
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a SinkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SinkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SinkInstance
     */
    fetch(callback?: (error: Error | null, item?: SinkInstance) => any): Promise<SinkInstance>;
    /**
     * Update a SinkInstance
     *
     * @param { SinkContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SinkInstance
     */
    update(params: SinkContextUpdateOptions, callback?: (error: Error | null, item?: SinkInstance) => any): Promise<SinkInstance>;
    /**
     * Access the sinkTest.
     */
    sinkTest(): SinkTestListInstance;
    /**
     * Access the sinkValidate.
     */
    sinkValidate(): SinkValidateListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        description: string | null | undefined;
        sid: string | null | undefined;
        sinkConfiguration: any;
        sinkType: SinkSinkType | undefined;
        status: SinkStatus | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SinkListInstance {
    (sid: string): SinkContext;
    get(sid: string): SinkContext;
    /**
     * Create a SinkInstance
     *
     * @param { SinkListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SinkInstance
     */
    create(params: SinkListInstanceCreateOptions, callback?: (error: Error | null, item?: SinkInstance) => any): Promise<SinkInstance>;
    create(params: any, callback?: any): Promise<SinkInstance>;
    /**
     * Streams SinkInstance records from the API.
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
    each(callback?: (item: SinkInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SinkInstance records from the API.
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
     * @param { SinkListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SinkListInstanceEachOptions, callback?: (item: SinkInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SinkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
    /**
     * Retrieve a single target page of SinkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
    getPage(params?: any, callback?: any): Promise<SinkPage>;
    /**
     * Lists SinkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SinkInstance[]) => any): Promise<SinkInstance[]>;
    /**
     * Lists SinkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SinkListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SinkListInstanceOptions, callback?: (error: Error | null, items: SinkInstance[]) => any): Promise<SinkInstance[]>;
    list(params?: any, callback?: any): Promise<SinkInstance[]>;
    /**
     * Retrieve a single page of SinkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
    /**
     * Retrieve a single page of SinkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SinkListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SinkListInstancePageOptions, callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
    page(params?: any, callback?: any): Promise<SinkPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SinkSolution {
}
export declare function SinkListInstance(version: V1): SinkListInstance;
export declare class SinkPage extends Page<V1, SinkPayload, SinkResource, SinkInstance> {
    /**
     * Initialize the SinkPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SinkSolution);
    /**
     * Build an instance of SinkInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SinkResource): SinkInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
