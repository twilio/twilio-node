/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to update a QueryInstance
 *
 * @property { string } [sampleSid] The SID of an optional reference to the [Sample](https://www.twilio.com/docs/autopilot/api/task-sample) created from the query.
 * @property { string } [status] The new status of the resource. Can be: `pending-review`, `reviewed`, or `discarded`
 */
export interface QueryContextUpdateOptions {
    sampleSid?: string;
    status?: string;
}
/**
 * Options to pass to create a QueryInstance
 *
 * @property { string } language The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the new query. For example: `en-US`.
 * @property { string } query The end-user\\\'s natural language input. It can be up to 2048 characters long.
 * @property { string } [tasks] The list of tasks to limit the new query to. Tasks are expressed as a comma-separated list of task `unique_name` values. For example, `task-unique_name-1, task-unique_name-2`. Listing specific tasks is useful to constrain the paths that a user can take.
 * @property { string } [modelBuild] The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 */
export interface QueryListInstanceCreateOptions {
    language: string;
    query: string;
    tasks?: string;
    modelBuild?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`.
 * @property { string } [modelBuild] The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 * @property { string } [status] The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded`
 * @property { string } [dialogueSid] The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
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
export interface QueryListInstanceEachOptions {
    language?: string;
    modelBuild?: string;
    status?: string;
    dialogueSid?: string;
    pageSize?: number;
    callback?: (item: QueryInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`.
 * @property { string } [modelBuild] The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 * @property { string } [status] The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded`
 * @property { string } [dialogueSid] The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface QueryListInstanceOptions {
    language?: string;
    modelBuild?: string;
    status?: string;
    dialogueSid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`.
 * @property { string } [modelBuild] The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 * @property { string } [status] The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded`
 * @property { string } [dialogueSid] The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface QueryListInstancePageOptions {
    language?: string;
    modelBuild?: string;
    status?: string;
    dialogueSid?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface QueryContext {
    /**
     * Remove a QueryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a QueryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueryInstance
     */
    fetch(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Update a QueryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueryInstance
     */
    update(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Update a QueryInstance
     *
     * @param { QueryContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueryInstance
     */
    update(params: QueryContextUpdateOptions, callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    update(params?: any, callback?: any): Promise<QueryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface QueryContextSolution {
    assistantSid?: string;
    sid?: string;
}
export declare class QueryContextImpl implements QueryContext {
    protected _version: V1;
    protected _solution: QueryContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<QueryInstance>;
    update(params?: any, callback?: any): Promise<QueryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): QueryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface QueryPayload extends TwilioResponsePayload {
    queries: QueryResource[];
}
interface QueryResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    results?: any | null;
    language?: string | null;
    model_build_sid?: string | null;
    query?: string | null;
    sample_sid?: string | null;
    assistant_sid?: string | null;
    sid?: string | null;
    status?: string | null;
    url?: string | null;
    source_channel?: string | null;
    dialogue_sid?: string | null;
}
export declare class QueryInstance {
    protected _version: V1;
    protected _solution: QueryContextSolution;
    protected _context?: QueryContext;
    constructor(_version: V1, payload: QueryResource, assistantSid: string, sid?: string);
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
     * The natural language analysis results that include the Task recognized and a list of identified Fields
     */
    results?: any | null;
    /**
     * The ISO language-country string that specifies the language used by the Query
     */
    language?: string | null;
    /**
     * The SID of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) queried
     */
    modelBuildSid?: string | null;
    /**
     * The end-user\'s natural language input
     */
    query?: string | null;
    /**
     * The SID of an optional reference to the Sample created from the query
     */
    sampleSid?: string | null;
    /**
     * The SID of the Assistant that is the parent of the resource
     */
    assistantSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The status of the Query
     */
    status?: string | null;
    /**
     * The absolute URL of the Query resource
     */
    url?: string | null;
    /**
     * The communication channel from where the end-user input came
     */
    sourceChannel?: string | null;
    /**
     * The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
     */
    dialogueSid?: string | null;
    private get _proxy();
    /**
     * Remove a QueryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a QueryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueryInstance
     */
    fetch(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Update a QueryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueryInstance
     */
    update(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Update a QueryInstance
     *
     * @param { QueryContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueryInstance
     */
    update(params: QueryContextUpdateOptions, callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        results: any;
        language: string | null | undefined;
        modelBuildSid: string | null | undefined;
        query: string | null | undefined;
        sampleSid: string | null | undefined;
        assistantSid: string | null | undefined;
        sid: string | null | undefined;
        status: string | null | undefined;
        url: string | null | undefined;
        sourceChannel: string | null | undefined;
        dialogueSid: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface QueryListInstance {
    (sid: string): QueryContext;
    get(sid: string): QueryContext;
    /**
     * Create a QueryInstance
     *
     * @param { QueryListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueryInstance
     */
    create(params: QueryListInstanceCreateOptions, callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    create(params: any, callback?: any): Promise<QueryInstance>;
    /**
     * Streams QueryInstance records from the API.
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
    each(callback?: (item: QueryInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams QueryInstance records from the API.
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
     * @param { QueryListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: QueryListInstanceEachOptions, callback?: (item: QueryInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of QueryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
    /**
     * Retrieve a single target page of QueryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
    getPage(params?: any, callback?: any): Promise<QueryPage>;
    /**
     * Lists QueryInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: QueryInstance[]) => any): Promise<QueryInstance[]>;
    /**
     * Lists QueryInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { QueryListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: QueryListInstanceOptions, callback?: (error: Error | null, items: QueryInstance[]) => any): Promise<QueryInstance[]>;
    list(params?: any, callback?: any): Promise<QueryInstance[]>;
    /**
     * Retrieve a single page of QueryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
    /**
     * Retrieve a single page of QueryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { QueryListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: QueryListInstancePageOptions, callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
    page(params?: any, callback?: any): Promise<QueryPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface QuerySolution {
    assistantSid?: string;
}
export declare function QueryListInstance(version: V1, assistantSid: string): QueryListInstance;
export declare class QueryPage extends Page<V1, QueryPayload, QueryResource, QueryInstance> {
    /**
     * Initialize the QueryPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: QuerySolution);
    /**
     * Build an instance of QueryInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: QueryResource): QueryInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
