/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to each
 *
 * @property { Date } [endDate] Only include Events that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [eventType] The type of Events to read. Returns only Events of the type specified.
 * @property { number } [minutes] The period of events to read in minutes. Returns only Events that occurred since this many minutes in the past. The default is `15` minutes. Task Attributes for Events occuring more 43,200 minutes ago will be redacted.
 * @property { string } [reservationSid] The SID of the Reservation with the Events to read. Returns only Events that pertain to the specified Reservation.
 * @property { Date } [startDate] Only include Events from on or after this date and time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Task Attributes for Events older than 30 days will be redacted.
 * @property { string } [taskQueueSid] The SID of the TaskQueue with the Events to read. Returns only the Events that pertain to the specified TaskQueue.
 * @property { string } [taskSid] The SID of the Task with the Events to read. Returns only the Events that pertain to the specified Task.
 * @property { string } [workerSid] The SID of the Worker with the Events to read. Returns only the Events that pertain to the specified Worker.
 * @property { string } [workflowSid] The SID of the Workflow with the Events to read. Returns only the Events that pertain to the specified Workflow.
 * @property { string } [taskChannel] The TaskChannel with the Events to read. Returns only the Events that pertain to the specified TaskChannel.
 * @property { string } [sid] The SID of the Event resource to read.
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
    endDate?: Date;
    eventType?: string;
    minutes?: number;
    reservationSid?: string;
    startDate?: Date;
    taskQueueSid?: string;
    taskSid?: string;
    workerSid?: string;
    workflowSid?: string;
    taskChannel?: string;
    sid?: string;
    pageSize?: number;
    callback?: (item: EventInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Date } [endDate] Only include Events that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [eventType] The type of Events to read. Returns only Events of the type specified.
 * @property { number } [minutes] The period of events to read in minutes. Returns only Events that occurred since this many minutes in the past. The default is `15` minutes. Task Attributes for Events occuring more 43,200 minutes ago will be redacted.
 * @property { string } [reservationSid] The SID of the Reservation with the Events to read. Returns only Events that pertain to the specified Reservation.
 * @property { Date } [startDate] Only include Events from on or after this date and time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Task Attributes for Events older than 30 days will be redacted.
 * @property { string } [taskQueueSid] The SID of the TaskQueue with the Events to read. Returns only the Events that pertain to the specified TaskQueue.
 * @property { string } [taskSid] The SID of the Task with the Events to read. Returns only the Events that pertain to the specified Task.
 * @property { string } [workerSid] The SID of the Worker with the Events to read. Returns only the Events that pertain to the specified Worker.
 * @property { string } [workflowSid] The SID of the Workflow with the Events to read. Returns only the Events that pertain to the specified Workflow.
 * @property { string } [taskChannel] The TaskChannel with the Events to read. Returns only the Events that pertain to the specified TaskChannel.
 * @property { string } [sid] The SID of the Event resource to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface EventListInstanceOptions {
    endDate?: Date;
    eventType?: string;
    minutes?: number;
    reservationSid?: string;
    startDate?: Date;
    taskQueueSid?: string;
    taskSid?: string;
    workerSid?: string;
    workflowSid?: string;
    taskChannel?: string;
    sid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Date } [endDate] Only include Events that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [eventType] The type of Events to read. Returns only Events of the type specified.
 * @property { number } [minutes] The period of events to read in minutes. Returns only Events that occurred since this many minutes in the past. The default is `15` minutes. Task Attributes for Events occuring more 43,200 minutes ago will be redacted.
 * @property { string } [reservationSid] The SID of the Reservation with the Events to read. Returns only Events that pertain to the specified Reservation.
 * @property { Date } [startDate] Only include Events from on or after this date and time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Task Attributes for Events older than 30 days will be redacted.
 * @property { string } [taskQueueSid] The SID of the TaskQueue with the Events to read. Returns only the Events that pertain to the specified TaskQueue.
 * @property { string } [taskSid] The SID of the Task with the Events to read. Returns only the Events that pertain to the specified Task.
 * @property { string } [workerSid] The SID of the Worker with the Events to read. Returns only the Events that pertain to the specified Worker.
 * @property { string } [workflowSid] The SID of the Workflow with the Events to read. Returns only the Events that pertain to the specified Workflow.
 * @property { string } [taskChannel] The TaskChannel with the Events to read. Returns only the Events that pertain to the specified TaskChannel.
 * @property { string } [sid] The SID of the Event resource to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface EventListInstancePageOptions {
    endDate?: Date;
    eventType?: string;
    minutes?: number;
    reservationSid?: string;
    startDate?: Date;
    taskQueueSid?: string;
    taskSid?: string;
    workerSid?: string;
    workflowSid?: string;
    taskChannel?: string;
    sid?: string;
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
    workspaceSid?: string;
    sid?: string;
}
export declare class EventContextImpl implements EventContext {
    protected _version: V1;
    protected _solution: EventContextSolution;
    protected _uri: string;
    constructor(_version: V1, workspaceSid: string, sid: string);
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
    actor_url?: string | null;
    description?: string | null;
    event_data?: any | null;
    event_date?: Date | null;
    event_date_ms?: number | null;
    event_type?: string | null;
    resource_sid?: string | null;
    resource_type?: string | null;
    resource_url?: string | null;
    sid?: string | null;
    source?: string | null;
    source_ip_address?: string | null;
    url?: string | null;
    workspace_sid?: string | null;
}
export declare class EventInstance {
    protected _version: V1;
    protected _solution: EventContextSolution;
    protected _context?: EventContext;
    constructor(_version: V1, payload: EventResource, workspaceSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the resource that triggered the event
     */
    actorSid?: string | null;
    /**
     * The type of resource that triggered the event
     */
    actorType?: string | null;
    /**
     * The absolute URL of the resource that triggered the event
     */
    actorUrl?: string | null;
    /**
     * A description of the event
     */
    description?: string | null;
    /**
     * Data about the event
     */
    eventData?: any | null;
    /**
     * The time the event was sent
     */
    eventDate?: Date | null;
    /**
     * The time the event was sent in milliseconds
     */
    eventDateMs?: number | null;
    /**
     * The identifier for the event
     */
    eventType?: string | null;
    /**
     * The SID of the object the event is most relevant to
     */
    resourceSid?: string | null;
    /**
     * The type of object the event is most relevant to
     */
    resourceType?: string | null;
    /**
     * The URL of the resource the event is most relevant to
     */
    resourceUrl?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * Where the Event originated
     */
    source?: string | null;
    /**
     * The IP from which the Event originated
     */
    sourceIpAddress?: string | null;
    /**
     * The absolute URL of the Event resource
     */
    url?: string | null;
    /**
     * The SID of the Workspace that contains the Event
     */
    workspaceSid?: string | null;
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
        actorUrl: string | null | undefined;
        description: string | null | undefined;
        eventData: any;
        eventDate: Date | null | undefined;
        eventDateMs: number | null | undefined;
        eventType: string | null | undefined;
        resourceSid: string | null | undefined;
        resourceType: string | null | undefined;
        resourceUrl: string | null | undefined;
        sid: string | null | undefined;
        source: string | null | undefined;
        sourceIpAddress: string | null | undefined;
        url: string | null | undefined;
        workspaceSid: string | null | undefined;
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
    workspaceSid?: string;
}
export declare function EventListInstance(version: V1, workspaceSid: string): EventListInstance;
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
