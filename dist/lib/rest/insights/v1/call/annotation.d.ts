/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
declare type AnnotationAnsweredBy = "unknown_answered_by" | "human" | "machine";
declare type AnnotationConnectivityIssue = "unknown_connectivity_issue" | "no_connectivity_issue" | "invalid_number" | "caller_id" | "dropped_call" | "number_reachability";
/**
 * Options to pass to update a AnnotationInstance
 *
 * @property { AnnotationAnsweredBy } [answeredBy]
 * @property { AnnotationConnectivityIssue } [connectivityIssue]
 * @property { string } [qualityIssues] Specify if the call had any subjective quality issues. Possible values, one or more of:  no_quality_issue, low_volume, choppy_robotic, echo, dtmf, latency, owa, static_noise. Use comma separated values to indicate multiple quality issues for the same call
 * @property { boolean } [spam] Specify if the call was a spam call. Use this to provide feedback on whether calls placed from your account were marked as spam, or if inbound calls received by your account were unwanted spam. Is of type Boolean: true, false. Use true if the call was a spam call.
 * @property { number } [callScore] Specify the call score. This is of type integer. Use a range of 1-5 to indicate the call experience score, with the following mapping as a reference for rating the call [5: Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad].
 * @property { string } [comment] Specify any comments pertaining to the call. This of type string with a max limit of 100 characters. Twilio does not treat this field as PII, so don’t put any PII in here.
 * @property { string } [incident] Associate this call with an incident or support ticket. This is of type string with a max limit of 100 characters. Twilio does not treat this field as PII, so don’t put any PII in here.
 */
export interface AnnotationContextUpdateOptions {
    answeredBy?: AnnotationAnsweredBy;
    connectivityIssue?: AnnotationConnectivityIssue;
    qualityIssues?: string;
    spam?: boolean;
    callScore?: number;
    comment?: string;
    incident?: string;
}
export interface AnnotationContext {
    /**
     * Fetch a AnnotationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AnnotationInstance
     */
    fetch(callback?: (error: Error | null, item?: AnnotationInstance) => any): Promise<AnnotationInstance>;
    /**
     * Update a AnnotationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AnnotationInstance
     */
    update(callback?: (error: Error | null, item?: AnnotationInstance) => any): Promise<AnnotationInstance>;
    /**
     * Update a AnnotationInstance
     *
     * @param { AnnotationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AnnotationInstance
     */
    update(params: AnnotationContextUpdateOptions, callback?: (error: Error | null, item?: AnnotationInstance) => any): Promise<AnnotationInstance>;
    update(params?: any, callback?: any): Promise<AnnotationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AnnotationContextSolution {
    callSid?: string;
}
export declare class AnnotationContextImpl implements AnnotationContext {
    protected _version: V1;
    protected _solution: AnnotationContextSolution;
    protected _uri: string;
    constructor(_version: V1, callSid: string);
    fetch(callback?: any): Promise<AnnotationInstance>;
    update(params?: any, callback?: any): Promise<AnnotationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AnnotationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AnnotationResource {
    call_sid?: string | null;
    account_sid?: string | null;
    answered_by?: AnnotationAnsweredBy;
    connectivity_issue?: AnnotationConnectivityIssue;
    quality_issues?: Array<string> | null;
    spam?: boolean | null;
    call_score?: number | null;
    comment?: string | null;
    incident?: string | null;
    url?: string | null;
}
export declare class AnnotationInstance {
    protected _version: V1;
    protected _solution: AnnotationContextSolution;
    protected _context?: AnnotationContext;
    constructor(_version: V1, payload: AnnotationResource, callSid: string);
    /**
     * Call SID.
     */
    callSid?: string | null;
    /**
     * Account SID.
     */
    accountSid?: string | null;
    answeredBy?: AnnotationAnsweredBy;
    connectivityIssue?: AnnotationConnectivityIssue;
    /**
     * Indicates if the call had audio quality issues.
     */
    qualityIssues?: Array<string> | null;
    /**
     * Call spam indicator
     */
    spam?: boolean | null;
    /**
     * Call Score
     */
    callScore?: number | null;
    /**
     * User comments
     */
    comment?: string | null;
    /**
     * Call tag for incidents or support ticket
     */
    incident?: string | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a AnnotationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AnnotationInstance
     */
    fetch(callback?: (error: Error | null, item?: AnnotationInstance) => any): Promise<AnnotationInstance>;
    /**
     * Update a AnnotationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AnnotationInstance
     */
    update(callback?: (error: Error | null, item?: AnnotationInstance) => any): Promise<AnnotationInstance>;
    /**
     * Update a AnnotationInstance
     *
     * @param { AnnotationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AnnotationInstance
     */
    update(params: AnnotationContextUpdateOptions, callback?: (error: Error | null, item?: AnnotationInstance) => any): Promise<AnnotationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        callSid: string | null | undefined;
        accountSid: string | null | undefined;
        answeredBy: AnnotationAnsweredBy | undefined;
        connectivityIssue: AnnotationConnectivityIssue | undefined;
        qualityIssues: string[] | null | undefined;
        spam: boolean | null | undefined;
        callScore: number | null | undefined;
        comment: string | null | undefined;
        incident: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AnnotationListInstance {
    (): AnnotationContext;
    get(): AnnotationContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AnnotationSolution {
    callSid?: string;
}
export declare function AnnotationListInstance(version: V1, callSid: string): AnnotationListInstance;
export {};
