/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
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
export interface DataSessionListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: DataSessionInstance, done: (err?: Error) => void) => void;
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
export interface DataSessionListInstanceOptions {
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
export interface DataSessionListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface DataSessionListInstance {
    /**
     * Streams DataSessionInstance records from the API.
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
    each(callback?: (item: DataSessionInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams DataSessionInstance records from the API.
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
     * @param { DataSessionListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: DataSessionListInstanceEachOptions, callback?: (item: DataSessionInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of DataSessionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: DataSessionPage) => any): Promise<DataSessionPage>;
    /**
     * Retrieve a single target page of DataSessionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: DataSessionPage) => any): Promise<DataSessionPage>;
    getPage(params?: any, callback?: any): Promise<DataSessionPage>;
    /**
     * Lists DataSessionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: DataSessionInstance[]) => any): Promise<DataSessionInstance[]>;
    /**
     * Lists DataSessionInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DataSessionListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: DataSessionListInstanceOptions, callback?: (error: Error | null, items: DataSessionInstance[]) => any): Promise<DataSessionInstance[]>;
    list(params?: any, callback?: any): Promise<DataSessionInstance[]>;
    /**
     * Retrieve a single page of DataSessionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: DataSessionPage) => any): Promise<DataSessionPage>;
    /**
     * Retrieve a single page of DataSessionInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { DataSessionListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: DataSessionListInstancePageOptions, callback?: (error: Error | null, items: DataSessionPage) => any): Promise<DataSessionPage>;
    page(params?: any, callback?: any): Promise<DataSessionPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DataSessionSolution {
    simSid?: string;
}
export declare function DataSessionListInstance(version: V1, simSid: string): DataSessionListInstance;
interface DataSessionPayload extends TwilioResponsePayload {
    data_sessions: DataSessionResource[];
}
interface DataSessionResource {
    sid?: string | null;
    sim_sid?: string | null;
    account_sid?: string | null;
    radio_link?: string | null;
    operator_mcc?: string | null;
    operator_mnc?: string | null;
    operator_country?: string | null;
    operator_name?: string | null;
    cell_id?: string | null;
    cell_location_estimate?: any | null;
    packets_uploaded?: number | null;
    packets_downloaded?: number | null;
    last_updated?: Date | null;
    start?: Date | null;
    end?: Date | null;
    imei?: string | null;
}
export declare class DataSessionInstance {
    protected _version: V1;
    constructor(_version: V1, payload: DataSessionResource, simSid: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Sim resource that the Data Session is for
     */
    simSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The generation of wireless technology that the device was using
     */
    radioLink?: string | null;
    /**
     * The \'mobile country code\' is the unique ID of the home country where the Data Session took place
     */
    operatorMcc?: string | null;
    /**
     * The \'mobile network code\' is the unique ID specific to the mobile operator network where the Data Session took place
     */
    operatorMnc?: string | null;
    /**
     * The three letter country code representing where the device\'s Data Session took place
     */
    operatorCountry?: string | null;
    /**
     * The friendly name of the mobile operator network that the SIM-connected device is attached to
     */
    operatorName?: string | null;
    /**
     * The unique ID of the cellular tower that the device was attached to at the moment when the Data Session was last updated
     */
    cellId?: string | null;
    /**
     * An object with the estimated location where the device\'s Data Session took place
     */
    cellLocationEstimate?: any | null;
    /**
     * The number of packets uploaded by the device between the start time and when the Data Session was last updated
     */
    packetsUploaded?: number | null;
    /**
     * The number of packets downloaded by the device between the start time and when the Data Session was last updated
     */
    packetsDownloaded?: number | null;
    /**
     * The date that the resource was last updated, given as GMT in ISO 8601 format
     */
    lastUpdated?: Date | null;
    /**
     * The date that the Data Session started, given as GMT in ISO 8601 format
     */
    start?: Date | null;
    /**
     * The date that the record ended, given as GMT in ISO 8601 format
     */
    end?: Date | null;
    /**
     * The unique ID of the device using the SIM to connect
     */
    imei?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        simSid: string | null | undefined;
        accountSid: string | null | undefined;
        radioLink: string | null | undefined;
        operatorMcc: string | null | undefined;
        operatorMnc: string | null | undefined;
        operatorCountry: string | null | undefined;
        operatorName: string | null | undefined;
        cellId: string | null | undefined;
        cellLocationEstimate: any;
        packetsUploaded: number | null | undefined;
        packetsDownloaded: number | null | undefined;
        lastUpdated: Date | null | undefined;
        start: Date | null | undefined;
        end: Date | null | undefined;
        imei: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class DataSessionPage extends Page<V1, DataSessionPayload, DataSessionResource, DataSessionInstance> {
    /**
     * Initialize the DataSessionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: DataSessionSolution);
    /**
     * Build an instance of DataSessionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: DataSessionResource): DataSessionInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
