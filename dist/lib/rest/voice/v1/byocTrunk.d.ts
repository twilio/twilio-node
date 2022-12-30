/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to update a ByocTrunkInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { string } [voiceUrl] The URL we should call when the BYOC Trunk receives a call.
 * @property { string } [voiceMethod] The HTTP method we should use to call `voice_url`
 * @property { string } [voiceFallbackUrl] The URL that we should call when an error occurs while retrieving or executing the TwiML requested by `voice_url`.
 * @property { string } [voiceFallbackMethod] The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 * @property { string } [statusCallbackUrl] The URL that we should call to pass status parameters (such as call ended) to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
 * @property { boolean } [cnamLookupEnabled] Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the BYOC Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
 * @property { string } [connectionPolicySid] The SID of the Connection Policy that Twilio will use when routing traffic to your communications infrastructure.
 * @property { string } [fromDomainSid] The SID of the SIP Domain that should be used in the `From` header of originating calls sent to your SIP infrastructure. If your SIP infrastructure allows users to \\\"call back\\\" an incoming call, configure this with a [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper routing. If not configured, the from domain will default to \\\"sip.twilio.com\\\".
 */
export interface ByocTrunkContextUpdateOptions {
    friendlyName?: string;
    voiceUrl?: string;
    voiceMethod?: string;
    voiceFallbackUrl?: string;
    voiceFallbackMethod?: string;
    statusCallbackUrl?: string;
    statusCallbackMethod?: string;
    cnamLookupEnabled?: boolean;
    connectionPolicySid?: string;
    fromDomainSid?: string;
}
/**
 * Options to pass to create a ByocTrunkInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { string } [voiceUrl] The URL we should call when the BYOC Trunk receives a call.
 * @property { string } [voiceMethod] The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
 * @property { string } [voiceFallbackUrl] The URL that we should call when an error occurs while retrieving or executing the TwiML from `voice_url`.
 * @property { string } [voiceFallbackMethod] The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 * @property { string } [statusCallbackUrl] The URL that we should call to pass status parameters (such as call ended) to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
 * @property { boolean } [cnamLookupEnabled] Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the BYOC Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
 * @property { string } [connectionPolicySid] The SID of the Connection Policy that Twilio will use when routing traffic to your communications infrastructure.
 * @property { string } [fromDomainSid] The SID of the SIP Domain that should be used in the `From` header of originating calls sent to your SIP infrastructure. If your SIP infrastructure allows users to \\\"call back\\\" an incoming call, configure this with a [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper routing. If not configured, the from domain will default to \\\"sip.twilio.com\\\".
 */
export interface ByocTrunkListInstanceCreateOptions {
    friendlyName?: string;
    voiceUrl?: string;
    voiceMethod?: string;
    voiceFallbackUrl?: string;
    voiceFallbackMethod?: string;
    statusCallbackUrl?: string;
    statusCallbackMethod?: string;
    cnamLookupEnabled?: boolean;
    connectionPolicySid?: string;
    fromDomainSid?: string;
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
export interface ByocTrunkListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ByocTrunkInstance, done: (err?: Error) => void) => void;
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
export interface ByocTrunkListInstanceOptions {
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
export interface ByocTrunkListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ByocTrunkContext {
    /**
     * Remove a ByocTrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ByocTrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ByocTrunkInstance
     */
    fetch(callback?: (error: Error | null, item?: ByocTrunkInstance) => any): Promise<ByocTrunkInstance>;
    /**
     * Update a ByocTrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ByocTrunkInstance
     */
    update(callback?: (error: Error | null, item?: ByocTrunkInstance) => any): Promise<ByocTrunkInstance>;
    /**
     * Update a ByocTrunkInstance
     *
     * @param { ByocTrunkContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ByocTrunkInstance
     */
    update(params: ByocTrunkContextUpdateOptions, callback?: (error: Error | null, item?: ByocTrunkInstance) => any): Promise<ByocTrunkInstance>;
    update(params?: any, callback?: any): Promise<ByocTrunkInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ByocTrunkContextSolution {
    sid?: string;
}
export declare class ByocTrunkContextImpl implements ByocTrunkContext {
    protected _version: V1;
    protected _solution: ByocTrunkContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ByocTrunkInstance>;
    update(params?: any, callback?: any): Promise<ByocTrunkInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ByocTrunkContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type ByocTrunkVoiceMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type ByocTrunkVoiceFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type ByocTrunkStatusCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface ByocTrunkPayload extends TwilioResponsePayload {
    byoc_trunks: ByocTrunkResource[];
}
interface ByocTrunkResource {
    account_sid?: string | null;
    sid?: string | null;
    friendly_name?: string | null;
    voice_url?: string | null;
    voice_method?: ByocTrunkVoiceMethod;
    voice_fallback_url?: string | null;
    voice_fallback_method?: ByocTrunkVoiceFallbackMethod;
    status_callback_url?: string | null;
    status_callback_method?: ByocTrunkStatusCallbackMethod;
    cnam_lookup_enabled?: boolean | null;
    connection_policy_sid?: string | null;
    from_domain_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class ByocTrunkInstance {
    protected _version: V1;
    protected _solution: ByocTrunkContextSolution;
    protected _context?: ByocTrunkContext;
    constructor(_version: V1, payload: ByocTrunkResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The URL we call when receiving a call
     */
    voiceUrl?: string | null;
    /**
     * The HTTP method to use with voice_url
     */
    voiceMethod?: ByocTrunkVoiceMethod;
    /**
     * The URL we call when an error occurs while executing TwiML
     */
    voiceFallbackUrl?: string | null;
    /**
     * The HTTP method used with voice_fallback_url
     */
    voiceFallbackMethod?: ByocTrunkVoiceFallbackMethod;
    /**
     * The URL that we call with status updates
     */
    statusCallbackUrl?: string | null;
    /**
     * The HTTP method we use to call status_callback_url
     */
    statusCallbackMethod?: ByocTrunkStatusCallbackMethod;
    /**
     * Whether Caller ID Name (CNAM) lookup is enabled for the trunk
     */
    cnamLookupEnabled?: boolean | null;
    /**
     * Origination Connection Policy (to your Carrier)
     */
    connectionPolicySid?: string | null;
    /**
     * The SID of the SIP Domain that should be used in the `From` header of originating calls
     */
    fromDomainSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a ByocTrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ByocTrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ByocTrunkInstance
     */
    fetch(callback?: (error: Error | null, item?: ByocTrunkInstance) => any): Promise<ByocTrunkInstance>;
    /**
     * Update a ByocTrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ByocTrunkInstance
     */
    update(callback?: (error: Error | null, item?: ByocTrunkInstance) => any): Promise<ByocTrunkInstance>;
    /**
     * Update a ByocTrunkInstance
     *
     * @param { ByocTrunkContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ByocTrunkInstance
     */
    update(params: ByocTrunkContextUpdateOptions, callback?: (error: Error | null, item?: ByocTrunkInstance) => any): Promise<ByocTrunkInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        voiceUrl: string | null | undefined;
        voiceMethod: ByocTrunkVoiceMethod | undefined;
        voiceFallbackUrl: string | null | undefined;
        voiceFallbackMethod: ByocTrunkVoiceFallbackMethod | undefined;
        statusCallbackUrl: string | null | undefined;
        statusCallbackMethod: ByocTrunkStatusCallbackMethod | undefined;
        cnamLookupEnabled: boolean | null | undefined;
        connectionPolicySid: string | null | undefined;
        fromDomainSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ByocTrunkListInstance {
    (sid: string): ByocTrunkContext;
    get(sid: string): ByocTrunkContext;
    /**
     * Create a ByocTrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ByocTrunkInstance
     */
    create(callback?: (error: Error | null, item?: ByocTrunkInstance) => any): Promise<ByocTrunkInstance>;
    /**
     * Create a ByocTrunkInstance
     *
     * @param { ByocTrunkListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ByocTrunkInstance
     */
    create(params: ByocTrunkListInstanceCreateOptions, callback?: (error: Error | null, item?: ByocTrunkInstance) => any): Promise<ByocTrunkInstance>;
    create(params?: any, callback?: any): Promise<ByocTrunkInstance>;
    /**
     * Streams ByocTrunkInstance records from the API.
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
    each(callback?: (item: ByocTrunkInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ByocTrunkInstance records from the API.
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
     * @param { ByocTrunkListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ByocTrunkListInstanceEachOptions, callback?: (item: ByocTrunkInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ByocTrunkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ByocTrunkPage) => any): Promise<ByocTrunkPage>;
    /**
     * Retrieve a single target page of ByocTrunkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ByocTrunkPage) => any): Promise<ByocTrunkPage>;
    getPage(params?: any, callback?: any): Promise<ByocTrunkPage>;
    /**
     * Lists ByocTrunkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ByocTrunkInstance[]) => any): Promise<ByocTrunkInstance[]>;
    /**
     * Lists ByocTrunkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ByocTrunkListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ByocTrunkListInstanceOptions, callback?: (error: Error | null, items: ByocTrunkInstance[]) => any): Promise<ByocTrunkInstance[]>;
    list(params?: any, callback?: any): Promise<ByocTrunkInstance[]>;
    /**
     * Retrieve a single page of ByocTrunkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ByocTrunkPage) => any): Promise<ByocTrunkPage>;
    /**
     * Retrieve a single page of ByocTrunkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ByocTrunkListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ByocTrunkListInstancePageOptions, callback?: (error: Error | null, items: ByocTrunkPage) => any): Promise<ByocTrunkPage>;
    page(params?: any, callback?: any): Promise<ByocTrunkPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ByocTrunkSolution {
}
export declare function ByocTrunkListInstance(version: V1): ByocTrunkListInstance;
export declare class ByocTrunkPage extends Page<V1, ByocTrunkPayload, ByocTrunkResource, ByocTrunkInstance> {
    /**
     * Initialize the ByocTrunkPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ByocTrunkSolution);
    /**
     * Build an instance of ByocTrunkInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ByocTrunkResource): ByocTrunkInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
