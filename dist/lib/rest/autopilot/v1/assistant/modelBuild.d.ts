/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type ModelBuildStatus = "enqueued" | "building" | "completed" | "failed" | "canceled";
/**
 * Options to pass to update a ModelBuildInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource.
 */
export interface ModelBuildContextUpdateOptions {
    uniqueName?: string;
}
/**
 * Options to pass to create a ModelBuildInstance
 *
 * @property { string } [statusCallback] The URL we should call using a POST method to send status information to your application.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the new resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource.
 */
export interface ModelBuildListInstanceCreateOptions {
    statusCallback?: string;
    uniqueName?: string;
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
export interface ModelBuildListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void;
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
export interface ModelBuildListInstanceOptions {
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
export interface ModelBuildListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ModelBuildContext {
    /**
     * Remove a ModelBuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ModelBuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ModelBuildInstance
     */
    fetch(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Update a ModelBuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ModelBuildInstance
     */
    update(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Update a ModelBuildInstance
     *
     * @param { ModelBuildContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ModelBuildInstance
     */
    update(params: ModelBuildContextUpdateOptions, callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    update(params?: any, callback?: any): Promise<ModelBuildInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ModelBuildContextSolution {
    assistantSid?: string;
    sid?: string;
}
export declare class ModelBuildContextImpl implements ModelBuildContext {
    protected _version: V1;
    protected _solution: ModelBuildContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ModelBuildInstance>;
    update(params?: any, callback?: any): Promise<ModelBuildInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ModelBuildContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ModelBuildPayload extends TwilioResponsePayload {
    model_builds: ModelBuildResource[];
}
interface ModelBuildResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    assistant_sid?: string | null;
    sid?: string | null;
    status?: ModelBuildStatus;
    unique_name?: string | null;
    url?: string | null;
    build_duration?: number | null;
    error_code?: number | null;
}
export declare class ModelBuildInstance {
    protected _version: V1;
    protected _solution: ModelBuildContextSolution;
    protected _context?: ModelBuildContext;
    constructor(_version: V1, payload: ModelBuildResource, assistantSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The SID of the Assistant that is the parent of the resource
     */
    assistantSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    status?: ModelBuildStatus;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The absolute URL of the ModelBuild resource
     */
    url?: string | null;
    /**
     * The time in seconds it took to build the model
     */
    buildDuration?: number | null;
    /**
     * More information about why the model build failed, if `status` is `failed`
     */
    errorCode?: number | null;
    private get _proxy();
    /**
     * Remove a ModelBuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ModelBuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ModelBuildInstance
     */
    fetch(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Update a ModelBuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ModelBuildInstance
     */
    update(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Update a ModelBuildInstance
     *
     * @param { ModelBuildContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ModelBuildInstance
     */
    update(params: ModelBuildContextUpdateOptions, callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        assistantSid: string | null | undefined;
        sid: string | null | undefined;
        status: ModelBuildStatus | undefined;
        uniqueName: string | null | undefined;
        url: string | null | undefined;
        buildDuration: number | null | undefined;
        errorCode: number | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ModelBuildListInstance {
    (sid: string): ModelBuildContext;
    get(sid: string): ModelBuildContext;
    /**
     * Create a ModelBuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ModelBuildInstance
     */
    create(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Create a ModelBuildInstance
     *
     * @param { ModelBuildListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ModelBuildInstance
     */
    create(params: ModelBuildListInstanceCreateOptions, callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    create(params?: any, callback?: any): Promise<ModelBuildInstance>;
    /**
     * Streams ModelBuildInstance records from the API.
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
    each(callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ModelBuildInstance records from the API.
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
     * @param { ModelBuildListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ModelBuildListInstanceEachOptions, callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ModelBuildInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ModelBuildPage) => any): Promise<ModelBuildPage>;
    /**
     * Retrieve a single target page of ModelBuildInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ModelBuildPage) => any): Promise<ModelBuildPage>;
    getPage(params?: any, callback?: any): Promise<ModelBuildPage>;
    /**
     * Lists ModelBuildInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ModelBuildInstance[]) => any): Promise<ModelBuildInstance[]>;
    /**
     * Lists ModelBuildInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ModelBuildListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ModelBuildListInstanceOptions, callback?: (error: Error | null, items: ModelBuildInstance[]) => any): Promise<ModelBuildInstance[]>;
    list(params?: any, callback?: any): Promise<ModelBuildInstance[]>;
    /**
     * Retrieve a single page of ModelBuildInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ModelBuildPage) => any): Promise<ModelBuildPage>;
    /**
     * Retrieve a single page of ModelBuildInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ModelBuildListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ModelBuildListInstancePageOptions, callback?: (error: Error | null, items: ModelBuildPage) => any): Promise<ModelBuildPage>;
    page(params?: any, callback?: any): Promise<ModelBuildPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ModelBuildSolution {
    assistantSid?: string;
}
export declare function ModelBuildListInstance(version: V1, assistantSid: string): ModelBuildListInstance;
export declare class ModelBuildPage extends Page<V1, ModelBuildPayload, ModelBuildResource, ModelBuildInstance> {
    /**
     * Initialize the ModelBuildPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ModelBuildSolution);
    /**
     * Build an instance of ModelBuildInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ModelBuildResource): ModelBuildInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
