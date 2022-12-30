/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to update a VariableInstance
 *
 * @property { string } [key] A string by which the Variable resource can be referenced. It can be a maximum of 128 characters.
 * @property { string } [value] A string that contains the actual value of the Variable. It can be a maximum of 450 bytes in size.
 */
export interface VariableContextUpdateOptions {
    key?: string;
    value?: string;
}
/**
 * Options to pass to create a VariableInstance
 *
 * @property { string } key A string by which the Variable resource can be referenced. It can be a maximum of 128 characters.
 * @property { string } value A string that contains the actual value of the Variable. It can be a maximum of 450 bytes in size.
 */
export interface VariableListInstanceCreateOptions {
    key: string;
    value: string;
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
export interface VariableListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: VariableInstance, done: (err?: Error) => void) => void;
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
export interface VariableListInstanceOptions {
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
export interface VariableListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface VariableContext {
    /**
     * Remove a VariableInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a VariableInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VariableInstance
     */
    fetch(callback?: (error: Error | null, item?: VariableInstance) => any): Promise<VariableInstance>;
    /**
     * Update a VariableInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VariableInstance
     */
    update(callback?: (error: Error | null, item?: VariableInstance) => any): Promise<VariableInstance>;
    /**
     * Update a VariableInstance
     *
     * @param { VariableContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VariableInstance
     */
    update(params: VariableContextUpdateOptions, callback?: (error: Error | null, item?: VariableInstance) => any): Promise<VariableInstance>;
    update(params?: any, callback?: any): Promise<VariableInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface VariableContextSolution {
    serviceSid?: string;
    environmentSid?: string;
    sid?: string;
}
export declare class VariableContextImpl implements VariableContext {
    protected _version: V1;
    protected _solution: VariableContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, environmentSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<VariableInstance>;
    update(params?: any, callback?: any): Promise<VariableInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): VariableContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface VariablePayload extends TwilioResponsePayload {
    variables: VariableResource[];
}
interface VariableResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    environment_sid?: string | null;
    key?: string | null;
    value?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class VariableInstance {
    protected _version: V1;
    protected _solution: VariableContextSolution;
    protected _context?: VariableContext;
    constructor(_version: V1, payload: VariableResource, serviceSid: string, environmentSid: string, sid?: string);
    /**
     * The unique string that identifies the Variable resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Variable resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Variable resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Environment in which the Variable exists
     */
    environmentSid?: string | null;
    /**
     * A string by which the Variable resource can be referenced
     */
    key?: string | null;
    /**
     * A string that contains the actual value of the Variable
     */
    value?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the Variable resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Variable resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Variable resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a VariableInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a VariableInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VariableInstance
     */
    fetch(callback?: (error: Error | null, item?: VariableInstance) => any): Promise<VariableInstance>;
    /**
     * Update a VariableInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VariableInstance
     */
    update(callback?: (error: Error | null, item?: VariableInstance) => any): Promise<VariableInstance>;
    /**
     * Update a VariableInstance
     *
     * @param { VariableContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VariableInstance
     */
    update(params: VariableContextUpdateOptions, callback?: (error: Error | null, item?: VariableInstance) => any): Promise<VariableInstance>;
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
        key: string | null | undefined;
        value: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface VariableListInstance {
    (sid: string): VariableContext;
    get(sid: string): VariableContext;
    /**
     * Create a VariableInstance
     *
     * @param { VariableListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VariableInstance
     */
    create(params: VariableListInstanceCreateOptions, callback?: (error: Error | null, item?: VariableInstance) => any): Promise<VariableInstance>;
    create(params: any, callback?: any): Promise<VariableInstance>;
    /**
     * Streams VariableInstance records from the API.
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
    each(callback?: (item: VariableInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams VariableInstance records from the API.
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
     * @param { VariableListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: VariableListInstanceEachOptions, callback?: (item: VariableInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of VariableInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: VariablePage) => any): Promise<VariablePage>;
    /**
     * Retrieve a single target page of VariableInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: VariablePage) => any): Promise<VariablePage>;
    getPage(params?: any, callback?: any): Promise<VariablePage>;
    /**
     * Lists VariableInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: VariableInstance[]) => any): Promise<VariableInstance[]>;
    /**
     * Lists VariableInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { VariableListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: VariableListInstanceOptions, callback?: (error: Error | null, items: VariableInstance[]) => any): Promise<VariableInstance[]>;
    list(params?: any, callback?: any): Promise<VariableInstance[]>;
    /**
     * Retrieve a single page of VariableInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: VariablePage) => any): Promise<VariablePage>;
    /**
     * Retrieve a single page of VariableInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { VariableListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: VariableListInstancePageOptions, callback?: (error: Error | null, items: VariablePage) => any): Promise<VariablePage>;
    page(params?: any, callback?: any): Promise<VariablePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface VariableSolution {
    serviceSid?: string;
    environmentSid?: string;
}
export declare function VariableListInstance(version: V1, serviceSid: string, environmentSid: string): VariableListInstance;
export declare class VariablePage extends Page<V1, VariablePayload, VariableResource, VariableInstance> {
    /**
     * Initialize the VariablePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: VariableSolution);
    /**
     * Build an instance of VariableInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: VariableResource): VariableInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
