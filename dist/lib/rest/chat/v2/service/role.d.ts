/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
declare type RoleRoleType = "channel" | "deployment";
/**
 * Options to pass to update a RoleInstance
 *
 * @property { Array<string> } permission A permission that you grant to the role. Only one permission can be granted per parameter. To assign more than one permission, repeat this parameter for each permission value. Note that the update action replaces all previously assigned permissions with those defined in the update action. To remove a permission, do not include it in the subsequent update action. The values for this parameter depend on the role\\\'s `type`.
 */
export interface RoleContextUpdateOptions {
    permission: Array<string>;
}
/**
 * Options to pass to create a RoleInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the new resource. It can be up to 64 characters long.
 * @property { RoleRoleType } type
 * @property { Array<string> } permission A permission that you grant to the new role. Only one permission can be granted per parameter. To assign more than one permission, repeat this parameter for each permission value. The values for this parameter depend on the role\\\'s `type`.
 */
export interface RoleListInstanceCreateOptions {
    friendlyName: string;
    type: RoleRoleType;
    permission: Array<string>;
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
export interface RoleListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: RoleInstance, done: (err?: Error) => void) => void;
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
export interface RoleListInstanceOptions {
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
export interface RoleListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface RoleContext {
    /**
     * Remove a RoleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RoleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoleInstance
     */
    fetch(callback?: (error: Error | null, item?: RoleInstance) => any): Promise<RoleInstance>;
    /**
     * Update a RoleInstance
     *
     * @param { RoleContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoleInstance
     */
    update(params: RoleContextUpdateOptions, callback?: (error: Error | null, item?: RoleInstance) => any): Promise<RoleInstance>;
    update(params: any, callback?: any): Promise<RoleInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RoleContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class RoleContextImpl implements RoleContext {
    protected _version: V2;
    protected _solution: RoleContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<RoleInstance>;
    update(params: any, callback?: any): Promise<RoleInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RoleContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface RolePayload extends TwilioResponsePayload {
    roles: RoleResource[];
}
interface RoleResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    friendly_name?: string | null;
    type?: RoleRoleType;
    permissions?: Array<string> | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class RoleInstance {
    protected _version: V2;
    protected _solution: RoleContextSolution;
    protected _context?: RoleContext;
    constructor(_version: V2, payload: RoleResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    type?: RoleRoleType;
    /**
     * An array of the permissions the role has been granted
     */
    permissions?: Array<string> | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Role resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a RoleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a RoleInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoleInstance
     */
    fetch(callback?: (error: Error | null, item?: RoleInstance) => any): Promise<RoleInstance>;
    /**
     * Update a RoleInstance
     *
     * @param { RoleContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoleInstance
     */
    update(params: RoleContextUpdateOptions, callback?: (error: Error | null, item?: RoleInstance) => any): Promise<RoleInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        friendlyName: string | null | undefined;
        type: RoleRoleType | undefined;
        permissions: string[] | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RoleListInstance {
    (sid: string): RoleContext;
    get(sid: string): RoleContext;
    /**
     * Create a RoleInstance
     *
     * @param { RoleListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RoleInstance
     */
    create(params: RoleListInstanceCreateOptions, callback?: (error: Error | null, item?: RoleInstance) => any): Promise<RoleInstance>;
    create(params: any, callback?: any): Promise<RoleInstance>;
    /**
     * Streams RoleInstance records from the API.
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
    each(callback?: (item: RoleInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams RoleInstance records from the API.
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
     * @param { RoleListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: RoleListInstanceEachOptions, callback?: (item: RoleInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of RoleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: RolePage) => any): Promise<RolePage>;
    /**
     * Retrieve a single target page of RoleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: RolePage) => any): Promise<RolePage>;
    getPage(params?: any, callback?: any): Promise<RolePage>;
    /**
     * Lists RoleInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: RoleInstance[]) => any): Promise<RoleInstance[]>;
    /**
     * Lists RoleInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RoleListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: RoleListInstanceOptions, callback?: (error: Error | null, items: RoleInstance[]) => any): Promise<RoleInstance[]>;
    list(params?: any, callback?: any): Promise<RoleInstance[]>;
    /**
     * Retrieve a single page of RoleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: RolePage) => any): Promise<RolePage>;
    /**
     * Retrieve a single page of RoleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { RoleListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: RoleListInstancePageOptions, callback?: (error: Error | null, items: RolePage) => any): Promise<RolePage>;
    page(params?: any, callback?: any): Promise<RolePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RoleSolution {
    serviceSid?: string;
}
export declare function RoleListInstance(version: V2, serviceSid: string): RoleListInstance;
export declare class RolePage extends Page<V2, RolePayload, RoleResource, RoleInstance> {
    /**
     * Initialize the RolePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: RoleSolution);
    /**
     * Build an instance of RoleInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: RoleResource): RoleInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
