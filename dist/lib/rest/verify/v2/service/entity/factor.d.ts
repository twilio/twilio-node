/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
declare type FactorFactorStatuses = "unverified" | "verified";
declare type FactorFactorTypes = "push" | "totp";
declare type FactorTotpAlgorithms = "sha1" | "sha256" | "sha512";
/**
 * Options to pass to update a FactorInstance
 *
 * @property { string } [authPayload] The optional payload needed to verify the Factor for the first time. E.g. for a TOTP, the numeric code.
 * @property { string } [friendlyName] The new friendly name of this Factor. It can be up to 64 characters.
 * @property { string } [config.notificationToken] For APN, the device token. For FCM, the registration token. It is used to send the push notifications. Required when `factor_type` is `push`. If specified, this value must be between 32 and 255 characters long.
 * @property { string } [config.sdkVersion] The Verify Push SDK version used to configure the factor
 * @property { number } [config.timeStep] Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive
 * @property { number } [config.skew] The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive
 * @property { number } [config.codeLength] Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive
 * @property { FactorTotpAlgorithms } [config.alg]
 * @property { string } [config.notificationPlatform] The transport technology used to generate the Notification Token. Can be `apn`, `fcm` or `none`.  Required when `factor_type` is `push`.
 */
export interface FactorContextUpdateOptions {
    authPayload?: string;
    friendlyName?: string;
    "config.notificationToken"?: string;
    "config.sdkVersion"?: string;
    "config.timeStep"?: number;
    "config.skew"?: number;
    "config.codeLength"?: number;
    "config.alg"?: FactorTotpAlgorithms;
    "config.notificationPlatform"?: string;
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
export interface FactorListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: FactorInstance, done: (err?: Error) => void) => void;
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
export interface FactorListInstanceOptions {
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
export interface FactorListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FactorContext {
    /**
     * Remove a FactorInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FactorInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FactorInstance
     */
    fetch(callback?: (error: Error | null, item?: FactorInstance) => any): Promise<FactorInstance>;
    /**
     * Update a FactorInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FactorInstance
     */
    update(callback?: (error: Error | null, item?: FactorInstance) => any): Promise<FactorInstance>;
    /**
     * Update a FactorInstance
     *
     * @param { FactorContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FactorInstance
     */
    update(params: FactorContextUpdateOptions, callback?: (error: Error | null, item?: FactorInstance) => any): Promise<FactorInstance>;
    update(params?: any, callback?: any): Promise<FactorInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FactorContextSolution {
    serviceSid?: string;
    identity?: string;
    sid?: string;
}
export declare class FactorContextImpl implements FactorContext {
    protected _version: V2;
    protected _solution: FactorContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, identity: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<FactorInstance>;
    update(params?: any, callback?: any): Promise<FactorInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FactorContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FactorPayload extends TwilioResponsePayload {
    factors: FactorResource[];
}
interface FactorResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    entity_sid?: string | null;
    identity?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    status?: FactorFactorStatuses;
    factor_type?: FactorFactorTypes;
    config?: any | null;
    metadata?: any | null;
    url?: string | null;
}
export declare class FactorInstance {
    protected _version: V2;
    protected _solution: FactorContextSolution;
    protected _context?: FactorContext;
    constructor(_version: V2, payload: FactorResource, serviceSid: string, identity: string, sid?: string);
    /**
     * A string that uniquely identifies this Factor.
     */
    sid?: string | null;
    /**
     * Account Sid.
     */
    accountSid?: string | null;
    /**
     * Service Sid.
     */
    serviceSid?: string | null;
    /**
     * Entity Sid.
     */
    entitySid?: string | null;
    /**
     * Unique external identifier of the Entity
     */
    identity?: string | null;
    /**
     * The date this Factor was created
     */
    dateCreated?: Date | null;
    /**
     * The date this Factor was updated
     */
    dateUpdated?: Date | null;
    /**
     * A human readable description of this resource.
     */
    friendlyName?: string | null;
    status?: FactorFactorStatuses;
    factorType?: FactorFactorTypes;
    /**
     * Configurations for a `factor_type`.
     */
    config?: any | null;
    /**
     * Metadata of the factor.
     */
    metadata?: any | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a FactorInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FactorInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FactorInstance
     */
    fetch(callback?: (error: Error | null, item?: FactorInstance) => any): Promise<FactorInstance>;
    /**
     * Update a FactorInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FactorInstance
     */
    update(callback?: (error: Error | null, item?: FactorInstance) => any): Promise<FactorInstance>;
    /**
     * Update a FactorInstance
     *
     * @param { FactorContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FactorInstance
     */
    update(params: FactorContextUpdateOptions, callback?: (error: Error | null, item?: FactorInstance) => any): Promise<FactorInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        entitySid: string | null | undefined;
        identity: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        status: FactorFactorStatuses | undefined;
        factorType: FactorFactorTypes | undefined;
        config: any;
        metadata: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FactorListInstance {
    (sid: string): FactorContext;
    get(sid: string): FactorContext;
    /**
     * Streams FactorInstance records from the API.
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
    each(callback?: (item: FactorInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FactorInstance records from the API.
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
     * @param { FactorListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FactorListInstanceEachOptions, callback?: (item: FactorInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FactorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FactorPage) => any): Promise<FactorPage>;
    /**
     * Retrieve a single target page of FactorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FactorPage) => any): Promise<FactorPage>;
    getPage(params?: any, callback?: any): Promise<FactorPage>;
    /**
     * Lists FactorInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FactorInstance[]) => any): Promise<FactorInstance[]>;
    /**
     * Lists FactorInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FactorListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FactorListInstanceOptions, callback?: (error: Error | null, items: FactorInstance[]) => any): Promise<FactorInstance[]>;
    list(params?: any, callback?: any): Promise<FactorInstance[]>;
    /**
     * Retrieve a single page of FactorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FactorPage) => any): Promise<FactorPage>;
    /**
     * Retrieve a single page of FactorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FactorListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FactorListInstancePageOptions, callback?: (error: Error | null, items: FactorPage) => any): Promise<FactorPage>;
    page(params?: any, callback?: any): Promise<FactorPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FactorSolution {
    serviceSid?: string;
    identity?: string;
}
export declare function FactorListInstance(version: V2, serviceSid: string, identity: string): FactorListInstance;
export declare class FactorPage extends Page<V2, FactorPayload, FactorResource, FactorInstance> {
    /**
     * Initialize the FactorPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: FactorSolution);
    /**
     * Build an instance of FactorInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FactorResource): FactorInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
