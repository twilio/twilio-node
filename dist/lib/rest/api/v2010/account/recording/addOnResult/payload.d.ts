/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V2010 from "../../../../V2010";
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
export interface PayloadListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: PayloadInstance, done: (err?: Error) => void) => void;
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
export interface PayloadListInstanceOptions {
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
export interface PayloadListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface PayloadContext {
    /**
     * Remove a PayloadInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PayloadInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PayloadInstance
     */
    fetch(callback?: (error: Error | null, item?: PayloadInstance) => any): Promise<PayloadInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PayloadContextSolution {
    accountSid?: string;
    referenceSid?: string;
    addOnResultSid?: string;
    sid?: string;
}
export declare class PayloadContextImpl implements PayloadContext {
    protected _version: V2010;
    protected _solution: PayloadContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, referenceSid: string, addOnResultSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<PayloadInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PayloadContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PayloadPayload extends TwilioResponsePayload {
    payloads: PayloadResource[];
}
interface PayloadResource {
    sid?: string | null;
    add_on_result_sid?: string | null;
    account_sid?: string | null;
    label?: string | null;
    add_on_sid?: string | null;
    add_on_configuration_sid?: string | null;
    content_type?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    reference_sid?: string | null;
    subresource_uris?: object | null;
}
export declare class PayloadInstance {
    protected _version: V2010;
    protected _solution: PayloadContextSolution;
    protected _context?: PayloadContext;
    constructor(_version: V2010, payload: PayloadResource, accountSid: string, referenceSid: string, addOnResultSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the AddOnResult to which the payload belongs
     */
    addOnResultSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that describes the payload
     */
    label?: string | null;
    /**
     * The SID of the Add-on to which the result belongs
     */
    addOnSid?: string | null;
    /**
     * The SID of the Add-on configuration
     */
    addOnConfigurationSid?: string | null;
    /**
     * The MIME type of the payload
     */
    contentType?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The SID of the recording to which the AddOnResult resource that contains the payload belongs
     */
    referenceSid?: string | null;
    /**
     * A list of related resources identified by their relative URIs
     */
    subresourceUris?: object | null;
    private get _proxy();
    /**
     * Remove a PayloadInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PayloadInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PayloadInstance
     */
    fetch(callback?: (error: Error | null, item?: PayloadInstance) => any): Promise<PayloadInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        addOnResultSid: string | null | undefined;
        accountSid: string | null | undefined;
        label: string | null | undefined;
        addOnSid: string | null | undefined;
        addOnConfigurationSid: string | null | undefined;
        contentType: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        referenceSid: string | null | undefined;
        subresourceUris: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PayloadListInstance {
    (sid: string): PayloadContext;
    get(sid: string): PayloadContext;
    /**
     * Streams PayloadInstance records from the API.
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
    each(callback?: (item: PayloadInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams PayloadInstance records from the API.
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
     * @param { PayloadListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: PayloadListInstanceEachOptions, callback?: (item: PayloadInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of PayloadInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: PayloadPage) => any): Promise<PayloadPage>;
    /**
     * Retrieve a single target page of PayloadInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: PayloadPage) => any): Promise<PayloadPage>;
    getPage(params?: any, callback?: any): Promise<PayloadPage>;
    /**
     * Lists PayloadInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PayloadInstance[]) => any): Promise<PayloadInstance[]>;
    /**
     * Lists PayloadInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PayloadListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: PayloadListInstanceOptions, callback?: (error: Error | null, items: PayloadInstance[]) => any): Promise<PayloadInstance[]>;
    list(params?: any, callback?: any): Promise<PayloadInstance[]>;
    /**
     * Retrieve a single page of PayloadInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PayloadPage) => any): Promise<PayloadPage>;
    /**
     * Retrieve a single page of PayloadInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PayloadListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: PayloadListInstancePageOptions, callback?: (error: Error | null, items: PayloadPage) => any): Promise<PayloadPage>;
    page(params?: any, callback?: any): Promise<PayloadPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PayloadSolution {
    accountSid?: string;
    referenceSid?: string;
    addOnResultSid?: string;
}
export declare function PayloadListInstance(version: V2010, accountSid: string, referenceSid: string, addOnResultSid: string): PayloadListInstance;
export declare class PayloadPage extends Page<V2010, PayloadPayload, PayloadResource, PayloadInstance> {
    /**
     * Initialize the PayloadPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: PayloadSolution);
    /**
     * Build an instance of PayloadInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PayloadResource): PayloadInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
