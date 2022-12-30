/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type SmsCommandDirection = "to_sim" | "from_sim";
declare type SmsCommandStatus = "queued" | "sent" | "delivered" | "received" | "failed";
/**
 * Options to pass to create a SmsCommandInstance
 *
 * @property { string } sim The `sid` or `unique_name` of the [SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource) to send the SMS Command to.
 * @property { string } payload The message body of the SMS Command.
 * @property { string } [callbackMethod] The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST.
 * @property { string } [callbackUrl] The URL we should call using the `callback_method` after we have sent the command.
 */
export interface SmsCommandListInstanceCreateOptions {
    sim: string;
    payload: string;
    callbackMethod?: string;
    callbackUrl?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [sim] The SID or unique name of the Sim resource that SMS Command was sent to or from.
 * @property { SmsCommandStatus } [status] The status of the SMS Command. Can be: `queued`, `sent`, `delivered`, `received` or `failed`. See the [SMS Command Status Values](https://www.twilio.com/docs/wireless/api/smscommand-resource#status-values) for a description of each.
 * @property { SmsCommandDirection } [direction] The direction of the SMS Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`.
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
export interface SmsCommandListInstanceEachOptions {
    sim?: string;
    status?: SmsCommandStatus;
    direction?: SmsCommandDirection;
    pageSize?: number;
    callback?: (item: SmsCommandInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [sim] The SID or unique name of the Sim resource that SMS Command was sent to or from.
 * @property { SmsCommandStatus } [status] The status of the SMS Command. Can be: `queued`, `sent`, `delivered`, `received` or `failed`. See the [SMS Command Status Values](https://www.twilio.com/docs/wireless/api/smscommand-resource#status-values) for a description of each.
 * @property { SmsCommandDirection } [direction] The direction of the SMS Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SmsCommandListInstanceOptions {
    sim?: string;
    status?: SmsCommandStatus;
    direction?: SmsCommandDirection;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [sim] The SID or unique name of the Sim resource that SMS Command was sent to or from.
 * @property { SmsCommandStatus } [status] The status of the SMS Command. Can be: `queued`, `sent`, `delivered`, `received` or `failed`. See the [SMS Command Status Values](https://www.twilio.com/docs/wireless/api/smscommand-resource#status-values) for a description of each.
 * @property { SmsCommandDirection } [direction] The direction of the SMS Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SmsCommandListInstancePageOptions {
    sim?: string;
    status?: SmsCommandStatus;
    direction?: SmsCommandDirection;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SmsCommandContext {
    /**
     * Fetch a SmsCommandInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SmsCommandInstance
     */
    fetch(callback?: (error: Error | null, item?: SmsCommandInstance) => any): Promise<SmsCommandInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SmsCommandContextSolution {
    sid?: string;
}
export declare class SmsCommandContextImpl implements SmsCommandContext {
    protected _version: V1;
    protected _solution: SmsCommandContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<SmsCommandInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SmsCommandContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SmsCommandPayload extends TwilioResponsePayload {
    sms_commands: SmsCommandResource[];
}
interface SmsCommandResource {
    sid?: string | null;
    account_sid?: string | null;
    sim_sid?: string | null;
    payload?: string | null;
    status?: SmsCommandStatus;
    direction?: SmsCommandDirection;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class SmsCommandInstance {
    protected _version: V1;
    protected _solution: SmsCommandContextSolution;
    protected _context?: SmsCommandContext;
    constructor(_version: V1, payload: SmsCommandResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the SIM that this SMS Command was sent to or from
     */
    simSid?: string | null;
    /**
     * The message body of the SMS Command sent to or from the SIM
     */
    payload?: string | null;
    status?: SmsCommandStatus;
    direction?: SmsCommandDirection;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the SMS Command resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a SmsCommandInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SmsCommandInstance
     */
    fetch(callback?: (error: Error | null, item?: SmsCommandInstance) => any): Promise<SmsCommandInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        simSid: string | null | undefined;
        payload: string | null | undefined;
        status: SmsCommandStatus | undefined;
        direction: SmsCommandDirection | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SmsCommandListInstance {
    (sid: string): SmsCommandContext;
    get(sid: string): SmsCommandContext;
    /**
     * Create a SmsCommandInstance
     *
     * @param { SmsCommandListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SmsCommandInstance
     */
    create(params: SmsCommandListInstanceCreateOptions, callback?: (error: Error | null, item?: SmsCommandInstance) => any): Promise<SmsCommandInstance>;
    create(params: any, callback?: any): Promise<SmsCommandInstance>;
    /**
     * Streams SmsCommandInstance records from the API.
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
    each(callback?: (item: SmsCommandInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SmsCommandInstance records from the API.
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
     * @param { SmsCommandListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SmsCommandListInstanceEachOptions, callback?: (item: SmsCommandInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SmsCommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SmsCommandPage) => any): Promise<SmsCommandPage>;
    /**
     * Retrieve a single target page of SmsCommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SmsCommandPage) => any): Promise<SmsCommandPage>;
    getPage(params?: any, callback?: any): Promise<SmsCommandPage>;
    /**
     * Lists SmsCommandInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SmsCommandInstance[]) => any): Promise<SmsCommandInstance[]>;
    /**
     * Lists SmsCommandInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SmsCommandListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SmsCommandListInstanceOptions, callback?: (error: Error | null, items: SmsCommandInstance[]) => any): Promise<SmsCommandInstance[]>;
    list(params?: any, callback?: any): Promise<SmsCommandInstance[]>;
    /**
     * Retrieve a single page of SmsCommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SmsCommandPage) => any): Promise<SmsCommandPage>;
    /**
     * Retrieve a single page of SmsCommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SmsCommandListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SmsCommandListInstancePageOptions, callback?: (error: Error | null, items: SmsCommandPage) => any): Promise<SmsCommandPage>;
    page(params?: any, callback?: any): Promise<SmsCommandPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SmsCommandSolution {
}
export declare function SmsCommandListInstance(version: V1): SmsCommandListInstance;
export declare class SmsCommandPage extends Page<V1, SmsCommandPayload, SmsCommandResource, SmsCommandInstance> {
    /**
     * Initialize the SmsCommandPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SmsCommandSolution);
    /**
     * Build an instance of SmsCommandInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SmsCommandResource): SmsCommandInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
