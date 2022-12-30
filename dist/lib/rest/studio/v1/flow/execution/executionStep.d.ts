/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
import { ExecutionStepContextListInstance } from "./executionStep/executionStepContext";
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
export interface ExecutionStepListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ExecutionStepInstance, done: (err?: Error) => void) => void;
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
export interface ExecutionStepListInstanceOptions {
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
export interface ExecutionStepListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ExecutionStepContext {
    stepContext: ExecutionStepContextListInstance;
    /**
     * Fetch a ExecutionStepInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionStepInstance
     */
    fetch(callback?: (error: Error | null, item?: ExecutionStepInstance) => any): Promise<ExecutionStepInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExecutionStepContextSolution {
    flowSid?: string;
    executionSid?: string;
    sid?: string;
}
export declare class ExecutionStepContextImpl implements ExecutionStepContext {
    protected _version: V1;
    protected _solution: ExecutionStepContextSolution;
    protected _uri: string;
    protected _stepContext?: ExecutionStepContextListInstance;
    constructor(_version: V1, flowSid: string, executionSid: string, sid: string);
    get stepContext(): ExecutionStepContextListInstance;
    fetch(callback?: any): Promise<ExecutionStepInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ExecutionStepContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ExecutionStepPayload extends TwilioResponsePayload {
    steps: ExecutionStepResource[];
}
interface ExecutionStepResource {
    sid?: string | null;
    account_sid?: string | null;
    flow_sid?: string | null;
    execution_sid?: string | null;
    name?: string | null;
    context?: any | null;
    transitioned_from?: string | null;
    transitioned_to?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class ExecutionStepInstance {
    protected _version: V1;
    protected _solution: ExecutionStepContextSolution;
    protected _context?: ExecutionStepContext;
    constructor(_version: V1, payload: ExecutionStepResource, flowSid: string, executionSid: string, sid?: string);
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
     * The SID of the Execution
     */
    executionSid?: string | null;
    /**
     * The event that caused the Flow to transition to the Step
     */
    name?: string | null;
    /**
     * The current state of the flow
     */
    context?: any | null;
    /**
     * The Widget that preceded the Widget for the Step
     */
    transitionedFrom?: string | null;
    /**
     * The Widget that will follow the Widget for the Step
     */
    transitionedTo?: string | null;
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
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a ExecutionStepInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionStepInstance
     */
    fetch(callback?: (error: Error | null, item?: ExecutionStepInstance) => any): Promise<ExecutionStepInstance>;
    /**
     * Access the stepContext.
     */
    stepContext(): ExecutionStepContextListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        flowSid: string | null | undefined;
        executionSid: string | null | undefined;
        name: string | null | undefined;
        context: any;
        transitionedFrom: string | null | undefined;
        transitionedTo: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ExecutionStepListInstance {
    (sid: string): ExecutionStepContext;
    get(sid: string): ExecutionStepContext;
    /**
     * Streams ExecutionStepInstance records from the API.
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
    each(callback?: (item: ExecutionStepInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ExecutionStepInstance records from the API.
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
     * @param { ExecutionStepListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ExecutionStepListInstanceEachOptions, callback?: (item: ExecutionStepInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ExecutionStepInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ExecutionStepPage) => any): Promise<ExecutionStepPage>;
    /**
     * Retrieve a single target page of ExecutionStepInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ExecutionStepPage) => any): Promise<ExecutionStepPage>;
    getPage(params?: any, callback?: any): Promise<ExecutionStepPage>;
    /**
     * Lists ExecutionStepInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ExecutionStepInstance[]) => any): Promise<ExecutionStepInstance[]>;
    /**
     * Lists ExecutionStepInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ExecutionStepListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ExecutionStepListInstanceOptions, callback?: (error: Error | null, items: ExecutionStepInstance[]) => any): Promise<ExecutionStepInstance[]>;
    list(params?: any, callback?: any): Promise<ExecutionStepInstance[]>;
    /**
     * Retrieve a single page of ExecutionStepInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ExecutionStepPage) => any): Promise<ExecutionStepPage>;
    /**
     * Retrieve a single page of ExecutionStepInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ExecutionStepListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ExecutionStepListInstancePageOptions, callback?: (error: Error | null, items: ExecutionStepPage) => any): Promise<ExecutionStepPage>;
    page(params?: any, callback?: any): Promise<ExecutionStepPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExecutionStepSolution {
    flowSid?: string;
    executionSid?: string;
}
export declare function ExecutionStepListInstance(version: V1, flowSid: string, executionSid: string): ExecutionStepListInstance;
export declare class ExecutionStepPage extends Page<V1, ExecutionStepPayload, ExecutionStepResource, ExecutionStepInstance> {
    /**
     * Initialize the ExecutionStepPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ExecutionStepSolution);
    /**
     * Build an instance of ExecutionStepInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ExecutionStepResource): ExecutionStepInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
