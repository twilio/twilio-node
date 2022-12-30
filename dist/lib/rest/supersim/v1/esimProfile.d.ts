/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type EsimProfileStatus = "new" | "reserving" | "available" | "downloaded" | "installed" | "failed";
/**
 * Options to pass to create a EsimProfileInstance
 *
 * @property { string } [callbackUrl] The URL we should call using the `callback_method` when the status of the eSIM Profile changes. At this stage of the eSIM Profile pilot, the a request to the URL will only be called when the ESimProfile resource changes from `reserving` to `available`.
 * @property { string } [callbackMethod] The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is POST.
 * @property { string } [eid] Identifier of the eUICC that will claim the eSIM Profile.
 */
export interface EsimProfileListInstanceCreateOptions {
    callbackUrl?: string;
    callbackMethod?: string;
    eid?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [eid] List the eSIM Profiles that have been associated with an EId.
 * @property { string } [simSid] Find the eSIM Profile resource related to a [Sim](https://www.twilio.com/docs/wireless/api/sim-resource) resource by providing the SIM SID. Will always return an array with either 1 or 0 records.
 * @property { EsimProfileStatus } [status] List the eSIM Profiles that are in a given status.
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
export interface EsimProfileListInstanceEachOptions {
    eid?: string;
    simSid?: string;
    status?: EsimProfileStatus;
    pageSize?: number;
    callback?: (item: EsimProfileInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [eid] List the eSIM Profiles that have been associated with an EId.
 * @property { string } [simSid] Find the eSIM Profile resource related to a [Sim](https://www.twilio.com/docs/wireless/api/sim-resource) resource by providing the SIM SID. Will always return an array with either 1 or 0 records.
 * @property { EsimProfileStatus } [status] List the eSIM Profiles that are in a given status.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface EsimProfileListInstanceOptions {
    eid?: string;
    simSid?: string;
    status?: EsimProfileStatus;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [eid] List the eSIM Profiles that have been associated with an EId.
 * @property { string } [simSid] Find the eSIM Profile resource related to a [Sim](https://www.twilio.com/docs/wireless/api/sim-resource) resource by providing the SIM SID. Will always return an array with either 1 or 0 records.
 * @property { EsimProfileStatus } [status] List the eSIM Profiles that are in a given status.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface EsimProfileListInstancePageOptions {
    eid?: string;
    simSid?: string;
    status?: EsimProfileStatus;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface EsimProfileContext {
    /**
     * Fetch a EsimProfileInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EsimProfileInstance
     */
    fetch(callback?: (error: Error | null, item?: EsimProfileInstance) => any): Promise<EsimProfileInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EsimProfileContextSolution {
    sid?: string;
}
export declare class EsimProfileContextImpl implements EsimProfileContext {
    protected _version: V1;
    protected _solution: EsimProfileContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<EsimProfileInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): EsimProfileContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface EsimProfilePayload extends TwilioResponsePayload {
    esim_profiles: EsimProfileResource[];
}
interface EsimProfileResource {
    sid?: string | null;
    account_sid?: string | null;
    iccid?: string | null;
    sim_sid?: string | null;
    status?: EsimProfileStatus;
    eid?: string | null;
    smdp_plus_address?: string | null;
    error_code?: string | null;
    error_message?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class EsimProfileInstance {
    protected _version: V1;
    protected _solution: EsimProfileContextSolution;
    protected _context?: EsimProfileContext;
    constructor(_version: V1, payload: EsimProfileResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account to which the eSIM Profile resource belongs
     */
    accountSid?: string | null;
    /**
     * The ICCID associated with the Sim resource
     */
    iccid?: string | null;
    /**
     * The SID of the Sim resource that this eSIM Profile controls
     */
    simSid?: string | null;
    status?: EsimProfileStatus;
    /**
     * Identifier of the eUICC that can claim the eSIM Profile
     */
    eid?: string | null;
    /**
     * Address of the SM-DP+ server from which the Profile will be downloaded
     */
    smdpPlusAddress?: string | null;
    /**
     * Code indicating the failure if the download of the SIM Profile failed and the eSIM Profile is in `failed` state
     */
    errorCode?: string | null;
    /**
     * Error message describing the failure if the download of the SIM Profile failed and the eSIM Profile is in `failed` state
     */
    errorMessage?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the eSIM Profile resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a EsimProfileInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EsimProfileInstance
     */
    fetch(callback?: (error: Error | null, item?: EsimProfileInstance) => any): Promise<EsimProfileInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        iccid: string | null | undefined;
        simSid: string | null | undefined;
        status: EsimProfileStatus | undefined;
        eid: string | null | undefined;
        smdpPlusAddress: string | null | undefined;
        errorCode: string | null | undefined;
        errorMessage: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface EsimProfileListInstance {
    (sid: string): EsimProfileContext;
    get(sid: string): EsimProfileContext;
    /**
     * Create a EsimProfileInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EsimProfileInstance
     */
    create(callback?: (error: Error | null, item?: EsimProfileInstance) => any): Promise<EsimProfileInstance>;
    /**
     * Create a EsimProfileInstance
     *
     * @param { EsimProfileListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EsimProfileInstance
     */
    create(params: EsimProfileListInstanceCreateOptions, callback?: (error: Error | null, item?: EsimProfileInstance) => any): Promise<EsimProfileInstance>;
    create(params?: any, callback?: any): Promise<EsimProfileInstance>;
    /**
     * Streams EsimProfileInstance records from the API.
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
    each(callback?: (item: EsimProfileInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams EsimProfileInstance records from the API.
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
     * @param { EsimProfileListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: EsimProfileListInstanceEachOptions, callback?: (item: EsimProfileInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of EsimProfileInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: EsimProfilePage) => any): Promise<EsimProfilePage>;
    /**
     * Retrieve a single target page of EsimProfileInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: EsimProfilePage) => any): Promise<EsimProfilePage>;
    getPage(params?: any, callback?: any): Promise<EsimProfilePage>;
    /**
     * Lists EsimProfileInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: EsimProfileInstance[]) => any): Promise<EsimProfileInstance[]>;
    /**
     * Lists EsimProfileInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EsimProfileListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: EsimProfileListInstanceOptions, callback?: (error: Error | null, items: EsimProfileInstance[]) => any): Promise<EsimProfileInstance[]>;
    list(params?: any, callback?: any): Promise<EsimProfileInstance[]>;
    /**
     * Retrieve a single page of EsimProfileInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: EsimProfilePage) => any): Promise<EsimProfilePage>;
    /**
     * Retrieve a single page of EsimProfileInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { EsimProfileListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: EsimProfileListInstancePageOptions, callback?: (error: Error | null, items: EsimProfilePage) => any): Promise<EsimProfilePage>;
    page(params?: any, callback?: any): Promise<EsimProfilePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EsimProfileSolution {
}
export declare function EsimProfileListInstance(version: V1): EsimProfileListInstance;
export declare class EsimProfilePage extends Page<V1, EsimProfilePayload, EsimProfileResource, EsimProfileInstance> {
    /**
     * Initialize the EsimProfilePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: EsimProfileSolution);
    /**
     * Build an instance of EsimProfileInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: EsimProfileResource): EsimProfileInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
