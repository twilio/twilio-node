/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import HostedNumbers from "../HostedNumbers";
import { DependentHostedNumberOrderListInstance } from "./authorizationDocument/dependentHostedNumberOrder";
declare type AuthorizationDocumentStatus = "opened" | "signing" | "signed" | "canceled" | "failed";
/**
 * Options to pass to update a AuthorizationDocumentInstance
 *
 * @property { Array<string> } [hostedNumberOrderSids] A list of HostedNumberOrder sids that this AuthorizationDocument will authorize for hosting phone number capabilities on Twilio\\\'s platform.
 * @property { string } [addressSid] A 34 character string that uniquely identifies the Address resource that is associated with this AuthorizationDocument.
 * @property { string } [email] Email that this AuthorizationDocument will be sent to for signing.
 * @property { Array<string> } [ccEmails] Email recipients who will be informed when an Authorization Document has been sent and signed
 * @property { AuthorizationDocumentStatus } [status]
 * @property { string } [contactTitle] The title of the person authorized to sign the Authorization Document for this phone number.
 * @property { string } [contactPhoneNumber] The contact phone number of the person authorized to sign the Authorization Document.
 */
export interface AuthorizationDocumentContextUpdateOptions {
    hostedNumberOrderSids?: Array<string>;
    addressSid?: string;
    email?: string;
    ccEmails?: Array<string>;
    status?: AuthorizationDocumentStatus;
    contactTitle?: string;
    contactPhoneNumber?: string;
}
/**
 * Options to pass to create a AuthorizationDocumentInstance
 *
 * @property { Array<string> } hostedNumberOrderSids A list of HostedNumberOrder sids that this AuthorizationDocument will authorize for hosting phone number capabilities on Twilio\\\'s platform.
 * @property { string } addressSid A 34 character string that uniquely identifies the Address resource that is associated with this AuthorizationDocument.
 * @property { string } email Email that this AuthorizationDocument will be sent to for signing.
 * @property { string } contactTitle The title of the person authorized to sign the Authorization Document for this phone number.
 * @property { string } contactPhoneNumber The contact phone number of the person authorized to sign the Authorization Document.
 * @property { Array<string> } [ccEmails] Email recipients who will be informed when an Authorization Document has been sent and signed.
 */
export interface AuthorizationDocumentListInstanceCreateOptions {
    hostedNumberOrderSids: Array<string>;
    addressSid: string;
    email: string;
    contactTitle: string;
    contactPhoneNumber: string;
    ccEmails?: Array<string>;
}
/**
 * Options to pass to each
 *
 * @property { string } [email] Email that this AuthorizationDocument will be sent to for signing.
 * @property { AuthorizationDocumentStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
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
export interface AuthorizationDocumentListInstanceEachOptions {
    email?: string;
    status?: AuthorizationDocumentStatus;
    pageSize?: number;
    callback?: (item: AuthorizationDocumentInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [email] Email that this AuthorizationDocument will be sent to for signing.
 * @property { AuthorizationDocumentStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AuthorizationDocumentListInstanceOptions {
    email?: string;
    status?: AuthorizationDocumentStatus;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [email] Email that this AuthorizationDocument will be sent to for signing.
 * @property { AuthorizationDocumentStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AuthorizationDocumentListInstancePageOptions {
    email?: string;
    status?: AuthorizationDocumentStatus;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AuthorizationDocumentContext {
    dependentHostedNumberOrders: DependentHostedNumberOrderListInstance;
    /**
     * Fetch a AuthorizationDocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
     */
    fetch(callback?: (error: Error | null, item?: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
    /**
     * Update a AuthorizationDocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
     */
    update(callback?: (error: Error | null, item?: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
    /**
     * Update a AuthorizationDocumentInstance
     *
     * @param { AuthorizationDocumentContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
     */
    update(params: AuthorizationDocumentContextUpdateOptions, callback?: (error: Error | null, item?: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
    update(params?: any, callback?: any): Promise<AuthorizationDocumentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AuthorizationDocumentContextSolution {
    sid?: string;
}
export declare class AuthorizationDocumentContextImpl implements AuthorizationDocumentContext {
    protected _version: HostedNumbers;
    protected _solution: AuthorizationDocumentContextSolution;
    protected _uri: string;
    protected _dependentHostedNumberOrders?: DependentHostedNumberOrderListInstance;
    constructor(_version: HostedNumbers, sid: string);
    get dependentHostedNumberOrders(): DependentHostedNumberOrderListInstance;
    fetch(callback?: any): Promise<AuthorizationDocumentInstance>;
    update(params?: any, callback?: any): Promise<AuthorizationDocumentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AuthorizationDocumentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AuthorizationDocumentPayload extends TwilioResponsePayload {
    items: AuthorizationDocumentResource[];
}
interface AuthorizationDocumentResource {
    sid?: string | null;
    address_sid?: string | null;
    status?: AuthorizationDocumentStatus;
    email?: string | null;
    cc_emails?: Array<string> | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class AuthorizationDocumentInstance {
    protected _version: HostedNumbers;
    protected _solution: AuthorizationDocumentContextSolution;
    protected _context?: AuthorizationDocumentContext;
    constructor(_version: HostedNumbers, payload: AuthorizationDocumentResource, sid?: string);
    /**
     * AuthorizationDocument sid.
     */
    sid?: string | null;
    /**
     * Address sid.
     */
    addressSid?: string | null;
    status?: AuthorizationDocumentStatus;
    /**
     * Email.
     */
    email?: string | null;
    /**
     * A list of emails.
     */
    ccEmails?: Array<string> | null;
    /**
     * The date this AuthorizationDocument was created.
     */
    dateCreated?: Date | null;
    /**
     * The date this AuthorizationDocument was updated.
     */
    dateUpdated?: Date | null;
    url?: string | null;
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a AuthorizationDocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
     */
    fetch(callback?: (error: Error | null, item?: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
    /**
     * Update a AuthorizationDocumentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
     */
    update(callback?: (error: Error | null, item?: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
    /**
     * Update a AuthorizationDocumentInstance
     *
     * @param { AuthorizationDocumentContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
     */
    update(params: AuthorizationDocumentContextUpdateOptions, callback?: (error: Error | null, item?: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
    /**
     * Access the dependentHostedNumberOrders.
     */
    dependentHostedNumberOrders(): DependentHostedNumberOrderListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        addressSid: string | null | undefined;
        status: AuthorizationDocumentStatus | undefined;
        email: string | null | undefined;
        ccEmails: string[] | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AuthorizationDocumentListInstance {
    (sid: string): AuthorizationDocumentContext;
    get(sid: string): AuthorizationDocumentContext;
    /**
     * Create a AuthorizationDocumentInstance
     *
     * @param { AuthorizationDocumentListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
     */
    create(params: AuthorizationDocumentListInstanceCreateOptions, callback?: (error: Error | null, item?: AuthorizationDocumentInstance) => any): Promise<AuthorizationDocumentInstance>;
    create(params: any, callback?: any): Promise<AuthorizationDocumentInstance>;
    /**
     * Streams AuthorizationDocumentInstance records from the API.
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
    each(callback?: (item: AuthorizationDocumentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AuthorizationDocumentInstance records from the API.
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
     * @param { AuthorizationDocumentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AuthorizationDocumentListInstanceEachOptions, callback?: (item: AuthorizationDocumentInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AuthorizationDocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AuthorizationDocumentPage) => any): Promise<AuthorizationDocumentPage>;
    /**
     * Retrieve a single target page of AuthorizationDocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AuthorizationDocumentPage) => any): Promise<AuthorizationDocumentPage>;
    getPage(params?: any, callback?: any): Promise<AuthorizationDocumentPage>;
    /**
     * Lists AuthorizationDocumentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AuthorizationDocumentInstance[]) => any): Promise<AuthorizationDocumentInstance[]>;
    /**
     * Lists AuthorizationDocumentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AuthorizationDocumentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AuthorizationDocumentListInstanceOptions, callback?: (error: Error | null, items: AuthorizationDocumentInstance[]) => any): Promise<AuthorizationDocumentInstance[]>;
    list(params?: any, callback?: any): Promise<AuthorizationDocumentInstance[]>;
    /**
     * Retrieve a single page of AuthorizationDocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AuthorizationDocumentPage) => any): Promise<AuthorizationDocumentPage>;
    /**
     * Retrieve a single page of AuthorizationDocumentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AuthorizationDocumentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AuthorizationDocumentListInstancePageOptions, callback?: (error: Error | null, items: AuthorizationDocumentPage) => any): Promise<AuthorizationDocumentPage>;
    page(params?: any, callback?: any): Promise<AuthorizationDocumentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AuthorizationDocumentSolution {
}
export declare function AuthorizationDocumentListInstance(version: HostedNumbers): AuthorizationDocumentListInstance;
export declare class AuthorizationDocumentPage extends Page<HostedNumbers, AuthorizationDocumentPayload, AuthorizationDocumentResource, AuthorizationDocumentInstance> {
    /**
     * Initialize the AuthorizationDocumentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: HostedNumbers, response: Response<string>, solution: AuthorizationDocumentSolution);
    /**
     * Build an instance of AuthorizationDocumentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AuthorizationDocumentResource): AuthorizationDocumentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
