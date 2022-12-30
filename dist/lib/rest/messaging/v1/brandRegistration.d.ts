/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { BrandVettingListInstance } from "./brandRegistration/brandVetting";
declare type BrandRegistrationsBrandFeedback = "TAX_ID" | "STOCK_SYMBOL" | "NONPROFIT" | "GOVERNMENT_ENTITY" | "OTHERS";
declare type BrandRegistrationsIdentityStatus = "SELF_DECLARED" | "UNVERIFIED" | "VERIFIED" | "VETTED_VERIFIED";
declare type BrandRegistrationsStatus = "PENDING" | "APPROVED" | "FAILED" | "IN_REVIEW" | "DELETED";
/**
 * Options to pass to create a BrandRegistrationInstance
 *
 * @property { string } customerProfileBundleSid Customer Profile Bundle Sid.
 * @property { string } a2PProfileBundleSid A2P Messaging Profile Bundle Sid.
 * @property { string } [brandType] Type of brand being created. One of: \\\"STANDARD\\\", \\\"STARTER\\\". STARTER is for low volume, starter use cases. STANDARD is for all other use cases.
 * @property { boolean } [mock] A boolean that specifies whether brand should be a mock or not. If true, brand will be registered as a mock brand. Defaults to false if no value is provided.
 * @property { boolean } [skipAutomaticSecVet] A flag to disable automatic secondary vetting for brands which it would otherwise be done.
 */
export interface BrandRegistrationListInstanceCreateOptions {
    customerProfileBundleSid: string;
    a2PProfileBundleSid: string;
    brandType?: string;
    mock?: boolean;
    skipAutomaticSecVet?: boolean;
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
export interface BrandRegistrationListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: BrandRegistrationInstance, done: (err?: Error) => void) => void;
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
export interface BrandRegistrationListInstanceOptions {
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
export interface BrandRegistrationListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface BrandRegistrationContext {
    brandVettings: BrandVettingListInstance;
    /**
     * Fetch a BrandRegistrationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BrandRegistrationInstance
     */
    fetch(callback?: (error: Error | null, item?: BrandRegistrationInstance) => any): Promise<BrandRegistrationInstance>;
    /**
     * Update a BrandRegistrationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BrandRegistrationInstance
     */
    update(callback?: (error: Error | null, item?: BrandRegistrationInstance) => any): Promise<BrandRegistrationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BrandRegistrationContextSolution {
    sid?: string;
}
export declare class BrandRegistrationContextImpl implements BrandRegistrationContext {
    protected _version: V1;
    protected _solution: BrandRegistrationContextSolution;
    protected _uri: string;
    protected _brandVettings?: BrandVettingListInstance;
    constructor(_version: V1, sid: string);
    get brandVettings(): BrandVettingListInstance;
    fetch(callback?: any): Promise<BrandRegistrationInstance>;
    update(callback?: any): Promise<BrandRegistrationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): BrandRegistrationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface BrandRegistrationPayload extends TwilioResponsePayload {
    data: BrandRegistrationResource[];
}
interface BrandRegistrationResource {
    sid?: string | null;
    account_sid?: string | null;
    customer_profile_bundle_sid?: string | null;
    a2p_profile_bundle_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    brand_type?: string | null;
    status?: BrandRegistrationsStatus;
    tcr_id?: string | null;
    failure_reason?: string | null;
    url?: string | null;
    brand_score?: number | null;
    brand_feedback?: Array<BrandRegistrationsBrandFeedback> | null;
    identity_status?: BrandRegistrationsIdentityStatus;
    russell_3000?: boolean | null;
    government_entity?: boolean | null;
    tax_exempt_status?: string | null;
    skip_automatic_sec_vet?: boolean | null;
    mock?: boolean | null;
    links?: object | null;
}
export declare class BrandRegistrationInstance {
    protected _version: V1;
    protected _solution: BrandRegistrationContextSolution;
    protected _context?: BrandRegistrationContext;
    constructor(_version: V1, payload: BrandRegistrationResource, sid?: string);
    /**
     * A2P BrandRegistration Sid
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * A2P Messaging Profile Bundle BundleSid
     */
    customerProfileBundleSid?: string | null;
    /**
     * A2P Messaging Profile Bundle BundleSid
     */
    a2pProfileBundleSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * Type of brand. One of: \"STANDARD\", \"STARTER\".
     */
    brandType?: string | null;
    status?: BrandRegistrationsStatus;
    /**
     * Campaign Registry (TCR) Brand ID
     */
    tcrId?: string | null;
    /**
     * A reason why brand registration has failed
     */
    failureReason?: string | null;
    /**
     * The absolute URL of the Brand Registration
     */
    url?: string | null;
    /**
     * Brand score
     */
    brandScore?: number | null;
    /**
     * Brand feedback
     */
    brandFeedback?: Array<BrandRegistrationsBrandFeedback> | null;
    identityStatus?: BrandRegistrationsIdentityStatus;
    /**
     * Russell 3000
     */
    russell3000?: boolean | null;
    /**
     * Government Entity
     */
    governmentEntity?: boolean | null;
    /**
     * Tax Exempt Status
     */
    taxExemptStatus?: string | null;
    /**
     * Skip Automatic Secondary Vetting
     */
    skipAutomaticSecVet?: boolean | null;
    /**
     * A boolean that specifies whether brand should be a mock or not. If true, brand will be registered as a mock brand. Defaults to false if no value is provided.
     */
    mock?: boolean | null;
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a BrandRegistrationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BrandRegistrationInstance
     */
    fetch(callback?: (error: Error | null, item?: BrandRegistrationInstance) => any): Promise<BrandRegistrationInstance>;
    /**
     * Update a BrandRegistrationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BrandRegistrationInstance
     */
    update(callback?: (error: Error | null, item?: BrandRegistrationInstance) => any): Promise<BrandRegistrationInstance>;
    /**
     * Access the brandVettings.
     */
    brandVettings(): BrandVettingListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        customerProfileBundleSid: string | null | undefined;
        a2pProfileBundleSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        brandType: string | null | undefined;
        status: BrandRegistrationsStatus | undefined;
        tcrId: string | null | undefined;
        failureReason: string | null | undefined;
        url: string | null | undefined;
        brandScore: number | null | undefined;
        brandFeedback: BrandRegistrationsBrandFeedback[] | null | undefined;
        identityStatus: BrandRegistrationsIdentityStatus | undefined;
        russell3000: boolean | null | undefined;
        governmentEntity: boolean | null | undefined;
        taxExemptStatus: string | null | undefined;
        skipAutomaticSecVet: boolean | null | undefined;
        mock: boolean | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface BrandRegistrationListInstance {
    (sid: string): BrandRegistrationContext;
    get(sid: string): BrandRegistrationContext;
    /**
     * Create a BrandRegistrationInstance
     *
     * @param { BrandRegistrationListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BrandRegistrationInstance
     */
    create(params: BrandRegistrationListInstanceCreateOptions, callback?: (error: Error | null, item?: BrandRegistrationInstance) => any): Promise<BrandRegistrationInstance>;
    create(params: any, callback?: any): Promise<BrandRegistrationInstance>;
    /**
     * Streams BrandRegistrationInstance records from the API.
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
    each(callback?: (item: BrandRegistrationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams BrandRegistrationInstance records from the API.
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
     * @param { BrandRegistrationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: BrandRegistrationListInstanceEachOptions, callback?: (item: BrandRegistrationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of BrandRegistrationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: BrandRegistrationPage) => any): Promise<BrandRegistrationPage>;
    /**
     * Retrieve a single target page of BrandRegistrationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: BrandRegistrationPage) => any): Promise<BrandRegistrationPage>;
    getPage(params?: any, callback?: any): Promise<BrandRegistrationPage>;
    /**
     * Lists BrandRegistrationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: BrandRegistrationInstance[]) => any): Promise<BrandRegistrationInstance[]>;
    /**
     * Lists BrandRegistrationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BrandRegistrationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: BrandRegistrationListInstanceOptions, callback?: (error: Error | null, items: BrandRegistrationInstance[]) => any): Promise<BrandRegistrationInstance[]>;
    list(params?: any, callback?: any): Promise<BrandRegistrationInstance[]>;
    /**
     * Retrieve a single page of BrandRegistrationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: BrandRegistrationPage) => any): Promise<BrandRegistrationPage>;
    /**
     * Retrieve a single page of BrandRegistrationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BrandRegistrationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: BrandRegistrationListInstancePageOptions, callback?: (error: Error | null, items: BrandRegistrationPage) => any): Promise<BrandRegistrationPage>;
    page(params?: any, callback?: any): Promise<BrandRegistrationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BrandRegistrationSolution {
}
export declare function BrandRegistrationListInstance(version: V1): BrandRegistrationListInstance;
export declare class BrandRegistrationPage extends Page<V1, BrandRegistrationPayload, BrandRegistrationResource, BrandRegistrationInstance> {
    /**
     * Initialize the BrandRegistrationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: BrandRegistrationSolution);
    /**
     * Build an instance of BrandRegistrationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: BrandRegistrationResource): BrandRegistrationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
