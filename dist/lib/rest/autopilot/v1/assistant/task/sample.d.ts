/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to update a SampleInstance
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`.
 * @property { string } [taggedText] The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging).
 * @property { string } [sourceChannel] The communication channel from which the sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included.
 */
export interface SampleContextUpdateOptions {
    language?: string;
    taggedText?: string;
    sourceChannel?: string;
}
/**
 * Options to pass to create a SampleInstance
 *
 * @property { string } language The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the new sample. For example: `en-US`.
 * @property { string } taggedText The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging).
 * @property { string } [sourceChannel] The communication channel from which the new sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included.
 */
export interface SampleListInstanceCreateOptions {
    language: string;
    taggedText: string;
    sourceChannel?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`.
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
export interface SampleListInstanceEachOptions {
    language?: string;
    pageSize?: number;
    callback?: (item: SampleInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SampleListInstanceOptions {
    language?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SampleListInstancePageOptions {
    language?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SampleContext {
    /**
     * Remove a SampleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SampleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SampleInstance
     */
    fetch(callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Update a SampleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SampleInstance
     */
    update(callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Update a SampleInstance
     *
     * @param { SampleContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SampleInstance
     */
    update(params: SampleContextUpdateOptions, callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    update(params?: any, callback?: any): Promise<SampleInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SampleContextSolution {
    assistantSid?: string;
    taskSid?: string;
    sid?: string;
}
export declare class SampleContextImpl implements SampleContext {
    protected _version: V1;
    protected _solution: SampleContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, taskSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SampleInstance>;
    update(params?: any, callback?: any): Promise<SampleInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SampleContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SamplePayload extends TwilioResponsePayload {
    samples: SampleResource[];
}
interface SampleResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    task_sid?: string | null;
    language?: string | null;
    assistant_sid?: string | null;
    sid?: string | null;
    tagged_text?: string | null;
    url?: string | null;
    source_channel?: string | null;
}
export declare class SampleInstance {
    protected _version: V1;
    protected _solution: SampleContextSolution;
    protected _context?: SampleContext;
    constructor(_version: V1, payload: SampleResource, assistantSid: string, taskSid: string, sid?: string);
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
     * The SID of the Task associated with the resource
     */
    taskSid?: string | null;
    /**
     * An ISO language-country string that specifies the language used for the sample
     */
    language?: string | null;
    /**
     * The SID of the Assistant that is the parent of the Task associated with the resource
     */
    assistantSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The text example of how end users might express the task
     */
    taggedText?: string | null;
    /**
     * The absolute URL of the Sample resource
     */
    url?: string | null;
    /**
     * The communication channel from which the sample was captured
     */
    sourceChannel?: string | null;
    private get _proxy();
    /**
     * Remove a SampleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SampleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SampleInstance
     */
    fetch(callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Update a SampleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SampleInstance
     */
    update(callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Update a SampleInstance
     *
     * @param { SampleContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SampleInstance
     */
    update(params: SampleContextUpdateOptions, callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        taskSid: string | null | undefined;
        language: string | null | undefined;
        assistantSid: string | null | undefined;
        sid: string | null | undefined;
        taggedText: string | null | undefined;
        url: string | null | undefined;
        sourceChannel: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SampleListInstance {
    (sid: string): SampleContext;
    get(sid: string): SampleContext;
    /**
     * Create a SampleInstance
     *
     * @param { SampleListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SampleInstance
     */
    create(params: SampleListInstanceCreateOptions, callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    create(params: any, callback?: any): Promise<SampleInstance>;
    /**
     * Streams SampleInstance records from the API.
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
    each(callback?: (item: SampleInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SampleInstance records from the API.
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
     * @param { SampleListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SampleListInstanceEachOptions, callback?: (item: SampleInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SampleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SamplePage) => any): Promise<SamplePage>;
    /**
     * Retrieve a single target page of SampleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SamplePage) => any): Promise<SamplePage>;
    getPage(params?: any, callback?: any): Promise<SamplePage>;
    /**
     * Lists SampleInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SampleInstance[]) => any): Promise<SampleInstance[]>;
    /**
     * Lists SampleInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SampleListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SampleListInstanceOptions, callback?: (error: Error | null, items: SampleInstance[]) => any): Promise<SampleInstance[]>;
    list(params?: any, callback?: any): Promise<SampleInstance[]>;
    /**
     * Retrieve a single page of SampleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SamplePage) => any): Promise<SamplePage>;
    /**
     * Retrieve a single page of SampleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SampleListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SampleListInstancePageOptions, callback?: (error: Error | null, items: SamplePage) => any): Promise<SamplePage>;
    page(params?: any, callback?: any): Promise<SamplePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SampleSolution {
    assistantSid?: string;
    taskSid?: string;
}
export declare function SampleListInstance(version: V1, assistantSid: string, taskSid: string): SampleListInstance;
export declare class SamplePage extends Page<V1, SamplePayload, SampleResource, SampleInstance> {
    /**
     * Initialize the SamplePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SampleSolution);
    /**
     * Build an instance of SampleInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SampleResource): SampleInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
