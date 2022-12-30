/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Understand from "../../../Understand";
/**
 * Options to pass to create a FieldValueInstance
 *
 * @property { string } language An ISO language-country string of the value.
 * @property { string } value A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 * @property { string } [synonymOf] A value that indicates this field value is a synonym of. Empty if the value is not a synonym.
 */
export interface FieldValueListInstanceCreateOptions {
    language: string;
    value: string;
    synonymOf?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [language] An ISO language-country string of the value. For example: *en-US*
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
export interface FieldValueListInstanceEachOptions {
    language?: string;
    pageSize?: number;
    callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [language] An ISO language-country string of the value. For example: *en-US*
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface FieldValueListInstanceOptions {
    language?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [language] An ISO language-country string of the value. For example: *en-US*
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface FieldValueListInstancePageOptions {
    language?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FieldValueContext {
    /**
     * Remove a FieldValueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldValueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldValueInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FieldValueContextSolution {
    assistantSid?: string;
    fieldTypeSid?: string;
    sid?: string;
}
export declare class FieldValueContextImpl implements FieldValueContext {
    protected _version: Understand;
    protected _solution: FieldValueContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, fieldTypeSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<FieldValueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FieldValueContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FieldValuePayload extends TwilioResponsePayload {
    field_values: FieldValueResource[];
}
interface FieldValueResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    field_type_sid?: string | null;
    language?: string | null;
    assistant_sid?: string | null;
    sid?: string | null;
    value?: string | null;
    url?: string | null;
    synonym_of?: string | null;
}
export declare class FieldValueInstance {
    protected _version: Understand;
    protected _solution: FieldValueContextSolution;
    protected _context?: FieldValueContext;
    constructor(_version: Understand, payload: FieldValueResource, assistantSid: string, fieldTypeSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Field Value.
     */
    accountSid?: string | null;
    /**
     * The date that this resource was created
     */
    dateCreated?: Date | null;
    /**
     * The date that this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The unique ID of the Field Type associated with this Field Value.
     */
    fieldTypeSid?: string | null;
    /**
     * An ISO language-country string of the value.
     */
    language?: string | null;
    /**
     * The unique ID of the Assistant.
     */
    assistantSid?: string | null;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * The Field Value itself.
     */
    value?: string | null;
    url?: string | null;
    /**
     * A value that indicates this field value is a synonym of. Empty if the value is not a synonym.
     */
    synonymOf?: string | null;
    private get _proxy();
    /**
     * Remove a FieldValueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldValueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldValueInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        fieldTypeSid: string | null | undefined;
        language: string | null | undefined;
        assistantSid: string | null | undefined;
        sid: string | null | undefined;
        value: string | null | undefined;
        url: string | null | undefined;
        synonymOf: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FieldValueListInstance {
    (sid: string): FieldValueContext;
    get(sid: string): FieldValueContext;
    /**
     * Create a FieldValueInstance
     *
     * @param { FieldValueListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldValueInstance
     */
    create(params: FieldValueListInstanceCreateOptions, callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    create(params: any, callback?: any): Promise<FieldValueInstance>;
    /**
     * Streams FieldValueInstance records from the API.
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
    each(callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FieldValueInstance records from the API.
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
     * @param { FieldValueListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FieldValueListInstanceEachOptions, callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FieldValueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
    /**
     * Retrieve a single target page of FieldValueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
    getPage(params?: any, callback?: any): Promise<FieldValuePage>;
    /**
     * Lists FieldValueInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FieldValueInstance[]) => any): Promise<FieldValueInstance[]>;
    /**
     * Lists FieldValueInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldValueListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FieldValueListInstanceOptions, callback?: (error: Error | null, items: FieldValueInstance[]) => any): Promise<FieldValueInstance[]>;
    list(params?: any, callback?: any): Promise<FieldValueInstance[]>;
    /**
     * Retrieve a single page of FieldValueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
    /**
     * Retrieve a single page of FieldValueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldValueListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FieldValueListInstancePageOptions, callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
    page(params?: any, callback?: any): Promise<FieldValuePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FieldValueSolution {
    assistantSid?: string;
    fieldTypeSid?: string;
}
export declare function FieldValueListInstance(version: Understand, assistantSid: string, fieldTypeSid: string): FieldValueListInstance;
export declare class FieldValuePage extends Page<Understand, FieldValuePayload, FieldValueResource, FieldValueInstance> {
    /**
     * Initialize the FieldValuePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: FieldValueSolution);
    /**
     * Build an instance of FieldValueInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FieldValueResource): FieldValueInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
