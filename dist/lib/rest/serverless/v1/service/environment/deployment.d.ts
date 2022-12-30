/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to create a DeploymentInstance
 *
 * @property { string } [buildSid] The SID of the Build for the Deployment.
 */
export interface DeploymentListInstanceCreateOptions {
    buildSid?: string;
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
export interface DeploymentListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void;
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
export interface DeploymentListInstanceOptions {
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
export interface DeploymentListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface DeploymentContext {
    /**
     * Fetch a DeploymentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    fetch(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeploymentContextSolution {
    serviceSid?: string;
    environmentSid?: string;
    sid?: string;
}
export declare class DeploymentContextImpl implements DeploymentContext {
    protected _version: V1;
    protected _solution: DeploymentContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, environmentSid: string, sid: string);
    fetch(callback?: any): Promise<DeploymentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DeploymentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DeploymentPayload extends TwilioResponsePayload {
    deployments: DeploymentResource[];
}
interface DeploymentResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    environment_sid?: string | null;
    build_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class DeploymentInstance {
    protected _version: V1;
    protected _solution: DeploymentContextSolution;
    protected _context?: DeploymentContext;
    constructor(_version: V1, payload: DeploymentResource, serviceSid: string, environmentSid: string, sid?: string);
    /**
     * The unique string that identifies the Deployment resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Deployment resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Deployment resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Environment for the Deployment
     */
    environmentSid?: string | null;
    /**
     * The SID of the Build for the deployment
     */
    buildSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the Deployment resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Deployment resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Deployment resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a DeploymentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    fetch(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        environmentSid: string | null | undefined;
        buildSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DeploymentListInstance {
    (sid: string): DeploymentContext;
    get(sid: string): DeploymentContext;
    /**
     * Create a DeploymentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    create(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    /**
     * Create a DeploymentInstance
     *
     * @param { DeploymentListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    create(params: DeploymentListInstanceCreateOptions, callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    create(params?: any, callback?: any): Promise<DeploymentInstance>;
    /**
     * Streams DeploymentInstance records from the API.
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
    each(callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams DeploymentInstance records from the API.
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
     * @param { DeploymentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: DeploymentListInstanceEachOptions, callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of DeploymentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
    /**
     * Retrieve a single target page of DeploymentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
    getPage(params?: any, callback?: any): Promise<DeploymentPage>;
    /**
     * Lists DeploymentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: DeploymentInstance[]) => any): Promise<DeploymentInstance[]>;
    /**
     * Lists DeploymentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DeploymentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: DeploymentListInstanceOptions, callback?: (error: Error | null, items: DeploymentInstance[]) => any): Promise<DeploymentInstance[]>;
    list(params?: any, callback?: any): Promise<DeploymentInstance[]>;
    /**
     * Retrieve a single page of DeploymentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
    /**
     * Retrieve a single page of DeploymentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DeploymentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: DeploymentListInstancePageOptions, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
    page(params?: any, callback?: any): Promise<DeploymentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeploymentSolution {
    serviceSid?: string;
    environmentSid?: string;
}
export declare function DeploymentListInstance(version: V1, serviceSid: string, environmentSid: string): DeploymentListInstance;
export declare class DeploymentPage extends Page<V1, DeploymentPayload, DeploymentResource, DeploymentInstance> {
    /**
     * Initialize the DeploymentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: DeploymentSolution);
    /**
     * Build an instance of DeploymentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: DeploymentResource): DeploymentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
