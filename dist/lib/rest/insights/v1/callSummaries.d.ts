/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type CallSummariesAnsweredBy = "unknown" | "machine_start" | "machine_end_beep" | "machine_end_silence" | "machine_end_other" | "human" | "fax";
declare type CallSummariesCallState = "ringing" | "completed" | "busy" | "fail" | "noanswer" | "canceled" | "answered" | "undialed";
declare type CallSummariesCallType = "carrier" | "sip" | "trunking" | "client";
declare type CallSummariesProcessingState = "complete" | "partial";
declare type CallSummariesProcessingStateRequest = "completed" | "started" | "partial" | "all";
declare type CallSummariesSortBy = "start_time" | "end_time";
/**
 * Options to pass to each
 *
 * @property { string } [from]
 * @property { string } [to]
 * @property { string } [fromCarrier]
 * @property { string } [toCarrier]
 * @property { string } [fromCountryCode]
 * @property { string } [toCountryCode]
 * @property { boolean } [branded]
 * @property { boolean } [verifiedCaller]
 * @property { boolean } [hasTag]
 * @property { string } [startTime]
 * @property { string } [endTime]
 * @property { string } [callType]
 * @property { string } [callState]
 * @property { string } [direction]
 * @property { CallSummariesProcessingStateRequest } [processingState]
 * @property { CallSummariesSortBy } [sortBy]
 * @property { string } [subaccount]
 * @property { boolean } [abnormalSession]
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
export interface CallSummariesListInstanceEachOptions {
    from?: string;
    to?: string;
    fromCarrier?: string;
    toCarrier?: string;
    fromCountryCode?: string;
    toCountryCode?: string;
    branded?: boolean;
    verifiedCaller?: boolean;
    hasTag?: boolean;
    startTime?: string;
    endTime?: string;
    callType?: string;
    callState?: string;
    direction?: string;
    processingState?: CallSummariesProcessingStateRequest;
    sortBy?: CallSummariesSortBy;
    subaccount?: string;
    abnormalSession?: boolean;
    pageSize?: number;
    callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [from]
 * @property { string } [to]
 * @property { string } [fromCarrier]
 * @property { string } [toCarrier]
 * @property { string } [fromCountryCode]
 * @property { string } [toCountryCode]
 * @property { boolean } [branded]
 * @property { boolean } [verifiedCaller]
 * @property { boolean } [hasTag]
 * @property { string } [startTime]
 * @property { string } [endTime]
 * @property { string } [callType]
 * @property { string } [callState]
 * @property { string } [direction]
 * @property { CallSummariesProcessingStateRequest } [processingState]
 * @property { CallSummariesSortBy } [sortBy]
 * @property { string } [subaccount]
 * @property { boolean } [abnormalSession]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CallSummariesListInstanceOptions {
    from?: string;
    to?: string;
    fromCarrier?: string;
    toCarrier?: string;
    fromCountryCode?: string;
    toCountryCode?: string;
    branded?: boolean;
    verifiedCaller?: boolean;
    hasTag?: boolean;
    startTime?: string;
    endTime?: string;
    callType?: string;
    callState?: string;
    direction?: string;
    processingState?: CallSummariesProcessingStateRequest;
    sortBy?: CallSummariesSortBy;
    subaccount?: string;
    abnormalSession?: boolean;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [from]
 * @property { string } [to]
 * @property { string } [fromCarrier]
 * @property { string } [toCarrier]
 * @property { string } [fromCountryCode]
 * @property { string } [toCountryCode]
 * @property { boolean } [branded]
 * @property { boolean } [verifiedCaller]
 * @property { boolean } [hasTag]
 * @property { string } [startTime]
 * @property { string } [endTime]
 * @property { string } [callType]
 * @property { string } [callState]
 * @property { string } [direction]
 * @property { CallSummariesProcessingStateRequest } [processingState]
 * @property { CallSummariesSortBy } [sortBy]
 * @property { string } [subaccount]
 * @property { boolean } [abnormalSession]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CallSummariesListInstancePageOptions {
    from?: string;
    to?: string;
    fromCarrier?: string;
    toCarrier?: string;
    fromCountryCode?: string;
    toCountryCode?: string;
    branded?: boolean;
    verifiedCaller?: boolean;
    hasTag?: boolean;
    startTime?: string;
    endTime?: string;
    callType?: string;
    callState?: string;
    direction?: string;
    processingState?: CallSummariesProcessingStateRequest;
    sortBy?: CallSummariesSortBy;
    subaccount?: string;
    abnormalSession?: boolean;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CallSummariesListInstance {
    /**
     * Streams CallSummariesInstance records from the API.
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
    each(callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CallSummariesInstance records from the API.
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
     * @param { CallSummariesListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CallSummariesListInstanceEachOptions, callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CallSummariesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
    /**
     * Retrieve a single target page of CallSummariesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
    getPage(params?: any, callback?: any): Promise<CallSummariesPage>;
    /**
     * Lists CallSummariesInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CallSummariesInstance[]) => any): Promise<CallSummariesInstance[]>;
    /**
     * Lists CallSummariesInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CallSummariesListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CallSummariesListInstanceOptions, callback?: (error: Error | null, items: CallSummariesInstance[]) => any): Promise<CallSummariesInstance[]>;
    list(params?: any, callback?: any): Promise<CallSummariesInstance[]>;
    /**
     * Retrieve a single page of CallSummariesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
    /**
     * Retrieve a single page of CallSummariesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CallSummariesListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CallSummariesListInstancePageOptions, callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
    page(params?: any, callback?: any): Promise<CallSummariesPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CallSummariesSolution {
}
export declare function CallSummariesListInstance(version: V1): CallSummariesListInstance;
interface CallSummariesPayload extends TwilioResponsePayload {
    call_summaries: CallSummariesResource[];
}
interface CallSummariesResource {
    account_sid?: string | null;
    call_sid?: string | null;
    answered_by?: CallSummariesAnsweredBy;
    call_type?: CallSummariesCallType;
    call_state?: CallSummariesCallState;
    processing_state?: CallSummariesProcessingState;
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
}
export declare class CallSummariesInstance {
    protected _version: V1;
    constructor(_version: V1, payload: CallSummariesResource);
    accountSid?: string | null;
    callSid?: string | null;
    answeredBy?: CallSummariesAnsweredBy;
    callType?: CallSummariesCallType;
    callState?: CallSummariesCallState;
    processingState?: CallSummariesProcessingState;
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
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        callSid: string | null | undefined;
        answeredBy: CallSummariesAnsweredBy | undefined;
        callType: CallSummariesCallType | undefined;
        callState: CallSummariesCallState | undefined;
        processingState: CallSummariesProcessingState | undefined;
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
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class CallSummariesPage extends Page<V1, CallSummariesPayload, CallSummariesResource, CallSummariesInstance> {
    /**
     * Initialize the CallSummariesPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CallSummariesSolution);
    /**
     * Build an instance of CallSummariesInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CallSummariesResource): CallSummariesInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
