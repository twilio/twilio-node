/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import Marketplace from "../Marketplace";
import { InstalledAddOnExtensionListInstance } from "./installedAddOn/installedAddOnExtension";
/**
 * Options to pass to update a InstalledAddOnInstance
 *
 * @property { any } [configuration] Valid JSON object that conform to the configuration schema exposed by the associated AvailableAddOn resource. This is only required by Add-ons that need to be configured
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be unique within the Account.
 */
export interface InstalledAddOnContextUpdateOptions {
    configuration?: any;
    uniqueName?: string;
}
/**
 * Options to pass to create a InstalledAddOnInstance
 *
 * @property { string } availableAddOnSid The SID of the AvaliableAddOn to install.
 * @property { boolean } acceptTermsOfService Whether the Terms of Service were accepted.
 * @property { any } [configuration] The JSON object that represents the configuration of the new Add-on being installed.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be unique within the Account.
 */
export interface InstalledAddOnListInstanceCreateOptions {
    availableAddOnSid: string;
    acceptTermsOfService: boolean;
    configuration?: any;
    uniqueName?: string;
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
export interface InstalledAddOnListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: InstalledAddOnInstance, done: (err?: Error) => void) => void;
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
export interface InstalledAddOnListInstanceOptions {
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
export interface InstalledAddOnListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface InstalledAddOnContext {
    extensions: InstalledAddOnExtensionListInstance;
    /**
     * Remove a InstalledAddOnInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a InstalledAddOnInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnInstance
     */
    fetch(callback?: (error: Error | null, item?: InstalledAddOnInstance) => any): Promise<InstalledAddOnInstance>;
    /**
     * Update a InstalledAddOnInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnInstance
     */
    update(callback?: (error: Error | null, item?: InstalledAddOnInstance) => any): Promise<InstalledAddOnInstance>;
    /**
     * Update a InstalledAddOnInstance
     *
     * @param { InstalledAddOnContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnInstance
     */
    update(params: InstalledAddOnContextUpdateOptions, callback?: (error: Error | null, item?: InstalledAddOnInstance) => any): Promise<InstalledAddOnInstance>;
    update(params?: any, callback?: any): Promise<InstalledAddOnInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InstalledAddOnContextSolution {
    sid?: string;
}
export declare class InstalledAddOnContextImpl implements InstalledAddOnContext {
    protected _version: Marketplace;
    protected _solution: InstalledAddOnContextSolution;
    protected _uri: string;
    protected _extensions?: InstalledAddOnExtensionListInstance;
    constructor(_version: Marketplace, sid: string);
    get extensions(): InstalledAddOnExtensionListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<InstalledAddOnInstance>;
    update(params?: any, callback?: any): Promise<InstalledAddOnInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): InstalledAddOnContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface InstalledAddOnPayload extends TwilioResponsePayload {
    installed_add_ons: InstalledAddOnResource[];
}
interface InstalledAddOnResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    description?: string | null;
    configuration?: any | null;
    unique_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class InstalledAddOnInstance {
    protected _version: Marketplace;
    protected _solution: InstalledAddOnContextSolution;
    protected _context?: InstalledAddOnContext;
    constructor(_version: Marketplace, payload: InstalledAddOnResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * A short description of the Add-on\'s functionality
     */
    description?: string | null;
    /**
     * The JSON object that represents the current configuration of installed Add-on
     */
    configuration?: any | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
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
     * Remove a InstalledAddOnInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a InstalledAddOnInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnInstance
     */
    fetch(callback?: (error: Error | null, item?: InstalledAddOnInstance) => any): Promise<InstalledAddOnInstance>;
    /**
     * Update a InstalledAddOnInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnInstance
     */
    update(callback?: (error: Error | null, item?: InstalledAddOnInstance) => any): Promise<InstalledAddOnInstance>;
    /**
     * Update a InstalledAddOnInstance
     *
     * @param { InstalledAddOnContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnInstance
     */
    update(params: InstalledAddOnContextUpdateOptions, callback?: (error: Error | null, item?: InstalledAddOnInstance) => any): Promise<InstalledAddOnInstance>;
    /**
     * Access the extensions.
     */
    extensions(): InstalledAddOnExtensionListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        description: string | null | undefined;
        configuration: any;
        uniqueName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface InstalledAddOnListInstance {
    (sid: string): InstalledAddOnContext;
    get(sid: string): InstalledAddOnContext;
    /**
     * Create a InstalledAddOnInstance
     *
     * @param { InstalledAddOnListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InstalledAddOnInstance
     */
    create(params: InstalledAddOnListInstanceCreateOptions, callback?: (error: Error | null, item?: InstalledAddOnInstance) => any): Promise<InstalledAddOnInstance>;
    create(params: any, callback?: any): Promise<InstalledAddOnInstance>;
    /**
     * Streams InstalledAddOnInstance records from the API.
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
    each(callback?: (item: InstalledAddOnInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams InstalledAddOnInstance records from the API.
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
     * @param { InstalledAddOnListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: InstalledAddOnListInstanceEachOptions, callback?: (item: InstalledAddOnInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of InstalledAddOnInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: InstalledAddOnPage) => any): Promise<InstalledAddOnPage>;
    /**
     * Retrieve a single target page of InstalledAddOnInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: InstalledAddOnPage) => any): Promise<InstalledAddOnPage>;
    getPage(params?: any, callback?: any): Promise<InstalledAddOnPage>;
    /**
     * Lists InstalledAddOnInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: InstalledAddOnInstance[]) => any): Promise<InstalledAddOnInstance[]>;
    /**
     * Lists InstalledAddOnInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InstalledAddOnListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: InstalledAddOnListInstanceOptions, callback?: (error: Error | null, items: InstalledAddOnInstance[]) => any): Promise<InstalledAddOnInstance[]>;
    list(params?: any, callback?: any): Promise<InstalledAddOnInstance[]>;
    /**
     * Retrieve a single page of InstalledAddOnInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: InstalledAddOnPage) => any): Promise<InstalledAddOnPage>;
    /**
     * Retrieve a single page of InstalledAddOnInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { InstalledAddOnListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: InstalledAddOnListInstancePageOptions, callback?: (error: Error | null, items: InstalledAddOnPage) => any): Promise<InstalledAddOnPage>;
    page(params?: any, callback?: any): Promise<InstalledAddOnPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InstalledAddOnSolution {
}
export declare function InstalledAddOnListInstance(version: Marketplace): InstalledAddOnListInstance;
export declare class InstalledAddOnPage extends Page<Marketplace, InstalledAddOnPayload, InstalledAddOnResource, InstalledAddOnInstance> {
    /**
     * Initialize the InstalledAddOnPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Marketplace, response: Response<string>, solution: InstalledAddOnSolution);
    /**
     * Build an instance of InstalledAddOnInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: InstalledAddOnResource): InstalledAddOnInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
