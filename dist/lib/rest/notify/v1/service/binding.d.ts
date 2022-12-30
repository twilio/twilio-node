/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
declare type BindingBindingType = "apn" | "gcm" | "sms" | "fcm" | "facebook-messenger" | "alexa";
/**
 * Options to pass to create a BindingInstance
 *
 * @property { string } identity The `identity` value that uniquely identifies the new resource\\\'s [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/notify/api/service-resource). Up to 20 Bindings can be created for the same Identity in a given Service.
 * @property { BindingBindingType } bindingType
 * @property { string } address The channel-specific address. For APNS, the device token. For FCM and GCM, the registration token. For SMS, a phone number in E.164 format. For Facebook Messenger, the Messenger ID of the user or a phone number in E.164 format.
 * @property { Array<string> } [tag] A tag that can be used to select the Bindings to notify. Repeat this parameter to specify more than one tag, up to a total of 20 tags.
 * @property { string } [notificationProtocolVersion] The protocol version to use to send the notification. This defaults to the value of `default_xxxx_notification_protocol_version` for the protocol in the [Service](https://www.twilio.com/docs/notify/api/service-resource). The current version is `\\\"3\\\"` for `apn`, `fcm`, and `gcm` type Bindings. The parameter is not applicable to `sms` and `facebook-messenger` type Bindings as the data format is fixed.
 * @property { string } [credentialSid] The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) resource to be used to send notifications to this Binding. If present, this overrides the Credential specified in the Service resource. Applies to only `apn`, `fcm`, and `gcm` type Bindings.
 * @property { string } [endpoint] Deprecated.
 */
export interface BindingListInstanceCreateOptions {
    identity: string;
    bindingType: BindingBindingType;
    address: string;
    tag?: Array<string>;
    notificationProtocolVersion?: string;
    credentialSid?: string;
    endpoint?: string;
}
/**
 * Options to pass to each
 *
 * @property { Date } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`.
 * @property { Date } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.
 * @property { Array<string> } [identity] The [User](https://www.twilio.com/docs/chat/rest/user-resource)\'s `identity` value of the resources to read.
 * @property { Array<string> } [tag] Only list Bindings that have all of the specified Tags. The following implicit tags are available: `all`, `apn`, `fcm`, `gcm`, `sms`, `facebook-messenger`. Up to 5 tags are allowed.
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
export interface BindingListInstanceEachOptions {
    startDate?: Date;
    endDate?: Date;
    identity?: Array<string>;
    tag?: Array<string>;
    pageSize?: number;
    callback?: (item: BindingInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Date } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`.
 * @property { Date } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.
 * @property { Array<string> } [identity] The [User](https://www.twilio.com/docs/chat/rest/user-resource)\'s `identity` value of the resources to read.
 * @property { Array<string> } [tag] Only list Bindings that have all of the specified Tags. The following implicit tags are available: `all`, `apn`, `fcm`, `gcm`, `sms`, `facebook-messenger`. Up to 5 tags are allowed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BindingListInstanceOptions {
    startDate?: Date;
    endDate?: Date;
    identity?: Array<string>;
    tag?: Array<string>;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Date } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`.
 * @property { Date } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.
 * @property { Array<string> } [identity] The [User](https://www.twilio.com/docs/chat/rest/user-resource)\'s `identity` value of the resources to read.
 * @property { Array<string> } [tag] Only list Bindings that have all of the specified Tags. The following implicit tags are available: `all`, `apn`, `fcm`, `gcm`, `sms`, `facebook-messenger`. Up to 5 tags are allowed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface BindingListInstancePageOptions {
    startDate?: Date;
    endDate?: Date;
    identity?: Array<string>;
    tag?: Array<string>;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface BindingContext {
    /**
     * Remove a BindingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a BindingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BindingInstance
     */
    fetch(callback?: (error: Error | null, item?: BindingInstance) => any): Promise<BindingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BindingContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class BindingContextImpl implements BindingContext {
    protected _version: V1;
    protected _solution: BindingContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<BindingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): BindingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface BindingPayload extends TwilioResponsePayload {
    bindings: BindingResource[];
}
interface BindingResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    credential_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    notification_protocol_version?: string | null;
    endpoint?: string | null;
    identity?: string | null;
    binding_type?: string | null;
    address?: string | null;
    tags?: Array<string> | null;
    url?: string | null;
    links?: object | null;
}
export declare class BindingInstance {
    protected _version: V1;
    protected _solution: BindingContextSolution;
    protected _context?: BindingContext;
    constructor(_version: V1, payload: BindingResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Credential resource to be used to send notifications to this Binding
     */
    credentialSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The protocol version to use to send the notification
     */
    notificationProtocolVersion?: string | null;
    /**
     * Deprecated
     */
    endpoint?: string | null;
    /**
     * The `identity` value that identifies the new resource\'s User
     */
    identity?: string | null;
    /**
     * The type of the Binding
     */
    bindingType?: string | null;
    /**
     * The channel-specific address
     */
    address?: string | null;
    /**
     * The list of tags associated with this Binding
     */
    tags?: Array<string> | null;
    /**
     * The absolute URL of the Binding resource
     */
    url?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a BindingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a BindingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BindingInstance
     */
    fetch(callback?: (error: Error | null, item?: BindingInstance) => any): Promise<BindingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        credentialSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        notificationProtocolVersion: string | null | undefined;
        endpoint: string | null | undefined;
        identity: string | null | undefined;
        bindingType: string | null | undefined;
        address: string | null | undefined;
        tags: string[] | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface BindingListInstance {
    (sid: string): BindingContext;
    get(sid: string): BindingContext;
    /**
     * Create a BindingInstance
     *
     * @param { BindingListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BindingInstance
     */
    create(params: BindingListInstanceCreateOptions, callback?: (error: Error | null, item?: BindingInstance) => any): Promise<BindingInstance>;
    create(params: any, callback?: any): Promise<BindingInstance>;
    /**
     * Streams BindingInstance records from the API.
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
    each(callback?: (item: BindingInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams BindingInstance records from the API.
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
     * @param { BindingListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: BindingListInstanceEachOptions, callback?: (item: BindingInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of BindingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
    /**
     * Retrieve a single target page of BindingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
    getPage(params?: any, callback?: any): Promise<BindingPage>;
    /**
     * Lists BindingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: BindingInstance[]) => any): Promise<BindingInstance[]>;
    /**
     * Lists BindingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BindingListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: BindingListInstanceOptions, callback?: (error: Error | null, items: BindingInstance[]) => any): Promise<BindingInstance[]>;
    list(params?: any, callback?: any): Promise<BindingInstance[]>;
    /**
     * Retrieve a single page of BindingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
    /**
     * Retrieve a single page of BindingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BindingListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: BindingListInstancePageOptions, callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
    page(params?: any, callback?: any): Promise<BindingPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BindingSolution {
    serviceSid?: string;
}
export declare function BindingListInstance(version: V1, serviceSid: string): BindingListInstance;
export declare class BindingPage extends Page<V1, BindingPayload, BindingResource, BindingInstance> {
    /**
     * Initialize the BindingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: BindingSolution);
    /**
     * Build an instance of BindingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: BindingResource): BindingInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
