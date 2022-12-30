/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import Wireless from "../Wireless";
import { UsageListInstance } from "./sim/usage";
/**
 * Options to pass to update a SimInstance
 *
 * @property { string } [uniqueName]
 * @property { string } [callbackMethod]
 * @property { string } [callbackUrl]
 * @property { string } [friendlyName]
 * @property { string } [ratePlan]
 * @property { string } [status]
 * @property { string } [commandsCallbackMethod]
 * @property { string } [commandsCallbackUrl]
 * @property { string } [smsFallbackMethod]
 * @property { string } [smsFallbackUrl]
 * @property { string } [smsMethod]
 * @property { string } [smsUrl]
 * @property { string } [voiceFallbackMethod]
 * @property { string } [voiceFallbackUrl]
 * @property { string } [voiceMethod]
 * @property { string } [voiceUrl]
 */
export interface SimContextUpdateOptions {
    uniqueName?: string;
    callbackMethod?: string;
    callbackUrl?: string;
    friendlyName?: string;
    ratePlan?: string;
    status?: string;
    commandsCallbackMethod?: string;
    commandsCallbackUrl?: string;
    smsFallbackMethod?: string;
    smsFallbackUrl?: string;
    smsMethod?: string;
    smsUrl?: string;
    voiceFallbackMethod?: string;
    voiceFallbackUrl?: string;
    voiceMethod?: string;
    voiceUrl?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [status]
 * @property { string } [iccid]
 * @property { string } [ratePlan]
 * @property { string } [eId]
 * @property { string } [simRegistrationCode]
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
    status?: string;
    iccid?: string;
    ratePlan?: string;
    eId?: string;
    simRegistrationCode?: string;
    pageSize?: number;
    callback?: (item: SimInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [status]
 * @property { string } [iccid]
 * @property { string } [ratePlan]
 * @property { string } [eId]
 * @property { string } [simRegistrationCode]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SimListInstanceOptions {
    status?: string;
    iccid?: string;
    ratePlan?: string;
    eId?: string;
    simRegistrationCode?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [status]
 * @property { string } [iccid]
 * @property { string } [ratePlan]
 * @property { string } [eId]
 * @property { string } [simRegistrationCode]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SimListInstancePageOptions {
    status?: string;
    iccid?: string;
    ratePlan?: string;
    eId?: string;
    simRegistrationCode?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SimContext {
    usage: UsageListInstance;
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
    protected _version: Wireless;
    protected _solution: SimContextSolution;
    protected _uri: string;
    protected _usage?: UsageListInstance;
    constructor(_version: Wireless, sid: string);
    get usage(): UsageListInstance;
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
export declare type SimSmsFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type SimSmsMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type SimVoiceFallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export declare type SimVoiceMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface SimPayload extends TwilioResponsePayload {
    sims: SimResource[];
}
interface SimResource {
    sid?: string | null;
    unique_name?: string | null;
    account_sid?: string | null;
    rate_plan_sid?: string | null;
    friendly_name?: string | null;
    iccid?: string | null;
    e_id?: string | null;
    status?: string | null;
    commands_callback_url?: string | null;
    commands_callback_method?: string | null;
    sms_fallback_method?: SimSmsFallbackMethod;
    sms_fallback_url?: string | null;
    sms_method?: SimSmsMethod;
    sms_url?: string | null;
    voice_fallback_method?: SimVoiceFallbackMethod;
    voice_fallback_url?: string | null;
    voice_method?: SimVoiceMethod;
    voice_url?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class SimInstance {
    protected _version: Wireless;
    protected _solution: SimContextSolution;
    protected _context?: SimContext;
    constructor(_version: Wireless, payload: SimResource, sid?: string);
    sid?: string | null;
    uniqueName?: string | null;
    accountSid?: string | null;
    ratePlanSid?: string | null;
    friendlyName?: string | null;
    iccid?: string | null;
    eId?: string | null;
    status?: string | null;
    commandsCallbackUrl?: string | null;
    commandsCallbackMethod?: string | null;
    smsFallbackMethod?: SimSmsFallbackMethod;
    smsFallbackUrl?: string | null;
    smsMethod?: SimSmsMethod;
    smsUrl?: string | null;
    voiceFallbackMethod?: SimVoiceFallbackMethod;
    voiceFallbackUrl?: string | null;
    voiceMethod?: SimVoiceMethod;
    voiceUrl?: string | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
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
     * Access the usage.
     */
    usage(): UsageListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        uniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        ratePlanSid: string | null | undefined;
        friendlyName: string | null | undefined;
        iccid: string | null | undefined;
        eId: string | null | undefined;
        status: string | null | undefined;
        commandsCallbackUrl: string | null | undefined;
        commandsCallbackMethod: string | null | undefined;
        smsFallbackMethod: SimSmsFallbackMethod | undefined;
        smsFallbackUrl: string | null | undefined;
        smsMethod: SimSmsMethod | undefined;
        smsUrl: string | null | undefined;
        voiceFallbackMethod: SimVoiceFallbackMethod | undefined;
        voiceFallbackUrl: string | null | undefined;
        voiceMethod: SimVoiceMethod | undefined;
        voiceUrl: string | null | undefined;
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
export declare function SimListInstance(version: Wireless): SimListInstance;
export declare class SimPage extends Page<Wireless, SimPayload, SimResource, SimInstance> {
    /**
     * Initialize the SimPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Wireless, response: Response<string>, solution: SimSolution);
    /**
     * Build an instance of SimInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SimResource): SimInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
