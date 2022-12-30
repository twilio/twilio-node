/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] String filter used to query templates with a given friendly name
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
export interface TemplateListInstanceEachOptions {
    friendlyName?: string;
    pageSize?: number;
    callback?: (item: TemplateInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] String filter used to query templates with a given friendly name
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TemplateListInstanceOptions {
    friendlyName?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] String filter used to query templates with a given friendly name
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TemplateListInstancePageOptions {
    friendlyName?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TemplateListInstance {
    /**
     * Streams TemplateInstance records from the API.
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
    each(callback?: (item: TemplateInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TemplateInstance records from the API.
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
     * @param { TemplateListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TemplateListInstanceEachOptions, callback?: (item: TemplateInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TemplateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TemplatePage) => any): Promise<TemplatePage>;
    /**
     * Retrieve a single target page of TemplateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TemplatePage) => any): Promise<TemplatePage>;
    getPage(params?: any, callback?: any): Promise<TemplatePage>;
    /**
     * Lists TemplateInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TemplateInstance[]) => any): Promise<TemplateInstance[]>;
    /**
     * Lists TemplateInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TemplateListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TemplateListInstanceOptions, callback?: (error: Error | null, items: TemplateInstance[]) => any): Promise<TemplateInstance[]>;
    list(params?: any, callback?: any): Promise<TemplateInstance[]>;
    /**
     * Retrieve a single page of TemplateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TemplatePage) => any): Promise<TemplatePage>;
    /**
     * Retrieve a single page of TemplateInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TemplateListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TemplateListInstancePageOptions, callback?: (error: Error | null, items: TemplatePage) => any): Promise<TemplatePage>;
    page(params?: any, callback?: any): Promise<TemplatePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TemplateSolution {
}
export declare function TemplateListInstance(version: V2): TemplateListInstance;
interface TemplatePayload extends TwilioResponsePayload {
    templates: TemplateResource[];
}
interface TemplateResource {
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    channels?: Array<string> | null;
    translations?: any | null;
}
export declare class TemplateInstance {
    protected _version: V2;
    constructor(_version: V2, payload: TemplateResource);
    /**
     * A string that uniquely identifies this Template
     */
    sid?: string | null;
    /**
     * Account Sid
     */
    accountSid?: string | null;
    /**
     * A string to describe the verification template
     */
    friendlyName?: string | null;
    /**
     * A list of channels that support the Template
     */
    channels?: Array<string> | null;
    /**
     * Object with the template translations.
     */
    translations?: any | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        channels: string[] | null | undefined;
        translations: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class TemplatePage extends Page<V2, TemplatePayload, TemplateResource, TemplateInstance> {
    /**
     * Initialize the TemplatePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: TemplateSolution);
    /**
     * Build an instance of TemplateInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TemplateResource): TemplateInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
