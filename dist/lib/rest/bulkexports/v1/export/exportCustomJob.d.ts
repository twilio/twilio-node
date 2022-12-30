/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to create a ExportCustomJobInstance
 *
 * @property { string } startDay The start day for the custom export specified as a string in the format of yyyy-mm-dd
 * @property { string } endDay The end day for the custom export specified as a string in the format of yyyy-mm-dd. End day is inclusive and must be 2 days earlier than the current UTC day.
 * @property { string } friendlyName The friendly name specified when creating the job
 * @property { string } [webhookUrl] The optional webhook url called on completion of the job. If this is supplied, `WebhookMethod` must also be supplied. If you set neither webhook nor email, you will have to check your job\\\'s status manually.
 * @property { string } [webhookMethod] This is the method used to call the webhook on completion of the job. If this is supplied, `WebhookUrl` must also be supplied.
 * @property { string } [email] The optional email to send the completion notification to. You can set both webhook, and email, or one or the other. If you set neither, the job will run but you will have to query to determine your job\\\'s status.
 */
export interface ExportCustomJobListInstanceCreateOptions {
    startDay: string;
    endDay: string;
    friendlyName: string;
    webhookUrl?: string;
    webhookMethod?: string;
    email?: string;
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
export interface ExportCustomJobListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ExportCustomJobInstance, done: (err?: Error) => void) => void;
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
export interface ExportCustomJobListInstanceOptions {
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
export interface ExportCustomJobListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ExportCustomJobListInstance {
    /**
     * Create a ExportCustomJobInstance
     *
     * @param { ExportCustomJobListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExportCustomJobInstance
     */
    create(params: ExportCustomJobListInstanceCreateOptions, callback?: (error: Error | null, item?: ExportCustomJobInstance) => any): Promise<ExportCustomJobInstance>;
    create(params: any, callback?: any): Promise<ExportCustomJobInstance>;
    /**
     * Streams ExportCustomJobInstance records from the API.
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
    each(callback?: (item: ExportCustomJobInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ExportCustomJobInstance records from the API.
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
     * @param { ExportCustomJobListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ExportCustomJobListInstanceEachOptions, callback?: (item: ExportCustomJobInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ExportCustomJobInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ExportCustomJobPage) => any): Promise<ExportCustomJobPage>;
    /**
     * Retrieve a single target page of ExportCustomJobInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ExportCustomJobPage) => any): Promise<ExportCustomJobPage>;
    getPage(params?: any, callback?: any): Promise<ExportCustomJobPage>;
    /**
     * Lists ExportCustomJobInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ExportCustomJobInstance[]) => any): Promise<ExportCustomJobInstance[]>;
    /**
     * Lists ExportCustomJobInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ExportCustomJobListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ExportCustomJobListInstanceOptions, callback?: (error: Error | null, items: ExportCustomJobInstance[]) => any): Promise<ExportCustomJobInstance[]>;
    list(params?: any, callback?: any): Promise<ExportCustomJobInstance[]>;
    /**
     * Retrieve a single page of ExportCustomJobInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ExportCustomJobPage) => any): Promise<ExportCustomJobPage>;
    /**
     * Retrieve a single page of ExportCustomJobInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ExportCustomJobListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ExportCustomJobListInstancePageOptions, callback?: (error: Error | null, items: ExportCustomJobPage) => any): Promise<ExportCustomJobPage>;
    page(params?: any, callback?: any): Promise<ExportCustomJobPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExportCustomJobSolution {
    resourceType?: string;
}
export declare function ExportCustomJobListInstance(version: V1, resourceType: string): ExportCustomJobListInstance;
interface ExportCustomJobPayload extends TwilioResponsePayload {
    jobs: ExportCustomJobResource[];
}
interface ExportCustomJobResource {
    friendly_name?: string | null;
    resource_type?: string | null;
    start_day?: string | null;
    end_day?: string | null;
    webhook_url?: string | null;
    webhook_method?: string | null;
    email?: string | null;
    job_sid?: string | null;
    details?: any | null;
    job_queue_position?: string | null;
    estimated_completion_time?: string | null;
}
export declare class ExportCustomJobInstance {
    protected _version: V1;
    constructor(_version: V1, payload: ExportCustomJobResource, resourceType: string);
    /**
     * The friendly name specified when creating the job
     */
    friendlyName?: string | null;
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType?: string | null;
    /**
     * The start day for the custom export specified as a string in the format of yyyy-MM-dd
     */
    startDay?: string | null;
    /**
     * The end day for the custom export specified as a string in the format of yyyy-MM-dd. This will be the last day exported. For instance, to export a single day, choose the same day for start and end day. To export the first 4 days of July, you would set the start date to 2020-07-01 and the end date to 2020-07-04. The end date must be the UTC day before yesterday.
     */
    endDay?: string | null;
    /**
     * The optional webhook url called on completion
     */
    webhookUrl?: string | null;
    /**
     * This is the method used to call the webhook
     */
    webhookMethod?: string | null;
    /**
     * The optional email to send the completion notification to
     */
    email?: string | null;
    /**
     * The unique job_sid returned when the custom export was created. This can be used to look up the status of the job.
     */
    jobSid?: string | null;
    /**
     * The details of a job state which is an object that contains a `status` string, a day count integer, and list of days in the job
     */
    details?: any | null;
    /**
     * This is the job position from the 1st in line. Your queue position will never increase. As jobs ahead of yours in the queue are processed, the queue position number will decrease
     */
    jobQueuePosition?: string | null;
    /**
     * this is the time estimated until your job is complete. This is calculated each time you request the job list. The time is calculated based on the current rate of job completion (which may vary) and your job queue position
     */
    estimatedCompletionTime?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        friendlyName: string | null | undefined;
        resourceType: string | null | undefined;
        startDay: string | null | undefined;
        endDay: string | null | undefined;
        webhookUrl: string | null | undefined;
        webhookMethod: string | null | undefined;
        email: string | null | undefined;
        jobSid: string | null | undefined;
        details: any;
        jobQueuePosition: string | null | undefined;
        estimatedCompletionTime: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class ExportCustomJobPage extends Page<V1, ExportCustomJobPayload, ExportCustomJobResource, ExportCustomJobInstance> {
    /**
     * Initialize the ExportCustomJobPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ExportCustomJobSolution);
    /**
     * Build an instance of ExportCustomJobInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ExportCustomJobResource): ExportCustomJobInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
