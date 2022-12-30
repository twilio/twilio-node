/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type SupportingDocumentStatus = "draft" | "pending-review" | "rejected" | "approved" | "expired" | "provisionally-approved";
/**
 * Options to pass to update a SupportingDocumentInstance
 *
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { any } [attributes] The set of parameters that are the attributes of the Supporting Document resource which are derived Supporting Document Types.
 */
export interface SupportingDocumentContextUpdateOptions {
    friendlyName?: string;
    attributes?: any;
}
/**
 * Options to pass to create a SupportingDocumentInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the resource.
 * @property { string } type The type of the Supporting Document.
 * @property { any } [attributes] The set of parameters that are the attributes of the Supporting Documents resource which are derived Supporting Document Types.
 */
export interface SupportingDocumentListInstanceCreateOptions {
    friendlyName: string;
    type: string;
    attributes?: any;
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
export interface SupportingDocumentListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SupportingDocumentInstance, done: (err?: Error) => void) => void;
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
export interface SupportingDocumentListInstanceOptions {
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
export interface SupportingDocumentListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SupportingDocumentContext {
    /**
     * Remove a SupportingDocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SupportingDocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SupportingDocumentInstance
     */
    fetch(callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
    /**
     * Update a SupportingDocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SupportingDocumentInstance
     */
    update(callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
    /**
     * Update a SupportingDocumentInstance
     *
     * @param { SupportingDocumentContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SupportingDocumentInstance
     */
    update(params: SupportingDocumentContextUpdateOptions, callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
    update(params?: any, callback?: any): Promise<SupportingDocumentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SupportingDocumentContextSolution {
    sid?: string;
}
export declare class SupportingDocumentContextImpl implements SupportingDocumentContext {
    protected _version: V1;
    protected _solution: SupportingDocumentContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SupportingDocumentInstance>;
    update(params?: any, callback?: any): Promise<SupportingDocumentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SupportingDocumentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SupportingDocumentPayload extends TwilioResponsePayload {
    results: SupportingDocumentResource[];
}
interface SupportingDocumentResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    mime_type?: string | null;
    status?: SupportingDocumentStatus;
    type?: string | null;
    attributes?: any | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class SupportingDocumentInstance {
    protected _version: V1;
    protected _solution: SupportingDocumentContextSolution;
    protected _context?: SupportingDocumentContext;
    constructor(_version: V1, payload: SupportingDocumentResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The image type of the file
     */
    mimeType?: string | null;
    status?: SupportingDocumentStatus;
    /**
     * The type of the Supporting Document
     */
    type?: string | null;
    /**
     * The set of parameters that compose the Supporting Documents resource
     */
    attributes?: any | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Supporting Document resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a SupportingDocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SupportingDocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SupportingDocumentInstance
     */
    fetch(callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
    /**
     * Update a SupportingDocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SupportingDocumentInstance
     */
    update(callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
    /**
     * Update a SupportingDocumentInstance
     *
     * @param { SupportingDocumentContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SupportingDocumentInstance
     */
    update(params: SupportingDocumentContextUpdateOptions, callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        mimeType: string | null | undefined;
        status: SupportingDocumentStatus | undefined;
        type: string | null | undefined;
        attributes: any;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SupportingDocumentListInstance {
    (sid: string): SupportingDocumentContext;
    get(sid: string): SupportingDocumentContext;
    /**
     * Create a SupportingDocumentInstance
     *
     * @param { SupportingDocumentListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SupportingDocumentInstance
     */
    create(params: SupportingDocumentListInstanceCreateOptions, callback?: (error: Error | null, item?: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
    create(params: any, callback?: any): Promise<SupportingDocumentInstance>;
    /**
     * Streams SupportingDocumentInstance records from the API.
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
    each(callback?: (item: SupportingDocumentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SupportingDocumentInstance records from the API.
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
     * @param { SupportingDocumentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SupportingDocumentListInstanceEachOptions, callback?: (item: SupportingDocumentInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SupportingDocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
    /**
     * Retrieve a single target page of SupportingDocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
    getPage(params?: any, callback?: any): Promise<SupportingDocumentPage>;
    /**
     * Lists SupportingDocumentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SupportingDocumentInstance[]) => any): Promise<SupportingDocumentInstance[]>;
    /**
     * Lists SupportingDocumentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SupportingDocumentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SupportingDocumentListInstanceOptions, callback?: (error: Error | null, items: SupportingDocumentInstance[]) => any): Promise<SupportingDocumentInstance[]>;
    list(params?: any, callback?: any): Promise<SupportingDocumentInstance[]>;
    /**
     * Retrieve a single page of SupportingDocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
    /**
     * Retrieve a single page of SupportingDocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SupportingDocumentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SupportingDocumentListInstancePageOptions, callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
    page(params?: any, callback?: any): Promise<SupportingDocumentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SupportingDocumentSolution {
}
export declare function SupportingDocumentListInstance(version: V1): SupportingDocumentListInstance;
export declare class SupportingDocumentPage extends Page<V1, SupportingDocumentPayload, SupportingDocumentResource, SupportingDocumentInstance> {
    /**
     * Initialize the SupportingDocumentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SupportingDocumentSolution);
    /**
     * Build an instance of SupportingDocumentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SupportingDocumentResource): SupportingDocumentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
