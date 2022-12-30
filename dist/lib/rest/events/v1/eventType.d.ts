/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to each
 *
 * @property { string } [schemaId] A string parameter filtering the results to return only the Event Types using a given schema.
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
export interface EventTypeListInstanceEachOptions {
    schemaId?: string;
    pageSize?: number;
    callback?: (item: EventTypeInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [schemaId] A string parameter filtering the results to return only the Event Types using a given schema.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface EventTypeListInstanceOptions {
    schemaId?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [schemaId] A string parameter filtering the results to return only the Event Types using a given schema.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface EventTypeListInstancePageOptions {
    schemaId?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface EventTypeContext {
    /**
     * Fetch a EventTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EventTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: EventTypeInstance) => any): Promise<EventTypeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EventTypeContextSolution {
    type?: string;
}
export declare class EventTypeContextImpl implements EventTypeContext {
    protected _version: V1;
    protected _solution: EventTypeContextSolution;
    protected _uri: string;
    constructor(_version: V1, type: string);
    fetch(callback?: any): Promise<EventTypeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): EventTypeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface EventTypePayload extends TwilioResponsePayload {
    types: EventTypeResource[];
}
interface EventTypeResource {
    type?: string | null;
    schema_id?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    description?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class EventTypeInstance {
    protected _version: V1;
    protected _solution: EventTypeContextSolution;
    protected _context?: EventTypeContext;
    constructor(_version: V1, payload: EventTypeResource, type?: string);
    /**
     * The Event Type identifier.
     */
    type?: string | null;
    /**
     * The Schema identifier for this Event Type.
     */
    schemaId?: string | null;
    /**
     * The date this Event Type was created.
     */
    dateCreated?: Date | null;
    /**
     * The date this Event Type was updated.
     */
    dateUpdated?: Date | null;
    /**
     * Event Type description.
     */
    description?: string | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a EventTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EventTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: EventTypeInstance) => any): Promise<EventTypeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        type: string | null | undefined;
        schemaId: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        description: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface EventTypeListInstance {
    (type: string): EventTypeContext;
    get(type: string): EventTypeContext;
    /**
     * Streams EventTypeInstance records from the API.
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
    each(callback?: (item: EventTypeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams EventTypeInstance records from the API.
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
     * @param { EventTypeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: EventTypeListInstanceEachOptions, callback?: (item: EventTypeInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of EventTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: EventTypePage) => any): Promise<EventTypePage>;
    /**
     * Retrieve a single target page of EventTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: EventTypePage) => any): Promise<EventTypePage>;
    getPage(params?: any, callback?: any): Promise<EventTypePage>;
    /**
     * Lists EventTypeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: EventTypeInstance[]) => any): Promise<EventTypeInstance[]>;
    /**
     * Lists EventTypeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EventTypeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: EventTypeListInstanceOptions, callback?: (error: Error | null, items: EventTypeInstance[]) => any): Promise<EventTypeInstance[]>;
    list(params?: any, callback?: any): Promise<EventTypeInstance[]>;
    /**
     * Retrieve a single page of EventTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: EventTypePage) => any): Promise<EventTypePage>;
    /**
     * Retrieve a single page of EventTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EventTypeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: EventTypeListInstancePageOptions, callback?: (error: Error | null, items: EventTypePage) => any): Promise<EventTypePage>;
    page(params?: any, callback?: any): Promise<EventTypePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EventTypeSolution {
}
export declare function EventTypeListInstance(version: V1): EventTypeListInstance;
export declare class EventTypePage extends Page<V1, EventTypePayload, EventTypeResource, EventTypeInstance> {
    /**
     * Initialize the EventTypePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: EventTypeSolution);
    /**
     * Build an instance of EventTypeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: EventTypeResource): EventTypeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
