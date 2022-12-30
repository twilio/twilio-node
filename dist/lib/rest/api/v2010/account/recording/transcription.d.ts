/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
declare type RecordingTranscriptionStatus = "in-progress" | "completed" | "failed";
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
export interface TranscriptionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: TranscriptionInstance, done: (err?: Error) => void) => void;
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
export interface TranscriptionListInstanceOptions {
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
export interface TranscriptionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TranscriptionContext {
    /**
     * Remove a TranscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TranscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TranscriptionInstance
     */
    fetch(callback?: (error: Error | null, item?: TranscriptionInstance) => any): Promise<TranscriptionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TranscriptionContextSolution {
    accountSid?: string;
    recordingSid?: string;
    sid?: string;
}
export declare class TranscriptionContextImpl implements TranscriptionContext {
    protected _version: V2010;
    protected _solution: TranscriptionContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, recordingSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<TranscriptionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TranscriptionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TranscriptionPayload extends TwilioResponsePayload {
    transcriptions: TranscriptionResource[];
}
interface TranscriptionResource {
    account_sid?: string | null;
    api_version?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    duration?: string | null;
    price?: number | null;
    price_unit?: string | null;
    recording_sid?: string | null;
    sid?: string | null;
    status?: RecordingTranscriptionStatus;
    transcription_text?: string | null;
    type?: string | null;
    uri?: string | null;
}
export declare class TranscriptionInstance {
    protected _version: V2010;
    protected _solution: TranscriptionContextSolution;
    protected _context?: TranscriptionContext;
    constructor(_version: V2010, payload: TranscriptionResource, accountSid: string, recordingSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The API version used to create the transcription
     */
    apiVersion?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The duration of the transcribed audio in seconds.
     */
    duration?: string | null;
    /**
     * The charge for the transcription
     */
    price?: number | null;
    /**
     * The currency in which price is measured
     */
    priceUnit?: string | null;
    /**
     * The SID that identifies the transcription\'s recording
     */
    recordingSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    status?: RecordingTranscriptionStatus;
    /**
     * The text content of the transcription.
     */
    transcriptionText?: string | null;
    /**
     * The transcription type
     */
    type?: string | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Remove a TranscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TranscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TranscriptionInstance
     */
    fetch(callback?: (error: Error | null, item?: TranscriptionInstance) => any): Promise<TranscriptionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        apiVersion: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        duration: string | null | undefined;
        price: number | null | undefined;
        priceUnit: string | null | undefined;
        recordingSid: string | null | undefined;
        sid: string | null | undefined;
        status: RecordingTranscriptionStatus | undefined;
        transcriptionText: string | null | undefined;
        type: string | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TranscriptionListInstance {
    (sid: string): TranscriptionContext;
    get(sid: string): TranscriptionContext;
    /**
     * Streams TranscriptionInstance records from the API.
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
    each(callback?: (item: TranscriptionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TranscriptionInstance records from the API.
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
     * @param { TranscriptionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TranscriptionListInstanceEachOptions, callback?: (item: TranscriptionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TranscriptionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TranscriptionPage) => any): Promise<TranscriptionPage>;
    /**
     * Retrieve a single target page of TranscriptionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TranscriptionPage) => any): Promise<TranscriptionPage>;
    getPage(params?: any, callback?: any): Promise<TranscriptionPage>;
    /**
     * Lists TranscriptionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TranscriptionInstance[]) => any): Promise<TranscriptionInstance[]>;
    /**
     * Lists TranscriptionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TranscriptionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TranscriptionListInstanceOptions, callback?: (error: Error | null, items: TranscriptionInstance[]) => any): Promise<TranscriptionInstance[]>;
    list(params?: any, callback?: any): Promise<TranscriptionInstance[]>;
    /**
     * Retrieve a single page of TranscriptionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TranscriptionPage) => any): Promise<TranscriptionPage>;
    /**
     * Retrieve a single page of TranscriptionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TranscriptionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TranscriptionListInstancePageOptions, callback?: (error: Error | null, items: TranscriptionPage) => any): Promise<TranscriptionPage>;
    page(params?: any, callback?: any): Promise<TranscriptionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TranscriptionSolution {
    accountSid?: string;
    recordingSid?: string;
}
export declare function TranscriptionListInstance(version: V2010, accountSid: string, recordingSid: string): TranscriptionListInstance;
export declare class TranscriptionPage extends Page<V2010, TranscriptionPayload, TranscriptionResource, TranscriptionInstance> {
    /**
     * Initialize the TranscriptionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: TranscriptionSolution);
    /**
     * Build an instance of TranscriptionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TranscriptionResource): TranscriptionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
