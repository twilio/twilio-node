/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import DeployedDevices from "../DeployedDevices";
import { CertificateListInstance } from "./fleet/certificate";
import { DeploymentListInstance } from "./fleet/deployment";
import { DeviceListInstance } from "./fleet/device";
import { KeyListInstance } from "./fleet/key";
/**
 * Options to pass to update a FleetInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Fleet, up to 256 characters long.
 * @property { string } [defaultDeploymentSid] Provides a string identifier of a Deployment that is going to be used as a default one for this Fleet.
 */
export interface FleetContextUpdateOptions {
    friendlyName?: string;
    defaultDeploymentSid?: string;
}
/**
 * Options to pass to create a FleetInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Fleet, up to 256 characters long.
 */
export interface FleetListInstanceCreateOptions {
    friendlyName?: string;
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
export interface FleetListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: FleetInstance, done: (err?: Error) => void) => void;
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
export interface FleetListInstanceOptions {
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
export interface FleetListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FleetContext {
    certificates: CertificateListInstance;
    deployments: DeploymentListInstance;
    devices: DeviceListInstance;
    keys: KeyListInstance;
    /**
     * Remove a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    fetch(callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Update a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    update(callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Update a FleetInstance
     *
     * @param { FleetContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    update(params: FleetContextUpdateOptions, callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    update(params?: any, callback?: any): Promise<FleetInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FleetContextSolution {
    sid?: string;
}
export declare class FleetContextImpl implements FleetContext {
    protected _version: DeployedDevices;
    protected _solution: FleetContextSolution;
    protected _uri: string;
    protected _certificates?: CertificateListInstance;
    protected _deployments?: DeploymentListInstance;
    protected _devices?: DeviceListInstance;
    protected _keys?: KeyListInstance;
    constructor(_version: DeployedDevices, sid: string);
    get certificates(): CertificateListInstance;
    get deployments(): DeploymentListInstance;
    get devices(): DeviceListInstance;
    get keys(): KeyListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<FleetInstance>;
    update(params?: any, callback?: any): Promise<FleetInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FleetContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FleetPayload extends TwilioResponsePayload {
    fleets: FleetResource[];
}
interface FleetResource {
    sid?: string | null;
    url?: string | null;
    unique_name?: string | null;
    friendly_name?: string | null;
    account_sid?: string | null;
    default_deployment_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    links?: object | null;
}
export declare class FleetInstance {
    protected _version: DeployedDevices;
    protected _solution: FleetContextSolution;
    protected _context?: FleetContext;
    constructor(_version: DeployedDevices, payload: FleetResource, sid?: string);
    /**
     * A string that uniquely identifies this Fleet.
     */
    sid?: string | null;
    /**
     * URL of this Fleet.
     */
    url?: string | null;
    /**
     * A unique, addressable name of this Fleet.
     */
    uniqueName?: string | null;
    /**
     * A human readable description for this Fleet.
     */
    friendlyName?: string | null;
    /**
     * The unique SID that identifies this Account.
     */
    accountSid?: string | null;
    /**
     * The unique SID that identifies this Fleet\'s default Deployment.
     */
    defaultDeploymentSid?: string | null;
    /**
     * The date this Fleet was created.
     */
    dateCreated?: Date | null;
    /**
     * The date this Fleet was updated.
     */
    dateUpdated?: Date | null;
    /**
     * Nested resource URLs.
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    fetch(callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Update a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    update(callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Update a FleetInstance
     *
     * @param { FleetContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    update(params: FleetContextUpdateOptions, callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Access the certificates.
     */
    certificates(): CertificateListInstance;
    /**
     * Access the deployments.
     */
    deployments(): DeploymentListInstance;
    /**
     * Access the devices.
     */
    devices(): DeviceListInstance;
    /**
     * Access the keys.
     */
    keys(): KeyListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        url: string | null | undefined;
        uniqueName: string | null | undefined;
        friendlyName: string | null | undefined;
        accountSid: string | null | undefined;
        defaultDeploymentSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FleetListInstance {
    (sid: string): FleetContext;
    get(sid: string): FleetContext;
    /**
     * Create a FleetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    create(callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    /**
     * Create a FleetInstance
     *
     * @param { FleetListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FleetInstance
     */
    create(params: FleetListInstanceCreateOptions, callback?: (error: Error | null, item?: FleetInstance) => any): Promise<FleetInstance>;
    create(params?: any, callback?: any): Promise<FleetInstance>;
    /**
     * Streams FleetInstance records from the API.
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
    each(callback?: (item: FleetInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FleetInstance records from the API.
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
     * @param { FleetListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FleetListInstanceEachOptions, callback?: (item: FleetInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FleetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
    /**
     * Retrieve a single target page of FleetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
    getPage(params?: any, callback?: any): Promise<FleetPage>;
    /**
     * Lists FleetInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FleetInstance[]) => any): Promise<FleetInstance[]>;
    /**
     * Lists FleetInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FleetListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FleetListInstanceOptions, callback?: (error: Error | null, items: FleetInstance[]) => any): Promise<FleetInstance[]>;
    list(params?: any, callback?: any): Promise<FleetInstance[]>;
    /**
     * Retrieve a single page of FleetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
    /**
     * Retrieve a single page of FleetInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FleetListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FleetListInstancePageOptions, callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
    page(params?: any, callback?: any): Promise<FleetPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FleetSolution {
}
export declare function FleetListInstance(version: DeployedDevices): FleetListInstance;
export declare class FleetPage extends Page<DeployedDevices, FleetPayload, FleetResource, FleetInstance> {
    /**
     * Initialize the FleetPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: DeployedDevices, response: Response<string>, solution: FleetSolution);
    /**
     * Build an instance of FleetInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FleetResource): FleetInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
