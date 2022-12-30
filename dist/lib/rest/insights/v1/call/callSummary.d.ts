/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
declare type SummaryAnsweredBy = "unknown" | "machine_start" | "machine_end_beep" | "machine_end_silence" | "machine_end_other" | "human" | "fax";
declare type SummaryCallState = "ringing" | "completed" | "busy" | "fail" | "noanswer" | "canceled" | "answered" | "undialed";
declare type SummaryCallType = "carrier" | "sip" | "trunking" | "client";
declare type SummaryProcessingState = "complete" | "partial";
/**
 * Options to pass to fetch a CallSummaryInstance
 *
 * @property { SummaryProcessingState } [processingState]
 */
export interface CallSummaryContextFetchOptions {
    processingState?: SummaryProcessingState;
}
export interface CallSummaryContext {
    /**
     * Fetch a CallSummaryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallSummaryInstance
     */
    fetch(callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
    /**
     * Fetch a CallSummaryInstance
     *
     * @param { CallSummaryContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallSummaryInstance
     */
    fetch(params: CallSummaryContextFetchOptions, callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
    fetch(params?: any, callback?: any): Promise<CallSummaryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CallSummaryContextSolution {
    callSid?: string;
}
export declare class CallSummaryContextImpl implements CallSummaryContext {
    protected _version: V1;
    protected _solution: CallSummaryContextSolution;
    protected _uri: string;
    constructor(_version: V1, callSid: string);
    fetch(params?: any, callback?: any): Promise<CallSummaryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CallSummaryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CallSummaryResource {
    account_sid?: string | null;
    call_sid?: string | null;
    call_type?: SummaryCallType;
    call_state?: SummaryCallState;
    answered_by?: SummaryAnsweredBy;
    processing_state?: SummaryProcessingState;
    created_time?: Date | null;
    start_time?: Date | null;
    end_time?: Date | null;
    duration?: number | null;
    connect_duration?: number | null;
    from?: any | null;
    to?: any | null;
    carrier_edge?: any | null;
    client_edge?: any | null;
    sdk_edge?: any | null;
    sip_edge?: any | null;
    tags?: Array<string> | null;
    url?: string | null;
    attributes?: any | null;
    properties?: any | null;
    trust?: any | null;
    annotation?: any | null;
}
export declare class CallSummaryInstance {
    protected _version: V1;
    protected _solution: CallSummaryContextSolution;
    protected _context?: CallSummaryContext;
    constructor(_version: V1, payload: CallSummaryResource, callSid: string);
    accountSid?: string | null;
    callSid?: string | null;
    callType?: SummaryCallType;
    callState?: SummaryCallState;
    answeredBy?: SummaryAnsweredBy;
    processingState?: SummaryProcessingState;
    createdTime?: Date | null;
    startTime?: Date | null;
    endTime?: Date | null;
    duration?: number | null;
    connectDuration?: number | null;
    from?: any | null;
    to?: any | null;
    carrierEdge?: any | null;
    clientEdge?: any | null;
    sdkEdge?: any | null;
    sipEdge?: any | null;
    tags?: Array<string> | null;
    url?: string | null;
    attributes?: any | null;
    properties?: any | null;
    trust?: any | null;
    annotation?: any | null;
    private get _proxy();
    /**
     * Fetch a CallSummaryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallSummaryInstance
     */
    fetch(callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
    /**
     * Fetch a CallSummaryInstance
     *
     * @param { CallSummaryContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallSummaryInstance
     */
    fetch(params: CallSummaryContextFetchOptions, callback?: (error: Error | null, item?: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        callSid: string | null | undefined;
        callType: SummaryCallType | undefined;
        callState: SummaryCallState | undefined;
        answeredBy: SummaryAnsweredBy | undefined;
        processingState: SummaryProcessingState | undefined;
        createdTime: Date | null | undefined;
        startTime: Date | null | undefined;
        endTime: Date | null | undefined;
        duration: number | null | undefined;
        connectDuration: number | null | undefined;
        from: any;
        to: any;
        carrierEdge: any;
        clientEdge: any;
        sdkEdge: any;
        sipEdge: any;
        tags: string[] | null | undefined;
        url: string | null | undefined;
        attributes: any;
        properties: any;
        trust: any;
        annotation: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CallSummaryListInstance {
    (): CallSummaryContext;
    get(): CallSummaryContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CallSummarySolution {
    callSid?: string;
}
export declare function CallSummaryListInstance(version: V1, callSid: string): CallSummaryListInstance;
export {};
