/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to each
 *
 * @property { string } [actorSid] Only include events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials.
 * @property { string } [eventType] Only include events of this [Event Type](https://www.twilio.com/docs/usage/monitor-events#event-types).
 * @property { string } [resourceSid] Only include events that refer to this resource. Useful for discovering the history of a specific resource.
 * @property { string } [sourceIpAddress] Only include events that originated from this IP address. Useful for tracking suspicious activity originating from the API or the Twilio Console.
 * @property { Date } [startDate] Only include events that occurred on or after this date. Specify the date in GMT and [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only include events that occurred on or before this date. Specify the date in GMT and [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
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
    actorSid?: string;
    eventType?: string;
    resourceSid?: string;
    sourceIpAddress?: string;
    startDate?: Date;
    endDate?: Date;
    pageSize?: number;
    callback?: (item: EventInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [actorSid] Only include events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials.
 * @property { string } [eventType] Only include events of this [Event Type](https://www.twilio.com/docs/usage/monitor-events#event-types).
 * @property { string } [resourceSid] Only include events that refer to this resource. Useful for discovering the history of a specific resource.
 * @property { string } [sourceIpAddress] Only include events that originated from this IP address. Useful for tracking suspicious activity originating from the API or the Twilio Console.
 * @property { Date } [startDate] Only include events that occurred on or after this date. Specify the date in GMT and [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only include events that occurred on or before this date. Specify the date in GMT and [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface EventListInstanceOptions {
    actorSid?: string;
    eventType?: string;
    resourceSid?: string;
    sourceIpAddress?: string;
    startDate?: Date;
    endDate?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [actorSid] Only include events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials.
 * @property { string } [eventType] Only include events of this [Event Type](https://www.twilio.com/docs/usage/monitor-events#event-types).
 * @property { string } [resourceSid] Only include events that refer to this resource. Useful for discovering the history of a specific resource.
 * @property { string } [sourceIpAddress] Only include events that originated from this IP address. Useful for tracking suspicious activity originating from the API or the Twilio Console.
 * @property { Date } [startDate] Only include events that occurred on or after this date. Specify the date in GMT and [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only include events that occurred on or before this date. Specify the date in GMT and [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface EventListInstancePageOptions {
    actorSid?: string;
    eventType?: string;
    resourceSid?: string;
    sourceIpAddress?: string;
    startDate?: Date;
    endDate?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface EventContext {
    /**
     * Fetch a EventInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EventInstance
     */
    fetch(callback?: (error: Error | null, item?: EventInstance) => any): Promise<EventInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EventContextSolution {
    sid?: string;
}
export declare class EventContextImpl implements EventContext {
    protected _version: V1;
    protected _solution: EventContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<EventInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): EventContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface EventPayload extends TwilioResponsePayload {
    events: EventResource[];
}
interface EventResource {
    account_sid?: string | null;
    actor_sid?: string | null;
    actor_type?: string | null;
    description?: string | null;
    event_data?: any | null;
    event_date?: Date | null;
    event_type?: string | null;
    resource_sid?: string | null;
    resource_type?: string | null;
    sid?: string | null;
    source?: string | null;
    source_ip_address?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class EventInstance {
    protected _version: V1;
    protected _solution: EventContextSolution;
    protected _context?: EventContext;
    constructor(_version: V1, payload: EventResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the actor that caused the event, if available
     */
    actorSid?: string | null;
    /**
     * The type of actor that caused the event
     */
    actorType?: string | null;
    /**
     * A description of the event
     */
    description?: string | null;
    /**
     * A JSON string that represents an object with additional data about the event
     */
    eventData?: any | null;
    /**
     * The ISO 8601 date and time in GMT when the event was recorded
     */
    eventDate?: Date | null;
    /**
     * The event\'s type
     */
    eventType?: string | null;
    /**
     * The SID of the resource that was affected
     */
    resourceSid?: string | null;
    /**
     * The type of resource that was affected
     */
    resourceType?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The originating system or interface that caused the event
     */
    source?: string | null;
    /**
     * The IP address of the source
     */
    sourceIpAddress?: string | null;
    /**
     * The absolute URL of the resource that was affected
     */
    url?: string | null;
    /**
     * The absolute URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a EventInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EventInstance
     */
    fetch(callback?: (error: Error | null, item?: EventInstance) => any): Promise<EventInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        actorSid: string | null | undefined;
        actorType: string | null | undefined;
        description: string | null | undefined;
        eventData: any;
        eventDate: Date | null | undefined;
        eventType: string | null | undefined;
        resourceSid: string | null | undefined;
        resourceType: string | null | undefined;
        sid: string | null | undefined;
        source: string | null | undefined;
        sourceIpAddress: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface EventListInstance {
    (sid: string): EventContext;
    get(sid: string): EventContext;
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
}
export declare function EventListInstance(version: V1): EventListInstance;
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
