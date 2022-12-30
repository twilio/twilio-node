/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type IpCommandDirection = "to_sim" | "from_sim";
declare type IpCommandPayloadType = "text" | "binary";
declare type IpCommandStatus = "queued" | "sent" | "received" | "failed";
/**
 * Options to pass to create a IpCommandInstance
 *
 * @property { string } sim The `sid` or `unique_name` of the [Super SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource) to send the IP Command to.
 * @property { string } payload The payload to be delivered to the device.
 * @property { number } devicePort The device port to which the IP Command will be sent.
 * @property { IpCommandPayloadType } [payloadType]
 * @property { string } [callbackUrl] The URL we should call using the `callback_method` after we have sent the IP Command.
 * @property { string } [callbackMethod] The HTTP method we should use to call `callback_url`. Can be `GET` or `POST`, and the default is `POST`.
 */
export interface IpCommandListInstanceCreateOptions {
    sim: string;
    payload: string;
    devicePort: number;
    payloadType?: IpCommandPayloadType;
    callbackUrl?: string;
    callbackMethod?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [sim] The SID or unique name of the Sim resource that IP Command was sent to or from.
 * @property { string } [simIccid] The ICCID of the Sim resource that IP Command was sent to or from.
 * @property { IpCommandStatus } [status] The status of the IP Command. Can be: `queued`, `sent`, `received` or `failed`. See the [IP Command Status Values](https://www.twilio.com/docs/wireless/api/ipcommand-resource#status-values) for a description of each.
 * @property { IpCommandDirection } [direction] The direction of the IP Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`.
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
export interface IpCommandListInstanceEachOptions {
    sim?: string;
    simIccid?: string;
    status?: IpCommandStatus;
    direction?: IpCommandDirection;
    pageSize?: number;
    callback?: (item: IpCommandInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [sim] The SID or unique name of the Sim resource that IP Command was sent to or from.
 * @property { string } [simIccid] The ICCID of the Sim resource that IP Command was sent to or from.
 * @property { IpCommandStatus } [status] The status of the IP Command. Can be: `queued`, `sent`, `received` or `failed`. See the [IP Command Status Values](https://www.twilio.com/docs/wireless/api/ipcommand-resource#status-values) for a description of each.
 * @property { IpCommandDirection } [direction] The direction of the IP Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface IpCommandListInstanceOptions {
    sim?: string;
    simIccid?: string;
    status?: IpCommandStatus;
    direction?: IpCommandDirection;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [sim] The SID or unique name of the Sim resource that IP Command was sent to or from.
 * @property { string } [simIccid] The ICCID of the Sim resource that IP Command was sent to or from.
 * @property { IpCommandStatus } [status] The status of the IP Command. Can be: `queued`, `sent`, `received` or `failed`. See the [IP Command Status Values](https://www.twilio.com/docs/wireless/api/ipcommand-resource#status-values) for a description of each.
 * @property { IpCommandDirection } [direction] The direction of the IP Command. Can be `to_sim` or `from_sim`. The value of `to_sim` is synonymous with the term `mobile terminated`, and `from_sim` is synonymous with the term `mobile originated`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface IpCommandListInstancePageOptions {
    sim?: string;
    simIccid?: string;
    status?: IpCommandStatus;
    direction?: IpCommandDirection;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface IpCommandContext {
    /**
     * Fetch a IpCommandInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpCommandInstance
     */
    fetch(callback?: (error: Error | null, item?: IpCommandInstance) => any): Promise<IpCommandInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IpCommandContextSolution {
    sid?: string;
}
export declare class IpCommandContextImpl implements IpCommandContext {
    protected _version: V1;
    protected _solution: IpCommandContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<IpCommandInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): IpCommandContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface IpCommandPayload extends TwilioResponsePayload {
    ip_commands: IpCommandResource[];
}
interface IpCommandResource {
    sid?: string | null;
    account_sid?: string | null;
    sim_sid?: string | null;
    sim_iccid?: string | null;
    status?: IpCommandStatus;
    direction?: IpCommandDirection;
    device_ip?: string | null;
    device_port?: number | null;
    payload_type?: IpCommandPayloadType;
    payload?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class IpCommandInstance {
    protected _version: V1;
    protected _solution: IpCommandContextSolution;
    protected _context?: IpCommandContext;
    constructor(_version: V1, payload: IpCommandResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Super SIM that this IP Command was sent to or from
     */
    simSid?: string | null;
    /**
     * The ICCID of the Super SIM that this IP Command was sent to or from
     */
    simIccid?: string | null;
    status?: IpCommandStatus;
    direction?: IpCommandDirection;
    /**
     * The IP address of the device that the IP Command was sent to or received from
     */
    deviceIp?: string | null;
    /**
     * The port that the IP Command either originated from or was sent to
     */
    devicePort?: number | null;
    payloadType?: IpCommandPayloadType;
    /**
     * The payload of the IP Command sent to or from the Super SIM
     */
    payload?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the IP Command resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a IpCommandInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpCommandInstance
     */
    fetch(callback?: (error: Error | null, item?: IpCommandInstance) => any): Promise<IpCommandInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        simSid: string | null | undefined;
        simIccid: string | null | undefined;
        status: IpCommandStatus | undefined;
        direction: IpCommandDirection | undefined;
        deviceIp: string | null | undefined;
        devicePort: number | null | undefined;
        payloadType: IpCommandPayloadType | undefined;
        payload: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface IpCommandListInstance {
    (sid: string): IpCommandContext;
    get(sid: string): IpCommandContext;
    /**
     * Create a IpCommandInstance
     *
     * @param { IpCommandListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpCommandInstance
     */
    create(params: IpCommandListInstanceCreateOptions, callback?: (error: Error | null, item?: IpCommandInstance) => any): Promise<IpCommandInstance>;
    create(params: any, callback?: any): Promise<IpCommandInstance>;
    /**
     * Streams IpCommandInstance records from the API.
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
    each(callback?: (item: IpCommandInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams IpCommandInstance records from the API.
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
     * @param { IpCommandListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: IpCommandListInstanceEachOptions, callback?: (item: IpCommandInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of IpCommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: IpCommandPage) => any): Promise<IpCommandPage>;
    /**
     * Retrieve a single target page of IpCommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: IpCommandPage) => any): Promise<IpCommandPage>;
    getPage(params?: any, callback?: any): Promise<IpCommandPage>;
    /**
     * Lists IpCommandInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: IpCommandInstance[]) => any): Promise<IpCommandInstance[]>;
    /**
     * Lists IpCommandInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IpCommandListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: IpCommandListInstanceOptions, callback?: (error: Error | null, items: IpCommandInstance[]) => any): Promise<IpCommandInstance[]>;
    list(params?: any, callback?: any): Promise<IpCommandInstance[]>;
    /**
     * Retrieve a single page of IpCommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: IpCommandPage) => any): Promise<IpCommandPage>;
    /**
     * Retrieve a single page of IpCommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { IpCommandListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: IpCommandListInstancePageOptions, callback?: (error: Error | null, items: IpCommandPage) => any): Promise<IpCommandPage>;
    page(params?: any, callback?: any): Promise<IpCommandPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface IpCommandSolution {
}
export declare function IpCommandListInstance(version: V1): IpCommandListInstance;
export declare class IpCommandPage extends Page<V1, IpCommandPayload, IpCommandResource, IpCommandInstance> {
    /**
     * Initialize the IpCommandPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: IpCommandSolution);
    /**
     * Build an instance of IpCommandInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: IpCommandResource): IpCommandInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
