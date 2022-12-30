/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to update a SourceIpMappingInstance
 *
 * @property { string } sipDomainSid The SID of the SIP Domain that the IP Record should be mapped to.
 */
export interface SourceIpMappingContextUpdateOptions {
    sipDomainSid: string;
}
/**
 * Options to pass to create a SourceIpMappingInstance
 *
 * @property { string } ipRecordSid The Twilio-provided string that uniquely identifies the IP Record resource to map from.
 * @property { string } sipDomainSid The SID of the SIP Domain that the IP Record should be mapped to.
 */
export interface SourceIpMappingListInstanceCreateOptions {
    ipRecordSid: string;
    sipDomainSid: string;
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
export interface SourceIpMappingListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: SourceIpMappingInstance, done: (err?: Error) => void) => void;
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
export interface SourceIpMappingListInstanceOptions {
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
export interface SourceIpMappingListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface SourceIpMappingContext {
    /**
     * Remove a SourceIpMappingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SourceIpMappingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SourceIpMappingInstance
     */
    fetch(callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<SourceIpMappingInstance>;
    /**
     * Update a SourceIpMappingInstance
     *
     * @param { SourceIpMappingContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SourceIpMappingInstance
     */
    update(params: SourceIpMappingContextUpdateOptions, callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<SourceIpMappingInstance>;
    update(params: any, callback?: any): Promise<SourceIpMappingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SourceIpMappingContextSolution {
    sid?: string;
}
export declare class SourceIpMappingContextImpl implements SourceIpMappingContext {
    protected _version: V1;
    protected _solution: SourceIpMappingContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SourceIpMappingInstance>;
    update(params: any, callback?: any): Promise<SourceIpMappingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SourceIpMappingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SourceIpMappingPayload extends TwilioResponsePayload {
    source_ip_mappings: SourceIpMappingResource[];
}
interface SourceIpMappingResource {
    sid?: string | null;
    ip_record_sid?: string | null;
    sip_domain_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class SourceIpMappingInstance {
    protected _version: V1;
    protected _solution: SourceIpMappingContextSolution;
    protected _context?: SourceIpMappingContext;
    constructor(_version: V1, payload: SourceIpMappingResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The unique string that identifies an IP Record
     */
    ipRecordSid?: string | null;
    /**
     * The unique string that identifies a SIP Domain
     */
    sipDomainSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a SourceIpMappingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SourceIpMappingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SourceIpMappingInstance
     */
    fetch(callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<SourceIpMappingInstance>;
    /**
     * Update a SourceIpMappingInstance
     *
     * @param { SourceIpMappingContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SourceIpMappingInstance
     */
    update(params: SourceIpMappingContextUpdateOptions, callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<SourceIpMappingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        ipRecordSid: string | null | undefined;
        sipDomainSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SourceIpMappingListInstance {
    (sid: string): SourceIpMappingContext;
    get(sid: string): SourceIpMappingContext;
    /**
     * Create a SourceIpMappingInstance
     *
     * @param { SourceIpMappingListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SourceIpMappingInstance
     */
    create(params: SourceIpMappingListInstanceCreateOptions, callback?: (error: Error | null, item?: SourceIpMappingInstance) => any): Promise<SourceIpMappingInstance>;
    create(params: any, callback?: any): Promise<SourceIpMappingInstance>;
    /**
     * Streams SourceIpMappingInstance records from the API.
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
    each(callback?: (item: SourceIpMappingInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams SourceIpMappingInstance records from the API.
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
     * @param { SourceIpMappingListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: SourceIpMappingListInstanceEachOptions, callback?: (item: SourceIpMappingInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of SourceIpMappingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: SourceIpMappingPage) => any): Promise<SourceIpMappingPage>;
    /**
     * Retrieve a single target page of SourceIpMappingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: SourceIpMappingPage) => any): Promise<SourceIpMappingPage>;
    getPage(params?: any, callback?: any): Promise<SourceIpMappingPage>;
    /**
     * Lists SourceIpMappingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SourceIpMappingInstance[]) => any): Promise<SourceIpMappingInstance[]>;
    /**
     * Lists SourceIpMappingInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SourceIpMappingListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: SourceIpMappingListInstanceOptions, callback?: (error: Error | null, items: SourceIpMappingInstance[]) => any): Promise<SourceIpMappingInstance[]>;
    list(params?: any, callback?: any): Promise<SourceIpMappingInstance[]>;
    /**
     * Retrieve a single page of SourceIpMappingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SourceIpMappingPage) => any): Promise<SourceIpMappingPage>;
    /**
     * Retrieve a single page of SourceIpMappingInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SourceIpMappingListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: SourceIpMappingListInstancePageOptions, callback?: (error: Error | null, items: SourceIpMappingPage) => any): Promise<SourceIpMappingPage>;
    page(params?: any, callback?: any): Promise<SourceIpMappingPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SourceIpMappingSolution {
}
export declare function SourceIpMappingListInstance(version: V1): SourceIpMappingListInstance;
export declare class SourceIpMappingPage extends Page<V1, SourceIpMappingPayload, SourceIpMappingResource, SourceIpMappingInstance> {
    /**
     * Initialize the SourceIpMappingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SourceIpMappingSolution);
    /**
     * Build an instance of SourceIpMappingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SourceIpMappingResource): SourceIpMappingInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
