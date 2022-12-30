/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { DocumentPermissionListInstance } from "./document/documentPermission";
/**
 * Options to pass to update a DocumentInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 * @property { any } [data] A JSON string that represents an arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length.
 * @property { number } [ttl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Document expires and is deleted (time-to-live).
 */
export interface DocumentContextUpdateOptions {
    ifMatch?: string;
    data?: any;
    ttl?: number;
}
/**
 * Options to pass to create a DocumentInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the Sync Document
 * @property { any } [data] A JSON string that represents an arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length.
 * @property { number } [ttl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Document expires and is deleted (the Sync Document\\\'s time-to-live).
 */
export interface DocumentListInstanceCreateOptions {
    uniqueName?: string;
    data?: any;
    ttl?: number;
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
export interface DocumentListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: DocumentInstance, done: (err?: Error) => void) => void;
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
export interface DocumentListInstanceOptions {
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
export interface DocumentListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface DocumentContext {
    documentPermissions: DocumentPermissionListInstance;
    /**
     * Remove a DocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a DocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentInstance
     */
    fetch(callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
    /**
     * Update a DocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentInstance
     */
    update(callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
    /**
     * Update a DocumentInstance
     *
     * @param { DocumentContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentInstance
     */
    update(params: DocumentContextUpdateOptions, callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
    update(params?: any, callback?: any): Promise<DocumentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DocumentContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class DocumentContextImpl implements DocumentContext {
    protected _version: V1;
    protected _solution: DocumentContextSolution;
    protected _uri: string;
    protected _documentPermissions?: DocumentPermissionListInstance;
    constructor(_version: V1, serviceSid: string, sid: string);
    get documentPermissions(): DocumentPermissionListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<DocumentInstance>;
    update(params?: any, callback?: any): Promise<DocumentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DocumentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DocumentPayload extends TwilioResponsePayload {
    documents: DocumentResource[];
}
interface DocumentResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    url?: string | null;
    links?: object | null;
    revision?: string | null;
    data?: any | null;
    date_expires?: Date | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    created_by?: string | null;
}
export declare class DocumentInstance {
    protected _version: V1;
    protected _solution: DocumentContextSolution;
    protected _context?: DocumentContext;
    constructor(_version: V1, payload: DocumentResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Sync Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The absolute URL of the Document resource
     */
    url?: string | null;
    /**
     * The URLs of resources related to the Sync Document
     */
    links?: object | null;
    /**
     * The current revision of the Sync Document, represented by a string identifier
     */
    revision?: string | null;
    /**
     * An arbitrary, schema-less object that the Sync Document stores
     */
    data?: any | null;
    /**
     * The ISO 8601 date and time in GMT when the Sync Document expires
     */
    dateExpires?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The identity of the Sync Document\'s creator
     */
    createdBy?: string | null;
    private get _proxy();
    /**
     * Remove a DocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a DocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentInstance
     */
    fetch(callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
    /**
     * Update a DocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentInstance
     */
    update(callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
    /**
     * Update a DocumentInstance
     *
     * @param { DocumentContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentInstance
     */
    update(params: DocumentContextUpdateOptions, callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
    /**
     * Access the documentPermissions.
     */
    documentPermissions(): DocumentPermissionListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
        revision: string | null | undefined;
        data: any;
        dateExpires: Date | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        createdBy: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DocumentListInstance {
    (sid: string): DocumentContext;
    get(sid: string): DocumentContext;
    /**
     * Create a DocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentInstance
     */
    create(callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
    /**
     * Create a DocumentInstance
     *
     * @param { DocumentListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentInstance
     */
    create(params: DocumentListInstanceCreateOptions, callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
    create(params?: any, callback?: any): Promise<DocumentInstance>;
    /**
     * Streams DocumentInstance records from the API.
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
    each(callback?: (item: DocumentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams DocumentInstance records from the API.
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
     * @param { DocumentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: DocumentListInstanceEachOptions, callback?: (item: DocumentInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of DocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: DocumentPage) => any): Promise<DocumentPage>;
    /**
     * Retrieve a single target page of DocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: DocumentPage) => any): Promise<DocumentPage>;
    getPage(params?: any, callback?: any): Promise<DocumentPage>;
    /**
     * Lists DocumentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: DocumentInstance[]) => any): Promise<DocumentInstance[]>;
    /**
     * Lists DocumentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DocumentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: DocumentListInstanceOptions, callback?: (error: Error | null, items: DocumentInstance[]) => any): Promise<DocumentInstance[]>;
    list(params?: any, callback?: any): Promise<DocumentInstance[]>;
    /**
     * Retrieve a single page of DocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: DocumentPage) => any): Promise<DocumentPage>;
    /**
     * Retrieve a single page of DocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DocumentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: DocumentListInstancePageOptions, callback?: (error: Error | null, items: DocumentPage) => any): Promise<DocumentPage>;
    page(params?: any, callback?: any): Promise<DocumentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DocumentSolution {
    serviceSid?: string;
}
export declare function DocumentListInstance(version: V1, serviceSid: string): DocumentListInstance;
export declare class DocumentPage extends Page<V1, DocumentPayload, DocumentResource, DocumentInstance> {
    /**
     * Initialize the DocumentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: DocumentSolution);
    /**
     * Build an instance of DocumentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: DocumentResource): DocumentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
