/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
import { AssignedAddOnExtensionListInstance } from "./assignedAddOn/assignedAddOnExtension";
/**
 * Options to pass to create a AssignedAddOnInstance
 *
 * @property { string } installedAddOnSid The SID that identifies the Add-on installation.
 */
export interface AssignedAddOnListInstanceCreateOptions {
    installedAddOnSid: string;
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
export interface AssignedAddOnListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: AssignedAddOnInstance, done: (err?: Error) => void) => void;
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
export interface AssignedAddOnListInstanceOptions {
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
export interface AssignedAddOnListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AssignedAddOnContext {
    extensions: AssignedAddOnExtensionListInstance;
    /**
     * Remove a AssignedAddOnInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AssignedAddOnInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssignedAddOnInstance
     */
    fetch(callback?: (error: Error | null, item?: AssignedAddOnInstance) => any): Promise<AssignedAddOnInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssignedAddOnContextSolution {
    accountSid?: string;
    resourceSid?: string;
    sid?: string;
}
export declare class AssignedAddOnContextImpl implements AssignedAddOnContext {
    protected _version: V2010;
    protected _solution: AssignedAddOnContextSolution;
    protected _uri: string;
    protected _extensions?: AssignedAddOnExtensionListInstance;
    constructor(_version: V2010, accountSid: string, resourceSid: string, sid: string);
    get extensions(): AssignedAddOnExtensionListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<AssignedAddOnInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssignedAddOnContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssignedAddOnPayload extends TwilioResponsePayload {
    assigned_add_ons: AssignedAddOnResource[];
}
interface AssignedAddOnResource {
    sid?: string | null;
    account_sid?: string | null;
    resource_sid?: string | null;
    friendly_name?: string | null;
    description?: string | null;
    configuration?: any | null;
    unique_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    uri?: string | null;
    subresource_uris?: object | null;
}
export declare class AssignedAddOnInstance {
    protected _version: V2010;
    protected _solution: AssignedAddOnContextSolution;
    protected _context?: AssignedAddOnContext;
    constructor(_version: V2010, payload: AssignedAddOnResource, accountSid: string, resourceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Phone Number that installed this Add-on
     */
    resourceSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * A short description of the Add-on functionality
     */
    description?: string | null;
    /**
     * A JSON string that represents the current configuration
     */
    configuration?: any | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * A list of related resources identified by their relative URIs
     */
    subresourceUris?: object | null;
    private get _proxy();
    /**
     * Remove a AssignedAddOnInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AssignedAddOnInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssignedAddOnInstance
     */
    fetch(callback?: (error: Error | null, item?: AssignedAddOnInstance) => any): Promise<AssignedAddOnInstance>;
    /**
     * Access the extensions.
     */
    extensions(): AssignedAddOnExtensionListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        resourceSid: string | null | undefined;
        friendlyName: string | null | undefined;
        description: string | null | undefined;
        configuration: any;
        uniqueName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        uri: string | null | undefined;
        subresourceUris: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AssignedAddOnListInstance {
    (sid: string): AssignedAddOnContext;
    get(sid: string): AssignedAddOnContext;
    /**
     * Create a AssignedAddOnInstance
     *
     * @param { AssignedAddOnListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssignedAddOnInstance
     */
    create(params: AssignedAddOnListInstanceCreateOptions, callback?: (error: Error | null, item?: AssignedAddOnInstance) => any): Promise<AssignedAddOnInstance>;
    create(params: any, callback?: any): Promise<AssignedAddOnInstance>;
    /**
     * Streams AssignedAddOnInstance records from the API.
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
    each(callback?: (item: AssignedAddOnInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AssignedAddOnInstance records from the API.
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
     * @param { AssignedAddOnListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AssignedAddOnListInstanceEachOptions, callback?: (item: AssignedAddOnInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AssignedAddOnInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AssignedAddOnPage) => any): Promise<AssignedAddOnPage>;
    /**
     * Retrieve a single target page of AssignedAddOnInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AssignedAddOnPage) => any): Promise<AssignedAddOnPage>;
    getPage(params?: any, callback?: any): Promise<AssignedAddOnPage>;
    /**
     * Lists AssignedAddOnInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AssignedAddOnInstance[]) => any): Promise<AssignedAddOnInstance[]>;
    /**
     * Lists AssignedAddOnInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssignedAddOnListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AssignedAddOnListInstanceOptions, callback?: (error: Error | null, items: AssignedAddOnInstance[]) => any): Promise<AssignedAddOnInstance[]>;
    list(params?: any, callback?: any): Promise<AssignedAddOnInstance[]>;
    /**
     * Retrieve a single page of AssignedAddOnInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AssignedAddOnPage) => any): Promise<AssignedAddOnPage>;
    /**
     * Retrieve a single page of AssignedAddOnInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssignedAddOnListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AssignedAddOnListInstancePageOptions, callback?: (error: Error | null, items: AssignedAddOnPage) => any): Promise<AssignedAddOnPage>;
    page(params?: any, callback?: any): Promise<AssignedAddOnPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssignedAddOnSolution {
    accountSid?: string;
    resourceSid?: string;
}
export declare function AssignedAddOnListInstance(version: V2010, accountSid: string, resourceSid: string): AssignedAddOnListInstance;
export declare class AssignedAddOnPage extends Page<V2010, AssignedAddOnPayload, AssignedAddOnResource, AssignedAddOnInstance> {
    /**
     * Initialize the AssignedAddOnPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: AssignedAddOnSolution);
    /**
     * Build an instance of AssignedAddOnInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AssignedAddOnResource): AssignedAddOnInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
