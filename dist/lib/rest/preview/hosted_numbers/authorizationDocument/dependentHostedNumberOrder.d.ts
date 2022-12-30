/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import HostedNumbers from "../../HostedNumbers";
import { PhoneNumberCapabilities } from "../../../../../lib/interfaces";
declare type DependentHostedNumberOrderStatus = "received" | "pending-verification" | "verified" | "pending-loa" | "carrier-processing" | "testing" | "completed" | "failed" | "action-required";
declare type DependentHostedNumberOrderVerificationType = "phone-call" | "phone-bill";
/**
 * Options to pass to each
 *
 * @property { DependentHostedNumberOrderStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
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
export interface DependentHostedNumberOrderListInstanceEachOptions {
    status?: DependentHostedNumberOrderStatus;
    phoneNumber?: string;
    incomingPhoneNumberSid?: string;
    friendlyName?: string;
    uniqueName?: string;
    pageSize?: number;
    callback?: (item: DependentHostedNumberOrderInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { DependentHostedNumberOrderStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
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
export interface DependentHostedNumberOrderListInstanceOptions {
    status?: DependentHostedNumberOrderStatus;
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
 * @property { DependentHostedNumberOrderStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
 * @property { string } [phoneNumber] An E164 formatted phone number hosted by this HostedNumberOrder.
 * @property { string } [incomingPhoneNumberSid] A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 * @property { string } [uniqueName] Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface DependentHostedNumberOrderListInstancePageOptions {
    status?: DependentHostedNumberOrderStatus;
    phoneNumber?: string;
    incomingPhoneNumberSid?: string;
    friendlyName?: string;
    uniqueName?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface DependentHostedNumberOrderListInstance {
    /**
     * Streams DependentHostedNumberOrderInstance records from the API.
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
    each(callback?: (item: DependentHostedNumberOrderInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams DependentHostedNumberOrderInstance records from the API.
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
     * @param { DependentHostedNumberOrderListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: DependentHostedNumberOrderListInstanceEachOptions, callback?: (item: DependentHostedNumberOrderInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of DependentHostedNumberOrderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: DependentHostedNumberOrderPage) => any): Promise<DependentHostedNumberOrderPage>;
    /**
     * Retrieve a single target page of DependentHostedNumberOrderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: DependentHostedNumberOrderPage) => any): Promise<DependentHostedNumberOrderPage>;
    getPage(params?: any, callback?: any): Promise<DependentHostedNumberOrderPage>;
    /**
     * Lists DependentHostedNumberOrderInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: DependentHostedNumberOrderInstance[]) => any): Promise<DependentHostedNumberOrderInstance[]>;
    /**
     * Lists DependentHostedNumberOrderInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DependentHostedNumberOrderListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: DependentHostedNumberOrderListInstanceOptions, callback?: (error: Error | null, items: DependentHostedNumberOrderInstance[]) => any): Promise<DependentHostedNumberOrderInstance[]>;
    list(params?: any, callback?: any): Promise<DependentHostedNumberOrderInstance[]>;
    /**
     * Retrieve a single page of DependentHostedNumberOrderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: DependentHostedNumberOrderPage) => any): Promise<DependentHostedNumberOrderPage>;
    /**
     * Retrieve a single page of DependentHostedNumberOrderInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DependentHostedNumberOrderListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: DependentHostedNumberOrderListInstancePageOptions, callback?: (error: Error | null, items: DependentHostedNumberOrderPage) => any): Promise<DependentHostedNumberOrderPage>;
    page(params?: any, callback?: any): Promise<DependentHostedNumberOrderPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DependentHostedNumberOrderSolution {
    signingDocumentSid?: string;
}
export declare function DependentHostedNumberOrderListInstance(version: HostedNumbers, signingDocumentSid: string): DependentHostedNumberOrderListInstance;
interface DependentHostedNumberOrderPayload extends TwilioResponsePayload {
    items: DependentHostedNumberOrderResource[];
}
interface DependentHostedNumberOrderResource {
    sid?: string | null;
    account_sid?: string | null;
    incoming_phone_number_sid?: string | null;
    address_sid?: string | null;
    signing_document_sid?: string | null;
    phone_number?: string | null;
    capabilities?: PhoneNumberCapabilities | null;
    friendly_name?: string | null;
    unique_name?: string | null;
    status?: DependentHostedNumberOrderStatus;
    failure_reason?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    verification_attempts?: number | null;
    email?: string | null;
    cc_emails?: Array<string> | null;
    verification_type?: DependentHostedNumberOrderVerificationType;
    verification_document_sid?: string | null;
    extension?: string | null;
    call_delay?: number | null;
    verification_code?: string | null;
    verification_call_sids?: Array<string> | null;
}
export declare class DependentHostedNumberOrderInstance {
    protected _version: HostedNumbers;
    constructor(_version: HostedNumbers, payload: DependentHostedNumberOrderResource, signingDocumentSid: string);
    /**
     * HostedNumberOrder sid.
     */
    sid?: string | null;
    /**
     * Account sid.
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
    status?: DependentHostedNumberOrderStatus;
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
    verificationType?: DependentHostedNumberOrderVerificationType;
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
        status: DependentHostedNumberOrderStatus | undefined;
        failureReason: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        verificationAttempts: number | null | undefined;
        email: string | null | undefined;
        ccEmails: string[] | null | undefined;
        verificationType: DependentHostedNumberOrderVerificationType | undefined;
        verificationDocumentSid: string | null | undefined;
        extension: string | null | undefined;
        callDelay: number | null | undefined;
        verificationCode: string | null | undefined;
        verificationCallSids: string[] | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class DependentHostedNumberOrderPage extends Page<HostedNumbers, DependentHostedNumberOrderPayload, DependentHostedNumberOrderResource, DependentHostedNumberOrderInstance> {
    /**
     * Initialize the DependentHostedNumberOrderPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: HostedNumbers, response: Response<string>, solution: DependentHostedNumberOrderSolution);
    /**
     * Build an instance of DependentHostedNumberOrderInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: DependentHostedNumberOrderResource): DependentHostedNumberOrderInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
