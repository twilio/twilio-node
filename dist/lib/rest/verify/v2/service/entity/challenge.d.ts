/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
import { NotificationListInstance } from "./challenge/notification";
declare type ChallengeChallengeReasons = "none" | "not_needed" | "not_requested";
declare type ChallengeChallengeStatuses = "pending" | "expired" | "approved" | "denied";
declare type ChallengeFactorTypes = "push" | "totp";
declare type ChallengeListOrders = "asc" | "desc";
/**
 * Options to pass to update a ChallengeInstance
 *
 * @property { string } [authPayload] The optional payload needed to verify the Challenge. E.g., a TOTP would use the numeric code. For `TOTP` this value must be between 3 and 8 characters long. For `Push` this value can be up to 5456 characters in length
 * @property { any } [metadata] Custom metadata associated with the challenge. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{\\\"os\\\": \\\"Android\\\"}`. Can be up to 1024 characters in length.
 */
export interface ChallengeContextUpdateOptions {
    authPayload?: string;
    metadata?: any;
}
/**
 * Options to pass to create a ChallengeInstance
 *
 * @property { string } factorSid The unique SID identifier of the Factor.
 * @property { Date } [expirationDate] The date-time when this Challenge expires, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. The default value is five (5) minutes after Challenge creation. The max value is sixty (60) minutes after creation.
 * @property { string } [details.message] Shown to the user when the push notification arrives. Required when `factor_type` is `push`. Can be up to 256 characters in length
 * @property { Array<any> } [details.fields] A list of objects that describe the Fields included in the Challenge. Each object contains the label and value of the field, the label can be up to 36 characters in length and the value can be up to 128 characters in length. Used when `factor_type` is `push`. There can be up to 20 details fields.
 * @property { any } [hiddenDetails] Details provided to give context about the Challenge. Not shown to the end user. It must be a stringified JSON with only strings values eg. `{\\\"ip\\\": \\\"172.168.1.234\\\"}`. Can be up to 1024 characters in length
 * @property { string } [authPayload] Optional payload used to verify the Challenge upon creation. Only used with a Factor of type `totp` to carry the TOTP code that needs to be verified. For `TOTP` this value must be between 3 and 8 characters long.
 */
export interface ChallengeListInstanceCreateOptions {
    factorSid: string;
    expirationDate?: Date;
    "details.message"?: string;
    "details.fields"?: Array<any>;
    hiddenDetails?: any;
    authPayload?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [factorSid] The unique SID identifier of the Factor.
 * @property { ChallengeChallengeStatuses } [status] The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`.
 * @property { ChallengeListOrders } [order] The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`.
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
export interface ChallengeListInstanceEachOptions {
    factorSid?: string;
    status?: ChallengeChallengeStatuses;
    order?: ChallengeListOrders;
    pageSize?: number;
    callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [factorSid] The unique SID identifier of the Factor.
 * @property { ChallengeChallengeStatuses } [status] The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`.
 * @property { ChallengeListOrders } [order] The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ChallengeListInstanceOptions {
    factorSid?: string;
    status?: ChallengeChallengeStatuses;
    order?: ChallengeListOrders;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [factorSid] The unique SID identifier of the Factor.
 * @property { ChallengeChallengeStatuses } [status] The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`.
 * @property { ChallengeListOrders } [order] The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ChallengeListInstancePageOptions {
    factorSid?: string;
    status?: ChallengeChallengeStatuses;
    order?: ChallengeListOrders;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ChallengeContext {
    notifications: NotificationListInstance;
    /**
     * Fetch a ChallengeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChallengeInstance
     */
    fetch(callback?: (error: Error | null, item?: ChallengeInstance) => any): Promise<ChallengeInstance>;
    /**
     * Update a ChallengeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChallengeInstance
     */
    update(callback?: (error: Error | null, item?: ChallengeInstance) => any): Promise<ChallengeInstance>;
    /**
     * Update a ChallengeInstance
     *
     * @param { ChallengeContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChallengeInstance
     */
    update(params: ChallengeContextUpdateOptions, callback?: (error: Error | null, item?: ChallengeInstance) => any): Promise<ChallengeInstance>;
    update(params?: any, callback?: any): Promise<ChallengeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ChallengeContextSolution {
    serviceSid?: string;
    identity?: string;
    sid?: string;
}
export declare class ChallengeContextImpl implements ChallengeContext {
    protected _version: V2;
    protected _solution: ChallengeContextSolution;
    protected _uri: string;
    protected _notifications?: NotificationListInstance;
    constructor(_version: V2, serviceSid: string, identity: string, sid: string);
    get notifications(): NotificationListInstance;
    fetch(callback?: any): Promise<ChallengeInstance>;
    update(params?: any, callback?: any): Promise<ChallengeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ChallengeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ChallengePayload extends TwilioResponsePayload {
    challenges: ChallengeResource[];
}
interface ChallengeResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    entity_sid?: string | null;
    identity?: string | null;
    factor_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    date_responded?: Date | null;
    expiration_date?: Date | null;
    status?: ChallengeChallengeStatuses;
    responded_reason?: ChallengeChallengeReasons;
    details?: any | null;
    hidden_details?: any | null;
    metadata?: any | null;
    factor_type?: ChallengeFactorTypes;
    url?: string | null;
    links?: object | null;
}
export declare class ChallengeInstance {
    protected _version: V2;
    protected _solution: ChallengeContextSolution;
    protected _context?: ChallengeContext;
    constructor(_version: V2, payload: ChallengeResource, serviceSid: string, identity: string, sid?: string);
    /**
     * A string that uniquely identifies this Challenge.
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
     * Factor Sid.
     */
    factorSid?: string | null;
    /**
     * The date this Challenge was created
     */
    dateCreated?: Date | null;
    /**
     * The date this Challenge was updated
     */
    dateUpdated?: Date | null;
    /**
     * The date this Challenge was responded
     */
    dateResponded?: Date | null;
    /**
     * The date-time when this Challenge expires
     */
    expirationDate?: Date | null;
    status?: ChallengeChallengeStatuses;
    respondedReason?: ChallengeChallengeReasons;
    /**
     * Details about the Challenge.
     */
    details?: any | null;
    /**
     * Hidden details about the Challenge
     */
    hiddenDetails?: any | null;
    /**
     * Metadata of the challenge.
     */
    metadata?: any | null;
    factorType?: ChallengeFactorTypes;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    /**
     * Nested resource URLs.
     */
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a ChallengeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChallengeInstance
     */
    fetch(callback?: (error: Error | null, item?: ChallengeInstance) => any): Promise<ChallengeInstance>;
    /**
     * Update a ChallengeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChallengeInstance
     */
    update(callback?: (error: Error | null, item?: ChallengeInstance) => any): Promise<ChallengeInstance>;
    /**
     * Update a ChallengeInstance
     *
     * @param { ChallengeContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChallengeInstance
     */
    update(params: ChallengeContextUpdateOptions, callback?: (error: Error | null, item?: ChallengeInstance) => any): Promise<ChallengeInstance>;
    /**
     * Access the notifications.
     */
    notifications(): NotificationListInstance;
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
        factorSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        dateResponded: Date | null | undefined;
        expirationDate: Date | null | undefined;
        status: ChallengeChallengeStatuses | undefined;
        respondedReason: ChallengeChallengeReasons | undefined;
        details: any;
        hiddenDetails: any;
        metadata: any;
        factorType: ChallengeFactorTypes | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ChallengeListInstance {
    (sid: string): ChallengeContext;
    get(sid: string): ChallengeContext;
    /**
     * Create a ChallengeInstance
     *
     * @param { ChallengeListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChallengeInstance
     */
    create(params: ChallengeListInstanceCreateOptions, callback?: (error: Error | null, item?: ChallengeInstance) => any): Promise<ChallengeInstance>;
    create(params: any, callback?: any): Promise<ChallengeInstance>;
    /**
     * Streams ChallengeInstance records from the API.
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
    each(callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ChallengeInstance records from the API.
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
     * @param { ChallengeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ChallengeListInstanceEachOptions, callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ChallengeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ChallengePage) => any): Promise<ChallengePage>;
    /**
     * Retrieve a single target page of ChallengeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ChallengePage) => any): Promise<ChallengePage>;
    getPage(params?: any, callback?: any): Promise<ChallengePage>;
    /**
     * Lists ChallengeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ChallengeInstance[]) => any): Promise<ChallengeInstance[]>;
    /**
     * Lists ChallengeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ChallengeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ChallengeListInstanceOptions, callback?: (error: Error | null, items: ChallengeInstance[]) => any): Promise<ChallengeInstance[]>;
    list(params?: any, callback?: any): Promise<ChallengeInstance[]>;
    /**
     * Retrieve a single page of ChallengeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ChallengePage) => any): Promise<ChallengePage>;
    /**
     * Retrieve a single page of ChallengeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ChallengeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ChallengeListInstancePageOptions, callback?: (error: Error | null, items: ChallengePage) => any): Promise<ChallengePage>;
    page(params?: any, callback?: any): Promise<ChallengePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ChallengeSolution {
    serviceSid?: string;
    identity?: string;
}
export declare function ChallengeListInstance(version: V2, serviceSid: string, identity: string): ChallengeListInstance;
export declare class ChallengePage extends Page<V2, ChallengePayload, ChallengeResource, ChallengeInstance> {
    /**
     * Initialize the ChallengePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: ChallengeSolution);
    /**
     * Build an instance of ChallengeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ChallengeResource): ChallengeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
