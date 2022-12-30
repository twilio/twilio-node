/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to create a FieldInstance
 *
 * @property { string } fieldType The Field Type of the new field. Can be: a [Built-in Field Type](https://www.twilio.com/docs/autopilot/built-in-field-types), the `unique_name`, or the `sid` of a custom Field Type.
 * @property { string } uniqueName An application-defined string that uniquely identifies the new resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource.
 */
export interface FieldListInstanceCreateOptions {
    fieldType: string;
    uniqueName: string;
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
export interface FieldListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: FieldInstance, done: (err?: Error) => void) => void;
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
export interface FieldListInstanceOptions {
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
export interface FieldListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FieldContext {
    /**
     * Remove a FieldInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldInstance) => any): Promise<FieldInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FieldContextSolution {
    assistantSid?: string;
    taskSid?: string;
    sid?: string;
}
export declare class FieldContextImpl implements FieldContext {
    protected _version: V1;
    protected _solution: FieldContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, taskSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<FieldInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FieldContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FieldPayload extends TwilioResponsePayload {
    fields: FieldResource[];
}
interface FieldResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    field_type?: string | null;
    task_sid?: string | null;
    assistant_sid?: string | null;
    sid?: string | null;
    unique_name?: string | null;
    url?: string | null;
}
export declare class FieldInstance {
    protected _version: V1;
    protected _solution: FieldContextSolution;
    protected _context?: FieldContext;
    constructor(_version: V1, payload: FieldResource, assistantSid: string, taskSid: string, sid?: string);
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
     * The Field Type of the field
     */
    fieldType?: string | null;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with this Field
     */
    taskSid?: string | null;
    /**
     * The SID of the Assistant that is the parent of the Task associated with the resource
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
     * The absolute URL of the Field resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a FieldInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldInstance) => any): Promise<FieldInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        fieldType: string | null | undefined;
        taskSid: string | null | undefined;
        assistantSid: string | null | undefined;
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FieldListInstance {
    (sid: string): FieldContext;
    get(sid: string): FieldContext;
    /**
     * Create a FieldInstance
     *
     * @param { FieldListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldInstance
     */
    create(params: FieldListInstanceCreateOptions, callback?: (error: Error | null, item?: FieldInstance) => any): Promise<FieldInstance>;
    create(params: any, callback?: any): Promise<FieldInstance>;
    /**
     * Streams FieldInstance records from the API.
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
    each(callback?: (item: FieldInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FieldInstance records from the API.
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
     * @param { FieldListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FieldListInstanceEachOptions, callback?: (item: FieldInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FieldInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
    /**
     * Retrieve a single target page of FieldInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
    getPage(params?: any, callback?: any): Promise<FieldPage>;
    /**
     * Lists FieldInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FieldInstance[]) => any): Promise<FieldInstance[]>;
    /**
     * Lists FieldInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FieldListInstanceOptions, callback?: (error: Error | null, items: FieldInstance[]) => any): Promise<FieldInstance[]>;
    list(params?: any, callback?: any): Promise<FieldInstance[]>;
    /**
     * Retrieve a single page of FieldInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
    /**
     * Retrieve a single page of FieldInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FieldListInstancePageOptions, callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
    page(params?: any, callback?: any): Promise<FieldPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FieldSolution {
    assistantSid?: string;
    taskSid?: string;
}
export declare function FieldListInstance(version: V1, assistantSid: string, taskSid: string): FieldListInstance;
export declare class FieldPage extends Page<V1, FieldPayload, FieldResource, FieldInstance> {
    /**
     * Initialize the FieldPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: FieldSolution);
    /**
     * Build an instance of FieldInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FieldResource): FieldInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
