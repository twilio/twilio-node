/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to update a ConnectionPolicyTargetInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { string } [target] The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported.
 * @property { number } [priority] The relative importance of the target. Can be an integer from 0 to 65535, inclusive. The lowest number represents the most important target.
 * @property { number } [weight] The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive. Targets with higher values receive more load than those with lower ones with the same priority.
 * @property { boolean } [enabled] Whether the Target is enabled.
 */
export interface ConnectionPolicyTargetContextUpdateOptions {
    friendlyName?: string;
    target?: string;
    priority?: number;
    weight?: number;
    enabled?: boolean;
}
/**
 * Options to pass to create a ConnectionPolicyTargetInstance
 *
 * @property { string } target The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { number } [priority] The relative importance of the target. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important target.
 * @property { number } [weight] The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. Targets with higher values receive more load than those with lower ones with the same priority.
 * @property { boolean } [enabled] Whether the Target is enabled. The default is `true`.
 */
export interface ConnectionPolicyTargetListInstanceCreateOptions {
    target: string;
    friendlyName?: string;
    priority?: number;
    weight?: number;
    enabled?: boolean;
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
export interface ConnectionPolicyTargetListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: ConnectionPolicyTargetInstance, done: (err?: Error) => void) => void;
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
export interface ConnectionPolicyTargetListInstanceOptions {
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
export interface ConnectionPolicyTargetListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ConnectionPolicyTargetContext {
    /**
     * Remove a ConnectionPolicyTargetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ConnectionPolicyTargetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
     */
    fetch(callback?: (error: Error | null, item?: ConnectionPolicyTargetInstance) => any): Promise<ConnectionPolicyTargetInstance>;
    /**
     * Update a ConnectionPolicyTargetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
     */
    update(callback?: (error: Error | null, item?: ConnectionPolicyTargetInstance) => any): Promise<ConnectionPolicyTargetInstance>;
    /**
     * Update a ConnectionPolicyTargetInstance
     *
     * @param { ConnectionPolicyTargetContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
     */
    update(params: ConnectionPolicyTargetContextUpdateOptions, callback?: (error: Error | null, item?: ConnectionPolicyTargetInstance) => any): Promise<ConnectionPolicyTargetInstance>;
    update(params?: any, callback?: any): Promise<ConnectionPolicyTargetInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConnectionPolicyTargetContextSolution {
    connectionPolicySid?: string;
    sid?: string;
}
export declare class ConnectionPolicyTargetContextImpl implements ConnectionPolicyTargetContext {
    protected _version: V1;
    protected _solution: ConnectionPolicyTargetContextSolution;
    protected _uri: string;
    constructor(_version: V1, connectionPolicySid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ConnectionPolicyTargetInstance>;
    update(params?: any, callback?: any): Promise<ConnectionPolicyTargetInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ConnectionPolicyTargetContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ConnectionPolicyTargetPayload extends TwilioResponsePayload {
    targets: ConnectionPolicyTargetResource[];
}
interface ConnectionPolicyTargetResource {
    account_sid?: string | null;
    connection_policy_sid?: string | null;
    sid?: string | null;
    friendly_name?: string | null;
    target?: string | null;
    priority?: number | null;
    weight?: number | null;
    enabled?: boolean | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class ConnectionPolicyTargetInstance {
    protected _version: V1;
    protected _solution: ConnectionPolicyTargetContextSolution;
    protected _context?: ConnectionPolicyTargetContext;
    constructor(_version: V1, payload: ConnectionPolicyTargetResource, connectionPolicySid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Connection Policy that owns the Target
     */
    connectionPolicySid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The SIP address you want Twilio to route your calls to
     */
    target?: string | null;
    /**
     * The relative importance of the target
     */
    priority?: number | null;
    /**
     * The value that determines the relative load the Target should receive compared to others with the same priority
     */
    weight?: number | null;
    /**
     * Whether the target is enabled
     */
    enabled?: boolean | null;
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
     * Remove a ConnectionPolicyTargetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ConnectionPolicyTargetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
     */
    fetch(callback?: (error: Error | null, item?: ConnectionPolicyTargetInstance) => any): Promise<ConnectionPolicyTargetInstance>;
    /**
     * Update a ConnectionPolicyTargetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
     */
    update(callback?: (error: Error | null, item?: ConnectionPolicyTargetInstance) => any): Promise<ConnectionPolicyTargetInstance>;
    /**
     * Update a ConnectionPolicyTargetInstance
     *
     * @param { ConnectionPolicyTargetContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
     */
    update(params: ConnectionPolicyTargetContextUpdateOptions, callback?: (error: Error | null, item?: ConnectionPolicyTargetInstance) => any): Promise<ConnectionPolicyTargetInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        connectionPolicySid: string | null | undefined;
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        target: string | null | undefined;
        priority: number | null | undefined;
        weight: number | null | undefined;
        enabled: boolean | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ConnectionPolicyTargetListInstance {
    (sid: string): ConnectionPolicyTargetContext;
    get(sid: string): ConnectionPolicyTargetContext;
    /**
     * Create a ConnectionPolicyTargetInstance
     *
     * @param { ConnectionPolicyTargetListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConnectionPolicyTargetInstance
     */
    create(params: ConnectionPolicyTargetListInstanceCreateOptions, callback?: (error: Error | null, item?: ConnectionPolicyTargetInstance) => any): Promise<ConnectionPolicyTargetInstance>;
    create(params: any, callback?: any): Promise<ConnectionPolicyTargetInstance>;
    /**
     * Streams ConnectionPolicyTargetInstance records from the API.
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
    each(callback?: (item: ConnectionPolicyTargetInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ConnectionPolicyTargetInstance records from the API.
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
     * @param { ConnectionPolicyTargetListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ConnectionPolicyTargetListInstanceEachOptions, callback?: (item: ConnectionPolicyTargetInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ConnectionPolicyTargetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ConnectionPolicyTargetPage) => any): Promise<ConnectionPolicyTargetPage>;
    /**
     * Retrieve a single target page of ConnectionPolicyTargetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ConnectionPolicyTargetPage) => any): Promise<ConnectionPolicyTargetPage>;
    getPage(params?: any, callback?: any): Promise<ConnectionPolicyTargetPage>;
    /**
     * Lists ConnectionPolicyTargetInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ConnectionPolicyTargetInstance[]) => any): Promise<ConnectionPolicyTargetInstance[]>;
    /**
     * Lists ConnectionPolicyTargetInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConnectionPolicyTargetListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ConnectionPolicyTargetListInstanceOptions, callback?: (error: Error | null, items: ConnectionPolicyTargetInstance[]) => any): Promise<ConnectionPolicyTargetInstance[]>;
    list(params?: any, callback?: any): Promise<ConnectionPolicyTargetInstance[]>;
    /**
     * Retrieve a single page of ConnectionPolicyTargetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ConnectionPolicyTargetPage) => any): Promise<ConnectionPolicyTargetPage>;
    /**
     * Retrieve a single page of ConnectionPolicyTargetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConnectionPolicyTargetListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ConnectionPolicyTargetListInstancePageOptions, callback?: (error: Error | null, items: ConnectionPolicyTargetPage) => any): Promise<ConnectionPolicyTargetPage>;
    page(params?: any, callback?: any): Promise<ConnectionPolicyTargetPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConnectionPolicyTargetSolution {
    connectionPolicySid?: string;
}
export declare function ConnectionPolicyTargetListInstance(version: V1, connectionPolicySid: string): ConnectionPolicyTargetListInstance;
export declare class ConnectionPolicyTargetPage extends Page<V1, ConnectionPolicyTargetPayload, ConnectionPolicyTargetResource, ConnectionPolicyTargetInstance> {
    /**
     * Initialize the ConnectionPolicyTargetPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ConnectionPolicyTargetSolution);
    /**
     * Build an instance of ConnectionPolicyTargetInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ConnectionPolicyTargetResource): ConnectionPolicyTargetInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
