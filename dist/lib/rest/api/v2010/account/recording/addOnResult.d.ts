/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
import { PayloadListInstance } from "./addOnResult/payload";
declare type RecordingAddOnResultStatus = "canceled" | "completed" | "deleted" | "failed" | "in-progress" | "init" | "processing" | "queued";
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
export interface AddOnResultListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AddOnResultInstance, done: (err?: Error) => void) => void;
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
export interface AddOnResultListInstanceOptions {
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
export interface AddOnResultListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AddOnResultContext {
    payloads: PayloadListInstance;
    /**
     * Remove a AddOnResultInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AddOnResultInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddOnResultInstance
     */
    fetch(callback?: (error: Error | null, item?: AddOnResultInstance) => any): Promise<AddOnResultInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AddOnResultContextSolution {
    accountSid?: string;
    referenceSid?: string;
    sid?: string;
}
export declare class AddOnResultContextImpl implements AddOnResultContext {
    protected _version: V2010;
    protected _solution: AddOnResultContextSolution;
    protected _uri: string;
    protected _payloads?: PayloadListInstance;
    constructor(_version: V2010, accountSid: string, referenceSid: string, sid: string);
    get payloads(): PayloadListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<AddOnResultInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AddOnResultContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AddOnResultPayload extends TwilioResponsePayload {
    add_on_results: AddOnResultResource[];
}
interface AddOnResultResource {
    sid?: string | null;
    account_sid?: string | null;
    status?: RecordingAddOnResultStatus;
    add_on_sid?: string | null;
    add_on_configuration_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    date_completed?: Date | null;
    reference_sid?: string | null;
    subresource_uris?: object | null;
}
export declare class AddOnResultInstance {
    protected _version: V2010;
    protected _solution: AddOnResultContextSolution;
    protected _context?: AddOnResultContext;
    constructor(_version: V2010, payload: AddOnResultResource, accountSid: string, referenceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    status?: RecordingAddOnResultStatus;
    /**
     * The SID of the Add-on to which the result belongs
     */
    addOnSid?: string | null;
    /**
     * The SID of the Add-on configuration
     */
    addOnConfigurationSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The date and time in GMT that the result was completed
     */
    dateCompleted?: Date | null;
    /**
     * The SID of the recording to which the AddOnResult resource belongs
     */
    referenceSid?: string | null;
    /**
     * A list of related resources identified by their relative URIs
     */
    subresourceUris?: object | null;
    private get _proxy();
    /**
     * Remove a AddOnResultInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AddOnResultInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddOnResultInstance
     */
    fetch(callback?: (error: Error | null, item?: AddOnResultInstance) => any): Promise<AddOnResultInstance>;
    /**
     * Access the payloads.
     */
    payloads(): PayloadListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        status: RecordingAddOnResultStatus | undefined;
        addOnSid: string | null | undefined;
        addOnConfigurationSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        dateCompleted: Date | null | undefined;
        referenceSid: string | null | undefined;
        subresourceUris: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AddOnResultListInstance {
    (sid: string): AddOnResultContext;
    get(sid: string): AddOnResultContext;
    /**
     * Streams AddOnResultInstance records from the API.
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
    each(callback?: (item: AddOnResultInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AddOnResultInstance records from the API.
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
     * @param { AddOnResultListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AddOnResultListInstanceEachOptions, callback?: (item: AddOnResultInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AddOnResultInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AddOnResultPage) => any): Promise<AddOnResultPage>;
    /**
     * Retrieve a single target page of AddOnResultInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AddOnResultPage) => any): Promise<AddOnResultPage>;
    getPage(params?: any, callback?: any): Promise<AddOnResultPage>;
    /**
     * Lists AddOnResultInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AddOnResultInstance[]) => any): Promise<AddOnResultInstance[]>;
    /**
     * Lists AddOnResultInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AddOnResultListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AddOnResultListInstanceOptions, callback?: (error: Error | null, items: AddOnResultInstance[]) => any): Promise<AddOnResultInstance[]>;
    list(params?: any, callback?: any): Promise<AddOnResultInstance[]>;
    /**
     * Retrieve a single page of AddOnResultInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AddOnResultPage) => any): Promise<AddOnResultPage>;
    /**
     * Retrieve a single page of AddOnResultInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AddOnResultListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AddOnResultListInstancePageOptions, callback?: (error: Error | null, items: AddOnResultPage) => any): Promise<AddOnResultPage>;
    page(params?: any, callback?: any): Promise<AddOnResultPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AddOnResultSolution {
    accountSid?: string;
    referenceSid?: string;
}
export declare function AddOnResultListInstance(version: V2010, accountSid: string, referenceSid: string): AddOnResultListInstance;
export declare class AddOnResultPage extends Page<V2010, AddOnResultPayload, AddOnResultResource, AddOnResultInstance> {
    /**
     * Initialize the AddOnResultPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: AddOnResultSolution);
    /**
     * Build an instance of AddOnResultInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AddOnResultResource): AddOnResultInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
