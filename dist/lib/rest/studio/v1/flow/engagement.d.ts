/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { EngagementContextListInstance } from "./engagement/engagementContext";
import { StepListInstance } from "./engagement/step";
declare type EngagementStatus = "active" | "ended";
/**
 * Options to pass to create a EngagementInstance
 *
 * @property { string } to The Contact phone number to start a Studio Flow Engagement, available as variable `{{contact.channel.address}}`.
 * @property { string } from The Twilio phone number to send messages or initiate calls from during the Flow Engagement. Available as variable `{{flow.channel.address}}`
 * @property { any } [parameters] A JSON string we will add to your flow\\\'s context and that you can access as variables inside your flow. For example, if you pass in `Parameters={\\\'name\\\':\\\'Zeke\\\'}` then inside a widget you can reference the variable `{{flow.data.name}}` which will return the string \\\'Zeke\\\'. Note: the JSON value must explicitly be passed as a string, not as a hash object. Depending on your particular HTTP library, you may need to add quotes or URL encode your JSON string.
 */
export interface EngagementListInstanceCreateOptions {
    to: string;
    from: string;
    parameters?: any;
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
export interface EngagementListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: EngagementInstance, done: (err?: Error) => void) => void;
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
export interface EngagementListInstanceOptions {
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
export interface EngagementListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface EngagementContext {
    engagementContext: EngagementContextListInstance;
    steps: StepListInstance;
    /**
     * Remove a EngagementInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a EngagementInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EngagementInstance
     */
    fetch(callback?: (error: Error | null, item?: EngagementInstance) => any): Promise<EngagementInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EngagementContextSolution {
    flowSid?: string;
    sid?: string;
}
export declare class EngagementContextImpl implements EngagementContext {
    protected _version: V1;
    protected _solution: EngagementContextSolution;
    protected _uri: string;
    protected _engagementContext?: EngagementContextListInstance;
    protected _steps?: StepListInstance;
    constructor(_version: V1, flowSid: string, sid: string);
    get engagementContext(): EngagementContextListInstance;
    get steps(): StepListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<EngagementInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): EngagementContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface EngagementPayload extends TwilioResponsePayload {
    engagements: EngagementResource[];
}
interface EngagementResource {
    sid?: string | null;
    account_sid?: string | null;
    flow_sid?: string | null;
    contact_sid?: string | null;
    contact_channel_address?: string | null;
    context?: any | null;
    status?: EngagementStatus;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class EngagementInstance {
    protected _version: V1;
    protected _solution: EngagementContextSolution;
    protected _context?: EngagementContext;
    constructor(_version: V1, payload: EngagementResource, flowSid: string, sid?: string);
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
     * The SID of the Contact
     */
    contactSid?: string | null;
    /**
     * The phone number, SIP address or Client identifier that triggered this Engagement
     */
    contactChannelAddress?: string | null;
    /**
     * The current state of the execution flow
     */
    context?: any | null;
    status?: EngagementStatus;
    /**
     * The ISO 8601 date and time in GMT when the Engagement was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Engagement was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The URLs of the Engagement\'s nested resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a EngagementInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a EngagementInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EngagementInstance
     */
    fetch(callback?: (error: Error | null, item?: EngagementInstance) => any): Promise<EngagementInstance>;
    /**
     * Access the engagementContext.
     */
    engagementContext(): EngagementContextListInstance;
    /**
     * Access the steps.
     */
    steps(): StepListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        flowSid: string | null | undefined;
        contactSid: string | null | undefined;
        contactChannelAddress: string | null | undefined;
        context: any;
        status: EngagementStatus | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface EngagementListInstance {
    (sid: string): EngagementContext;
    get(sid: string): EngagementContext;
    /**
     * Create a EngagementInstance
     *
     * @param { EngagementListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EngagementInstance
     */
    create(params: EngagementListInstanceCreateOptions, callback?: (error: Error | null, item?: EngagementInstance) => any): Promise<EngagementInstance>;
    create(params: any, callback?: any): Promise<EngagementInstance>;
    /**
     * Streams EngagementInstance records from the API.
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
    each(callback?: (item: EngagementInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams EngagementInstance records from the API.
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
     * @param { EngagementListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: EngagementListInstanceEachOptions, callback?: (item: EngagementInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of EngagementInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: EngagementPage) => any): Promise<EngagementPage>;
    /**
     * Retrieve a single target page of EngagementInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: EngagementPage) => any): Promise<EngagementPage>;
    getPage(params?: any, callback?: any): Promise<EngagementPage>;
    /**
     * Lists EngagementInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: EngagementInstance[]) => any): Promise<EngagementInstance[]>;
    /**
     * Lists EngagementInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EngagementListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: EngagementListInstanceOptions, callback?: (error: Error | null, items: EngagementInstance[]) => any): Promise<EngagementInstance[]>;
    list(params?: any, callback?: any): Promise<EngagementInstance[]>;
    /**
     * Retrieve a single page of EngagementInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: EngagementPage) => any): Promise<EngagementPage>;
    /**
     * Retrieve a single page of EngagementInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EngagementListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: EngagementListInstancePageOptions, callback?: (error: Error | null, items: EngagementPage) => any): Promise<EngagementPage>;
    page(params?: any, callback?: any): Promise<EngagementPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EngagementSolution {
    flowSid?: string;
}
export declare function EngagementListInstance(version: V1, flowSid: string): EngagementListInstance;
export declare class EngagementPage extends Page<V1, EngagementPayload, EngagementResource, EngagementInstance> {
    /**
     * Initialize the EngagementPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: EngagementSolution);
    /**
     * Build an instance of EngagementInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: EngagementResource): EngagementInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
