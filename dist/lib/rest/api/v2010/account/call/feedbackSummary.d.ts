/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
declare type CallFeedbackSummaryStatus = "queued" | "in-progress" | "completed" | "failed";
/**
 * Options to pass to create a FeedbackSummaryInstance
 *
 * @property { Date } startDate Only include feedback given on or after this date. Format is `YYYY-MM-DD` and specified in UTC.
 * @property { Date } endDate Only include feedback given on or before this date. Format is `YYYY-MM-DD` and specified in UTC.
 * @property { boolean } [includeSubaccounts] Whether to also include Feedback resources from all subaccounts. `true` includes feedback from all subaccounts and `false`, the default, includes feedback from only the specified account.
 * @property { string } [statusCallback] The URL that we will request when the feedback summary is complete.
 * @property { string } [statusCallbackMethod] The HTTP method (`GET` or `POST`) we use to make the request to the `StatusCallback` URL.
 */
export interface FeedbackSummaryListInstanceCreateOptions {
    startDate: Date;
    endDate: Date;
    includeSubaccounts?: boolean;
    statusCallback?: string;
    statusCallbackMethod?: string;
}
export interface FeedbackSummaryContext {
    /**
     * Remove a FeedbackSummaryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FeedbackSummaryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackSummaryInstance
     */
    fetch(callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any): Promise<FeedbackSummaryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FeedbackSummaryContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class FeedbackSummaryContextImpl implements FeedbackSummaryContext {
    protected _version: V2010;
    protected _solution: FeedbackSummaryContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<FeedbackSummaryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FeedbackSummaryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FeedbackSummaryResource {
    account_sid?: string | null;
    call_count?: number | null;
    call_feedback_count?: number | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    end_date?: Date | null;
    include_subaccounts?: boolean | null;
    issues?: Array<any> | null;
    quality_score_average?: number | null;
    quality_score_median?: number | null;
    quality_score_standard_deviation?: number | null;
    sid?: string | null;
    start_date?: Date | null;
    status?: CallFeedbackSummaryStatus;
}
export declare class FeedbackSummaryInstance {
    protected _version: V2010;
    protected _solution: FeedbackSummaryContextSolution;
    protected _context?: FeedbackSummaryContext;
    constructor(_version: V2010, payload: FeedbackSummaryResource, accountSid: string, sid?: string);
    /**
     * The unique sid that identifies this account
     */
    accountSid?: string | null;
    /**
     * The total number of calls
     */
    callCount?: number | null;
    /**
     * The total number of calls with a feedback entry
     */
    callFeedbackCount?: number | null;
    /**
     * The date this resource was created
     */
    dateCreated?: Date | null;
    /**
     * The date this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The latest feedback entry date in the summary
     */
    endDate?: Date | null;
    /**
     * Whether the feedback summary includes subaccounts
     */
    includeSubaccounts?: boolean | null;
    /**
     * Issues experienced during the call
     */
    issues?: Array<any> | null;
    /**
     * The average QualityScore of the feedback entries
     */
    qualityScoreAverage?: number | null;
    /**
     * The median QualityScore of the feedback entries
     */
    qualityScoreMedian?: number | null;
    /**
     * The standard deviation of the quality scores
     */
    qualityScoreStandardDeviation?: number | null;
    /**
     * A string that uniquely identifies this feedback entry
     */
    sid?: string | null;
    /**
     * The earliest feedback entry date in the summary
     */
    startDate?: Date | null;
    status?: CallFeedbackSummaryStatus;
    private get _proxy();
    /**
     * Remove a FeedbackSummaryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FeedbackSummaryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackSummaryInstance
     */
    fetch(callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any): Promise<FeedbackSummaryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        callCount: number | null | undefined;
        callFeedbackCount: number | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        endDate: Date | null | undefined;
        includeSubaccounts: boolean | null | undefined;
        issues: any[] | null | undefined;
        qualityScoreAverage: number | null | undefined;
        qualityScoreMedian: number | null | undefined;
        qualityScoreStandardDeviation: number | null | undefined;
        sid: string | null | undefined;
        startDate: Date | null | undefined;
        status: CallFeedbackSummaryStatus | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FeedbackSummaryListInstance {
    (sid: string): FeedbackSummaryContext;
    get(sid: string): FeedbackSummaryContext;
    /**
     * Create a FeedbackSummaryInstance
     *
     * @param { FeedbackSummaryListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackSummaryInstance
     */
    create(params: FeedbackSummaryListInstanceCreateOptions, callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any): Promise<FeedbackSummaryInstance>;
    create(params: any, callback?: any): Promise<FeedbackSummaryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FeedbackSummarySolution {
    accountSid?: string;
}
export declare function FeedbackSummaryListInstance(version: V2010, accountSid: string): FeedbackSummaryListInstance;
export {};
