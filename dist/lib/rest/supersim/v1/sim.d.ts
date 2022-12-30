/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { BillingPeriodListInstance } from "./sim/billingPeriod";
import { SimIpAddressListInstance } from "./sim/simIpAddress";
declare type SimStatus = "new" | "ready" | "active" | "inactive" | "scheduled";
declare type SimStatusUpdate = "ready" | "active" | "inactive";
/**
 * Options to pass to update a SimInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource.
 * @property { SimStatusUpdate } [status]
 * @property { string } [fleet] The SID or unique name of the Fleet to which the SIM resource should be assigned.
 * @property { string } [callbackUrl] The URL we should call using the `callback_method` after an asynchronous update has finished.
 * @property { string } [callbackMethod] The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST.
 * @property { string } [accountSid] The SID of the Account to which the Sim resource should belong. The Account SID can only be that of the requesting Account or that of a Subaccount of the requesting Account. Only valid when the Sim resource\\\'s status is new.
 */
export interface SimContextUpdateOptions {
    uniqueName?: string;
    status?: SimStatusUpdate;
    fleet?: string;
    callbackUrl?: string;
    callbackMethod?: string;
    accountSid?: string;
}
/**
 * Options to pass to create a SimInstance
 *
 * @property { string } iccid The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) of the Super SIM to be added to your Account.
 * @property { string } registrationCode The 10-digit code required to claim the Super SIM for your Account.
 */
export interface SimListInstanceCreateOptions {
    iccid: string;
    registrationCode: string;
}
/**
 * Options to pass to each
 *
 * @property { SimStatus } [status] The status of the Sim resources to read. Can be `new`, `ready`, `active`, `inactive`, or `scheduled`.
 * @property { string } [fleet] The SID or unique name of the Fleet to which a list of Sims are assigned.
 * @property { string } [iccid] The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) associated with a Super SIM to filter the list by. Passing this parameter will always return a list containing zero or one SIMs.
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
export interface SimListInstanceEachOptions {
    status?: SimStatus;
    fleet?: string;
    iccid?: string;
    pageSize?: number;
    callback?: (item: SimInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { SimStatus } [status] The status of the Sim resources to read. Can be `new`, `ready`, `active`, `inactive`, or `scheduled`.
 * @property { string } [fleet] The SID or unique name of the Fleet to which a list of Sims are assigned.
 * @property { string } [iccid] The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) associated with a Super SIM to filter the list by. Passing this parameter will always return a list containing zero or one SIMs.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SimListInstanceOptions {
    status?: SimStatus;
    fleet?: string;
    iccid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { SimStatus } [status] The status of the Sim resources to read. Can be `new`, `ready`, `active`, `inactive`, or `scheduled`.
 * @property { string } [fleet] The SID or unique name of the Fleet to which a list of Sims are assigned.
 * @property { string } [iccid] The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) associated with a Super SIM to filter the list by. Passing this parameter will always return a list containing zero or one SIMs.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SimListInstancePageOptions {
    status?: SimStatus;
    fleet?: string;
    iccid?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SimContext {
    billingPeriods: BillingPeriodListInstance;
    simIpAddresses: SimIpAddressListInstance;
    /**
     * Fetch a SimInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SimInstance
     */
    fetch(callback?: (error: Error | null, item?: SimInstance) => any): Promise<SimInstance>;
    /**
     * Update a SimInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SimInstance
     */
    update(callback?: (error: Error | null, item?: SimInstance) => any): Promise<SimInstance>;
    /**
     * Update a SimInstance
     *
     * @param { SimContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SimInstance
     */
    update(params: SimContextUpdateOptions, callback?: (error: Error | null, item?: SimInstance) => any): Promise<SimInstance>;
    update(params?: any, callback?: any): Promise<SimInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SimContextSolution {
    sid?: string;
}
export declare class SimContextImpl implements SimContext {
    protected _version: V1;
    protected _solution: SimContextSolution;
    protected _uri: string;
    protected _billingPeriods?: BillingPeriodListInstance;
    protected _simIpAddresses?: SimIpAddressListInstance;
    constructor(_version: V1, sid: string);
    get billingPeriods(): BillingPeriodListInstance;
    get simIpAddresses(): SimIpAddressListInstance;
    fetch(callback?: any): Promise<SimInstance>;
    update(params?: any, callback?: any): Promise<SimInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SimContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SimPayload extends TwilioResponsePayload {
    sims: SimResource[];
}
interface SimResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    iccid?: string | null;
    status?: SimStatus;
    fleet_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class SimInstance {
    protected _version: V1;
    protected _solution: SimContextSolution;
    protected _context?: SimContext;
    constructor(_version: V1, payload: SimResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The SID of the Account that the Super SIM belongs to
     */
    accountSid?: string | null;
    /**
     * The ICCID associated with the SIM
     */
    iccid?: string | null;
    status?: SimStatus;
    /**
     * The unique ID of the Fleet configured for this SIM
     */
    fleetSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Sim Resource
     */
    url?: string | null;
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a SimInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SimInstance
     */
    fetch(callback?: (error: Error | null, item?: SimInstance) => any): Promise<SimInstance>;
    /**
     * Update a SimInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SimInstance
     */
    update(callback?: (error: Error | null, item?: SimInstance) => any): Promise<SimInstance>;
    /**
     * Update a SimInstance
     *
     * @param { SimContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SimInstance
     */
    update(params: SimContextUpdateOptions, callback?: (error: Error | null, item?: SimInstance) => any): Promise<SimInstance>;
    /**
     * Access the billingPeriods.
     */
    billingPeriods(): BillingPeriodListInstance;
    /**
     * Access the simIpAddresses.
     */
    simIpAddresses(): SimIpAddressListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        iccid: string | null | undefined;
        status: SimStatus | undefined;
        fleetSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SimListInstance {
    (sid: string): SimContext;
    get(sid: string): SimContext;
    /**
     * Create a SimInstance
     *
     * @param { SimListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SimInstance
     */
    create(params: SimListInstanceCreateOptions, callback?: (error: Error | null, item?: SimInstance) => any): Promise<SimInstance>;
    create(params: any, callback?: any): Promise<SimInstance>;
    /**
     * Streams SimInstance records from the API.
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
    each(callback?: (item: SimInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SimInstance records from the API.
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
     * @param { SimListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SimListInstanceEachOptions, callback?: (item: SimInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SimInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SimPage) => any): Promise<SimPage>;
    /**
     * Retrieve a single target page of SimInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SimPage) => any): Promise<SimPage>;
    getPage(params?: any, callback?: any): Promise<SimPage>;
    /**
     * Lists SimInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SimInstance[]) => any): Promise<SimInstance[]>;
    /**
     * Lists SimInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SimListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SimListInstanceOptions, callback?: (error: Error | null, items: SimInstance[]) => any): Promise<SimInstance[]>;
    list(params?: any, callback?: any): Promise<SimInstance[]>;
    /**
     * Retrieve a single page of SimInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SimPage) => any): Promise<SimPage>;
    /**
     * Retrieve a single page of SimInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SimListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SimListInstancePageOptions, callback?: (error: Error | null, items: SimPage) => any): Promise<SimPage>;
    page(params?: any, callback?: any): Promise<SimPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SimSolution {
}
export declare function SimListInstance(version: V1): SimListInstance;
export declare class SimPage extends Page<V1, SimPayload, SimResource, SimInstance> {
    /**
     * Initialize the SimPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SimSolution);
    /**
     * Build an instance of SimInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SimResource): SimInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
