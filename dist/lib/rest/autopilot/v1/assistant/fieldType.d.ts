/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { FieldValueListInstance } from "./fieldType/fieldValue";
/**
 * Options to pass to update a FieldTypeInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique.
 */
export interface FieldTypeContextUpdateOptions {
    friendlyName?: string;
    uniqueName?: string;
}
/**
 * Options to pass to create a FieldTypeInstance
 *
 * @property { string } uniqueName An application-defined string that uniquely identifies the new resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique.
 * @property { string } [friendlyName] A descriptive string that you create to describe the new resource. It is not unique and can be up to 255 characters long.
 */
export interface FieldTypeListInstanceCreateOptions {
    uniqueName: string;
    friendlyName?: string;
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
export interface FieldTypeListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void;
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
export interface FieldTypeListInstanceOptions {
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
export interface FieldTypeListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FieldTypeContext {
    fieldValues: FieldValueListInstance;
    /**
     * Remove a FieldTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Update a FieldTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldTypeInstance
     */
    update(callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Update a FieldTypeInstance
     *
     * @param { FieldTypeContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldTypeInstance
     */
    update(params: FieldTypeContextUpdateOptions, callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    update(params?: any, callback?: any): Promise<FieldTypeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FieldTypeContextSolution {
    assistantSid?: string;
    sid?: string;
}
export declare class FieldTypeContextImpl implements FieldTypeContext {
    protected _version: V1;
    protected _solution: FieldTypeContextSolution;
    protected _uri: string;
    protected _fieldValues?: FieldValueListInstance;
    constructor(_version: V1, assistantSid: string, sid: string);
    get fieldValues(): FieldValueListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<FieldTypeInstance>;
    update(params?: any, callback?: any): Promise<FieldTypeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FieldTypeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FieldTypePayload extends TwilioResponsePayload {
    field_types: FieldTypeResource[];
}
interface FieldTypeResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    links?: object | null;
    assistant_sid?: string | null;
    sid?: string | null;
    unique_name?: string | null;
    url?: string | null;
}
export declare class FieldTypeInstance {
    protected _version: V1;
    protected _solution: FieldTypeContextSolution;
    protected _context?: FieldTypeContext;
    constructor(_version: V1, payload: FieldTypeResource, assistantSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * A list of the URLs of related resources
     */
    links?: object | null;
    /**
     * The SID of the Assistant that is the parent of the resource
     */
    assistantSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The absolute URL of the FieldType resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a FieldTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Update a FieldTypeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldTypeInstance
     */
    update(callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Update a FieldTypeInstance
     *
     * @param { FieldTypeContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldTypeInstance
     */
    update(params: FieldTypeContextUpdateOptions, callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Access the fieldValues.
     */
    fieldValues(): FieldValueListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        links: object | null | undefined;
        assistantSid: string | null | undefined;
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FieldTypeListInstance {
    (sid: string): FieldTypeContext;
    get(sid: string): FieldTypeContext;
    /**
     * Create a FieldTypeInstance
     *
     * @param { FieldTypeListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldTypeInstance
     */
    create(params: FieldTypeListInstanceCreateOptions, callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    create(params: any, callback?: any): Promise<FieldTypeInstance>;
    /**
     * Streams FieldTypeInstance records from the API.
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
    each(callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FieldTypeInstance records from the API.
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
     * @param { FieldTypeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FieldTypeListInstanceEachOptions, callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FieldTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FieldTypePage) => any): Promise<FieldTypePage>;
    /**
     * Retrieve a single target page of FieldTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FieldTypePage) => any): Promise<FieldTypePage>;
    getPage(params?: any, callback?: any): Promise<FieldTypePage>;
    /**
     * Lists FieldTypeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FieldTypeInstance[]) => any): Promise<FieldTypeInstance[]>;
    /**
     * Lists FieldTypeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldTypeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FieldTypeListInstanceOptions, callback?: (error: Error | null, items: FieldTypeInstance[]) => any): Promise<FieldTypeInstance[]>;
    list(params?: any, callback?: any): Promise<FieldTypeInstance[]>;
    /**
     * Retrieve a single page of FieldTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FieldTypePage) => any): Promise<FieldTypePage>;
    /**
     * Retrieve a single page of FieldTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldTypeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FieldTypeListInstancePageOptions, callback?: (error: Error | null, items: FieldTypePage) => any): Promise<FieldTypePage>;
    page(params?: any, callback?: any): Promise<FieldTypePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FieldTypeSolution {
    assistantSid?: string;
}
export declare function FieldTypeListInstance(version: V1, assistantSid: string): FieldTypeListInstance;
export declare class FieldTypePage extends Page<V1, FieldTypePayload, FieldTypeResource, FieldTypeInstance> {
    /**
     * Initialize the FieldTypePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: FieldTypeSolution);
    /**
     * Build an instance of FieldTypeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FieldTypeResource): FieldTypeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
