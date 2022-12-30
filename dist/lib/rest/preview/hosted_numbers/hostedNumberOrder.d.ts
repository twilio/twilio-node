/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import HostedNumbers from "../HostedNumbers";
import { PhoneNumberCapabilities } from "../../../../lib/interfaces";
declare type HostedNumberOrderStatus = "received" | "pending-verification" | "verified" | "pending-loa" | "carrier-processing" | "testing" | "completed" | "failed" | "action-required";
declare type HostedNumberOrderVerificationType = "phone-call" | "phone-bill";
/**
 * Options to pass to update a HostedNumberOrderInstance
 *
 * @property { string } [friendlyName] A 64 character string that is a human readable text that describes this resource.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { string } [email] Email of the owner of this phone number that is being hosted.
 * @property { Array<string> } [ccEmails] Optional. A list of emails that LOA document for this HostedNumberOrder will be carbon copied to.
 * @property { HostedNumberOrderStatus } [status]
 * @property { string } [verificationCode] A verification code that is given to the user via a phone call to the phone number that is being hosted.
 * @property { HostedNumberOrderVerificationType } [verificationType]
 * @property { string } [verificationDocumentSid] Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
 * @property { string } [extension] Digits to dial after connecting the verification call.
 * @property { number } [callDelay] The number of seconds, between 0 and 60, to delay before initiating the verification call. Defaults to 0.
 */
export interface HostedNumberOrderContextUpdateOptions {
    friendlyName?: string;
    uniqueName?: string;
    email?: string;
    ccEmails?: Array<string>;
    status?: HostedNumberOrderStatus;
    verificationCode?: string;
    verificationType?: HostedNumberOrderVerificationType;
    verificationDocumentSid?: string;
    extension?: string;
    callDelay?: number;
}
/**
 * Options to pass to create a HostedNumberOrderInstance
 *
 * @property { string } phoneNumber The number to host in [+E.164](https://en.wikipedia.org/wiki/E.164) format
 * @property { boolean } smsCapability Used to specify that the SMS capability will be hosted on Twilio\\\'s platform.
 * @property { string } [accountSid] This defaults to the AccountSid of the authorization the user is using. This can be provided to specify a subaccount to add the HostedNumberOrder to.
 * @property { string } [friendlyName] A 64 character string that is a human readable text that describes this resource.
 * @property { string } [uniqueName] Optional. Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { Array<string> } [ccEmails] Optional. A list of emails that the LOA document for this HostedNumberOrder will be carbon copied to.
 * @property { string } [smsUrl] The URL that Twilio should request when somebody sends an SMS to the phone number. This will be copied onto the IncomingPhoneNumber resource.
 * @property { string } [smsMethod] The HTTP method that should be used to request the SmsUrl. Must be either `GET` or `POST`.  This will be copied onto the IncomingPhoneNumber resource.
 * @property { string } [smsFallbackUrl] A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by SmsUrl. This will be copied onto the IncomingPhoneNumber resource.
 * @property { string } [smsFallbackMethod] The HTTP method that should be used to request the SmsFallbackUrl. Must be either `GET` or `POST`. This will be copied onto the IncomingPhoneNumber resource.
 * @property { string } [statusCallbackUrl] Optional. The Status Callback URL attached to the IncomingPhoneNumber resource.
 * @property { string } [statusCallbackMethod] Optional. The Status Callback Method attached to the IncomingPhoneNumber resource.
 * @property { string } [smsApplicationSid] Optional. The 34 character sid of the application Twilio should use to handle SMS messages sent to this number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS urls above and use those set on the application.
 * @property { string } [addressSid] Optional. A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number.
 * @property { string } [email] Optional. Email of the owner of this phone number that is being hosted.
 * @property { HostedNumberOrderVerificationType } [verificationType]
 * @property { string } [verificationDocumentSid] Optional. The unique sid identifier of the Identity Document that represents the document for verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
 */
export interface HostedNumberOrderListInstanceCreateOptions {
    phoneNumber: string;
    smsCapability: boolean;
    accountSid?: string;
    friendlyName?: string;
    uniqueName?: string;
    ccEmails?: Array<string>;
    smsUrl?: string;
    smsMethod?: string;
    smsFallbackUrl?: string;
    smsFallbackMethod?: string;
    statusCallbackUrl?: string;
    statusCallbackMethod?: string;
    smsApplicationSid?: string;
    addressSid?: string;
    email?: string;
    verificationType?: HostedNumberOrderVerificationType;
    verificationDocumentSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { HostedNumberOrderStatus } [status] The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
 * @property { string } [phoneNumber] An E164 formatted phone number hosted by this HostedNumberOrder.
 * @property { string } [incomingPhoneNumberSid] A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
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
export interface HostedNumberOrderListInstanceEachOptions {
    status?: HostedNumberOrderStatus;
    phoneNumber?: string;
    incomingPhoneNumberSid?: string;
    friendlyName?: string;
    uniqueName?: string;
    pageSize?: number;
    callback?: (item: HostedNumberOrderInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { HostedNumberOrderStatus } [status] The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
 * @property { string } [phoneNumber] An E164 formatted phone number hosted by this HostedNumberOrder.
 * @property { string } [incomingPhoneNumberSid] A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface HostedNumberOrderListInstanceOptions {
    status?: HostedNumberOrderStatus;
    phoneNumber?: string;
    incomingPhoneNumberSid?: string;
    friendlyName?: string;
    uniqueName?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { HostedNumberOrderStatus } [status] The Status of this HostedNumberOrder. One of `received`, `pending-verification`, `verified`, `pending-loa`, `carrier-processing`, `testing`, `completed`, `failed`, or `action-required`.
 * @property { string } [phoneNumber] An E164 formatted phone number hosted by this HostedNumberOrder.
 * @property { string } [incomingPhoneNumberSid] A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface HostedNumberOrderListInstancePageOptions {
    status?: HostedNumberOrderStatus;
    phoneNumber?: string;
    incomingPhoneNumberSid?: string;
    friendlyName?: string;
    uniqueName?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface HostedNumberOrderContext {
    /**
     * Remove a HostedNumberOrderInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a HostedNumberOrderInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed HostedNumberOrderInstance
     */
    fetch(callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
    /**
     * Update a HostedNumberOrderInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed HostedNumberOrderInstance
     */
    update(callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
    /**
     * Update a HostedNumberOrderInstance
     *
     * @param { HostedNumberOrderContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed HostedNumberOrderInstance
     */
    update(params: HostedNumberOrderContextUpdateOptions, callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
    update(params?: any, callback?: any): Promise<HostedNumberOrderInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface HostedNumberOrderContextSolution {
    sid?: string;
}
export declare class HostedNumberOrderContextImpl implements HostedNumberOrderContext {
    protected _version: HostedNumbers;
    protected _solution: HostedNumberOrderContextSolution;
    protected _uri: string;
    constructor(_version: HostedNumbers, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<HostedNumberOrderInstance>;
    update(params?: any, callback?: any): Promise<HostedNumberOrderInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): HostedNumberOrderContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface HostedNumberOrderPayload extends TwilioResponsePayload {
    items: HostedNumberOrderResource[];
}
interface HostedNumberOrderResource {
    sid?: string | null;
    account_sid?: string | null;
    incoming_phone_number_sid?: string | null;
    address_sid?: string | null;
    signing_document_sid?: string | null;
    phone_number?: string | null;
    capabilities?: PhoneNumberCapabilities | null;
    friendly_name?: string | null;
    unique_name?: string | null;
    status?: HostedNumberOrderStatus;
    failure_reason?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    verification_attempts?: number | null;
    email?: string | null;
    cc_emails?: Array<string> | null;
    url?: string | null;
    verification_type?: HostedNumberOrderVerificationType;
    verification_document_sid?: string | null;
    extension?: string | null;
    call_delay?: number | null;
    verification_code?: string | null;
    verification_call_sids?: Array<string> | null;
}
export declare class HostedNumberOrderInstance {
    protected _version: HostedNumbers;
    protected _solution: HostedNumberOrderContextSolution;
    protected _context?: HostedNumberOrderContext;
    constructor(_version: HostedNumbers, payload: HostedNumberOrderResource, sid?: string);
    /**
     * HostedNumberOrder sid.
     */
    sid?: string | null;
    /**
     * Account Sid.
     */
    accountSid?: string | null;
    /**
     * IncomingPhoneNumber sid.
     */
    incomingPhoneNumberSid?: string | null;
    /**
     * Address sid.
     */
    addressSid?: string | null;
    /**
     * LOA document sid.
     */
    signingDocumentSid?: string | null;
    /**
     * An E164 formatted phone number.
     */
    phoneNumber?: string | null;
    capabilities?: PhoneNumberCapabilities | null;
    /**
     * A human readable description of this resource.
     */
    friendlyName?: string | null;
    /**
     * A unique, developer assigned name of this HostedNumberOrder.
     */
    uniqueName?: string | null;
    status?: HostedNumberOrderStatus;
    /**
     * Why a hosted_number_order reached status \"action-required\"
     */
    failureReason?: string | null;
    /**
     * The date this HostedNumberOrder was created.
     */
    dateCreated?: Date | null;
    /**
     * The date this HostedNumberOrder was updated.
     */
    dateUpdated?: Date | null;
    /**
     * The number of attempts made to verify ownership of the phone number.
     */
    verificationAttempts?: number | null;
    /**
     * Email.
     */
    email?: string | null;
    /**
     * A list of emails.
     */
    ccEmails?: Array<string> | null;
    /**
     * The URL of this HostedNumberOrder.
     */
    url?: string | null;
    verificationType?: HostedNumberOrderVerificationType;
    /**
     * Verification Document Sid.
     */
    verificationDocumentSid?: string | null;
    /**
     * Phone extension to use for ownership verification call.
     */
    extension?: string | null;
    /**
     * Seconds (0-30) to delay ownership verification call by.
     */
    callDelay?: number | null;
    /**
     * The digits passed during the ownership verification call.
     */
    verificationCode?: string | null;
    /**
     * List of IDs for ownership verification calls.
     */
    verificationCallSids?: Array<string> | null;
    private get _proxy();
    /**
     * Remove a HostedNumberOrderInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a HostedNumberOrderInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed HostedNumberOrderInstance
     */
    fetch(callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
    /**
     * Update a HostedNumberOrderInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed HostedNumberOrderInstance
     */
    update(callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
    /**
     * Update a HostedNumberOrderInstance
     *
     * @param { HostedNumberOrderContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed HostedNumberOrderInstance
     */
    update(params: HostedNumberOrderContextUpdateOptions, callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        incomingPhoneNumberSid: string | null | undefined;
        addressSid: string | null | undefined;
        signingDocumentSid: string | null | undefined;
        phoneNumber: string | null | undefined;
        capabilities: PhoneNumberCapabilities | null | undefined;
        friendlyName: string | null | undefined;
        uniqueName: string | null | undefined;
        status: HostedNumberOrderStatus | undefined;
        failureReason: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        verificationAttempts: number | null | undefined;
        email: string | null | undefined;
        ccEmails: string[] | null | undefined;
        url: string | null | undefined;
        verificationType: HostedNumberOrderVerificationType | undefined;
        verificationDocumentSid: string | null | undefined;
        extension: string | null | undefined;
        callDelay: number | null | undefined;
        verificationCode: string | null | undefined;
        verificationCallSids: string[] | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface HostedNumberOrderListInstance {
    (sid: string): HostedNumberOrderContext;
    get(sid: string): HostedNumberOrderContext;
    /**
     * Create a HostedNumberOrderInstance
     *
     * @param { HostedNumberOrderListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed HostedNumberOrderInstance
     */
    create(params: HostedNumberOrderListInstanceCreateOptions, callback?: (error: Error | null, item?: HostedNumberOrderInstance) => any): Promise<HostedNumberOrderInstance>;
    create(params: any, callback?: any): Promise<HostedNumberOrderInstance>;
    /**
     * Streams HostedNumberOrderInstance records from the API.
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
    each(callback?: (item: HostedNumberOrderInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams HostedNumberOrderInstance records from the API.
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
     * @param { HostedNumberOrderListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: HostedNumberOrderListInstanceEachOptions, callback?: (item: HostedNumberOrderInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of HostedNumberOrderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: HostedNumberOrderPage) => any): Promise<HostedNumberOrderPage>;
    /**
     * Retrieve a single target page of HostedNumberOrderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: HostedNumberOrderPage) => any): Promise<HostedNumberOrderPage>;
    getPage(params?: any, callback?: any): Promise<HostedNumberOrderPage>;
    /**
     * Lists HostedNumberOrderInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: HostedNumberOrderInstance[]) => any): Promise<HostedNumberOrderInstance[]>;
    /**
     * Lists HostedNumberOrderInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { HostedNumberOrderListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: HostedNumberOrderListInstanceOptions, callback?: (error: Error | null, items: HostedNumberOrderInstance[]) => any): Promise<HostedNumberOrderInstance[]>;
    list(params?: any, callback?: any): Promise<HostedNumberOrderInstance[]>;
    /**
     * Retrieve a single page of HostedNumberOrderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: HostedNumberOrderPage) => any): Promise<HostedNumberOrderPage>;
    /**
     * Retrieve a single page of HostedNumberOrderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { HostedNumberOrderListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: HostedNumberOrderListInstancePageOptions, callback?: (error: Error | null, items: HostedNumberOrderPage) => any): Promise<HostedNumberOrderPage>;
    page(params?: any, callback?: any): Promise<HostedNumberOrderPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface HostedNumberOrderSolution {
}
export declare function HostedNumberOrderListInstance(version: HostedNumbers): HostedNumberOrderListInstance;
export declare class HostedNumberOrderPage extends Page<HostedNumbers, HostedNumberOrderPayload, HostedNumberOrderResource, HostedNumberOrderInstance> {
    /**
     * Initialize the HostedNumberOrderPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: HostedNumbers, response: Response<string>, solution: HostedNumberOrderSolution);
    /**
     * Build an instance of HostedNumberOrderInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: HostedNumberOrderResource): HostedNumberOrderInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
