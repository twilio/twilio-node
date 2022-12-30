/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
/**
 * Options to pass to update a QueryInstance
 *
 * @property { string } [sampleSid] An optional reference to the Sample created from this query.
 * @property { string } [status] A string that described the query status. The values can be: pending_review, reviewed, discarded
 */
export interface QueryContextUpdateOptions {
    sampleSid?: string;
    status?: string;
}
/**
 * Options to pass to create a QueryInstance
 *
 * @property { string } language An ISO language-country string of the sample.
 * @property { string } query A user-provided string that uniquely identifies this resource as an alternative to the sid. It can be up to 2048 characters long.
 * @property { string } [tasks] Constraints the query to a set of tasks. Useful when you need to constrain the paths the user can take. Tasks should be comma separated *task-unique-name-1*, *task-unique-name-2*
 * @property { string } [modelBuild] The Model Build Sid or unique name of the Model Build to be queried.
 * @property { string } [field] Constraints the query to a given Field with an task. Useful when you know the Field you are expecting. It accepts one field in the format *task-unique-name-1*:*field-unique-name*
 */
export interface QueryListInstanceCreateOptions {
    language: string;
    query: string;
    tasks?: string;
    modelBuild?: string;
    field?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [language] An ISO language-country string of the sample.
 * @property { string } [modelBuild] The Model Build Sid or unique name of the Model Build to be queried.
 * @property { string } [status] A string that described the query status. The values can be: pending_review, reviewed, discarded
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
    pageSize?: number;
    callback?: (item: QueryInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [language] An ISO language-country string of the sample.
 * @property { string } [modelBuild] The Model Build Sid or unique name of the Model Build to be queried.
 * @property { string } [status] A string that described the query status. The values can be: pending_review, reviewed, discarded
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
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [language] An ISO language-country string of the sample.
 * @property { string } [modelBuild] The Model Build Sid or unique name of the Model Build to be queried.
 * @property { string } [status] A string that described the query status. The values can be: pending_review, reviewed, discarded
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface QueryListInstancePageOptions {
    language?: string;
    modelBuild?: string;
    status?: string;
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
    protected _version: Understand;
    protected _solution: QueryContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, sid: string);
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
}
export declare class QueryInstance {
    protected _version: Understand;
    protected _solution: QueryContextSolution;
    protected _context?: QueryContext;
    constructor(_version: Understand, payload: QueryResource, assistantSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Query.
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
     * The natural language analysis results which include the Task recognized, the confidence score and a list of identified Fields.
     */
    results?: any | null;
    /**
     * An ISO language-country string of the sample.
     */
    language?: string | null;
    /**
     * The unique ID of the Model Build queried.
     */
    modelBuildSid?: string | null;
    /**
     * The end-user\'s natural language input.
     */
    query?: string | null;
    /**
     * An optional reference to the Sample created from this query.
     */
    sampleSid?: string | null;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid?: string | null;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * A string that described the query status. The values can be: pending_review, reviewed, discarded
     */
    status?: string | null;
    url?: string | null;
    /**
     * The communication channel where this end-user input came from
     */
    sourceChannel?: string | null;
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
export declare function QueryListInstance(version: Understand, assistantSid: string): QueryListInstance;
export declare class QueryPage extends Page<Understand, QueryPayload, QueryResource, QueryInstance> {
    /**
     * Initialize the QueryPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: QuerySolution);
    /**
     * Build an instance of QueryInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: QueryResource): QueryInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
