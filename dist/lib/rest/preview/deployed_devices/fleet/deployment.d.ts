/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import DeployedDevices from "../../DeployedDevices";
/**
 * Options to pass to update a DeploymentInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Deployment, up to 64 characters long
 * @property { string } [syncServiceSid] Provides the unique string identifier of the Twilio Sync service instance that will be linked to and accessible by this Deployment.
 */
export interface DeploymentContextUpdateOptions {
    friendlyName?: string;
    syncServiceSid?: string;
}
/**
 * Options to pass to create a DeploymentInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Deployment, up to 256 characters long.
 * @property { string } [syncServiceSid] Provides the unique string identifier of the Twilio Sync service instance that will be linked to and accessible by this Deployment.
 */
export interface DeploymentListInstanceCreateOptions {
    friendlyName?: string;
    syncServiceSid?: string;
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
export interface DeploymentListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void;
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
export interface DeploymentListInstanceOptions {
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
export interface DeploymentListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface DeploymentContext {
    /**
     * Remove a DeploymentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a DeploymentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    fetch(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    /**
     * Update a DeploymentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    update(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    /**
     * Update a DeploymentInstance
     *
     * @param { DeploymentContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    update(params: DeploymentContextUpdateOptions, callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    update(params?: any, callback?: any): Promise<DeploymentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeploymentContextSolution {
    fleetSid?: string;
    sid?: string;
}
export declare class DeploymentContextImpl implements DeploymentContext {
    protected _version: DeployedDevices;
    protected _solution: DeploymentContextSolution;
    protected _uri: string;
    constructor(_version: DeployedDevices, fleetSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<DeploymentInstance>;
    update(params?: any, callback?: any): Promise<DeploymentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DeploymentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DeploymentPayload extends TwilioResponsePayload {
    deployments: DeploymentResource[];
}
interface DeploymentResource {
    sid?: string | null;
    url?: string | null;
    friendly_name?: string | null;
    fleet_sid?: string | null;
    account_sid?: string | null;
    sync_service_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class DeploymentInstance {
    protected _version: DeployedDevices;
    protected _solution: DeploymentContextSolution;
    protected _context?: DeploymentContext;
    constructor(_version: DeployedDevices, payload: DeploymentResource, fleetSid: string, sid?: string);
    /**
     * A string that uniquely identifies this Deployment.
     */
    sid?: string | null;
    /**
     * URL of this Deployment.
     */
    url?: string | null;
    /**
     * A human readable description for this Deployment
     */
    friendlyName?: string | null;
    /**
     * The unique identifier of the Fleet.
     */
    fleetSid?: string | null;
    /**
     * The unique SID that identifies this Account.
     */
    accountSid?: string | null;
    /**
     * The unique identifier of the Sync service instance.
     */
    syncServiceSid?: string | null;
    /**
     * The date this Deployment was created.
     */
    dateCreated?: Date | null;
    /**
     * The date this Deployment was updated.
     */
    dateUpdated?: Date | null;
    private get _proxy();
    /**
     * Remove a DeploymentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a DeploymentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    fetch(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    /**
     * Update a DeploymentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    update(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    /**
     * Update a DeploymentInstance
     *
     * @param { DeploymentContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    update(params: DeploymentContextUpdateOptions, callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        url: string | null | undefined;
        friendlyName: string | null | undefined;
        fleetSid: string | null | undefined;
        accountSid: string | null | undefined;
        syncServiceSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DeploymentListInstance {
    (sid: string): DeploymentContext;
    get(sid: string): DeploymentContext;
    /**
     * Create a DeploymentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    create(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    /**
     * Create a DeploymentInstance
     *
     * @param { DeploymentListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeploymentInstance
     */
    create(params: DeploymentListInstanceCreateOptions, callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
    create(params?: any, callback?: any): Promise<DeploymentInstance>;
    /**
     * Streams DeploymentInstance records from the API.
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
    each(callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams DeploymentInstance records from the API.
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
     * @param { DeploymentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: DeploymentListInstanceEachOptions, callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of DeploymentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
    /**
     * Retrieve a single target page of DeploymentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
    getPage(params?: any, callback?: any): Promise<DeploymentPage>;
    /**
     * Lists DeploymentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: DeploymentInstance[]) => any): Promise<DeploymentInstance[]>;
    /**
     * Lists DeploymentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DeploymentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: DeploymentListInstanceOptions, callback?: (error: Error | null, items: DeploymentInstance[]) => any): Promise<DeploymentInstance[]>;
    list(params?: any, callback?: any): Promise<DeploymentInstance[]>;
    /**
     * Retrieve a single page of DeploymentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
    /**
     * Retrieve a single page of DeploymentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DeploymentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: DeploymentListInstancePageOptions, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
    page(params?: any, callback?: any): Promise<DeploymentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeploymentSolution {
    fleetSid?: string;
}
export declare function DeploymentListInstance(version: DeployedDevices, fleetSid: string): DeploymentListInstance;
export declare class DeploymentPage extends Page<DeployedDevices, DeploymentPayload, DeploymentResource, DeploymentInstance> {
    /**
     * Initialize the DeploymentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: DeployedDevices, response: Response<string>, solution: DeploymentSolution);
    /**
     * Build an instance of DeploymentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: DeploymentResource): DeploymentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
