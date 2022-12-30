/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
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
export interface SupportingDocumentTypeListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SupportingDocumentTypeInstance, done: (err?: Error) => void) => void;
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
export interface SupportingDocumentTypeListInstanceOptions {
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
export interface SupportingDocumentTypeListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SupportingDocumentTypeContext {
    /**
     * Fetch a SupportingDocumentTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SupportingDocumentTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: SupportingDocumentTypeInstance) => any): Promise<SupportingDocumentTypeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SupportingDocumentTypeContextSolution {
    sid?: string;
}
export declare class SupportingDocumentTypeContextImpl implements SupportingDocumentTypeContext {
    protected _version: V1;
    protected _solution: SupportingDocumentTypeContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<SupportingDocumentTypeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SupportingDocumentTypeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SupportingDocumentTypePayload extends TwilioResponsePayload {
    supporting_document_types: SupportingDocumentTypeResource[];
}
interface SupportingDocumentTypeResource {
    sid?: string | null;
    friendly_name?: string | null;
    machine_name?: string | null;
    fields?: Array<any> | null;
    url?: string | null;
}
export declare class SupportingDocumentTypeInstance {
    protected _version: V1;
    protected _solution: SupportingDocumentTypeContextSolution;
    protected _context?: SupportingDocumentTypeContext;
    constructor(_version: V1, payload: SupportingDocumentTypeResource, sid?: string);
    /**
     * The unique string that identifies the Supporting Document Type resource
     */
    sid?: string | null;
    /**
     * A human-readable description of the Supporting Document Type resource
     */
    friendlyName?: string | null;
    /**
     * The machine-readable description of the Supporting Document Type resource
     */
    machineName?: string | null;
    /**
     * The required information for creating a Supporting Document
     */
    fields?: Array<any> | null;
    /**
     * The absolute URL of the Supporting Document Type resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a SupportingDocumentTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SupportingDocumentTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: SupportingDocumentTypeInstance) => any): Promise<SupportingDocumentTypeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        machineName: string | null | undefined;
        fields: any[] | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SupportingDocumentTypeListInstance {
    (sid: string): SupportingDocumentTypeContext;
    get(sid: string): SupportingDocumentTypeContext;
    /**
     * Streams SupportingDocumentTypeInstance records from the API.
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
    each(callback?: (item: SupportingDocumentTypeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SupportingDocumentTypeInstance records from the API.
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
     * @param { SupportingDocumentTypeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SupportingDocumentTypeListInstanceEachOptions, callback?: (item: SupportingDocumentTypeInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SupportingDocumentTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SupportingDocumentTypePage) => any): Promise<SupportingDocumentTypePage>;
    /**
     * Retrieve a single target page of SupportingDocumentTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SupportingDocumentTypePage) => any): Promise<SupportingDocumentTypePage>;
    getPage(params?: any, callback?: any): Promise<SupportingDocumentTypePage>;
    /**
     * Lists SupportingDocumentTypeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SupportingDocumentTypeInstance[]) => any): Promise<SupportingDocumentTypeInstance[]>;
    /**
     * Lists SupportingDocumentTypeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SupportingDocumentTypeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SupportingDocumentTypeListInstanceOptions, callback?: (error: Error | null, items: SupportingDocumentTypeInstance[]) => any): Promise<SupportingDocumentTypeInstance[]>;
    list(params?: any, callback?: any): Promise<SupportingDocumentTypeInstance[]>;
    /**
     * Retrieve a single page of SupportingDocumentTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SupportingDocumentTypePage) => any): Promise<SupportingDocumentTypePage>;
    /**
     * Retrieve a single page of SupportingDocumentTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SupportingDocumentTypeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SupportingDocumentTypeListInstancePageOptions, callback?: (error: Error | null, items: SupportingDocumentTypePage) => any): Promise<SupportingDocumentTypePage>;
    page(params?: any, callback?: any): Promise<SupportingDocumentTypePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SupportingDocumentTypeSolution {
}
export declare function SupportingDocumentTypeListInstance(version: V1): SupportingDocumentTypeListInstance;
export declare class SupportingDocumentTypePage extends Page<V1, SupportingDocumentTypePayload, SupportingDocumentTypeResource, SupportingDocumentTypeInstance> {
    /**
     * Initialize the SupportingDocumentTypePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SupportingDocumentTypeSolution);
    /**
     * Build an instance of SupportingDocumentTypeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SupportingDocumentTypeResource): SupportingDocumentTypeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
