/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Sync from "../../../Sync";
/**
 * Options to pass to update a DocumentPermissionInstance
 *
 * @property { boolean } read Boolean flag specifying whether the identity can read the Sync Document.
 * @property { boolean } write Boolean flag specifying whether the identity can update the Sync Document.
 * @property { boolean } manage Boolean flag specifying whether the identity can delete the Sync Document.
 */
export interface DocumentPermissionContextUpdateOptions {
    read: boolean;
    write: boolean;
    manage: boolean;
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
export interface DocumentPermissionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void;
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
export interface DocumentPermissionListInstanceOptions {
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
export interface DocumentPermissionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface DocumentPermissionContext {
    /**
     * Remove a DocumentPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a DocumentPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentPermissionInstance
     */
    fetch(callback?: (error: Error | null, item?: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>;
    /**
     * Update a DocumentPermissionInstance
     *
     * @param { DocumentPermissionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentPermissionInstance
     */
    update(params: DocumentPermissionContextUpdateOptions, callback?: (error: Error | null, item?: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>;
    update(params: any, callback?: any): Promise<DocumentPermissionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DocumentPermissionContextSolution {
    serviceSid?: string;
    documentSid?: string;
    identity?: string;
}
export declare class DocumentPermissionContextImpl implements DocumentPermissionContext {
    protected _version: Sync;
    protected _solution: DocumentPermissionContextSolution;
    protected _uri: string;
    constructor(_version: Sync, serviceSid: string, documentSid: string, identity: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<DocumentPermissionInstance>;
    update(params: any, callback?: any): Promise<DocumentPermissionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DocumentPermissionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DocumentPermissionPayload extends TwilioResponsePayload {
    permissions: DocumentPermissionResource[];
}
interface DocumentPermissionResource {
    account_sid?: string | null;
    service_sid?: string | null;
    document_sid?: string | null;
    identity?: string | null;
    read?: boolean | null;
    write?: boolean | null;
    manage?: boolean | null;
    url?: string | null;
}
export declare class DocumentPermissionInstance {
    protected _version: Sync;
    protected _solution: DocumentPermissionContextSolution;
    protected _context?: DocumentPermissionContext;
    constructor(_version: Sync, payload: DocumentPermissionResource, serviceSid: string, documentSid: string, identity?: string);
    /**
     * Twilio Account SID.
     */
    accountSid?: string | null;
    /**
     * Sync Service Instance SID.
     */
    serviceSid?: string | null;
    /**
     * Sync Document SID.
     */
    documentSid?: string | null;
    /**
     * Identity of the user to whom the Sync Document Permission applies.
     */
    identity?: string | null;
    /**
     * Read access.
     */
    read?: boolean | null;
    /**
     * Write access.
     */
    write?: boolean | null;
    /**
     * Manage access.
     */
    manage?: boolean | null;
    /**
     * URL of this Sync Document Permission.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a DocumentPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a DocumentPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentPermissionInstance
     */
    fetch(callback?: (error: Error | null, item?: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>;
    /**
     * Update a DocumentPermissionInstance
     *
     * @param { DocumentPermissionContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DocumentPermissionInstance
     */
    update(params: DocumentPermissionContextUpdateOptions, callback?: (error: Error | null, item?: DocumentPermissionInstance) => any): Promise<DocumentPermissionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        documentSid: string | null | undefined;
        identity: string | null | undefined;
        read: boolean | null | undefined;
        write: boolean | null | undefined;
        manage: boolean | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DocumentPermissionListInstance {
    (identity: string): DocumentPermissionContext;
    get(identity: string): DocumentPermissionContext;
    /**
     * Streams DocumentPermissionInstance records from the API.
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
    each(callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams DocumentPermissionInstance records from the API.
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
     * @param { DocumentPermissionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: DocumentPermissionListInstanceEachOptions, callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of DocumentPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
    /**
     * Retrieve a single target page of DocumentPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
    getPage(params?: any, callback?: any): Promise<DocumentPermissionPage>;
    /**
     * Lists DocumentPermissionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: DocumentPermissionInstance[]) => any): Promise<DocumentPermissionInstance[]>;
    /**
     * Lists DocumentPermissionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DocumentPermissionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: DocumentPermissionListInstanceOptions, callback?: (error: Error | null, items: DocumentPermissionInstance[]) => any): Promise<DocumentPermissionInstance[]>;
    list(params?: any, callback?: any): Promise<DocumentPermissionInstance[]>;
    /**
     * Retrieve a single page of DocumentPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
    /**
     * Retrieve a single page of DocumentPermissionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DocumentPermissionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: DocumentPermissionListInstancePageOptions, callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
    page(params?: any, callback?: any): Promise<DocumentPermissionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DocumentPermissionSolution {
    serviceSid?: string;
    documentSid?: string;
}
export declare function DocumentPermissionListInstance(version: Sync, serviceSid: string, documentSid: string): DocumentPermissionListInstance;
export declare class DocumentPermissionPage extends Page<Sync, DocumentPermissionPayload, DocumentPermissionResource, DocumentPermissionInstance> {
    /**
     * Initialize the DocumentPermissionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Sync, response: Response<string>, solution: DocumentPermissionSolution);
    /**
     * Build an instance of DocumentPermissionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: DocumentPermissionResource): DocumentPermissionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
