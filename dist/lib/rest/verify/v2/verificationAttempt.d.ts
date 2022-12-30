/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
declare type VerificationAttemptChannels = "sms" | "call" | "email" | "whatsapp";
declare type VerificationAttemptConversionStatus = "converted" | "unconverted";
/**
 * Options to pass to each
 *
 * @property { Date } [dateCreatedAfter] Datetime filter used to query Verification Attempts created after this datetime. Given as GMT in RFC 2822 format.
 * @property { Date } [dateCreatedBefore] Datetime filter used to query Verification Attempts created before this datetime. Given as GMT in RFC 2822 format.
 * @property { string } [channelData.to] Destination of a verification. It is phone number in E.164 format.
 * @property { string } [country] Filter used to query Verification Attempts sent to the specified destination country.
 * @property { VerificationAttemptChannels } [channel] Filter used to query Verification Attempts by communication channel. Valid values are `SMS` and `CALL`
 * @property { string } [verifyServiceSid] Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned.
 * @property { string } [verificationSid] Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned.
 * @property { VerificationAttemptConversionStatus } [status] Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed.
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
export interface VerificationAttemptListInstanceEachOptions {
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    "channelData.to"?: string;
    country?: string;
    channel?: VerificationAttemptChannels;
    verifyServiceSid?: string;
    verificationSid?: string;
    status?: VerificationAttemptConversionStatus;
    pageSize?: number;
    callback?: (item: VerificationAttemptInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Date } [dateCreatedAfter] Datetime filter used to query Verification Attempts created after this datetime. Given as GMT in RFC 2822 format.
 * @property { Date } [dateCreatedBefore] Datetime filter used to query Verification Attempts created before this datetime. Given as GMT in RFC 2822 format.
 * @property { string } [channelData.to] Destination of a verification. It is phone number in E.164 format.
 * @property { string } [country] Filter used to query Verification Attempts sent to the specified destination country.
 * @property { VerificationAttemptChannels } [channel] Filter used to query Verification Attempts by communication channel. Valid values are `SMS` and `CALL`
 * @property { string } [verifyServiceSid] Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned.
 * @property { string } [verificationSid] Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned.
 * @property { VerificationAttemptConversionStatus } [status] Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface VerificationAttemptListInstanceOptions {
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    "channelData.to"?: string;
    country?: string;
    channel?: VerificationAttemptChannels;
    verifyServiceSid?: string;
    verificationSid?: string;
    status?: VerificationAttemptConversionStatus;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Date } [dateCreatedAfter] Datetime filter used to query Verification Attempts created after this datetime. Given as GMT in RFC 2822 format.
 * @property { Date } [dateCreatedBefore] Datetime filter used to query Verification Attempts created before this datetime. Given as GMT in RFC 2822 format.
 * @property { string } [channelData.to] Destination of a verification. It is phone number in E.164 format.
 * @property { string } [country] Filter used to query Verification Attempts sent to the specified destination country.
 * @property { VerificationAttemptChannels } [channel] Filter used to query Verification Attempts by communication channel. Valid values are `SMS` and `CALL`
 * @property { string } [verifyServiceSid] Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned.
 * @property { string } [verificationSid] Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned.
 * @property { VerificationAttemptConversionStatus } [status] Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface VerificationAttemptListInstancePageOptions {
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    "channelData.to"?: string;
    country?: string;
    channel?: VerificationAttemptChannels;
    verifyServiceSid?: string;
    verificationSid?: string;
    status?: VerificationAttemptConversionStatus;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface VerificationAttemptContext {
    /**
     * Fetch a VerificationAttemptInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationAttemptInstance
     */
    fetch(callback?: (error: Error | null, item?: VerificationAttemptInstance) => any): Promise<VerificationAttemptInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface VerificationAttemptContextSolution {
    sid?: string;
}
export declare class VerificationAttemptContextImpl implements VerificationAttemptContext {
    protected _version: V2;
    protected _solution: VerificationAttemptContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string);
    fetch(callback?: any): Promise<VerificationAttemptInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): VerificationAttemptContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface VerificationAttemptPayload extends TwilioResponsePayload {
    attempts: VerificationAttemptResource[];
}
interface VerificationAttemptResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    verification_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    conversion_status?: VerificationAttemptConversionStatus;
    channel?: VerificationAttemptChannels;
    price?: any | null;
    channel_data?: any | null;
    url?: string | null;
}
export declare class VerificationAttemptInstance {
    protected _version: V2;
    protected _solution: VerificationAttemptContextSolution;
    protected _context?: VerificationAttemptContext;
    constructor(_version: V2, payload: VerificationAttemptResource, sid?: string);
    /**
     * The SID that uniquely identifies the verification attempt.
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the verification.
     */
    accountSid?: string | null;
    /**
     * The SID of the verify service that generated this attempt.
     */
    serviceSid?: string | null;
    /**
     * The SID of the verification that generated this attempt.
     */
    verificationSid?: string | null;
    /**
     * The date this Attempt was created
     */
    dateCreated?: Date | null;
    /**
     * The date this Attempt was updated
     */
    dateUpdated?: Date | null;
    conversionStatus?: VerificationAttemptConversionStatus;
    channel?: VerificationAttemptChannels;
    /**
     * An object containing the charge for this verification attempt.
     */
    price?: any | null;
    /**
     * An object containing the channel specific information for an attempt.
     */
    channelData?: any | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a VerificationAttemptInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationAttemptInstance
     */
    fetch(callback?: (error: Error | null, item?: VerificationAttemptInstance) => any): Promise<VerificationAttemptInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        verificationSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        conversionStatus: VerificationAttemptConversionStatus | undefined;
        channel: VerificationAttemptChannels | undefined;
        price: any;
        channelData: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface VerificationAttemptListInstance {
    (sid: string): VerificationAttemptContext;
    get(sid: string): VerificationAttemptContext;
    /**
     * Streams VerificationAttemptInstance records from the API.
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
    each(callback?: (item: VerificationAttemptInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams VerificationAttemptInstance records from the API.
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
     * @param { VerificationAttemptListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: VerificationAttemptListInstanceEachOptions, callback?: (item: VerificationAttemptInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of VerificationAttemptInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: VerificationAttemptPage) => any): Promise<VerificationAttemptPage>;
    /**
     * Retrieve a single target page of VerificationAttemptInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: VerificationAttemptPage) => any): Promise<VerificationAttemptPage>;
    getPage(params?: any, callback?: any): Promise<VerificationAttemptPage>;
    /**
     * Lists VerificationAttemptInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: VerificationAttemptInstance[]) => any): Promise<VerificationAttemptInstance[]>;
    /**
     * Lists VerificationAttemptInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { VerificationAttemptListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: VerificationAttemptListInstanceOptions, callback?: (error: Error | null, items: VerificationAttemptInstance[]) => any): Promise<VerificationAttemptInstance[]>;
    list(params?: any, callback?: any): Promise<VerificationAttemptInstance[]>;
    /**
     * Retrieve a single page of VerificationAttemptInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: VerificationAttemptPage) => any): Promise<VerificationAttemptPage>;
    /**
     * Retrieve a single page of VerificationAttemptInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { VerificationAttemptListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: VerificationAttemptListInstancePageOptions, callback?: (error: Error | null, items: VerificationAttemptPage) => any): Promise<VerificationAttemptPage>;
    page(params?: any, callback?: any): Promise<VerificationAttemptPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface VerificationAttemptSolution {
}
export declare function VerificationAttemptListInstance(version: V2): VerificationAttemptListInstance;
export declare class VerificationAttemptPage extends Page<V2, VerificationAttemptPayload, VerificationAttemptResource, VerificationAttemptInstance> {
    /**
     * Initialize the VerificationAttemptPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: VerificationAttemptSolution);
    /**
     * Build an instance of VerificationAttemptInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: VerificationAttemptResource): VerificationAttemptInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
