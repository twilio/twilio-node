/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../../V2";
declare type VerificationChannel = "sms" | "call" | "email" | "whatsapp" | "sna";
declare type VerificationStatus = "canceled" | "approved";
/**
 * Options to pass to update a VerificationInstance
 *
 * @property { VerificationStatus } status
 */
export interface VerificationContextUpdateOptions {
    status: VerificationStatus;
}
/**
 * Options to pass to create a VerificationInstance
 *
 * @property { string } to The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
 * @property { string } channel The verification method to use. One of: [`email`](https://www.twilio.com/docs/verify/email), `sms`, `whatsapp`, `call`, or `sna`.
 * @property { string } [customFriendlyName] A custom user defined friendly name that overwrites the existing one in the verification message
 * @property { string } [customMessage] The text of a custom message to use for the verification.
 * @property { string } [sendDigits] The digits to send after a phone call is answered, for example, to dial an extension. For more information, see the Programmable Voice documentation of [sendDigits](https://www.twilio.com/docs/voice/twiml/number#attributes-sendDigits).
 * @property { string } [locale] Locale will automatically resolve based on phone number country code for SMS, WhatsApp and call channel verifications. This parameter will override the automatic locale. [See supported languages and more information here](https://www.twilio.com/docs/verify/supported-languages).
 * @property { string } [customCode] A pre-generated code to use for verification. The code can be between 4 and 10 characters, inclusive.
 * @property { string } [amount] The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
 * @property { string } [payee] The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
 * @property { any } [rateLimits] The custom key-value pairs of Programmable Rate Limits. Keys correspond to `unique_name` fields defined when [creating your Rate Limit](https://www.twilio.com/docs/verify/api/service-rate-limits). Associated value pairs represent values in the request that you are rate limiting on. You may include multiple Rate Limit values in each request.
 * @property { any } [channelConfiguration] [`email`](https://www.twilio.com/docs/verify/email) channel configuration in json format. The fields \\\'from\\\' and \\\'from_name\\\' are optional but if included the \\\'from\\\' field must have a valid email address.
 * @property { string } [appHash] Your [App Hash](https://developers.google.com/identity/sms-retriever/verify#computing_your_apps_hash_string) to be appended at the end of your verification SMS body. Applies only to SMS. Example SMS body: `<#> Your AppName verification code is: 1234 He42w354ol9`.
 * @property { string } [templateSid] The message [template](https://www.twilio.com/docs/verify/api/templates). If provided, will override the default template for the Service. SMS and Voice channels only.
 * @property { string } [templateCustomSubstitutions] A stringified JSON object in which the keys are the template\\\'s special variables and the values are the variables substitutions.
 */
export interface VerificationListInstanceCreateOptions {
    to: string;
    channel: string;
    customFriendlyName?: string;
    customMessage?: string;
    sendDigits?: string;
    locale?: string;
    customCode?: string;
    amount?: string;
    payee?: string;
    rateLimits?: any;
    channelConfiguration?: any;
    appHash?: string;
    templateSid?: string;
    templateCustomSubstitutions?: string;
}
export interface VerificationContext {
    /**
     * Fetch a VerificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationInstance
     */
    fetch(callback?: (error: Error | null, item?: VerificationInstance) => any): Promise<VerificationInstance>;
    /**
     * Update a VerificationInstance
     *
     * @param { VerificationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationInstance
     */
    update(params: VerificationContextUpdateOptions, callback?: (error: Error | null, item?: VerificationInstance) => any): Promise<VerificationInstance>;
    update(params: any, callback?: any): Promise<VerificationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface VerificationContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class VerificationContextImpl implements VerificationContext {
    protected _version: V2;
    protected _solution: VerificationContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, sid: string);
    fetch(callback?: any): Promise<VerificationInstance>;
    update(params: any, callback?: any): Promise<VerificationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): VerificationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface VerificationResource {
    sid?: string | null;
    service_sid?: string | null;
    account_sid?: string | null;
    to?: string | null;
    channel?: VerificationChannel;
    status?: string | null;
    valid?: boolean | null;
    lookup?: any | null;
    amount?: string | null;
    payee?: string | null;
    send_code_attempts?: Array<any> | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    sna?: any | null;
    url?: string | null;
}
export declare class VerificationInstance {
    protected _version: V2;
    protected _solution: VerificationContextSolution;
    protected _context?: VerificationContext;
    constructor(_version: V2, payload: VerificationResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The phone number or email being verified
     */
    to?: string | null;
    channel?: VerificationChannel;
    /**
     * The status of the verification resource
     */
    status?: string | null;
    /**
     * Whether the verification was successful
     */
    valid?: boolean | null;
    /**
     * Information about the phone number being verified
     */
    lookup?: any | null;
    /**
     * The amount of the associated PSD2 compliant transaction.
     */
    amount?: string | null;
    /**
     * The payee of the associated PSD2 compliant transaction
     */
    payee?: string | null;
    /**
     * An array of verification attempt objects.
     */
    sendCodeAttempts?: Array<any> | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The set of fields used for a silent network auth (`sna`) verification
     */
    sna?: any | null;
    /**
     * The absolute URL of the Verification resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a VerificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationInstance
     */
    fetch(callback?: (error: Error | null, item?: VerificationInstance) => any): Promise<VerificationInstance>;
    /**
     * Update a VerificationInstance
     *
     * @param { VerificationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationInstance
     */
    update(params: VerificationContextUpdateOptions, callback?: (error: Error | null, item?: VerificationInstance) => any): Promise<VerificationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        serviceSid: string | null | undefined;
        accountSid: string | null | undefined;
        to: string | null | undefined;
        channel: VerificationChannel | undefined;
        status: string | null | undefined;
        valid: boolean | null | undefined;
        lookup: any;
        amount: string | null | undefined;
        payee: string | null | undefined;
        sendCodeAttempts: any[] | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        sna: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface VerificationListInstance {
    (sid: string): VerificationContext;
    get(sid: string): VerificationContext;
    /**
     * Create a VerificationInstance
     *
     * @param { VerificationListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationInstance
     */
    create(params: VerificationListInstanceCreateOptions, callback?: (error: Error | null, item?: VerificationInstance) => any): Promise<VerificationInstance>;
    create(params: any, callback?: any): Promise<VerificationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface VerificationSolution {
    serviceSid?: string;
}
export declare function VerificationListInstance(version: V2, serviceSid: string): VerificationListInstance;
export {};
