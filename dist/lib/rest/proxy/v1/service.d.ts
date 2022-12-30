/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { PhoneNumberListInstance } from "./service/phoneNumber";
import { SessionListInstance } from "./service/session";
import { ShortCodeListInstance } from "./service/shortCode";
declare type ServiceGeoMatchLevel = "area-code" | "overlay" | "radius" | "country";
declare type ServiceNumberSelectionBehavior = "avoid-sticky" | "prefer-sticky";
/**
 * Options to pass to update a ServiceInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. **This value should not have PII.**
 * @property { number } [defaultTtl] The default `ttl` value to set for Sessions created in the Service. The TTL (time to live) is measured in seconds after the Session\\\'s last create or last Interaction. The default value of `0` indicates an unlimited Session length. You can override a Session\\\'s default TTL value by setting its `ttl` value.
 * @property { string } [callbackUrl] The URL we should call when the interaction status changes.
 * @property { ServiceGeoMatchLevel } [geoMatchLevel]
 * @property { ServiceNumberSelectionBehavior } [numberSelectionBehavior]
 * @property { string } [interceptCallbackUrl] The URL we call on each interaction. If we receive a 403 status, we block the interaction; otherwise the interaction continues.
 * @property { string } [outOfSessionCallbackUrl] The URL we should call when an inbound call or SMS action occurs on a closed or non-existent Session. If your server (or a Twilio [function](https://www.twilio.com/functions)) responds with valid [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This means it is possible, for example, to play a message for a call, send an automated text message response, or redirect a call to another Phone Number. See [Out-of-Session Callback Response Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more information.
 * @property { string } [chatInstanceSid] The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
 */
export interface ServiceContextUpdateOptions {
    uniqueName?: string;
    defaultTtl?: number;
    callbackUrl?: string;
    geoMatchLevel?: ServiceGeoMatchLevel;
    numberSelectionBehavior?: ServiceNumberSelectionBehavior;
    interceptCallbackUrl?: string;
    outOfSessionCallbackUrl?: string;
    chatInstanceSid?: string;
}
/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } uniqueName An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. **This value should not have PII.**
 * @property { number } [defaultTtl] The default `ttl` value to set for Sessions created in the Service. The TTL (time to live) is measured in seconds after the Session\\\'s last create or last Interaction. The default value of `0` indicates an unlimited Session length. You can override a Session\\\'s default TTL value by setting its `ttl` value.
 * @property { string } [callbackUrl] The URL we should call when the interaction status changes.
 * @property { ServiceGeoMatchLevel } [geoMatchLevel]
 * @property { ServiceNumberSelectionBehavior } [numberSelectionBehavior]
 * @property { string } [interceptCallbackUrl] The URL we call on each interaction. If we receive a 403 status, we block the interaction; otherwise the interaction continues.
 * @property { string } [outOfSessionCallbackUrl] The URL we should call when an inbound call or SMS action occurs on a closed or non-existent Session. If your server (or a Twilio [function](https://www.twilio.com/functions)) responds with valid [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This means it is possible, for example, to play a message for a call, send an automated text message response, or redirect a call to another Phone Number. See [Out-of-Session Callback Response Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more information.
 * @property { string } [chatInstanceSid] The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
 */
export interface ServiceListInstanceCreateOptions {
    uniqueName: string;
    defaultTtl?: number;
    callbackUrl?: string;
    geoMatchLevel?: ServiceGeoMatchLevel;
    numberSelectionBehavior?: ServiceNumberSelectionBehavior;
    interceptCallbackUrl?: string;
    outOfSessionCallbackUrl?: string;
    chatInstanceSid?: string;
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
export interface ServiceListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
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
export interface ServiceListInstanceOptions {
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
export interface ServiceListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ServiceContext {
    phoneNumbers: PhoneNumberListInstance;
    sessions: SessionListInstance;
    shortCodes: ShortCodeListInstance;
    /**
     * Remove a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    /**
     * Update a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    update(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    /**
     * Update a ServiceInstance
     *
     * @param { ServiceContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    update(params: ServiceContextUpdateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    update(params?: any, callback?: any): Promise<ServiceInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ServiceContextSolution {
    sid?: string;
}
export declare class ServiceContextImpl implements ServiceContext {
    protected _version: V1;
    protected _solution: ServiceContextSolution;
    protected _uri: string;
    protected _phoneNumbers?: PhoneNumberListInstance;
    protected _sessions?: SessionListInstance;
    protected _shortCodes?: ShortCodeListInstance;
    constructor(_version: V1, sid: string);
    get phoneNumbers(): PhoneNumberListInstance;
    get sessions(): SessionListInstance;
    get shortCodes(): ShortCodeListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ServiceInstance>;
    update(params?: any, callback?: any): Promise<ServiceInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ServiceContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ServicePayload extends TwilioResponsePayload {
    services: ServiceResource[];
}
interface ServiceResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    chat_instance_sid?: string | null;
    callback_url?: string | null;
    default_ttl?: number | null;
    number_selection_behavior?: ServiceNumberSelectionBehavior;
    geo_match_level?: ServiceGeoMatchLevel;
    intercept_callback_url?: string | null;
    out_of_session_callback_url?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class ServiceInstance {
    protected _version: V1;
    protected _solution: ServiceContextSolution;
    protected _context?: ServiceContext;
    constructor(_version: V1, payload: ServiceResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Chat Service Instance
     */
    chatInstanceSid?: string | null;
    /**
     * The URL we call when the interaction status changes
     */
    callbackUrl?: string | null;
    /**
     * Default TTL for a Session, in seconds
     */
    defaultTtl?: number | null;
    numberSelectionBehavior?: ServiceNumberSelectionBehavior;
    geoMatchLevel?: ServiceGeoMatchLevel;
    /**
     * The URL we call on each interaction
     */
    interceptCallbackUrl?: string | null;
    /**
     * The URL we call when an inbound call or SMS action occurs on a closed or non-existent Session
     */
    outOfSessionCallbackUrl?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Service resource
     */
    url?: string | null;
    /**
     * The URLs of resources related to the Service
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    /**
     * Update a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    update(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    /**
     * Update a ServiceInstance
     *
     * @param { ServiceContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    update(params: ServiceContextUpdateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    /**
     * Access the phoneNumbers.
     */
    phoneNumbers(): PhoneNumberListInstance;
    /**
     * Access the sessions.
     */
    sessions(): SessionListInstance;
    /**
     * Access the shortCodes.
     */
    shortCodes(): ShortCodeListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        chatInstanceSid: string | null | undefined;
        callbackUrl: string | null | undefined;
        defaultTtl: number | null | undefined;
        numberSelectionBehavior: ServiceNumberSelectionBehavior | undefined;
        geoMatchLevel: ServiceGeoMatchLevel | undefined;
        interceptCallbackUrl: string | null | undefined;
        outOfSessionCallbackUrl: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ServiceListInstance {
    (sid: string): ServiceContext;
    get(sid: string): ServiceContext;
    /**
     * Create a ServiceInstance
     *
     * @param { ServiceListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    create(params: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
    create(params: any, callback?: any): Promise<ServiceInstance>;
    /**
     * Streams ServiceInstance records from the API.
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
    each(callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ServiceInstance records from the API.
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
     * @param { ServiceListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ServiceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
    /**
     * Retrieve a single target page of ServiceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
    getPage(params?: any, callback?: any): Promise<ServicePage>;
    /**
     * Lists ServiceInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
    /**
     * Lists ServiceInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ServiceListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
    list(params?: any, callback?: any): Promise<ServiceInstance[]>;
    /**
     * Retrieve a single page of ServiceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
    /**
     * Retrieve a single page of ServiceInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ServiceListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
    page(params?: any, callback?: any): Promise<ServicePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ServiceSolution {
}
export declare function ServiceListInstance(version: V1): ServiceListInstance;
export declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
    /**
     * Initialize the ServicePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ServiceSolution);
    /**
     * Build an instance of ServiceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ServiceResource): ServiceInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
