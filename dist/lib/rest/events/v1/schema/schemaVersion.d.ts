/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
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
export interface SchemaVersionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void;
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
export interface SchemaVersionListInstanceOptions {
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
export interface SchemaVersionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SchemaVersionContext {
    /**
     * Fetch a SchemaVersionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SchemaVersionInstance
     */
    fetch(callback?: (error: Error | null, item?: SchemaVersionInstance) => any): Promise<SchemaVersionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SchemaVersionContextSolution {
    id?: string;
    schemaVersion?: number;
}
export declare class SchemaVersionContextImpl implements SchemaVersionContext {
    protected _version: V1;
    protected _solution: SchemaVersionContextSolution;
    protected _uri: string;
    constructor(_version: V1, id: string, schemaVersion: number);
    fetch(callback?: any): Promise<SchemaVersionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SchemaVersionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SchemaVersionPayload extends TwilioResponsePayload {
    schema_versions: SchemaVersionResource[];
}
interface SchemaVersionResource {
    id?: string | null;
    schema_version?: number | null;
    date_created?: Date | null;
    url?: string | null;
    raw?: string | null;
}
export declare class SchemaVersionInstance {
    protected _version: V1;
    protected _solution: SchemaVersionContextSolution;
    protected _context?: SchemaVersionContext;
    constructor(_version: V1, payload: SchemaVersionResource, id: string, schemaVersion?: number);
    /**
     * The unique identifier of the schema.
     */
    id?: string | null;
    /**
     * The version of this schema.
     */
    schemaVersion?: number | null;
    /**
     * The date the schema version was created.
     */
    dateCreated?: Date | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    raw?: string | null;
    private get _proxy();
    /**
     * Fetch a SchemaVersionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SchemaVersionInstance
     */
    fetch(callback?: (error: Error | null, item?: SchemaVersionInstance) => any): Promise<SchemaVersionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        id: string | null | undefined;
        schemaVersion: number | null | undefined;
        dateCreated: Date | null | undefined;
        url: string | null | undefined;
        raw: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SchemaVersionListInstance {
    (schemaVersion: number): SchemaVersionContext;
    get(schemaVersion: number): SchemaVersionContext;
    /**
     * Streams SchemaVersionInstance records from the API.
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
    each(callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SchemaVersionInstance records from the API.
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
     * @param { SchemaVersionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SchemaVersionListInstanceEachOptions, callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SchemaVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
    /**
     * Retrieve a single target page of SchemaVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
    getPage(params?: any, callback?: any): Promise<SchemaVersionPage>;
    /**
     * Lists SchemaVersionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SchemaVersionInstance[]) => any): Promise<SchemaVersionInstance[]>;
    /**
     * Lists SchemaVersionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SchemaVersionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SchemaVersionListInstanceOptions, callback?: (error: Error | null, items: SchemaVersionInstance[]) => any): Promise<SchemaVersionInstance[]>;
    list(params?: any, callback?: any): Promise<SchemaVersionInstance[]>;
    /**
     * Retrieve a single page of SchemaVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
    /**
     * Retrieve a single page of SchemaVersionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SchemaVersionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SchemaVersionListInstancePageOptions, callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
    page(params?: any, callback?: any): Promise<SchemaVersionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SchemaVersionSolution {
    id?: string;
}
export declare function SchemaVersionListInstance(version: V1, id: string): SchemaVersionListInstance;
export declare class SchemaVersionPage extends Page<V1, SchemaVersionPayload, SchemaVersionResource, SchemaVersionInstance> {
    /**
     * Initialize the SchemaVersionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SchemaVersionSolution);
    /**
     * Build an instance of SchemaVersionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SchemaVersionResource): SchemaVersionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
