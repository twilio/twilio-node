/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import DeployedDevices from "../../DeployedDevices";
/**
 * Options to pass to update a CertificateInstance
 *
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Certificate credential, up to 256 characters long.
 * @property { string } [deviceSid] Provides the unique string identifier of an existing Device to become authenticated with this Certificate credential.
 */
export interface CertificateContextUpdateOptions {
    friendlyName?: string;
    deviceSid?: string;
}
/**
 * Options to pass to create a CertificateInstance
 *
 * @property { string } certificateData Provides a URL encoded representation of the public certificate in PEM format.
 * @property { string } [friendlyName] Provides a human readable descriptive text for this Certificate credential, up to 256 characters long.
 * @property { string } [deviceSid] Provides the unique string identifier of an existing Device to become authenticated with this Certificate credential.
 */
export interface CertificateListInstanceCreateOptions {
    certificateData: string;
    friendlyName?: string;
    deviceSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [deviceSid] Filters the resulting list of Certificates by a unique string identifier of an authenticated Device.
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
export interface CertificateListInstanceEachOptions {
    deviceSid?: string;
    pageSize?: number;
    callback?: (item: CertificateInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [deviceSid] Filters the resulting list of Certificates by a unique string identifier of an authenticated Device.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CertificateListInstanceOptions {
    deviceSid?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [deviceSid] Filters the resulting list of Certificates by a unique string identifier of an authenticated Device.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CertificateListInstancePageOptions {
    deviceSid?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CertificateContext {
    /**
     * Remove a CertificateInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CertificateInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CertificateInstance
     */
    fetch(callback?: (error: Error | null, item?: CertificateInstance) => any): Promise<CertificateInstance>;
    /**
     * Update a CertificateInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CertificateInstance
     */
    update(callback?: (error: Error | null, item?: CertificateInstance) => any): Promise<CertificateInstance>;
    /**
     * Update a CertificateInstance
     *
     * @param { CertificateContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CertificateInstance
     */
    update(params: CertificateContextUpdateOptions, callback?: (error: Error | null, item?: CertificateInstance) => any): Promise<CertificateInstance>;
    update(params?: any, callback?: any): Promise<CertificateInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CertificateContextSolution {
    fleetSid?: string;
    sid?: string;
}
export declare class CertificateContextImpl implements CertificateContext {
    protected _version: DeployedDevices;
    protected _solution: CertificateContextSolution;
    protected _uri: string;
    constructor(_version: DeployedDevices, fleetSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<CertificateInstance>;
    update(params?: any, callback?: any): Promise<CertificateInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CertificateContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CertificatePayload extends TwilioResponsePayload {
    certificates: CertificateResource[];
}
interface CertificateResource {
    sid?: string | null;
    url?: string | null;
    friendly_name?: string | null;
    fleet_sid?: string | null;
    account_sid?: string | null;
    device_sid?: string | null;
    thumbprint?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class CertificateInstance {
    protected _version: DeployedDevices;
    protected _solution: CertificateContextSolution;
    protected _context?: CertificateContext;
    constructor(_version: DeployedDevices, payload: CertificateResource, fleetSid: string, sid?: string);
    /**
     * A string that uniquely identifies this Certificate.
     */
    sid?: string | null;
    /**
     * URL of this Certificate.
     */
    url?: string | null;
    /**
     * A human readable description for this Certificate.
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
     * The unique identifier of a mapped Device.
     */
    deviceSid?: string | null;
    /**
     * A Certificate unique payload hash.
     */
    thumbprint?: string | null;
    /**
     * The date this Certificate was created.
     */
    dateCreated?: Date | null;
    /**
     * The date this Certificate was updated.
     */
    dateUpdated?: Date | null;
    private get _proxy();
    /**
     * Remove a CertificateInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CertificateInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CertificateInstance
     */
    fetch(callback?: (error: Error | null, item?: CertificateInstance) => any): Promise<CertificateInstance>;
    /**
     * Update a CertificateInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CertificateInstance
     */
    update(callback?: (error: Error | null, item?: CertificateInstance) => any): Promise<CertificateInstance>;
    /**
     * Update a CertificateInstance
     *
     * @param { CertificateContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CertificateInstance
     */
    update(params: CertificateContextUpdateOptions, callback?: (error: Error | null, item?: CertificateInstance) => any): Promise<CertificateInstance>;
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
        deviceSid: string | null | undefined;
        thumbprint: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CertificateListInstance {
    (sid: string): CertificateContext;
    get(sid: string): CertificateContext;
    /**
     * Create a CertificateInstance
     *
     * @param { CertificateListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CertificateInstance
     */
    create(params: CertificateListInstanceCreateOptions, callback?: (error: Error | null, item?: CertificateInstance) => any): Promise<CertificateInstance>;
    create(params: any, callback?: any): Promise<CertificateInstance>;
    /**
     * Streams CertificateInstance records from the API.
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
    each(callback?: (item: CertificateInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CertificateInstance records from the API.
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
     * @param { CertificateListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CertificateListInstanceEachOptions, callback?: (item: CertificateInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CertificateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CertificatePage) => any): Promise<CertificatePage>;
    /**
     * Retrieve a single target page of CertificateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CertificatePage) => any): Promise<CertificatePage>;
    getPage(params?: any, callback?: any): Promise<CertificatePage>;
    /**
     * Lists CertificateInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CertificateInstance[]) => any): Promise<CertificateInstance[]>;
    /**
     * Lists CertificateInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CertificateListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CertificateListInstanceOptions, callback?: (error: Error | null, items: CertificateInstance[]) => any): Promise<CertificateInstance[]>;
    list(params?: any, callback?: any): Promise<CertificateInstance[]>;
    /**
     * Retrieve a single page of CertificateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CertificatePage) => any): Promise<CertificatePage>;
    /**
     * Retrieve a single page of CertificateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CertificateListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CertificateListInstancePageOptions, callback?: (error: Error | null, items: CertificatePage) => any): Promise<CertificatePage>;
    page(params?: any, callback?: any): Promise<CertificatePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CertificateSolution {
    fleetSid?: string;
}
export declare function CertificateListInstance(version: DeployedDevices, fleetSid: string): CertificateListInstance;
export declare class CertificatePage extends Page<DeployedDevices, CertificatePayload, CertificateResource, CertificateInstance> {
    /**
     * Initialize the CertificatePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: DeployedDevices, response: Response<string>, solution: CertificateSolution);
    /**
     * Build an instance of CertificateInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CertificateResource): CertificateInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
