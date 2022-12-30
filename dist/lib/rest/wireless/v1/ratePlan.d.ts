/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to update a RatePlanInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It does not have to be unique.
 */
export interface RatePlanContextUpdateOptions {
    uniqueName?: string;
    friendlyName?: string;
}
/**
 * Options to pass to create a RatePlanInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\'s `sid` in the URL to address the resource.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It does not have to be unique.
 * @property { boolean } [dataEnabled] Whether SIMs can use GPRS/3G/4G/LTE data connectivity.
 * @property { number } [dataLimit] The total data usage (download and upload combined) in Megabytes that the Network allows during one month on the home network (T-Mobile USA). The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB and the default value is `1000`.
 * @property { string } [dataMetering] The model used to meter data usage. Can be: `payg` and `quota-1`, `quota-10`, and `quota-50`. Learn more about the available [data metering models](https://www.twilio.com/docs/wireless/api/rateplan-resource#payg-vs-quota-data-plans).
 * @property { boolean } [messagingEnabled] Whether SIMs can make, send, and receive SMS using [Commands](https://www.twilio.com/docs/wireless/api/command-resource).
 * @property { boolean } [voiceEnabled] Deprecated.
 * @property { boolean } [nationalRoamingEnabled] Whether SIMs can roam on networks other than the home network (T-Mobile USA) in the United States. See [national roaming](https://www.twilio.com/docs/wireless/api/rateplan-resource#national-roaming).
 * @property { Array<string> } [internationalRoaming] The list of services that SIMs capable of using GPRS/3G/4G/LTE data connectivity can use outside of the United States. Can contain: `data` and `messaging`.
 * @property { number } [nationalRoamingDataLimit] The total data usage (download and upload combined) in Megabytes that the Network allows during one month on non-home networks in the United States. The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB. See [national roaming](https://www.twilio.com/docs/wireless/api/rateplan-resource#national-roaming) for more info.
 * @property { number } [internationalRoamingDataLimit] The total data usage (download and upload combined) in Megabytes that the Network allows during one month when roaming outside the United States. Can be up to 2TB.
 */
export interface RatePlanListInstanceCreateOptions {
    uniqueName?: string;
    friendlyName?: string;
    dataEnabled?: boolean;
    dataLimit?: number;
    dataMetering?: string;
    messagingEnabled?: boolean;
    voiceEnabled?: boolean;
    nationalRoamingEnabled?: boolean;
    internationalRoaming?: Array<string>;
    nationalRoamingDataLimit?: number;
    internationalRoamingDataLimit?: number;
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
export interface RatePlanListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void;
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
export interface RatePlanListInstanceOptions {
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
export interface RatePlanListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface RatePlanContext {
    /**
     * Remove a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    fetch(callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Update a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    update(callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Update a RatePlanInstance
     *
     * @param { RatePlanContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    update(params: RatePlanContextUpdateOptions, callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    update(params?: any, callback?: any): Promise<RatePlanInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RatePlanContextSolution {
    sid?: string;
}
export declare class RatePlanContextImpl implements RatePlanContext {
    protected _version: V1;
    protected _solution: RatePlanContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<RatePlanInstance>;
    update(params?: any, callback?: any): Promise<RatePlanInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RatePlanContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface RatePlanPayload extends TwilioResponsePayload {
    rate_plans: RatePlanResource[];
}
interface RatePlanResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    data_enabled?: boolean | null;
    data_metering?: string | null;
    data_limit?: number | null;
    messaging_enabled?: boolean | null;
    voice_enabled?: boolean | null;
    national_roaming_enabled?: boolean | null;
    national_roaming_data_limit?: number | null;
    international_roaming?: Array<string> | null;
    international_roaming_data_limit?: number | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class RatePlanInstance {
    protected _version: V1;
    protected _solution: RatePlanContextSolution;
    protected _context?: RatePlanContext;
    constructor(_version: V1, payload: RatePlanResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * Whether SIMs can use GPRS/3G/4G/LTE data connectivity
     */
    dataEnabled?: boolean | null;
    /**
     * The model used to meter data usage
     */
    dataMetering?: string | null;
    /**
     * The total data usage in Megabytes that the Network allows during one month on the home network
     */
    dataLimit?: number | null;
    /**
     * Whether SIMs can make, send, and receive SMS using Commands
     */
    messagingEnabled?: boolean | null;
    /**
     * Deprecated. Whether SIMs can make and receive voice calls
     */
    voiceEnabled?: boolean | null;
    /**
     * Whether SIMs can roam on networks other than the home network in the United States
     */
    nationalRoamingEnabled?: boolean | null;
    /**
     * The total data usage in Megabytes that the Network allows during one month on non-home networks in the United States
     */
    nationalRoamingDataLimit?: number | null;
    /**
     * The services that SIMs capable of using GPRS/3G/4G/LTE data connectivity can use outside of the United States
     */
    internationalRoaming?: Array<string> | null;
    /**
     * The total data usage (download and upload combined) in Megabytes that the Network allows during one month when roaming outside the United States
     */
    internationalRoamingDataLimit?: number | null;
    /**
     * The date when the resource was created, given as GMT in ISO 8601 format
     */
    dateCreated?: Date | null;
    /**
     * The date when the resource was last updated, given as GMT in ISO 8601 format
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    fetch(callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Update a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    update(callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Update a RatePlanInstance
     *
     * @param { RatePlanContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    update(params: RatePlanContextUpdateOptions, callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        dataEnabled: boolean | null | undefined;
        dataMetering: string | null | undefined;
        dataLimit: number | null | undefined;
        messagingEnabled: boolean | null | undefined;
        voiceEnabled: boolean | null | undefined;
        nationalRoamingEnabled: boolean | null | undefined;
        nationalRoamingDataLimit: number | null | undefined;
        internationalRoaming: string[] | null | undefined;
        internationalRoamingDataLimit: number | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RatePlanListInstance {
    (sid: string): RatePlanContext;
    get(sid: string): RatePlanContext;
    /**
     * Create a RatePlanInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    create(callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    /**
     * Create a RatePlanInstance
     *
     * @param { RatePlanListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RatePlanInstance
     */
    create(params: RatePlanListInstanceCreateOptions, callback?: (error: Error | null, item?: RatePlanInstance) => any): Promise<RatePlanInstance>;
    create(params?: any, callback?: any): Promise<RatePlanInstance>;
    /**
     * Streams RatePlanInstance records from the API.
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
    each(callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams RatePlanInstance records from the API.
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
     * @param { RatePlanListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: RatePlanListInstanceEachOptions, callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of RatePlanInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
    /**
     * Retrieve a single target page of RatePlanInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
    getPage(params?: any, callback?: any): Promise<RatePlanPage>;
    /**
     * Lists RatePlanInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: RatePlanInstance[]) => any): Promise<RatePlanInstance[]>;
    /**
     * Lists RatePlanInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RatePlanListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: RatePlanListInstanceOptions, callback?: (error: Error | null, items: RatePlanInstance[]) => any): Promise<RatePlanInstance[]>;
    list(params?: any, callback?: any): Promise<RatePlanInstance[]>;
    /**
     * Retrieve a single page of RatePlanInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
    /**
     * Retrieve a single page of RatePlanInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RatePlanListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: RatePlanListInstancePageOptions, callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
    page(params?: any, callback?: any): Promise<RatePlanPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RatePlanSolution {
}
export declare function RatePlanListInstance(version: V1): RatePlanListInstance;
export declare class RatePlanPage extends Page<V1, RatePlanPayload, RatePlanResource, RatePlanInstance> {
    /**
     * Initialize the RatePlanPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: RatePlanSolution);
    /**
     * Build an instance of RatePlanInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: RatePlanResource): RatePlanInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
