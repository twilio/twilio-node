/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type CommandCommandMode = "text" | "binary";
declare type CommandDirection = "from_sim" | "to_sim";
declare type CommandStatus = "queued" | "sent" | "delivered" | "received" | "failed";
declare type CommandTransport = "sms" | "ip";
/**
 * Options to pass to create a CommandInstance
 *
 * @property { string } command The message body of the Command. Can be plain text in text mode or a Base64 encoded byte string in binary mode.
 * @property { string } [sim] The `sid` or `unique_name` of the [SIM](https://www.twilio.com/docs/wireless/api/sim-resource) to send the Command to.
 * @property { string } [callbackMethod] The HTTP method we use to call `callback_url`. Can be: `POST` or `GET`, and the default is `POST`.
 * @property { string } [callbackUrl] The URL we call using the `callback_url` when the Command has finished sending, whether the command was delivered or it failed.
 * @property { CommandCommandMode } [commandMode]
 * @property { string } [includeSid] Whether to include the SID of the command in the message body. Can be: `none`, `start`, or `end`, and the default behavior is `none`. When sending a Command to a SIM in text mode, we can automatically include the SID of the Command in the message body, which could be used to ensure that the device does not process the same Command more than once.  A value of `start` will prepend the message with the Command SID, and `end` will append it to the end, separating the Command SID from the message body with a space. The length of the Command SID is included in the 160 character limit so the SMS body must be 128 characters or less before the Command SID is included.
 * @property { boolean } [deliveryReceiptRequested] Whether to request delivery receipt from the recipient. For Commands that request delivery receipt, the Command state transitions to \\\'delivered\\\' once the server has received a delivery receipt from the device. The default value is `true`.
 */
export interface CommandListInstanceCreateOptions {
    command: string;
    sim?: string;
    callbackMethod?: string;
    callbackUrl?: string;
    commandMode?: CommandCommandMode;
    includeSid?: string;
    deliveryReceiptRequested?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { string } [sim] The `sid` or `unique_name` of the [Sim resources](https://www.twilio.com/docs/wireless/api/sim-resource) to read.
 * @property { CommandStatus } [status] The status of the resources to read. Can be: `queued`, `sent`, `delivered`, `received`, or `failed`.
 * @property { CommandDirection } [direction] Only return Commands with this direction value.
 * @property { CommandTransport } [transport] Only return Commands with this transport value. Can be: `sms` or `ip`.
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
export interface CommandListInstanceEachOptions {
    sim?: string;
    status?: CommandStatus;
    direction?: CommandDirection;
    transport?: CommandTransport;
    pageSize?: number;
    callback?: (item: CommandInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [sim] The `sid` or `unique_name` of the [Sim resources](https://www.twilio.com/docs/wireless/api/sim-resource) to read.
 * @property { CommandStatus } [status] The status of the resources to read. Can be: `queued`, `sent`, `delivered`, `received`, or `failed`.
 * @property { CommandDirection } [direction] Only return Commands with this direction value.
 * @property { CommandTransport } [transport] Only return Commands with this transport value. Can be: `sms` or `ip`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CommandListInstanceOptions {
    sim?: string;
    status?: CommandStatus;
    direction?: CommandDirection;
    transport?: CommandTransport;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [sim] The `sid` or `unique_name` of the [Sim resources](https://www.twilio.com/docs/wireless/api/sim-resource) to read.
 * @property { CommandStatus } [status] The status of the resources to read. Can be: `queued`, `sent`, `delivered`, `received`, or `failed`.
 * @property { CommandDirection } [direction] Only return Commands with this direction value.
 * @property { CommandTransport } [transport] Only return Commands with this transport value. Can be: `sms` or `ip`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CommandListInstancePageOptions {
    sim?: string;
    status?: CommandStatus;
    direction?: CommandDirection;
    transport?: CommandTransport;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CommandContext {
    /**
     * Remove a CommandInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CommandInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CommandInstance
     */
    fetch(callback?: (error: Error | null, item?: CommandInstance) => any): Promise<CommandInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CommandContextSolution {
    sid?: string;
}
export declare class CommandContextImpl implements CommandContext {
    protected _version: V1;
    protected _solution: CommandContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<CommandInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CommandContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CommandPayload extends TwilioResponsePayload {
    commands: CommandResource[];
}
interface CommandResource {
    sid?: string | null;
    account_sid?: string | null;
    sim_sid?: string | null;
    command?: string | null;
    command_mode?: CommandCommandMode;
    transport?: CommandTransport;
    delivery_receipt_requested?: boolean | null;
    status?: CommandStatus;
    direction?: CommandDirection;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class CommandInstance {
    protected _version: V1;
    protected _solution: CommandContextSolution;
    protected _context?: CommandContext;
    constructor(_version: V1, payload: CommandResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Sim resource that the Command was sent to or from
     */
    simSid?: string | null;
    /**
     * The message being sent to or from the SIM
     */
    command?: string | null;
    commandMode?: CommandCommandMode;
    transport?: CommandTransport;
    /**
     * Whether to request a delivery receipt
     */
    deliveryReceiptRequested?: boolean | null;
    status?: CommandStatus;
    direction?: CommandDirection;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated format
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a CommandInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CommandInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CommandInstance
     */
    fetch(callback?: (error: Error | null, item?: CommandInstance) => any): Promise<CommandInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        simSid: string | null | undefined;
        command: string | null | undefined;
        commandMode: CommandCommandMode | undefined;
        transport: CommandTransport | undefined;
        deliveryReceiptRequested: boolean | null | undefined;
        status: CommandStatus | undefined;
        direction: CommandDirection | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CommandListInstance {
    (sid: string): CommandContext;
    get(sid: string): CommandContext;
    /**
     * Create a CommandInstance
     *
     * @param { CommandListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CommandInstance
     */
    create(params: CommandListInstanceCreateOptions, callback?: (error: Error | null, item?: CommandInstance) => any): Promise<CommandInstance>;
    create(params: any, callback?: any): Promise<CommandInstance>;
    /**
     * Streams CommandInstance records from the API.
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
    each(callback?: (item: CommandInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams CommandInstance records from the API.
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
     * @param { CommandListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: CommandListInstanceEachOptions, callback?: (item: CommandInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of CommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
    /**
     * Retrieve a single target page of CommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
    getPage(params?: any, callback?: any): Promise<CommandPage>;
    /**
     * Lists CommandInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CommandInstance[]) => any): Promise<CommandInstance[]>;
    /**
     * Lists CommandInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CommandListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: CommandListInstanceOptions, callback?: (error: Error | null, items: CommandInstance[]) => any): Promise<CommandInstance[]>;
    list(params?: any, callback?: any): Promise<CommandInstance[]>;
    /**
     * Retrieve a single page of CommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
    /**
     * Retrieve a single page of CommandInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CommandListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: CommandListInstancePageOptions, callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
    page(params?: any, callback?: any): Promise<CommandPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CommandSolution {
}
export declare function CommandListInstance(version: V1): CommandListInstance;
export declare class CommandPage extends Page<V1, CommandPayload, CommandResource, CommandInstance> {
    /**
     * Initialize the CommandPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CommandSolution);
    /**
     * Build an instance of CommandInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CommandResource): CommandInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
