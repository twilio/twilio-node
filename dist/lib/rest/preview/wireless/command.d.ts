/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import Wireless from "../Wireless";
/**
 * Options to pass to create a CommandInstance
 *
 * @property { string } command
 * @property { string } [device]
 * @property { string } [sim]
 * @property { string } [callbackMethod]
 * @property { string } [callbackUrl]
 * @property { string } [commandMode]
 * @property { string } [includeSid]
 */
export interface CommandListInstanceCreateOptions {
    command: string;
    device?: string;
    sim?: string;
    callbackMethod?: string;
    callbackUrl?: string;
    commandMode?: string;
    includeSid?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [device]
 * @property { string } [sim]
 * @property { string } [status]
 * @property { string } [direction]
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
    device?: string;
    sim?: string;
    status?: string;
    direction?: string;
    pageSize?: number;
    callback?: (item: CommandInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [device]
 * @property { string } [sim]
 * @property { string } [status]
 * @property { string } [direction]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CommandListInstanceOptions {
    device?: string;
    sim?: string;
    status?: string;
    direction?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [device]
 * @property { string } [sim]
 * @property { string } [status]
 * @property { string } [direction]
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CommandListInstancePageOptions {
    device?: string;
    sim?: string;
    status?: string;
    direction?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface CommandContext {
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
    protected _version: Wireless;
    protected _solution: CommandContextSolution;
    protected _uri: string;
    constructor(_version: Wireless, sid: string);
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
    device_sid?: string | null;
    sim_sid?: string | null;
    command?: string | null;
    command_mode?: string | null;
    status?: string | null;
    direction?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class CommandInstance {
    protected _version: Wireless;
    protected _solution: CommandContextSolution;
    protected _context?: CommandContext;
    constructor(_version: Wireless, payload: CommandResource, sid?: string);
    sid?: string | null;
    accountSid?: string | null;
    deviceSid?: string | null;
    simSid?: string | null;
    command?: string | null;
    commandMode?: string | null;
    status?: string | null;
    direction?: string | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    url?: string | null;
    private get _proxy();
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
        deviceSid: string | null | undefined;
        simSid: string | null | undefined;
        command: string | null | undefined;
        commandMode: string | null | undefined;
        status: string | null | undefined;
        direction: string | null | undefined;
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
export declare function CommandListInstance(version: Wireless): CommandListInstance;
export declare class CommandPage extends Page<Wireless, CommandPayload, CommandResource, CommandInstance> {
    /**
     * Initialize the CommandPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Wireless, response: Response<string>, solution: CommandSolution);
    /**
     * Build an instance of CommandInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CommandResource): CommandInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
