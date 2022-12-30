/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
import { AccessTokenListInstance } from "./service/accessToken";
import { EntityListInstance } from "./service/entity";
import { MessagingConfigurationListInstance } from "./service/messagingConfiguration";
import { RateLimitListInstance } from "./service/rateLimit";
import { VerificationListInstance } from "./service/verification";
import { VerificationCheckListInstance } from "./service/verificationCheck";
import { WebhookListInstance } from "./service/webhook";
/**
 * Options to pass to update a ServiceInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the verification service. It can be up to 30 characters long. **This value should not contain PII.**
 * @property { number } [codeLength] The length of the verification code to generate. Must be an integer value between 4 and 10, inclusive.
 * @property { boolean } [lookupEnabled] Whether to perform a lookup with each verification started and return info about the phone number.
 * @property { boolean } [skipSmsToLandlines] Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`.
 * @property { boolean } [dtmfInputRequired] Whether to ask the user to press a number before delivering the verify code in a phone call.
 * @property { string } [ttsName] The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS languages.
 * @property { boolean } [psd2Enabled] Whether to pass PSD2 transaction parameters when starting a verification.
 * @property { boolean } [doNotShareWarningEnabled] Whether to add a privacy warning at the end of an SMS. **Disabled by default and applies only for SMS.**
 * @property { boolean } [customCodeEnabled] Whether to allow sending verifications with a custom code instead of a randomly generated one. Not available for all customers.
 * @property { boolean } [push.includeDate] Optional configuration for the Push factors. If true, include the date in the Challenge\\\'s response. Otherwise, the date is omitted from the response. See [Challenge](https://www.twilio.com/docs/verify/api/challenge) resource’s details parameter for more info. Default: false. **Deprecated** do not use this parameter.
 * @property { string } [push.apnCredentialSid] Optional configuration for the Push factors. Set the APN Credential for this service. This will allow to send push notifications to iOS devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
 * @property { string } [push.fcmCredentialSid] Optional configuration for the Push factors. Set the FCM Credential for this service. This will allow to send push notifications to Android devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
 * @property { string } [totp.issuer] Optional configuration for the TOTP factors. Set TOTP Issuer for this service. This will allow to configure the issuer of the TOTP URI.
 * @property { number } [totp.timeStep] Optional configuration for the TOTP factors. Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. Defaults to 30 seconds
 * @property { number } [totp.codeLength] Optional configuration for the TOTP factors. Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. Defaults to 6
 * @property { number } [totp.skew] Optional configuration for the TOTP factors. The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. Defaults to 1
 * @property { string } [defaultTemplateSid] The default message [template](https://www.twilio.com/docs/verify/api/templates). Will be used for all SMS verifications unless explicitly overriden. SMS channel only.
 */
export interface ServiceContextUpdateOptions {
    friendlyName?: string;
    codeLength?: number;
    lookupEnabled?: boolean;
    skipSmsToLandlines?: boolean;
    dtmfInputRequired?: boolean;
    ttsName?: string;
    psd2Enabled?: boolean;
    doNotShareWarningEnabled?: boolean;
    customCodeEnabled?: boolean;
    "push.includeDate"?: boolean;
    "push.apnCredentialSid"?: string;
    "push.fcmCredentialSid"?: string;
    "totp.issuer"?: string;
    "totp.timeStep"?: number;
    "totp.codeLength"?: number;
    "totp.skew"?: number;
    defaultTemplateSid?: string;
}
/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the verification service. It can be up to 30 characters long. **This value should not contain PII.**
 * @property { number } [codeLength] The length of the verification code to generate. Must be an integer value between 4 and 10, inclusive.
 * @property { boolean } [lookupEnabled] Whether to perform a lookup with each verification started and return info about the phone number.
 * @property { boolean } [skipSmsToLandlines] Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`.
 * @property { boolean } [dtmfInputRequired] Whether to ask the user to press a number before delivering the verify code in a phone call.
 * @property { string } [ttsName] The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS languages.
 * @property { boolean } [psd2Enabled] Whether to pass PSD2 transaction parameters when starting a verification.
 * @property { boolean } [doNotShareWarningEnabled] Whether to add a security warning at the end of an SMS verification body. Disabled by default and applies only to SMS. Example SMS body: `Your AppName verification code is: 1234. Don’t share this code with anyone; our employees will never ask for the code`
 * @property { boolean } [customCodeEnabled] Whether to allow sending verifications with a custom code instead of a randomly generated one. Not available for all customers.
 * @property { boolean } [push.includeDate] Optional configuration for the Push factors. If true, include the date in the Challenge\\\'s response. Otherwise, the date is omitted from the response. See [Challenge](https://www.twilio.com/docs/verify/api/challenge) resource’s details parameter for more info. Default: false. **Deprecated** do not use this parameter. This timestamp value is the same one as the one found in `date_created`, please use that one instead.
 * @property { string } [push.apnCredentialSid] Optional configuration for the Push factors. Set the APN Credential for this service. This will allow to send push notifications to iOS devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
 * @property { string } [push.fcmCredentialSid] Optional configuration for the Push factors. Set the FCM Credential for this service. This will allow to send push notifications to Android devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
 * @property { string } [totp.issuer] Optional configuration for the TOTP factors. Set TOTP Issuer for this service. This will allow to configure the issuer of the TOTP URI. Defaults to the service friendly name if not provided.
 * @property { number } [totp.timeStep] Optional configuration for the TOTP factors. Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. Defaults to 30 seconds
 * @property { number } [totp.codeLength] Optional configuration for the TOTP factors. Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. Defaults to 6
 * @property { number } [totp.skew] Optional configuration for the TOTP factors. The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. Defaults to 1
 * @property { string } [defaultTemplateSid] The default message [template](https://www.twilio.com/docs/verify/api/templates). Will be used for all SMS verifications unless explicitly overriden. SMS channel only.
 */
export interface ServiceListInstanceCreateOptions {
    friendlyName: string;
    codeLength?: number;
    lookupEnabled?: boolean;
    skipSmsToLandlines?: boolean;
    dtmfInputRequired?: boolean;
    ttsName?: string;
    psd2Enabled?: boolean;
    doNotShareWarningEnabled?: boolean;
    customCodeEnabled?: boolean;
    "push.includeDate"?: boolean;
    "push.apnCredentialSid"?: string;
    "push.fcmCredentialSid"?: string;
    "totp.issuer"?: string;
    "totp.timeStep"?: number;
    "totp.codeLength"?: number;
    "totp.skew"?: number;
    defaultTemplateSid?: string;
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
    accessTokens: AccessTokenListInstance;
    entities: EntityListInstance;
    messagingConfigurations: MessagingConfigurationListInstance;
    rateLimits: RateLimitListInstance;
    verifications: VerificationListInstance;
    verificationChecks: VerificationCheckListInstance;
    webhooks: WebhookListInstance;
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
    protected _version: V2;
    protected _solution: ServiceContextSolution;
    protected _uri: string;
    protected _accessTokens?: AccessTokenListInstance;
    protected _entities?: EntityListInstance;
    protected _messagingConfigurations?: MessagingConfigurationListInstance;
    protected _rateLimits?: RateLimitListInstance;
    protected _verifications?: VerificationListInstance;
    protected _verificationChecks?: VerificationCheckListInstance;
    protected _webhooks?: WebhookListInstance;
    constructor(_version: V2, sid: string);
    get accessTokens(): AccessTokenListInstance;
    get entities(): EntityListInstance;
    get messagingConfigurations(): MessagingConfigurationListInstance;
    get rateLimits(): RateLimitListInstance;
    get verifications(): VerificationListInstance;
    get verificationChecks(): VerificationCheckListInstance;
    get webhooks(): WebhookListInstance;
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
    account_sid?: string | null;
    friendly_name?: string | null;
    code_length?: number | null;
    lookup_enabled?: boolean | null;
    psd2_enabled?: boolean | null;
    skip_sms_to_landlines?: boolean | null;
    dtmf_input_required?: boolean | null;
    tts_name?: string | null;
    do_not_share_warning_enabled?: boolean | null;
    custom_code_enabled?: boolean | null;
    push?: any | null;
    totp?: any | null;
    default_template_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class ServiceInstance {
    protected _version: V2;
    protected _solution: ServiceContextSolution;
    protected _context?: ServiceContext;
    constructor(_version: V2, payload: ServiceResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the verification service
     */
    friendlyName?: string | null;
    /**
     * The length of the verification code
     */
    codeLength?: number | null;
    /**
     * Whether to perform a lookup with each verification
     */
    lookupEnabled?: boolean | null;
    /**
     * Whether to pass PSD2 transaction parameters when starting a verification
     */
    psd2Enabled?: boolean | null;
    /**
     * Whether to skip sending SMS verifications to landlines
     */
    skipSmsToLandlines?: boolean | null;
    /**
     * Whether to ask the user to press a number before delivering the verify code in a phone call
     */
    dtmfInputRequired?: boolean | null;
    /**
     * The name of an alternative text-to-speech service to use in phone calls
     */
    ttsName?: string | null;
    /**
     * Whether to add a security warning at the end of an SMS.
     */
    doNotShareWarningEnabled?: boolean | null;
    /**
     * Whether to allow sending verifications with a custom code.
     */
    customCodeEnabled?: boolean | null;
    /**
     * The service level configuration of factor push type.
     */
    push?: any | null;
    /**
     * The service level configuration of factor TOTP type.
     */
    totp?: any | null;
    defaultTemplateSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The URLs of related resources
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
     * Access the accessTokens.
     */
    accessTokens(): AccessTokenListInstance;
    /**
     * Access the entities.
     */
    entities(): EntityListInstance;
    /**
     * Access the messagingConfigurations.
     */
    messagingConfigurations(): MessagingConfigurationListInstance;
    /**
     * Access the rateLimits.
     */
    rateLimits(): RateLimitListInstance;
    /**
     * Access the verifications.
     */
    verifications(): VerificationListInstance;
    /**
     * Access the verificationChecks.
     */
    verificationChecks(): VerificationCheckListInstance;
    /**
     * Access the webhooks.
     */
    webhooks(): WebhookListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        codeLength: number | null | undefined;
        lookupEnabled: boolean | null | undefined;
        psd2Enabled: boolean | null | undefined;
        skipSmsToLandlines: boolean | null | undefined;
        dtmfInputRequired: boolean | null | undefined;
        ttsName: string | null | undefined;
        doNotShareWarningEnabled: boolean | null | undefined;
        customCodeEnabled: boolean | null | undefined;
        push: any;
        totp: any;
        defaultTemplateSid: string | null | undefined;
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
export declare function ServiceListInstance(version: V2): ServiceListInstance;
export declare class ServicePage extends Page<V2, ServicePayload, ServiceResource, ServiceInstance> {
    /**
     * Initialize the ServicePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: ServiceSolution);
    /**
     * Build an instance of ServiceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ServiceResource): ServiceInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
