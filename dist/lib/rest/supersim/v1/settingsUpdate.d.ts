/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type SettingsUpdateStatus = "scheduled" | "in-progress" | "successful" | "failed";
/**
 * Options to pass to each
 *
 * @property { string } [sim] Filter the Settings Updates by a Super SIM\'s SID or UniqueName.
 * @property { SettingsUpdateStatus } [status] Filter the Settings Updates by status. Can be `scheduled`, `in-progress`, `successful`, or `failed`.
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
export interface SettingsUpdateListInstanceEachOptions {
    sim?: string;
    status?: SettingsUpdateStatus;
    pageSize?: number;
    callback?: (item: SettingsUpdateInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [sim] Filter the Settings Updates by a Super SIM\'s SID or UniqueName.
 * @property { SettingsUpdateStatus } [status] Filter the Settings Updates by status. Can be `scheduled`, `in-progress`, `successful`, or `failed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SettingsUpdateListInstanceOptions {
    sim?: string;
    status?: SettingsUpdateStatus;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [sim] Filter the Settings Updates by a Super SIM\'s SID or UniqueName.
 * @property { SettingsUpdateStatus } [status] Filter the Settings Updates by status. Can be `scheduled`, `in-progress`, `successful`, or `failed`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SettingsUpdateListInstancePageOptions {
    sim?: string;
    status?: SettingsUpdateStatus;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SettingsUpdateListInstance {
    /**
     * Streams SettingsUpdateInstance records from the API.
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
    each(callback?: (item: SettingsUpdateInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SettingsUpdateInstance records from the API.
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
     * @param { SettingsUpdateListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SettingsUpdateListInstanceEachOptions, callback?: (item: SettingsUpdateInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SettingsUpdateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SettingsUpdatePage) => any): Promise<SettingsUpdatePage>;
    /**
     * Retrieve a single target page of SettingsUpdateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SettingsUpdatePage) => any): Promise<SettingsUpdatePage>;
    getPage(params?: any, callback?: any): Promise<SettingsUpdatePage>;
    /**
     * Lists SettingsUpdateInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SettingsUpdateInstance[]) => any): Promise<SettingsUpdateInstance[]>;
    /**
     * Lists SettingsUpdateInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SettingsUpdateListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SettingsUpdateListInstanceOptions, callback?: (error: Error | null, items: SettingsUpdateInstance[]) => any): Promise<SettingsUpdateInstance[]>;
    list(params?: any, callback?: any): Promise<SettingsUpdateInstance[]>;
    /**
     * Retrieve a single page of SettingsUpdateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SettingsUpdatePage) => any): Promise<SettingsUpdatePage>;
    /**
     * Retrieve a single page of SettingsUpdateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SettingsUpdateListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SettingsUpdateListInstancePageOptions, callback?: (error: Error | null, items: SettingsUpdatePage) => any): Promise<SettingsUpdatePage>;
    page(params?: any, callback?: any): Promise<SettingsUpdatePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SettingsUpdateSolution {
}
export declare function SettingsUpdateListInstance(version: V1): SettingsUpdateListInstance;
interface SettingsUpdatePayload extends TwilioResponsePayload {
    settings_updates: SettingsUpdateResource[];
}
interface SettingsUpdateResource {
    sid?: string | null;
    iccid?: string | null;
    sim_sid?: string | null;
    status?: SettingsUpdateStatus;
    packages?: Array<any> | null;
    date_completed?: Date | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class SettingsUpdateInstance {
    protected _version: V1;
    constructor(_version: V1, payload: SettingsUpdateResource);
    /**
     * The unique identifier of this Settings Update
     */
    sid?: string | null;
    /**
     * The ICCID associated with the SIM
     */
    iccid?: string | null;
    /**
     * The SID of the Super SIM to which this Settings Update was applied
     */
    simSid?: string | null;
    status?: SettingsUpdateStatus;
    /**
     * Array containing the different Settings Packages that will be applied to the SIM after the update completes
     */
    packages?: Array<any> | null;
    /**
     * The time when the update successfully completed and the new settings were applied to the SIM
     */
    dateCompleted?: Date | null;
    /**
     * The date this Settings Update was created
     */
    dateCreated?: Date | null;
    /**
     * The date this Settings Update was last updated
     */
    dateUpdated?: Date | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        iccid: string | null | undefined;
        simSid: string | null | undefined;
        status: SettingsUpdateStatus | undefined;
        packages: any[] | null | undefined;
        dateCompleted: Date | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class SettingsUpdatePage extends Page<V1, SettingsUpdatePayload, SettingsUpdateResource, SettingsUpdateInstance> {
    /**
     * Initialize the SettingsUpdatePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SettingsUpdateSolution);
    /**
     * Build an instance of SettingsUpdateInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SettingsUpdateResource): SettingsUpdateInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
