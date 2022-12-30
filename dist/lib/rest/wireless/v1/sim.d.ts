/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { DataSessionListInstance } from "./sim/dataSession";
import { UsageRecordListInstance } from "./sim/usageRecord";
declare type SimResetStatus = "resetting";
declare type SimStatus = "new" | "ready" | "active" | "suspended" | "deactivated" | "canceled" | "scheduled" | "updating";
/**
 * Options to pass to update a SimInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used in place of the `sid` in the URL path to address the resource.
 * @property { string } [callbackMethod] The HTTP method we should use to call `callback_url`. Can be: `POST` or `GET`. The default is `POST`.
 * @property { string } [callbackUrl] The URL we should call using the `callback_url` when the SIM has finished updating. When the SIM transitions from `new` to `ready` or from any status to `deactivated`, we call this URL when the status changes to an intermediate status (`ready` or `deactivated`) and again when the status changes to its final status (`active` or `canceled`).
 * @property { string } [friendlyName] A descriptive string that you create to describe the Sim resource. It does not need to be unique.
 * @property { string } [ratePlan] The SID or unique name of the [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource) to which the Sim resource should be assigned.
 * @property { SimStatus } [status]
 * @property { string } [commandsCallbackMethod] The HTTP method we should use to call `commands_callback_url`. Can be: `POST` or `GET`. The default is `POST`.
 * @property { string } [commandsCallbackUrl] The URL we should call using the `commands_callback_method` when the SIM sends a [Command](https://www.twilio.com/docs/wireless/api/command-resource). Your server should respond with an HTTP status code in the 200 range; any response body is ignored.
 * @property { string } [smsFallbackMethod] The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. Default is `POST`.
 * @property { string } [smsFallbackUrl] The URL we should call using the `sms_fallback_method` when an error occurs while retrieving or executing the TwiML requested from `sms_url`.
 * @property { string } [smsMethod] The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. Default is `POST`.
 * @property { string } [smsUrl] The URL we should call using the `sms_method` when the SIM-connected device sends an SMS message that is not a [Command](https://www.twilio.com/docs/wireless/api/command-resource).
 * @property { string } [voiceFallbackMethod] Deprecated.
 * @property { string } [voiceFallbackUrl] Deprecated.
 * @property { string } [voiceMethod] Deprecated.
 * @property { string } [voiceUrl] Deprecated.
 * @property { SimResetStatus } [resetStatus]
 * @property { string } [accountSid] The SID of the [Account](https://www.twilio.com/docs/iam/api/account) to which the Sim resource should belong. The Account SID can only be that of the requesting Account or that of a [Subaccount](https://www.twilio.com/docs/iam/api/subaccounts) of the requesting Account. Only valid when the Sim resource\\\'s status is `new`. For more information, see the [Move SIMs between Subaccounts documentation](https://www.twilio.com/docs/wireless/api/sim-resource#move-sims-between-subaccounts).
 */
export interface SimContextUpdateOptions {
    uniqueName?: string;
    callbackMethod?: string;
    callbackUrl?: string;
    friendlyName?: string;
    ratePlan?: string;
    status?: SimStatus;
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
    resetStatus?: SimResetStatus;
    accountSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { SimStatus } [status] Only return Sim resources with this status.
 * @property { string } [iccid] Only return Sim resources with this ICCID. This will return a list with a maximum size of 1.
 * @property { string } [ratePlan] The SID or unique name of a [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource). Only return Sim resources assigned to this RatePlan resource.
 * @property { string } [eId] Deprecated.
 * @property { string } [simRegistrationCode] Only return Sim resources with this registration code. This will return a list with a maximum size of 1.
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
 * @property { SimStatus } [status] Only return Sim resources with this status.
 * @property { string } [iccid] Only return Sim resources with this ICCID. This will return a list with a maximum size of 1.
 * @property { string } [ratePlan] The SID or unique name of a [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource). Only return Sim resources assigned to this RatePlan resource.
 * @property { string } [eId] Deprecated.
 * @property { string } [simRegistrationCode] Only return Sim resources with this registration code. This will return a list with a maximum size of 1.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SimListInstanceOptions {
    status?: SimStatus;
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
 * @property { SimStatus } [status] Only return Sim resources with this status.
 * @property { string } [iccid] Only return Sim resources with this ICCID. This will return a list with a maximum size of 1.
 * @property { string } [ratePlan] The SID or unique name of a [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource). Only return Sim resources assigned to this RatePlan resource.
 * @property { string } [eId] Deprecated.
 * @property { string } [simRegistrationCode] Only return Sim resources with this registration code. This will return a list with a maximum size of 1.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SimListInstancePageOptions {
    status?: SimStatus;
    iccid?: string;
    ratePlan?: string;
    eId?: string;
    simRegistrationCode?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SimContext {
    dataSessions: DataSessionListInstance;
    usageRecords: UsageRecordListInstance;
    /**
     * Remove a SimInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
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
    protected _dataSessions?: DataSessionListInstance;
    protected _usageRecords?: UsageRecordListInstance;
    constructor(_version: V1, sid: string);
    get dataSessions(): DataSessionListInstance;
    get usageRecords(): UsageRecordListInstance;
    remove(callback?: any): Promise<boolean>;
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
export declare type SimCommandsCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
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
    status?: SimStatus;
    reset_status?: SimResetStatus;
    commands_callback_url?: string | null;
    commands_callback_method?: SimCommandsCallbackMethod;
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
    ip_address?: string | null;
}
export declare class SimInstance {
    protected _version: V1;
    protected _solution: SimContextSolution;
    protected _context?: SimContext;
    constructor(_version: V1, payload: SimResource, sid?: string);
    /**
     * The unique string that identifies the Sim resource
     */
    sid?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The SID of the Account to which the Sim resource belongs
     */
    accountSid?: string | null;
    /**
     * The SID of the RatePlan resource to which the Sim resource is assigned.
     */
    ratePlanSid?: string | null;
    /**
     * The string that you assigned to describe the Sim resource
     */
    friendlyName?: string | null;
    /**
     * The ICCID associated with the SIM
     */
    iccid?: string | null;
    /**
     * Deprecated
     */
    eId?: string | null;
    status?: SimStatus;
    resetStatus?: SimResetStatus;
    /**
     * The URL we call when the SIM originates a machine-to-machine Command
     */
    commandsCallbackUrl?: string | null;
    /**
     * The HTTP method we use to call commands_callback_url
     */
    commandsCallbackMethod?: SimCommandsCallbackMethod;
    /**
     * Deprecated
     */
    smsFallbackMethod?: SimSmsFallbackMethod;
    /**
     * Deprecated
     */
    smsFallbackUrl?: string | null;
    /**
     * Deprecated
     */
    smsMethod?: SimSmsMethod;
    /**
     * Deprecated
     */
    smsUrl?: string | null;
    /**
     * Deprecated. The HTTP method we use to call voice_fallback_url
     */
    voiceFallbackMethod?: SimVoiceFallbackMethod;
    /**
     * Deprecated. The URL we call when an error occurs while retrieving or executing the TwiML requested from voice_url
     */
    voiceFallbackUrl?: string | null;
    /**
     * Deprecated. The HTTP method we use to call voice_url
     */
    voiceMethod?: SimVoiceMethod;
    /**
     * Deprecated. The URL we call when the SIM-connected device makes a voice call
     */
    voiceUrl?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Sim resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The URLs of related subresources
     */
    links?: object | null;
    /**
     * Deprecated
     */
    ipAddress?: string | null;
    private get _proxy();
    /**
     * Remove a SimInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
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
     * Access the dataSessions.
     */
    dataSessions(): DataSessionListInstance;
    /**
     * Access the usageRecords.
     */
    usageRecords(): UsageRecordListInstance;
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
        status: SimStatus | undefined;
        resetStatus: "resetting" | undefined;
        commandsCallbackUrl: string | null | undefined;
        commandsCallbackMethod: SimCommandsCallbackMethod | undefined;
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
        ipAddress: string | null | undefined;
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
