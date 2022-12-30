/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
import { BundleCopyListInstance } from "./bundle/bundleCopy";
import { EvaluationListInstance } from "./bundle/evaluation";
import { ItemAssignmentListInstance } from "./bundle/itemAssignment";
import { ReplaceItemsListInstance } from "./bundle/replaceItems";
declare type BundleEndUserType = "individual" | "business";
declare type BundleSortBy = "valid-until" | "date-updated";
declare type BundleSortDirection = "ASC" | "DESC";
declare type BundleStatus = "draft" | "pending-review" | "in-review" | "twilio-rejected" | "twilio-approved" | "provisionally-approved";
/**
 * Options to pass to update a BundleInstance
 *
 * @property { BundleStatus } [status]
 * @property { string } [statusCallback] The URL we call to inform your application of status changes.
 * @property { string } [friendlyName] The string that you assigned to describe the resource.
 * @property { string } [email] The email address that will receive updates when the Bundle resource changes status.
 */
export interface BundleContextUpdateOptions {
    status?: BundleStatus;
    statusCallback?: string;
    friendlyName?: string;
    email?: string;
}
/**
 * Options to pass to create a BundleInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the resource.
 * @property { string } email The email address that will receive updates when the Bundle resource changes status.
 * @property { string } [statusCallback] The URL we call to inform your application of status changes.
 * @property { string } [regulationSid] The unique string of a regulation that is associated to the Bundle resource.
 * @property { string } [isoCountry] The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle\\\'s phone number country ownership request.
 * @property { BundleEndUserType } [endUserType]
 * @property { string } [numberType] The type of phone number of the Bundle\\\'s ownership request. Can be `local`, `mobile`, `national`, or `toll free`.
 */
export interface BundleListInstanceCreateOptions {
    friendlyName: string;
    email: string;
    statusCallback?: string;
    regulationSid?: string;
    isoCountry?: string;
    endUserType?: BundleEndUserType;
    numberType?: string;
}
/**
 * Options to pass to each
 *
 * @property { BundleStatus } [status] The verification status of the Bundle resource. Please refer to [Bundle Statuses](https://www.twilio.com/docs/phone-numbers/regulatory/api/bundles#bundle-statuses) for more details.
 * @property { string } [friendlyName] The string that you assigned to describe the resource. The column can contain 255 variable characters.
 * @property { string } [regulationSid] The unique string of a [Regulation resource](https://www.twilio.com/docs/phone-numbers/regulatory/api/regulations) that is associated to the Bundle resource.
 * @property { string } [isoCountry] The 2-digit [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle\'s phone number country ownership request.
 * @property { string } [numberType] The type of phone number of the Bundle\'s ownership request. Can be `local`, `mobile`, `national`, or `tollfree`.
 * @property { boolean } [hasValidUntilDate] Indicates that the Bundle is a valid Bundle until a specified expiration date.
 * @property { BundleSortBy } [sortBy] Can be `valid-until` or `date-updated`. Defaults to `date-created`.
 * @property { BundleSortDirection } [sortDirection] Default is `DESC`. Can be `ASC` or `DESC`.
 * @property { Date } [validUntilDate] Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
 * @property { Date } [validUntilDateBefore] Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
 * @property { Date } [validUntilDateAfter] Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
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
export interface BundleListInstanceEachOptions {
    status?: BundleStatus;
    friendlyName?: string;
    regulationSid?: string;
    isoCountry?: string;
    numberType?: string;
    hasValidUntilDate?: boolean;
    sortBy?: BundleSortBy;
    sortDirection?: BundleSortDirection;
    validUntilDate?: Date;
    validUntilDateBefore?: Date;
    validUntilDateAfter?: Date;
    pageSize?: number;
    callback?: (item: BundleInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { BundleStatus } [status] The verification status of the Bundle resource. Please refer to [Bundle Statuses](https://www.twilio.com/docs/phone-numbers/regulatory/api/bundles#bundle-statuses) for more details.
 * @property { string } [friendlyName] The string that you assigned to describe the resource. The column can contain 255 variable characters.
 * @property { string } [regulationSid] The unique string of a [Regulation resource](https://www.twilio.com/docs/phone-numbers/regulatory/api/regulations) that is associated to the Bundle resource.
 * @property { string } [isoCountry] The 2-digit [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle\'s phone number country ownership request.
 * @property { string } [numberType] The type of phone number of the Bundle\'s ownership request. Can be `local`, `mobile`, `national`, or `tollfree`.
 * @property { boolean } [hasValidUntilDate] Indicates that the Bundle is a valid Bundle until a specified expiration date.
 * @property { BundleSortBy } [sortBy] Can be `valid-until` or `date-updated`. Defaults to `date-created`.
 * @property { BundleSortDirection } [sortDirection] Default is `DESC`. Can be `ASC` or `DESC`.
 * @property { Date } [validUntilDate] Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
 * @property { Date } [validUntilDateBefore] Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
 * @property { Date } [validUntilDateAfter] Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BundleListInstanceOptions {
    status?: BundleStatus;
    friendlyName?: string;
    regulationSid?: string;
    isoCountry?: string;
    numberType?: string;
    hasValidUntilDate?: boolean;
    sortBy?: BundleSortBy;
    sortDirection?: BundleSortDirection;
    validUntilDate?: Date;
    validUntilDateBefore?: Date;
    validUntilDateAfter?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { BundleStatus } [status] The verification status of the Bundle resource. Please refer to [Bundle Statuses](https://www.twilio.com/docs/phone-numbers/regulatory/api/bundles#bundle-statuses) for more details.
 * @property { string } [friendlyName] The string that you assigned to describe the resource. The column can contain 255 variable characters.
 * @property { string } [regulationSid] The unique string of a [Regulation resource](https://www.twilio.com/docs/phone-numbers/regulatory/api/regulations) that is associated to the Bundle resource.
 * @property { string } [isoCountry] The 2-digit [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle\'s phone number country ownership request.
 * @property { string } [numberType] The type of phone number of the Bundle\'s ownership request. Can be `local`, `mobile`, `national`, or `tollfree`.
 * @property { boolean } [hasValidUntilDate] Indicates that the Bundle is a valid Bundle until a specified expiration date.
 * @property { BundleSortBy } [sortBy] Can be `valid-until` or `date-updated`. Defaults to `date-created`.
 * @property { BundleSortDirection } [sortDirection] Default is `DESC`. Can be `ASC` or `DESC`.
 * @property { Date } [validUntilDate] Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
 * @property { Date } [validUntilDateBefore] Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
 * @property { Date } [validUntilDateAfter] Date to filter Bundles having their `valid_until_date` before or after the specified date. Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface BundleListInstancePageOptions {
    status?: BundleStatus;
    friendlyName?: string;
    regulationSid?: string;
    isoCountry?: string;
    numberType?: string;
    hasValidUntilDate?: boolean;
    sortBy?: BundleSortBy;
    sortDirection?: BundleSortDirection;
    validUntilDate?: Date;
    validUntilDateBefore?: Date;
    validUntilDateAfter?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface BundleContext {
    bundleCopies: BundleCopyListInstance;
    evaluations: EvaluationListInstance;
    itemAssignments: ItemAssignmentListInstance;
    replaceItems: ReplaceItemsListInstance;
    /**
     * Remove a BundleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a BundleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BundleInstance
     */
    fetch(callback?: (error: Error | null, item?: BundleInstance) => any): Promise<BundleInstance>;
    /**
     * Update a BundleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BundleInstance
     */
    update(callback?: (error: Error | null, item?: BundleInstance) => any): Promise<BundleInstance>;
    /**
     * Update a BundleInstance
     *
     * @param { BundleContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BundleInstance
     */
    update(params: BundleContextUpdateOptions, callback?: (error: Error | null, item?: BundleInstance) => any): Promise<BundleInstance>;
    update(params?: any, callback?: any): Promise<BundleInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BundleContextSolution {
    sid?: string;
}
export declare class BundleContextImpl implements BundleContext {
    protected _version: V2;
    protected _solution: BundleContextSolution;
    protected _uri: string;
    protected _bundleCopies?: BundleCopyListInstance;
    protected _evaluations?: EvaluationListInstance;
    protected _itemAssignments?: ItemAssignmentListInstance;
    protected _replaceItems?: ReplaceItemsListInstance;
    constructor(_version: V2, sid: string);
    get bundleCopies(): BundleCopyListInstance;
    get evaluations(): EvaluationListInstance;
    get itemAssignments(): ItemAssignmentListInstance;
    get replaceItems(): ReplaceItemsListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<BundleInstance>;
    update(params?: any, callback?: any): Promise<BundleInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): BundleContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface BundlePayload extends TwilioResponsePayload {
    results: BundleResource[];
}
interface BundleResource {
    sid?: string | null;
    account_sid?: string | null;
    regulation_sid?: string | null;
    friendly_name?: string | null;
    status?: BundleStatus;
    valid_until?: Date | null;
    email?: string | null;
    status_callback?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class BundleInstance {
    protected _version: V2;
    protected _solution: BundleContextSolution;
    protected _context?: BundleContext;
    constructor(_version: V2, payload: BundleResource, sid?: string);
    /**
     * The unique string that identifies the resource.
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string of a regulation.
     */
    regulationSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    status?: BundleStatus;
    /**
     * The ISO 8601 date and time in GMT when the resource will be valid until.
     */
    validUntil?: Date | null;
    /**
     * The email address
     */
    email?: string | null;
    /**
     * The URL we call to inform your application of status changes.
     */
    statusCallback?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Bundle resource
     */
    url?: string | null;
    /**
     * The URLs of the Assigned Items of the Bundle resource
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a BundleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a BundleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BundleInstance
     */
    fetch(callback?: (error: Error | null, item?: BundleInstance) => any): Promise<BundleInstance>;
    /**
     * Update a BundleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BundleInstance
     */
    update(callback?: (error: Error | null, item?: BundleInstance) => any): Promise<BundleInstance>;
    /**
     * Update a BundleInstance
     *
     * @param { BundleContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BundleInstance
     */
    update(params: BundleContextUpdateOptions, callback?: (error: Error | null, item?: BundleInstance) => any): Promise<BundleInstance>;
    /**
     * Access the bundleCopies.
     */
    bundleCopies(): BundleCopyListInstance;
    /**
     * Access the evaluations.
     */
    evaluations(): EvaluationListInstance;
    /**
     * Access the itemAssignments.
     */
    itemAssignments(): ItemAssignmentListInstance;
    /**
     * Access the replaceItems.
     */
    replaceItems(): ReplaceItemsListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        regulationSid: string | null | undefined;
        friendlyName: string | null | undefined;
        status: BundleStatus | undefined;
        validUntil: Date | null | undefined;
        email: string | null | undefined;
        statusCallback: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface BundleListInstance {
    (sid: string): BundleContext;
    get(sid: string): BundleContext;
    /**
     * Create a BundleInstance
     *
     * @param { BundleListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BundleInstance
     */
    create(params: BundleListInstanceCreateOptions, callback?: (error: Error | null, item?: BundleInstance) => any): Promise<BundleInstance>;
    create(params: any, callback?: any): Promise<BundleInstance>;
    /**
     * Streams BundleInstance records from the API.
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
    each(callback?: (item: BundleInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams BundleInstance records from the API.
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
     * @param { BundleListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: BundleListInstanceEachOptions, callback?: (item: BundleInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of BundleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: BundlePage) => any): Promise<BundlePage>;
    /**
     * Retrieve a single target page of BundleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: BundlePage) => any): Promise<BundlePage>;
    getPage(params?: any, callback?: any): Promise<BundlePage>;
    /**
     * Lists BundleInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: BundleInstance[]) => any): Promise<BundleInstance[]>;
    /**
     * Lists BundleInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BundleListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: BundleListInstanceOptions, callback?: (error: Error | null, items: BundleInstance[]) => any): Promise<BundleInstance[]>;
    list(params?: any, callback?: any): Promise<BundleInstance[]>;
    /**
     * Retrieve a single page of BundleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: BundlePage) => any): Promise<BundlePage>;
    /**
     * Retrieve a single page of BundleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BundleListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: BundleListInstancePageOptions, callback?: (error: Error | null, items: BundlePage) => any): Promise<BundlePage>;
    page(params?: any, callback?: any): Promise<BundlePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BundleSolution {
}
export declare function BundleListInstance(version: V2): BundleListInstance;
export declare class BundlePage extends Page<V2, BundlePayload, BundleResource, BundleInstance> {
    /**
     * Initialize the BundlePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: BundleSolution);
    /**
     * Build an instance of BundleInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: BundleResource): BundleInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
