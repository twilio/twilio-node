/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { WorkflowCumulativeStatisticsListInstance } from "./workflow/workflowCumulativeStatistics";
import { WorkflowRealTimeStatisticsListInstance } from "./workflow/workflowRealTimeStatistics";
import { WorkflowStatisticsListInstance } from "./workflow/workflowStatistics";
/**
 * Options to pass to update a WorkflowInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the Workflow resource. For example, `Inbound Call Workflow` or `2014 Outbound Campaign`.
 * @property { string } [assignmentCallbackUrl] The URL from your application that will process task assignment events. See [Handling Task Assignment Callback](https://www.twilio.com/docs/taskrouter/handle-assignment-callbacks) for more details.
 * @property { string } [fallbackAssignmentCallbackUrl] The URL that we should call when a call to the `assignment_callback_url` fails.
 * @property { string } [configuration] A JSON string that contains the rules to apply to the Workflow. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information.
 * @property { number } [taskReservationTimeout] How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`.
 * @property { string } [reEvaluateTasks] Whether or not to re-evaluate Tasks. The default is `false`, which means Tasks in the Workflow will not be processed through the assignment loop again.
 */
export interface WorkflowContextUpdateOptions {
    friendlyName?: string;
    assignmentCallbackUrl?: string;
    fallbackAssignmentCallbackUrl?: string;
    configuration?: string;
    taskReservationTimeout?: number;
    reEvaluateTasks?: string;
}
/**
 * Options to pass to create a WorkflowInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Workflow resource. For example, `Inbound Call Workflow` or `2014 Outbound Campaign`.
 * @property { string } configuration A JSON string that contains the rules to apply to the Workflow. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information.
 * @property { string } [assignmentCallbackUrl] The URL from your application that will process task assignment events. See [Handling Task Assignment Callback](https://www.twilio.com/docs/taskrouter/handle-assignment-callbacks) for more details.
 * @property { string } [fallbackAssignmentCallbackUrl] The URL that we should call when a call to the `assignment_callback_url` fails.
 * @property { number } [taskReservationTimeout] How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`.
 */
export interface WorkflowListInstanceCreateOptions {
    friendlyName: string;
    configuration: string;
    assignmentCallbackUrl?: string;
    fallbackAssignmentCallbackUrl?: string;
    taskReservationTimeout?: number;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The `friendly_name` of the Workflow resources to read.
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
export interface WorkflowListInstanceEachOptions {
    friendlyName?: string;
    pageSize?: number;
    callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The `friendly_name` of the Workflow resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface WorkflowListInstanceOptions {
    friendlyName?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The `friendly_name` of the Workflow resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface WorkflowListInstancePageOptions {
    friendlyName?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface WorkflowContext {
    cumulativeStatistics: WorkflowCumulativeStatisticsListInstance;
    realTimeStatistics: WorkflowRealTimeStatisticsListInstance;
    statistics: WorkflowStatisticsListInstance;
    /**
     * Remove a WorkflowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a WorkflowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
    /**
     * Update a WorkflowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowInstance
     */
    update(callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
    /**
     * Update a WorkflowInstance
     *
     * @param { WorkflowContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowInstance
     */
    update(params: WorkflowContextUpdateOptions, callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
    update(params?: any, callback?: any): Promise<WorkflowInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkflowContextSolution {
    workspaceSid?: string;
    sid?: string;
}
export declare class WorkflowContextImpl implements WorkflowContext {
    protected _version: V1;
    protected _solution: WorkflowContextSolution;
    protected _uri: string;
    protected _cumulativeStatistics?: WorkflowCumulativeStatisticsListInstance;
    protected _realTimeStatistics?: WorkflowRealTimeStatisticsListInstance;
    protected _statistics?: WorkflowStatisticsListInstance;
    constructor(_version: V1, workspaceSid: string, sid: string);
    get cumulativeStatistics(): WorkflowCumulativeStatisticsListInstance;
    get realTimeStatistics(): WorkflowRealTimeStatisticsListInstance;
    get statistics(): WorkflowStatisticsListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<WorkflowInstance>;
    update(params?: any, callback?: any): Promise<WorkflowInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WorkflowContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WorkflowPayload extends TwilioResponsePayload {
    workflows: WorkflowResource[];
}
interface WorkflowResource {
    account_sid?: string | null;
    assignment_callback_url?: string | null;
    configuration?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    document_content_type?: string | null;
    fallback_assignment_callback_url?: string | null;
    friendly_name?: string | null;
    sid?: string | null;
    task_reservation_timeout?: number | null;
    workspace_sid?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class WorkflowInstance {
    protected _version: V1;
    protected _solution: WorkflowContextSolution;
    protected _context?: WorkflowContext;
    constructor(_version: V1, payload: WorkflowResource, workspaceSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The URL that we call when a task managed by the Workflow is assigned to a Worker
     */
    assignmentCallbackUrl?: string | null;
    /**
     * A JSON string that contains the Workflow\'s configuration
     */
    configuration?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The MIME type of the document
     */
    documentContentType?: string | null;
    /**
     * The URL that we call when a call to the `assignment_callback_url` fails
     */
    fallbackAssignmentCallbackUrl?: string | null;
    /**
     * The string that you assigned to describe the Workflow resource
     */
    friendlyName?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker
     */
    taskReservationTimeout?: number | null;
    /**
     * The SID of the Workspace that contains the Workflow
     */
    workspaceSid?: string | null;
    /**
     * The absolute URL of the Workflow resource
     */
    url?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a WorkflowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a WorkflowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowInstance
     */
    fetch(callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
    /**
     * Update a WorkflowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowInstance
     */
    update(callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
    /**
     * Update a WorkflowInstance
     *
     * @param { WorkflowContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowInstance
     */
    update(params: WorkflowContextUpdateOptions, callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
    /**
     * Access the cumulativeStatistics.
     */
    cumulativeStatistics(): WorkflowCumulativeStatisticsListInstance;
    /**
     * Access the realTimeStatistics.
     */
    realTimeStatistics(): WorkflowRealTimeStatisticsListInstance;
    /**
     * Access the statistics.
     */
    statistics(): WorkflowStatisticsListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        assignmentCallbackUrl: string | null | undefined;
        configuration: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        documentContentType: string | null | undefined;
        fallbackAssignmentCallbackUrl: string | null | undefined;
        friendlyName: string | null | undefined;
        sid: string | null | undefined;
        taskReservationTimeout: number | null | undefined;
        workspaceSid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WorkflowListInstance {
    (sid: string): WorkflowContext;
    get(sid: string): WorkflowContext;
    /**
     * Create a WorkflowInstance
     *
     * @param { WorkflowListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WorkflowInstance
     */
    create(params: WorkflowListInstanceCreateOptions, callback?: (error: Error | null, item?: WorkflowInstance) => any): Promise<WorkflowInstance>;
    create(params: any, callback?: any): Promise<WorkflowInstance>;
    /**
     * Streams WorkflowInstance records from the API.
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
    each(callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams WorkflowInstance records from the API.
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
     * @param { WorkflowListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: WorkflowListInstanceEachOptions, callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of WorkflowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: WorkflowPage) => any): Promise<WorkflowPage>;
    /**
     * Retrieve a single target page of WorkflowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkflowPage) => any): Promise<WorkflowPage>;
    getPage(params?: any, callback?: any): Promise<WorkflowPage>;
    /**
     * Lists WorkflowInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: WorkflowInstance[]) => any): Promise<WorkflowInstance[]>;
    /**
     * Lists WorkflowInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WorkflowListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: WorkflowListInstanceOptions, callback?: (error: Error | null, items: WorkflowInstance[]) => any): Promise<WorkflowInstance[]>;
    list(params?: any, callback?: any): Promise<WorkflowInstance[]>;
    /**
     * Retrieve a single page of WorkflowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: WorkflowPage) => any): Promise<WorkflowPage>;
    /**
     * Retrieve a single page of WorkflowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { WorkflowListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: WorkflowListInstancePageOptions, callback?: (error: Error | null, items: WorkflowPage) => any): Promise<WorkflowPage>;
    page(params?: any, callback?: any): Promise<WorkflowPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WorkflowSolution {
    workspaceSid?: string;
}
export declare function WorkflowListInstance(version: V1, workspaceSid: string): WorkflowListInstance;
export declare class WorkflowPage extends Page<V1, WorkflowPayload, WorkflowResource, WorkflowInstance> {
    /**
     * Initialize the WorkflowPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: WorkflowSolution);
    /**
     * Build an instance of WorkflowInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: WorkflowResource): WorkflowInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
