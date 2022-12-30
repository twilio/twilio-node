/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { DeploymentListInstance } from "./environment/deployment";
import { LogListInstance } from "./environment/log";
import { VariableListInstance } from "./environment/variable";
/**
 * Options to pass to create a EnvironmentInstance
 *
 * @property { string } uniqueName A user-defined string that uniquely identifies the Environment resource. It can be a maximum of 100 characters.
 * @property { string } [domainSuffix] A URL-friendly name that represents the environment and forms part of the domain name. It can be a maximum of 16 characters.
 */
export interface EnvironmentListInstanceCreateOptions {
    uniqueName: string;
    domainSuffix?: string;
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
export interface EnvironmentListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: EnvironmentInstance, done: (err?: Error) => void) => void;
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
export interface EnvironmentListInstanceOptions {
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
export interface EnvironmentListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface EnvironmentContext {
    deployments: DeploymentListInstance;
    logs: LogListInstance;
    variables: VariableListInstance;
    /**
     * Remove a EnvironmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a EnvironmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EnvironmentInstance
     */
    fetch(callback?: (error: Error | null, item?: EnvironmentInstance) => any): Promise<EnvironmentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EnvironmentContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class EnvironmentContextImpl implements EnvironmentContext {
    protected _version: V1;
    protected _solution: EnvironmentContextSolution;
    protected _uri: string;
    protected _deployments?: DeploymentListInstance;
    protected _logs?: LogListInstance;
    protected _variables?: VariableListInstance;
    constructor(_version: V1, serviceSid: string, sid: string);
    get deployments(): DeploymentListInstance;
    get logs(): LogListInstance;
    get variables(): VariableListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<EnvironmentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): EnvironmentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface EnvironmentPayload extends TwilioResponsePayload {
    environments: EnvironmentResource[];
}
interface EnvironmentResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    build_sid?: string | null;
    unique_name?: string | null;
    domain_suffix?: string | null;
    domain_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class EnvironmentInstance {
    protected _version: V1;
    protected _solution: EnvironmentContextSolution;
    protected _context?: EnvironmentContext;
    constructor(_version: V1, payload: EnvironmentResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the Environment resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Environment resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Environment resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the build deployed in the environment
     */
    buildSid?: string | null;
    /**
     * A user-defined string that uniquely identifies the Environment resource
     */
    uniqueName?: string | null;
    /**
     * A URL-friendly name that represents the environment
     */
    domainSuffix?: string | null;
    /**
     * The domain name for all Functions and Assets deployed in the Environment
     */
    domainName?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the Environment resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Environment resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Environment resource
     */
    url?: string | null;
    /**
     * The URLs of the Environment resource\'s nested resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a EnvironmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a EnvironmentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EnvironmentInstance
     */
    fetch(callback?: (error: Error | null, item?: EnvironmentInstance) => any): Promise<EnvironmentInstance>;
    /**
     * Access the deployments.
     */
    deployments(): DeploymentListInstance;
    /**
     * Access the logs.
     */
    logs(): LogListInstance;
    /**
     * Access the variables.
     */
    variables(): VariableListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        buildSid: string | null | undefined;
        uniqueName: string | null | undefined;
        domainSuffix: string | null | undefined;
        domainName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface EnvironmentListInstance {
    (sid: string): EnvironmentContext;
    get(sid: string): EnvironmentContext;
    /**
     * Create a EnvironmentInstance
     *
     * @param { EnvironmentListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EnvironmentInstance
     */
    create(params: EnvironmentListInstanceCreateOptions, callback?: (error: Error | null, item?: EnvironmentInstance) => any): Promise<EnvironmentInstance>;
    create(params: any, callback?: any): Promise<EnvironmentInstance>;
    /**
     * Streams EnvironmentInstance records from the API.
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
    each(callback?: (item: EnvironmentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams EnvironmentInstance records from the API.
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
     * @param { EnvironmentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: EnvironmentListInstanceEachOptions, callback?: (item: EnvironmentInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of EnvironmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: EnvironmentPage) => any): Promise<EnvironmentPage>;
    /**
     * Retrieve a single target page of EnvironmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: EnvironmentPage) => any): Promise<EnvironmentPage>;
    getPage(params?: any, callback?: any): Promise<EnvironmentPage>;
    /**
     * Lists EnvironmentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: EnvironmentInstance[]) => any): Promise<EnvironmentInstance[]>;
    /**
     * Lists EnvironmentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EnvironmentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: EnvironmentListInstanceOptions, callback?: (error: Error | null, items: EnvironmentInstance[]) => any): Promise<EnvironmentInstance[]>;
    list(params?: any, callback?: any): Promise<EnvironmentInstance[]>;
    /**
     * Retrieve a single page of EnvironmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: EnvironmentPage) => any): Promise<EnvironmentPage>;
    /**
     * Retrieve a single page of EnvironmentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EnvironmentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: EnvironmentListInstancePageOptions, callback?: (error: Error | null, items: EnvironmentPage) => any): Promise<EnvironmentPage>;
    page(params?: any, callback?: any): Promise<EnvironmentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EnvironmentSolution {
    serviceSid?: string;
}
export declare function EnvironmentListInstance(version: V1, serviceSid: string): EnvironmentListInstance;
export declare class EnvironmentPage extends Page<V1, EnvironmentPayload, EnvironmentResource, EnvironmentInstance> {
    /**
     * Initialize the EnvironmentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: EnvironmentSolution);
    /**
     * Build an instance of EnvironmentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: EnvironmentResource): EnvironmentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
