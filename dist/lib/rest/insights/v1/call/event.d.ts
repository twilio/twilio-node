/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type EventLevel = "UNKNOWN" | "DEBUG" | "INFO" | "WARNING" | "ERROR";
declare type EventTwilioEdge = "unknown_edge" | "carrier_edge" | "sip_edge" | "sdk_edge" | "client_edge";
/**
 * Options to pass to each
 *
 * @property { EventTwilioEdge } [edge]
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
export interface EventListInstanceEachOptions {
    edge?: EventTwilioEdge;
    pageSize?: number;
    callback?: (item: EventInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { EventTwilioEdge } [edge]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface EventListInstanceOptions {
    edge?: EventTwilioEdge;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { EventTwilioEdge } [edge]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface EventListInstancePageOptions {
    edge?: EventTwilioEdge;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface EventListInstance {
    /**
     * Streams EventInstance records from the API.
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
    each(callback?: (item: EventInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams EventInstance records from the API.
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
     * @param { EventListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: EventListInstanceEachOptions, callback?: (item: EventInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of EventInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
    /**
     * Retrieve a single target page of EventInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
    getPage(params?: any, callback?: any): Promise<EventPage>;
    /**
     * Lists EventInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: EventInstance[]) => any): Promise<EventInstance[]>;
    /**
     * Lists EventInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EventListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: EventListInstanceOptions, callback?: (error: Error | null, items: EventInstance[]) => any): Promise<EventInstance[]>;
    list(params?: any, callback?: any): Promise<EventInstance[]>;
    /**
     * Retrieve a single page of EventInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
    /**
     * Retrieve a single page of EventInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EventListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: EventListInstancePageOptions, callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
    page(params?: any, callback?: any): Promise<EventPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EventSolution {
    callSid?: string;
}
export declare function EventListInstance(version: V1, callSid: string): EventListInstance;
interface EventPayload extends TwilioResponsePayload {
    events: EventResource[];
}
interface EventResource {
    timestamp?: string | null;
    call_sid?: string | null;
    account_sid?: string | null;
    edge?: EventTwilioEdge;
    group?: string | null;
    level?: EventLevel;
    name?: string | null;
    carrier_edge?: any | null;
    sip_edge?: any | null;
    sdk_edge?: any | null;
    client_edge?: any | null;
}
export declare class EventInstance {
    protected _version: V1;
    constructor(_version: V1, payload: EventResource, callSid: string);
    timestamp?: string | null;
    callSid?: string | null;
    accountSid?: string | null;
    edge?: EventTwilioEdge;
    group?: string | null;
    level?: EventLevel;
    name?: string | null;
    carrierEdge?: any | null;
    sipEdge?: any | null;
    sdkEdge?: any | null;
    clientEdge?: any | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        timestamp: string | null | undefined;
        callSid: string | null | undefined;
        accountSid: string | null | undefined;
        edge: EventTwilioEdge | undefined;
        group: string | null | undefined;
        level: EventLevel | undefined;
        name: string | null | undefined;
        carrierEdge: any;
        sipEdge: any;
        sdkEdge: any;
        clientEdge: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class EventPage extends Page<V1, EventPayload, EventResource, EventInstance> {
    /**
     * Initialize the EventPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: EventSolution);
    /**
     * Build an instance of EventInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: EventResource): EventInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
