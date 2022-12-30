/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
import { ExecutionListInstance } from "./flow/execution";
import { FlowRevisionListInstance } from "./flow/flowRevision";
import { FlowTestUserListInstance } from "./flow/flowTestUser";
declare type FlowStatus = "draft" | "published";
/**
 * Options to pass to update a FlowInstance
 *
 * @property { FlowStatus } status
 * @property { string } [friendlyName] The string that you assigned to describe the Flow.
 * @property { any } [definition] JSON representation of flow definition.
 * @property { string } [commitMessage] Description of change made in the revision.
 */
export interface FlowContextUpdateOptions {
    status: FlowStatus;
    friendlyName?: string;
    definition?: any;
    commitMessage?: string;
}
/**
 * Options to pass to create a FlowInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the Flow.
 * @property { FlowStatus } status
 * @property { any } definition JSON representation of flow definition.
 * @property { string } [commitMessage] Description of change made in the revision.
 */
export interface FlowListInstanceCreateOptions {
    friendlyName: string;
    status: FlowStatus;
    definition: any;
    commitMessage?: string;
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
export interface FlowListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: FlowInstance, done: (err?: Error) => void) => void;
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
export interface FlowListInstanceOptions {
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
export interface FlowListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FlowContext {
    executions: ExecutionListInstance;
    revisions: FlowRevisionListInstance;
    testUsers: FlowTestUserListInstance;
    /**
     * Remove a FlowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FlowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowInstance
     */
    fetch(callback?: (error: Error | null, item?: FlowInstance) => any): Promise<FlowInstance>;
    /**
     * Update a FlowInstance
     *
     * @param { FlowContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowInstance
     */
    update(params: FlowContextUpdateOptions, callback?: (error: Error | null, item?: FlowInstance) => any): Promise<FlowInstance>;
    update(params: any, callback?: any): Promise<FlowInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FlowContextSolution {
    sid?: string;
}
export declare class FlowContextImpl implements FlowContext {
    protected _version: V2;
    protected _solution: FlowContextSolution;
    protected _uri: string;
    protected _executions?: ExecutionListInstance;
    protected _revisions?: FlowRevisionListInstance;
    protected _testUsers?: FlowTestUserListInstance;
    constructor(_version: V2, sid: string);
    get executions(): ExecutionListInstance;
    get revisions(): FlowRevisionListInstance;
    get testUsers(): FlowTestUserListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<FlowInstance>;
    update(params: any, callback?: any): Promise<FlowInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FlowContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FlowPayload extends TwilioResponsePayload {
    flows: FlowResource[];
}
interface FlowResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    definition?: any | null;
    status?: FlowStatus;
    revision?: number | null;
    commit_message?: string | null;
    valid?: boolean | null;
    errors?: Array<any> | null;
    warnings?: Array<any> | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    webhook_url?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class FlowInstance {
    protected _version: V2;
    protected _solution: FlowContextSolution;
    protected _context?: FlowContext;
    constructor(_version: V2, payload: FlowResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the Flow
     */
    friendlyName?: string | null;
    /**
     * JSON representation of flow definition
     */
    definition?: any | null;
    status?: FlowStatus;
    /**
     * The latest revision number of the Flow\'s definition
     */
    revision?: number | null;
    /**
     * Description of change made in the revision
     */
    commitMessage?: string | null;
    /**
     * Boolean if the flow definition is valid
     */
    valid?: boolean | null;
    /**
     * List of error in the flow definition
     */
    errors?: Array<any> | null;
    /**
     * List of warnings in the flow definition
     */
    warnings?: Array<any> | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    webhookUrl?: string | null;
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
     * Remove a FlowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FlowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowInstance
     */
    fetch(callback?: (error: Error | null, item?: FlowInstance) => any): Promise<FlowInstance>;
    /**
     * Update a FlowInstance
     *
     * @param { FlowContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowInstance
     */
    update(params: FlowContextUpdateOptions, callback?: (error: Error | null, item?: FlowInstance) => any): Promise<FlowInstance>;
    /**
     * Access the executions.
     */
    executions(): ExecutionListInstance;
    /**
     * Access the revisions.
     */
    revisions(): FlowRevisionListInstance;
    /**
     * Access the testUsers.
     */
    testUsers(): FlowTestUserListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        definition: any;
        status: FlowStatus | undefined;
        revision: number | null | undefined;
        commitMessage: string | null | undefined;
        valid: boolean | null | undefined;
        errors: any[] | null | undefined;
        warnings: any[] | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        webhookUrl: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FlowListInstance {
    (sid: string): FlowContext;
    get(sid: string): FlowContext;
    /**
     * Create a FlowInstance
     *
     * @param { FlowListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowInstance
     */
    create(params: FlowListInstanceCreateOptions, callback?: (error: Error | null, item?: FlowInstance) => any): Promise<FlowInstance>;
    create(params: any, callback?: any): Promise<FlowInstance>;
    /**
     * Streams FlowInstance records from the API.
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
    each(callback?: (item: FlowInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FlowInstance records from the API.
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
     * @param { FlowListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FlowListInstanceEachOptions, callback?: (item: FlowInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FlowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FlowPage) => any): Promise<FlowPage>;
    /**
     * Retrieve a single target page of FlowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FlowPage) => any): Promise<FlowPage>;
    getPage(params?: any, callback?: any): Promise<FlowPage>;
    /**
     * Lists FlowInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FlowInstance[]) => any): Promise<FlowInstance[]>;
    /**
     * Lists FlowInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FlowListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FlowListInstanceOptions, callback?: (error: Error | null, items: FlowInstance[]) => any): Promise<FlowInstance[]>;
    list(params?: any, callback?: any): Promise<FlowInstance[]>;
    /**
     * Retrieve a single page of FlowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FlowPage) => any): Promise<FlowPage>;
    /**
     * Retrieve a single page of FlowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FlowListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FlowListInstancePageOptions, callback?: (error: Error | null, items: FlowPage) => any): Promise<FlowPage>;
    page(params?: any, callback?: any): Promise<FlowPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FlowSolution {
}
export declare function FlowListInstance(version: V2): FlowListInstance;
export declare class FlowPage extends Page<V2, FlowPayload, FlowResource, FlowInstance> {
    /**
     * Initialize the FlowPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: FlowSolution);
    /**
     * Build an instance of FlowInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FlowResource): FlowInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
