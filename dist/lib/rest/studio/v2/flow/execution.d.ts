/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
import { ExecutionContextListInstance } from "./execution/executionContext";
import { ExecutionStepListInstance } from "./execution/executionStep";
declare type ExecutionStatus = "active" | "ended";
/**
 * Options to pass to update a ExecutionInstance
 *
 * @property { ExecutionStatus } status
 */
export interface ExecutionContextUpdateOptions {
    status: ExecutionStatus;
}
/**
 * Options to pass to create a ExecutionInstance
 *
 * @property { string } to The Contact phone number to start a Studio Flow Execution, available as variable `{{contact.channel.address}}`.
 * @property { string } from The Twilio phone number to send messages or initiate calls from during the Flow\\\'s Execution. Available as variable `{{flow.channel.address}}`. For SMS, this can also be a Messaging Service SID.
 * @property { any } [parameters] JSON data that will be added to the Flow\\\'s context and that can be accessed as variables inside your Flow. For example, if you pass in `Parameters={\\\"name\\\":\\\"Zeke\\\"}`, a widget in your Flow can reference the variable `{{flow.data.name}}`, which returns \\\"Zeke\\\". Note: the JSON value must explicitly be passed as a string, not as a hash object. Depending on your particular HTTP library, you may need to add quotes or URL encode the JSON string.
 */
export interface ExecutionListInstanceCreateOptions {
    to: string;
    from: string;
    parameters?: any;
}
/**
 * Options to pass to each
 *
 * @property { Date } [dateCreatedFrom] Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
 * @property { Date } [dateCreatedTo] Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
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
export interface ExecutionListInstanceEachOptions {
    dateCreatedFrom?: Date;
    dateCreatedTo?: Date;
    pageSize?: number;
    callback?: (item: ExecutionInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Date } [dateCreatedFrom] Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
 * @property { Date } [dateCreatedTo] Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ExecutionListInstanceOptions {
    dateCreatedFrom?: Date;
    dateCreatedTo?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Date } [dateCreatedFrom] Only show Execution resources starting on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
 * @property { Date } [dateCreatedTo] Only show Execution resources starting before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as `YYYY-MM-DDThh:mm:ss-hh:mm`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ExecutionListInstancePageOptions {
    dateCreatedFrom?: Date;
    dateCreatedTo?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ExecutionContext {
    executionContext: ExecutionContextListInstance;
    steps: ExecutionStepListInstance;
    /**
     * Remove a ExecutionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ExecutionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionInstance
     */
    fetch(callback?: (error: Error | null, item?: ExecutionInstance) => any): Promise<ExecutionInstance>;
    /**
     * Update a ExecutionInstance
     *
     * @param { ExecutionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionInstance
     */
    update(params: ExecutionContextUpdateOptions, callback?: (error: Error | null, item?: ExecutionInstance) => any): Promise<ExecutionInstance>;
    update(params: any, callback?: any): Promise<ExecutionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExecutionContextSolution {
    flowSid?: string;
    sid?: string;
}
export declare class ExecutionContextImpl implements ExecutionContext {
    protected _version: V2;
    protected _solution: ExecutionContextSolution;
    protected _uri: string;
    protected _executionContext?: ExecutionContextListInstance;
    protected _steps?: ExecutionStepListInstance;
    constructor(_version: V2, flowSid: string, sid: string);
    get executionContext(): ExecutionContextListInstance;
    get steps(): ExecutionStepListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ExecutionInstance>;
    update(params: any, callback?: any): Promise<ExecutionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ExecutionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ExecutionPayload extends TwilioResponsePayload {
    executions: ExecutionResource[];
}
interface ExecutionResource {
    sid?: string | null;
    account_sid?: string | null;
    flow_sid?: string | null;
    contact_channel_address?: string | null;
    context?: any | null;
    status?: ExecutionStatus;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class ExecutionInstance {
    protected _version: V2;
    protected _solution: ExecutionContextSolution;
    protected _context?: ExecutionContext;
    constructor(_version: V2, payload: ExecutionResource, flowSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Flow
     */
    flowSid?: string | null;
    /**
     * The phone number, SIP address or Client identifier that triggered the Execution
     */
    contactChannelAddress?: string | null;
    /**
     * The current state of the flow
     */
    context?: any | null;
    status?: ExecutionStatus;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * Nested resource URLs
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a ExecutionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ExecutionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionInstance
     */
    fetch(callback?: (error: Error | null, item?: ExecutionInstance) => any): Promise<ExecutionInstance>;
    /**
     * Update a ExecutionInstance
     *
     * @param { ExecutionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionInstance
     */
    update(params: ExecutionContextUpdateOptions, callback?: (error: Error | null, item?: ExecutionInstance) => any): Promise<ExecutionInstance>;
    /**
     * Access the executionContext.
     */
    executionContext(): ExecutionContextListInstance;
    /**
     * Access the steps.
     */
    steps(): ExecutionStepListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        flowSid: string | null | undefined;
        contactChannelAddress: string | null | undefined;
        context: any;
        status: ExecutionStatus | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ExecutionListInstance {
    (sid: string): ExecutionContext;
    get(sid: string): ExecutionContext;
    /**
     * Create a ExecutionInstance
     *
     * @param { ExecutionListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionInstance
     */
    create(params: ExecutionListInstanceCreateOptions, callback?: (error: Error | null, item?: ExecutionInstance) => any): Promise<ExecutionInstance>;
    create(params: any, callback?: any): Promise<ExecutionInstance>;
    /**
     * Streams ExecutionInstance records from the API.
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
    each(callback?: (item: ExecutionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ExecutionInstance records from the API.
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
     * @param { ExecutionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ExecutionListInstanceEachOptions, callback?: (item: ExecutionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ExecutionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ExecutionPage) => any): Promise<ExecutionPage>;
    /**
     * Retrieve a single target page of ExecutionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ExecutionPage) => any): Promise<ExecutionPage>;
    getPage(params?: any, callback?: any): Promise<ExecutionPage>;
    /**
     * Lists ExecutionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ExecutionInstance[]) => any): Promise<ExecutionInstance[]>;
    /**
     * Lists ExecutionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ExecutionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ExecutionListInstanceOptions, callback?: (error: Error | null, items: ExecutionInstance[]) => any): Promise<ExecutionInstance[]>;
    list(params?: any, callback?: any): Promise<ExecutionInstance[]>;
    /**
     * Retrieve a single page of ExecutionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ExecutionPage) => any): Promise<ExecutionPage>;
    /**
     * Retrieve a single page of ExecutionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ExecutionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ExecutionListInstancePageOptions, callback?: (error: Error | null, items: ExecutionPage) => any): Promise<ExecutionPage>;
    page(params?: any, callback?: any): Promise<ExecutionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExecutionSolution {
    flowSid?: string;
}
export declare function ExecutionListInstance(version: V2, flowSid: string): ExecutionListInstance;
export declare class ExecutionPage extends Page<V2, ExecutionPayload, ExecutionResource, ExecutionInstance> {
    /**
     * Initialize the ExecutionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: ExecutionSolution);
    /**
     * Build an instance of ExecutionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ExecutionResource): ExecutionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
