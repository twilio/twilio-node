/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
/**
 * Options to pass to update a OutgoingCallerIdInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 */
export interface OutgoingCallerIdContextUpdateOptions {
    friendlyName?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [phoneNumber] The phone number of the OutgoingCallerId resources to read.
 * @property { string } [friendlyName] The string that identifies the OutgoingCallerId resources to read.
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
export interface OutgoingCallerIdListInstanceEachOptions {
    phoneNumber?: string;
    friendlyName?: string;
    pageSize?: number;
    callback?: (item: OutgoingCallerIdInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [phoneNumber] The phone number of the OutgoingCallerId resources to read.
 * @property { string } [friendlyName] The string that identifies the OutgoingCallerId resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface OutgoingCallerIdListInstanceOptions {
    phoneNumber?: string;
    friendlyName?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [phoneNumber] The phone number of the OutgoingCallerId resources to read.
 * @property { string } [friendlyName] The string that identifies the OutgoingCallerId resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface OutgoingCallerIdListInstancePageOptions {
    phoneNumber?: string;
    friendlyName?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface OutgoingCallerIdContext {
    /**
     * Remove a OutgoingCallerIdInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a OutgoingCallerIdInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
     */
    fetch(callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
    /**
     * Update a OutgoingCallerIdInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
     */
    update(callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
    /**
     * Update a OutgoingCallerIdInstance
     *
     * @param { OutgoingCallerIdContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
     */
    update(params: OutgoingCallerIdContextUpdateOptions, callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
    update(params?: any, callback?: any): Promise<OutgoingCallerIdInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OutgoingCallerIdContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class OutgoingCallerIdContextImpl implements OutgoingCallerIdContext {
    protected _version: V2010;
    protected _solution: OutgoingCallerIdContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<OutgoingCallerIdInstance>;
    update(params?: any, callback?: any): Promise<OutgoingCallerIdInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): OutgoingCallerIdContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface OutgoingCallerIdPayload extends TwilioResponsePayload {
    outgoing_caller_ids: OutgoingCallerIdResource[];
}
interface OutgoingCallerIdResource {
    sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    account_sid?: string | null;
    phone_number?: string | null;
    uri?: string | null;
}
export declare class OutgoingCallerIdInstance {
    protected _version: V2010;
    protected _solution: OutgoingCallerIdContextSolution;
    protected _context?: OutgoingCallerIdContext;
    constructor(_version: V2010, payload: OutgoingCallerIdResource, accountSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The phone number in E.164 format
     */
    phoneNumber?: string | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Remove a OutgoingCallerIdInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a OutgoingCallerIdInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
     */
    fetch(callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
    /**
     * Update a OutgoingCallerIdInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
     */
    update(callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
    /**
     * Update a OutgoingCallerIdInstance
     *
     * @param { OutgoingCallerIdContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OutgoingCallerIdInstance
     */
    update(params: OutgoingCallerIdContextUpdateOptions, callback?: (error: Error | null, item?: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        accountSid: string | null | undefined;
        phoneNumber: string | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface OutgoingCallerIdListInstance {
    (sid: string): OutgoingCallerIdContext;
    get(sid: string): OutgoingCallerIdContext;
    /**
     * Streams OutgoingCallerIdInstance records from the API.
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
    each(callback?: (item: OutgoingCallerIdInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams OutgoingCallerIdInstance records from the API.
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
     * @param { OutgoingCallerIdListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: OutgoingCallerIdListInstanceEachOptions, callback?: (item: OutgoingCallerIdInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: OutgoingCallerIdPage) => any): Promise<OutgoingCallerIdPage>;
    /**
     * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: OutgoingCallerIdPage) => any): Promise<OutgoingCallerIdPage>;
    getPage(params?: any, callback?: any): Promise<OutgoingCallerIdPage>;
    /**
     * Lists OutgoingCallerIdInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: OutgoingCallerIdInstance[]) => any): Promise<OutgoingCallerIdInstance[]>;
    /**
     * Lists OutgoingCallerIdInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { OutgoingCallerIdListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: OutgoingCallerIdListInstanceOptions, callback?: (error: Error | null, items: OutgoingCallerIdInstance[]) => any): Promise<OutgoingCallerIdInstance[]>;
    list(params?: any, callback?: any): Promise<OutgoingCallerIdInstance[]>;
    /**
     * Retrieve a single page of OutgoingCallerIdInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: OutgoingCallerIdPage) => any): Promise<OutgoingCallerIdPage>;
    /**
     * Retrieve a single page of OutgoingCallerIdInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { OutgoingCallerIdListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: OutgoingCallerIdListInstancePageOptions, callback?: (error: Error | null, items: OutgoingCallerIdPage) => any): Promise<OutgoingCallerIdPage>;
    page(params?: any, callback?: any): Promise<OutgoingCallerIdPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OutgoingCallerIdSolution {
    accountSid?: string;
}
export declare function OutgoingCallerIdListInstance(version: V2010, accountSid: string): OutgoingCallerIdListInstance;
export declare class OutgoingCallerIdPage extends Page<V2010, OutgoingCallerIdPayload, OutgoingCallerIdResource, OutgoingCallerIdInstance> {
    /**
     * Initialize the OutgoingCallerIdPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: OutgoingCallerIdSolution);
    /**
     * Build an instance of OutgoingCallerIdInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: OutgoingCallerIdResource): OutgoingCallerIdInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
