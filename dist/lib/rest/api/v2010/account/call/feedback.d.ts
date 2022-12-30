/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
declare type CallFeedbackIssues = "audio-latency" | "digits-not-captured" | "dropped-call" | "imperfect-audio" | "incorrect-caller-id" | "one-way-audio" | "post-dial-delay" | "unsolicited-call";
/**
 * Options to pass to update a FeedbackInstance
 *
 * @property { number } [qualityScore] The call quality expressed as an integer from `1` to `5` where `1` represents very poor call quality and `5` represents a perfect call.
 * @property { Array<CallFeedbackIssues> } [issue] One or more issues experienced during the call. The issues can be: `imperfect-audio`, `dropped-call`, `incorrect-caller-id`, `post-dial-delay`, `digits-not-captured`, `audio-latency`, `unsolicited-call`, or `one-way-audio`.
 */
export interface FeedbackContextUpdateOptions {
    qualityScore?: number;
    issue?: Array<CallFeedbackIssues>;
}
export interface FeedbackContext {
    /**
     * Fetch a FeedbackInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackInstance
     */
    fetch(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Update a FeedbackInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackInstance
     */
    update(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Update a FeedbackInstance
     *
     * @param { FeedbackContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackInstance
     */
    update(params: FeedbackContextUpdateOptions, callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    update(params?: any, callback?: any): Promise<FeedbackInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FeedbackContextSolution {
    accountSid?: string;
    callSid?: string;
}
export declare class FeedbackContextImpl implements FeedbackContext {
    protected _version: V2010;
    protected _solution: FeedbackContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, callSid: string);
    fetch(callback?: any): Promise<FeedbackInstance>;
    update(params?: any, callback?: any): Promise<FeedbackInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FeedbackContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FeedbackResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    issues?: Array<CallFeedbackIssues> | null;
    quality_score?: number | null;
    sid?: string | null;
}
export declare class FeedbackInstance {
    protected _version: V2010;
    protected _solution: FeedbackContextSolution;
    protected _context?: FeedbackContext;
    constructor(_version: V2010, payload: FeedbackResource, accountSid: string, callSid: string);
    /**
     * The unique sid that identifies this account
     */
    accountSid?: string | null;
    /**
     * The date this resource was created
     */
    dateCreated?: Date | null;
    /**
     * The date this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * Issues experienced during the call
     */
    issues?: Array<CallFeedbackIssues> | null;
    /**
     * 1 to 5 quality score
     */
    qualityScore?: number | null;
    /**
     * A string that uniquely identifies this feedback resource
     */
    sid?: string | null;
    private get _proxy();
    /**
     * Fetch a FeedbackInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackInstance
     */
    fetch(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Update a FeedbackInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackInstance
     */
    update(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Update a FeedbackInstance
     *
     * @param { FeedbackContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackInstance
     */
    update(params: FeedbackContextUpdateOptions, callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        issues: CallFeedbackIssues[] | null | undefined;
        qualityScore: number | null | undefined;
        sid: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FeedbackListInstance {
    (): FeedbackContext;
    get(): FeedbackContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FeedbackSolution {
    accountSid?: string;
    callSid?: string;
}
export declare function FeedbackListInstance(version: V2010, accountSid: string, callSid: string): FeedbackListInstance;
export {};
