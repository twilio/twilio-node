/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
import { StepContextListInstance } from "./step/stepContext";
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
export interface StepListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: StepInstance, done: (err?: Error) => void) => void;
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
export interface StepListInstanceOptions {
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
export interface StepListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface StepContext {
    stepContext: StepContextListInstance;
    /**
     * Fetch a StepInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StepInstance
     */
    fetch(callback?: (error: Error | null, item?: StepInstance) => any): Promise<StepInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface StepContextSolution {
    flowSid?: string;
    engagementSid?: string;
    sid?: string;
}
export declare class StepContextImpl implements StepContext {
    protected _version: V1;
    protected _solution: StepContextSolution;
    protected _uri: string;
    protected _stepContext?: StepContextListInstance;
    constructor(_version: V1, flowSid: string, engagementSid: string, sid: string);
    get stepContext(): StepContextListInstance;
    fetch(callback?: any): Promise<StepInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): StepContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface StepPayload extends TwilioResponsePayload {
    steps: StepResource[];
}
interface StepResource {
    sid?: string | null;
    account_sid?: string | null;
    flow_sid?: string | null;
    engagement_sid?: string | null;
    name?: string | null;
    context?: any | null;
    transitioned_from?: string | null;
    transitioned_to?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class StepInstance {
    protected _version: V1;
    protected _solution: StepContextSolution;
    protected _context?: StepContext;
    constructor(_version: V1, payload: StepResource, flowSid: string, engagementSid: string, sid?: string);
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
     * The SID of the Engagement
     */
    engagementSid?: string | null;
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
     * Fetch a StepInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StepInstance
     */
    fetch(callback?: (error: Error | null, item?: StepInstance) => any): Promise<StepInstance>;
    /**
     * Access the stepContext.
     */
    stepContext(): StepContextListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        flowSid: string | null | undefined;
        engagementSid: string | null | undefined;
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
export interface StepListInstance {
    (sid: string): StepContext;
    get(sid: string): StepContext;
    /**
     * Streams StepInstance records from the API.
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
    each(callback?: (item: StepInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams StepInstance records from the API.
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
     * @param { StepListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: StepListInstanceEachOptions, callback?: (item: StepInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of StepInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: StepPage) => any): Promise<StepPage>;
    /**
     * Retrieve a single target page of StepInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: StepPage) => any): Promise<StepPage>;
    getPage(params?: any, callback?: any): Promise<StepPage>;
    /**
     * Lists StepInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: StepInstance[]) => any): Promise<StepInstance[]>;
    /**
     * Lists StepInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { StepListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: StepListInstanceOptions, callback?: (error: Error | null, items: StepInstance[]) => any): Promise<StepInstance[]>;
    list(params?: any, callback?: any): Promise<StepInstance[]>;
    /**
     * Retrieve a single page of StepInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: StepPage) => any): Promise<StepPage>;
    /**
     * Retrieve a single page of StepInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { StepListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: StepListInstancePageOptions, callback?: (error: Error | null, items: StepPage) => any): Promise<StepPage>;
    page(params?: any, callback?: any): Promise<StepPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface StepSolution {
    flowSid?: string;
    engagementSid?: string;
}
export declare function StepListInstance(version: V1, flowSid: string, engagementSid: string): StepListInstance;
export declare class StepPage extends Page<V1, StepPayload, StepResource, StepInstance> {
    /**
     * Initialize the StepPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: StepSolution);
    /**
     * Build an instance of StepInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: StepResource): StepInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
