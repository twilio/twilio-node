/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { AlphaSenderListInstance } from "./service/alphaSender";
import { PhoneNumberListInstance } from "./service/phoneNumber";
import { ShortCodeListInstance } from "./service/shortCode";
import { UsAppToPersonListInstance } from "./service/usAppToPerson";
import { UsAppToPersonUsecaseListInstance } from "./service/usAppToPersonUsecase";
declare type ServiceScanMessageContent = "inherit" | "enable" | "disable";
/**
 * Options to pass to update a ServiceInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [inboundRequestUrl] The URL we call using `inbound_method` when a message is received by any phone number or short code in the Service. When this property is `null`, receiving inbound messages is disabled. All messages sent to the Twilio phone number or short code will not be logged and received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `inbound_request_url` defined for the Messaging Service.
 * @property { string } [inboundMethod] The HTTP method we should use to call `inbound_request_url`. Can be `GET` or `POST` and the default is `POST`.
 * @property { string } [fallbackUrl] The URL that we call using `fallback_method` if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `fallback_url` defined for the Messaging Service.
 * @property { string } [fallbackMethod] The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`.
 * @property { string } [statusCallback] The URL we should call to [pass status updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about message delivery.
 * @property { boolean } [stickySender] Whether to enable [Sticky Sender](https://www.twilio.com/docs/sms/services#sticky-sender) on the Service instance.
 * @property { boolean } [mmsConverter] Whether to enable the [MMS Converter](https://www.twilio.com/docs/sms/services#mms-converter) for messages sent through the Service instance.
 * @property { boolean } [smartEncoding] Whether to enable [Smart Encoding](https://www.twilio.com/docs/sms/services#smart-encoding) for messages sent through the Service instance.
 * @property { ServiceScanMessageContent } [scanMessageContent]
 * @property { boolean } [fallbackToLongCode] Whether to enable [Fallback to Long Code](https://www.twilio.com/docs/sms/services#fallback-to-long-code) for messages sent through the Service instance.
 * @property { boolean } [areaCodeGeomatch] Whether to enable [Area Code Geomatch](https://www.twilio.com/docs/sms/services#area-code-geomatch) on the Service Instance.
 * @property { number } [validityPeriod] How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to `14,400`.
 * @property { boolean } [synchronousValidation] Reserved.
 * @property { string } [usecase] A string that describes the scenario in which the Messaging Service will be used. Examples: [notification, marketing, verification, poll ..]
 * @property { boolean } [useInboundWebhookOnNumber] A boolean value that indicates either the webhook url configured on the phone number will be used or `inbound_request_url`/`fallback_url` url will be called when a message is received from the phone number. If this field is enabled then the webhook url defined on the phone number will override the `inbound_request_url`/`fallback_url` defined for the Messaging Service.
 */
export interface ServiceContextUpdateOptions {
    friendlyName?: string;
    inboundRequestUrl?: string;
    inboundMethod?: string;
    fallbackUrl?: string;
    fallbackMethod?: string;
    statusCallback?: string;
    stickySender?: boolean;
    mmsConverter?: boolean;
    smartEncoding?: boolean;
    scanMessageContent?: ServiceScanMessageContent;
    fallbackToLongCode?: boolean;
    areaCodeGeomatch?: boolean;
    validityPeriod?: number;
    synchronousValidation?: boolean;
    usecase?: string;
    useInboundWebhookOnNumber?: boolean;
}
/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [inboundRequestUrl] The URL we call using `inbound_method` when a message is received by any phone number or short code in the Service. When this property is `null`, receiving inbound messages is disabled. All messages sent to the Twilio phone number or short code will not be logged and received on the Account. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `inbound_request_url` defined for the Messaging Service.
 * @property { string } [inboundMethod] The HTTP method we should use to call `inbound_request_url`. Can be `GET` or `POST` and the default is `POST`.
 * @property { string } [fallbackUrl] The URL that we call using `fallback_method` if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. If the `use_inbound_webhook_on_number` field is enabled then the webhook url defined on the phone number will override the `fallback_url` defined for the Messaging Service.
 * @property { string } [fallbackMethod] The HTTP method we should use to call `fallback_url`. Can be: `GET` or `POST`.
 * @property { string } [statusCallback] The URL we should call to [pass status updates](https://www.twilio.com/docs/sms/api/message-resource#message-status-values) about message delivery.
 * @property { boolean } [stickySender] Whether to enable [Sticky Sender](https://www.twilio.com/docs/sms/services#sticky-sender) on the Service instance.
 * @property { boolean } [mmsConverter] Whether to enable the [MMS Converter](https://www.twilio.com/docs/sms/services#mms-converter) for messages sent through the Service instance.
 * @property { boolean } [smartEncoding] Whether to enable [Smart Encoding](https://www.twilio.com/docs/sms/services#smart-encoding) for messages sent through the Service instance.
 * @property { ServiceScanMessageContent } [scanMessageContent]
 * @property { boolean } [fallbackToLongCode] Whether to enable [Fallback to Long Code](https://www.twilio.com/docs/sms/services#fallback-to-long-code) for messages sent through the Service instance.
 * @property { boolean } [areaCodeGeomatch] Whether to enable [Area Code Geomatch](https://www.twilio.com/docs/sms/services#area-code-geomatch) on the Service Instance.
 * @property { number } [validityPeriod] How long, in seconds, messages sent from the Service are valid. Can be an integer from `1` to `14,400`.
 * @property { boolean } [synchronousValidation] Reserved.
 * @property { string } [usecase] A string that describes the scenario in which the Messaging Service will be used. Examples: [notification, marketing, verification, poll ..].
 * @property { boolean } [useInboundWebhookOnNumber] A boolean value that indicates either the webhook url configured on the phone number will be used or `inbound_request_url`/`fallback_url` url will be called when a message is received from the phone number. If this field is enabled then the webhook url defined on the phone number will override the `inbound_request_url`/`fallback_url` defined for the Messaging Service.
 */
export interface ServiceListInstanceCreateOptions {
    friendlyName: string;
    inboundRequestUrl?: string;
    inboundMethod?: string;
    fallbackUrl?: string;
    fallbackMethod?: string;
    statusCallback?: string;
    stickySender?: boolean;
    mmsConverter?: boolean;
    smartEncoding?: boolean;
    scanMessageContent?: ServiceScanMessageContent;
    fallbackToLongCode?: boolean;
    areaCodeGeomatch?: boolean;
    validityPeriod?: number;
    synchronousValidation?: boolean;
    usecase?: string;
    useInboundWebhookOnNumber?: boolean;
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
    alphaSenders: AlphaSenderListInstance;
    phoneNumbers: PhoneNumberListInstance;
    shortCodes: ShortCodeListInstance;
    usAppToPerson: UsAppToPersonListInstance;
    usAppToPersonUsecases: UsAppToPersonUsecaseListInstance;
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
    protected _alphaSenders?: AlphaSenderListInstance;
    protected _phoneNumbers?: PhoneNumberListInstance;
    protected _shortCodes?: ShortCodeListInstance;
    protected _usAppToPerson?: UsAppToPersonListInstance;
    protected _usAppToPersonUsecases?: UsAppToPersonUsecaseListInstance;
    constructor(_version: V1, sid: string);
    get alphaSenders(): AlphaSenderListInstance;
    get phoneNumbers(): PhoneNumberListInstance;
    get shortCodes(): ShortCodeListInstance;
    get usAppToPerson(): UsAppToPersonListInstance;
    get usAppToPersonUsecases(): UsAppToPersonUsecaseListInstance;
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
export declare type ServiceInboundMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type ServiceFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface ServicePayload extends TwilioResponsePayload {
    services: ServiceResource[];
}
interface ServiceResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    inbound_request_url?: string | null;
    inbound_method?: ServiceInboundMethod;
    fallback_url?: string | null;
    fallback_method?: ServiceFallbackMethod;
    status_callback?: string | null;
    sticky_sender?: boolean | null;
    mms_converter?: boolean | null;
    smart_encoding?: boolean | null;
    scan_message_content?: ServiceScanMessageContent;
    fallback_to_long_code?: boolean | null;
    area_code_geomatch?: boolean | null;
    synchronous_validation?: boolean | null;
    validity_period?: number | null;
    url?: string | null;
    links?: object | null;
    usecase?: string | null;
    us_app_to_person_registered?: boolean | null;
    use_inbound_webhook_on_number?: boolean | null;
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
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The URL we call using inbound_method when a message is received by any phone number or short code in the Service. This field will be overridden if the `use_inbound_webhook_on_number` field is enabled.
     */
    inboundRequestUrl?: string | null;
    /**
     * The HTTP method we use to call inbound_request_url
     */
    inboundMethod?: ServiceInboundMethod;
    /**
     * The URL that we call using fallback_method if an error occurs while retrieving or executing the TwiML from the Inbound Request URL. This field will be overridden if the `use_inbound_webhook_on_number` field is enabled.
     */
    fallbackUrl?: string | null;
    /**
     * The HTTP method we use to call fallback_url
     */
    fallbackMethod?: ServiceFallbackMethod;
    /**
     * The URL we call to pass status updates about message delivery
     */
    statusCallback?: string | null;
    /**
     * Whether to enable Sticky Sender on the Service instance
     */
    stickySender?: boolean | null;
    /**
     * Whether to enable the MMS Converter for messages sent through the Service instance
     */
    mmsConverter?: boolean | null;
    /**
     * Whether to enable Encoding for messages sent through the Service instance
     */
    smartEncoding?: boolean | null;
    scanMessageContent?: ServiceScanMessageContent;
    /**
     * Whether to enable Fallback to Long Code for messages sent through the Service instance
     */
    fallbackToLongCode?: boolean | null;
    /**
     * Whether to enable Area Code Geomatch on the Service Instance
     */
    areaCodeGeomatch?: boolean | null;
    /**
     * Reserved
     */
    synchronousValidation?: boolean | null;
    /**
     * How long, in seconds, messages sent from the Service are valid
     */
    validityPeriod?: number | null;
    /**
     * The absolute URL of the Service resource
     */
    url?: string | null;
    /**
     * The absolute URLs of related resources
     */
    links?: object | null;
    /**
     * A string describing the scenario in which the Messaging Service will be used
     */
    usecase?: string | null;
    /**
     * Whether US A2P campaign is registered for this Service.
     */
    usAppToPersonRegistered?: boolean | null;
    /**
     * If enabled, the webhook url configured on the phone number will be used and will override the `inbound_request_url`/`fallback_url` url called when an inbound message is received.
     */
    useInboundWebhookOnNumber?: boolean | null;
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
     * Access the alphaSenders.
     */
    alphaSenders(): AlphaSenderListInstance;
    /**
     * Access the phoneNumbers.
     */
    phoneNumbers(): PhoneNumberListInstance;
    /**
     * Access the shortCodes.
     */
    shortCodes(): ShortCodeListInstance;
    /**
     * Access the usAppToPerson.
     */
    usAppToPerson(): UsAppToPersonListInstance;
    /**
     * Access the usAppToPersonUsecases.
     */
    usAppToPersonUsecases(): UsAppToPersonUsecaseListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        inboundRequestUrl: string | null | undefined;
        inboundMethod: ServiceInboundMethod | undefined;
        fallbackUrl: string | null | undefined;
        fallbackMethod: ServiceFallbackMethod | undefined;
        statusCallback: string | null | undefined;
        stickySender: boolean | null | undefined;
        mmsConverter: boolean | null | undefined;
        smartEncoding: boolean | null | undefined;
        scanMessageContent: ServiceScanMessageContent | undefined;
        fallbackToLongCode: boolean | null | undefined;
        areaCodeGeomatch: boolean | null | undefined;
        synchronousValidation: boolean | null | undefined;
        validityPeriod: number | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
        usecase: string | null | undefined;
        usAppToPersonRegistered: boolean | null | undefined;
        useInboundWebhookOnNumber: boolean | null | undefined;
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
