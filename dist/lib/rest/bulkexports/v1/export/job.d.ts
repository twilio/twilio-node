/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export interface JobContext {
    /**
     * Remove a JobInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a JobInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed JobInstance
     */
    fetch(callback?: (error: Error | null, item?: JobInstance) => any): Promise<JobInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface JobContextSolution {
    jobSid?: string;
}
export declare class JobContextImpl implements JobContext {
    protected _version: V1;
    protected _solution: JobContextSolution;
    protected _uri: string;
    constructor(_version: V1, jobSid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<JobInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): JobContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface JobResource {
    resource_type?: string | null;
    friendly_name?: string | null;
    details?: any | null;
    start_day?: string | null;
    end_day?: string | null;
    job_sid?: string | null;
    webhook_url?: string | null;
    webhook_method?: string | null;
    email?: string | null;
    url?: string | null;
    job_queue_position?: string | null;
    estimated_completion_time?: string | null;
}
export declare class JobInstance {
    protected _version: V1;
    protected _solution: JobContextSolution;
    protected _context?: JobContext;
    constructor(_version: V1, payload: JobResource, jobSid?: string);
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType?: string | null;
    /**
     * The friendly name specified when creating the job
     */
    friendlyName?: string | null;
    /**
     * The details of a job state which is an object that contains a `status` string, a day count integer, and list of days in the job
     */
    details?: any | null;
    /**
     * The start time for the export specified when creating the job
     */
    startDay?: string | null;
    /**
     * The end time for the export specified when creating the job
     */
    endDay?: string | null;
    /**
     * The job_sid returned when the export was created
     */
    jobSid?: string | null;
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
    url?: string | null;
    /**
     * This is the job position from the 1st in line. Your queue position will never increase. As jobs ahead of yours in the queue are processed, the queue position number will decrease
     */
    jobQueuePosition?: string | null;
    /**
     * this is the time estimated until your job is complete. This is calculated each time you request the job list. The time is calculated based on the current rate of job completion (which may vary) and your job queue position
     */
    estimatedCompletionTime?: string | null;
    private get _proxy();
    /**
     * Remove a JobInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a JobInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed JobInstance
     */
    fetch(callback?: (error: Error | null, item?: JobInstance) => any): Promise<JobInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        resourceType: string | null | undefined;
        friendlyName: string | null | undefined;
        details: any;
        startDay: string | null | undefined;
        endDay: string | null | undefined;
        jobSid: string | null | undefined;
        webhookUrl: string | null | undefined;
        webhookMethod: string | null | undefined;
        email: string | null | undefined;
        url: string | null | undefined;
        jobQueuePosition: string | null | undefined;
        estimatedCompletionTime: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface JobListInstance {
    (jobSid: string): JobContext;
    get(jobSid: string): JobContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface JobSolution {
}
export declare function JobListInstance(version: V1): JobListInstance;
export {};
