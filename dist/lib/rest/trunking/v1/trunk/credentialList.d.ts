/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to create a CredentialListInstance
 *
 * @property { string } credentialListSid The SID of the [Credential List](https://www.twilio.com/docs/voice/sip/api/sip-credentiallist-resource) that you want to associate with the trunk. Once associated, we will authenticate access to the trunk against this list.
 */
export interface CredentialListListInstanceCreateOptions {
    credentialListSid: string;
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
export interface CredentialListListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: CredentialListInstance, done: (err?: Error) => void) => void;
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
export interface CredentialListListInstanceOptions {
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
export interface CredentialListListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CredentialListContext {
    /**
     * Remove a CredentialListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CredentialListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CredentialListInstance
     */
    fetch(callback?: (error: Error | null, item?: CredentialListInstance) => any): Promise<CredentialListInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CredentialListContextSolution {
    trunkSid?: string;
    sid?: string;
}
export declare class CredentialListContextImpl implements CredentialListContext {
    protected _version: V1;
    protected _solution: CredentialListContextSolution;
    protected _uri: string;
    constructor(_version: V1, trunkSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<CredentialListInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CredentialListContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CredentialListPayload extends TwilioResponsePayload {
    credential_lists: CredentialListResource[];
}
interface CredentialListResource {
    account_sid?: string | null;
    sid?: string | null;
    trunk_sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class CredentialListInstance {
    protected _version: V1;
    protected _solution: CredentialListContextSolution;
    protected _context?: CredentialListContext;
    constructor(_version: V1, payload: CredentialListResource, trunkSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Trunk the credential list in associated with
     */
    trunkSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
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
    private get _proxy();
    /**
     * Remove a CredentialListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CredentialListInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CredentialListInstance
     */
    fetch(callback?: (error: Error | null, item?: CredentialListInstance) => any): Promise<CredentialListInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        sid: string | null | undefined;
        trunkSid: string | null | undefined;
        friendlyName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CredentialListListInstance {
    (sid: string): CredentialListContext;
    get(sid: string): CredentialListContext;
    /**
     * Create a CredentialListInstance
     *
     * @param { CredentialListListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CredentialListInstance
     */
    create(params: CredentialListListInstanceCreateOptions, callback?: (error: Error | null, item?: CredentialListInstance) => any): Promise<CredentialListInstance>;
    create(params: any, callback?: any): Promise<CredentialListInstance>;
    /**
     * Streams CredentialListInstance records from the API.
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
    each(callback?: (item: CredentialListInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CredentialListInstance records from the API.
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
     * @param { CredentialListListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CredentialListListInstanceEachOptions, callback?: (item: CredentialListInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CredentialListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CredentialListPage) => any): Promise<CredentialListPage>;
    /**
     * Retrieve a single target page of CredentialListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CredentialListPage) => any): Promise<CredentialListPage>;
    getPage(params?: any, callback?: any): Promise<CredentialListPage>;
    /**
     * Lists CredentialListInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CredentialListInstance[]) => any): Promise<CredentialListInstance[]>;
    /**
     * Lists CredentialListInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CredentialListListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CredentialListListInstanceOptions, callback?: (error: Error | null, items: CredentialListInstance[]) => any): Promise<CredentialListInstance[]>;
    list(params?: any, callback?: any): Promise<CredentialListInstance[]>;
    /**
     * Retrieve a single page of CredentialListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CredentialListPage) => any): Promise<CredentialListPage>;
    /**
     * Retrieve a single page of CredentialListInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CredentialListListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CredentialListListInstancePageOptions, callback?: (error: Error | null, items: CredentialListPage) => any): Promise<CredentialListPage>;
    page(params?: any, callback?: any): Promise<CredentialListPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CredentialListSolution {
    trunkSid?: string;
}
export declare function CredentialListListInstance(version: V1, trunkSid: string): CredentialListListInstance;
export declare class CredentialListPage extends Page<V1, CredentialListPayload, CredentialListResource, CredentialListInstance> {
    /**
     * Initialize the CredentialListPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CredentialListSolution);
    /**
     * Build an instance of CredentialListInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CredentialListResource): CredentialListInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
