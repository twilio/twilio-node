/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { DefaultsListInstance } from "./assistant/defaults";
import { DialogueListInstance } from "./assistant/dialogue";
import { FieldTypeListInstance } from "./assistant/fieldType";
import { ModelBuildListInstance } from "./assistant/modelBuild";
import { QueryListInstance } from "./assistant/query";
import { StyleSheetListInstance } from "./assistant/styleSheet";
import { TaskListInstance } from "./assistant/task";
import { WebhookListInstance } from "./assistant/webhook";
/**
 * Options to pass to update a AssistantInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { boolean } [logQueries] Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique.
 * @property { string } [callbackUrl] Reserved.
 * @property { string } [callbackEvents] Reserved.
 * @property { any } [styleSheet] The JSON string that defines the Assistant\\\'s [style sheet](https://www.twilio.com/docs/autopilot/api/assistant/stylesheet)
 * @property { any } [defaults] A JSON object that defines the Assistant\\\'s [default tasks](https://www.twilio.com/docs/autopilot/api/assistant/defaults) for various scenarios, including initiation actions and fallback tasks.
 * @property { string } [developmentStage] A string describing the state of the assistant.
 */
export interface AssistantContextUpdateOptions {
    friendlyName?: string;
    logQueries?: boolean;
    uniqueName?: string;
    callbackUrl?: string;
    callbackEvents?: string;
    styleSheet?: any;
    defaults?: any;
    developmentStage?: string;
}
/**
 * Options to pass to create a AssistantInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the new resource. It is not unique and can be up to 255 characters long.
 * @property { boolean } [logQueries] Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the new resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique.
 * @property { string } [callbackUrl] Reserved.
 * @property { string } [callbackEvents] Reserved.
 * @property { any } [styleSheet] The JSON string that defines the Assistant\\\'s [style sheet](https://www.twilio.com/docs/autopilot/api/assistant/stylesheet)
 * @property { any } [defaults] A JSON object that defines the Assistant\\\'s [default tasks](https://www.twilio.com/docs/autopilot/api/assistant/defaults) for various scenarios, including initiation actions and fallback tasks.
 */
export interface AssistantListInstanceCreateOptions {
    friendlyName?: string;
    logQueries?: boolean;
    uniqueName?: string;
    callbackUrl?: string;
    callbackEvents?: string;
    styleSheet?: any;
    defaults?: any;
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
export interface AssistantListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AssistantInstance, done: (err?: Error) => void) => void;
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
export interface AssistantListInstanceOptions {
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
export interface AssistantListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AssistantContext {
    defaults: DefaultsListInstance;
    dialogues: DialogueListInstance;
    fieldTypes: FieldTypeListInstance;
    modelBuilds: ModelBuildListInstance;
    queries: QueryListInstance;
    styleSheet: StyleSheetListInstance;
    tasks: TaskListInstance;
    webhooks: WebhookListInstance;
    /**
     * Remove a AssistantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AssistantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Update a AssistantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInstance
     */
    update(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Update a AssistantInstance
     *
     * @param { AssistantContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInstance
     */
    update(params: AssistantContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    update(params?: any, callback?: any): Promise<AssistantInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantContextSolution {
    sid?: string;
}
export declare class AssistantContextImpl implements AssistantContext {
    protected _version: V1;
    protected _solution: AssistantContextSolution;
    protected _uri: string;
    protected _defaults?: DefaultsListInstance;
    protected _dialogues?: DialogueListInstance;
    protected _fieldTypes?: FieldTypeListInstance;
    protected _modelBuilds?: ModelBuildListInstance;
    protected _queries?: QueryListInstance;
    protected _styleSheet?: StyleSheetListInstance;
    protected _tasks?: TaskListInstance;
    protected _webhooks?: WebhookListInstance;
    constructor(_version: V1, sid: string);
    get defaults(): DefaultsListInstance;
    get dialogues(): DialogueListInstance;
    get fieldTypes(): FieldTypeListInstance;
    get modelBuilds(): ModelBuildListInstance;
    get queries(): QueryListInstance;
    get styleSheet(): StyleSheetListInstance;
    get tasks(): TaskListInstance;
    get webhooks(): WebhookListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<AssistantInstance>;
    update(params?: any, callback?: any): Promise<AssistantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssistantContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssistantPayload extends TwilioResponsePayload {
    assistants: AssistantResource[];
}
interface AssistantResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    latest_model_build_sid?: string | null;
    links?: object | null;
    log_queries?: boolean | null;
    development_stage?: string | null;
    needs_model_build?: boolean | null;
    sid?: string | null;
    unique_name?: string | null;
    url?: string | null;
    callback_url?: string | null;
    callback_events?: string | null;
}
export declare class AssistantInstance {
    protected _version: V1;
    protected _solution: AssistantContextSolution;
    protected _context?: AssistantContext;
    constructor(_version: V1, payload: AssistantResource, sid?: string);
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
     * Reserved
     */
    latestModelBuildSid?: string | null;
    /**
     * A list of the URLs of the Assistant\'s related resources
     */
    links?: object | null;
    /**
     * Whether queries should be logged and kept after training
     */
    logQueries?: boolean | null;
    /**
     * A string describing the state of the assistant.
     */
    developmentStage?: string | null;
    /**
     * Whether model needs to be rebuilt
     */
    needsModelBuild?: boolean | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The absolute URL of the Assistant resource
     */
    url?: string | null;
    /**
     * Reserved
     */
    callbackUrl?: string | null;
    /**
     * Reserved
     */
    callbackEvents?: string | null;
    private get _proxy();
    /**
     * Remove a AssistantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AssistantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Update a AssistantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInstance
     */
    update(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Update a AssistantInstance
     *
     * @param { AssistantContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInstance
     */
    update(params: AssistantContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Access the defaults.
     */
    defaults(): DefaultsListInstance;
    /**
     * Access the dialogues.
     */
    dialogues(): DialogueListInstance;
    /**
     * Access the fieldTypes.
     */
    fieldTypes(): FieldTypeListInstance;
    /**
     * Access the modelBuilds.
     */
    modelBuilds(): ModelBuildListInstance;
    /**
     * Access the queries.
     */
    queries(): QueryListInstance;
    /**
     * Access the styleSheet.
     */
    styleSheet(): StyleSheetListInstance;
    /**
     * Access the tasks.
     */
    tasks(): TaskListInstance;
    /**
     * Access the webhooks.
     */
    webhooks(): WebhookListInstance;
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
        latestModelBuildSid: string | null | undefined;
        links: object | null | undefined;
        logQueries: boolean | null | undefined;
        developmentStage: string | null | undefined;
        needsModelBuild: boolean | null | undefined;
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        url: string | null | undefined;
        callbackUrl: string | null | undefined;
        callbackEvents: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AssistantListInstance {
    (sid: string): AssistantContext;
    get(sid: string): AssistantContext;
    /**
     * Create a AssistantInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInstance
     */
    create(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Create a AssistantInstance
     *
     * @param { AssistantListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInstance
     */
    create(params: AssistantListInstanceCreateOptions, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    create(params?: any, callback?: any): Promise<AssistantInstance>;
    /**
     * Streams AssistantInstance records from the API.
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
    each(callback?: (item: AssistantInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AssistantInstance records from the API.
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
     * @param { AssistantListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AssistantListInstanceEachOptions, callback?: (item: AssistantInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AssistantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
    /**
     * Retrieve a single target page of AssistantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
    getPage(params?: any, callback?: any): Promise<AssistantPage>;
    /**
     * Lists AssistantInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AssistantInstance[]) => any): Promise<AssistantInstance[]>;
    /**
     * Lists AssistantInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssistantListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AssistantListInstanceOptions, callback?: (error: Error | null, items: AssistantInstance[]) => any): Promise<AssistantInstance[]>;
    list(params?: any, callback?: any): Promise<AssistantInstance[]>;
    /**
     * Retrieve a single page of AssistantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
    /**
     * Retrieve a single page of AssistantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssistantListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AssistantListInstancePageOptions, callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
    page(params?: any, callback?: any): Promise<AssistantPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantSolution {
}
export declare function AssistantListInstance(version: V1): AssistantListInstance;
export declare class AssistantPage extends Page<V1, AssistantPayload, AssistantResource, AssistantInstance> {
    /**
     * Initialize the AssistantPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: AssistantSolution);
    /**
     * Build an instance of AssistantInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AssistantResource): AssistantInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
