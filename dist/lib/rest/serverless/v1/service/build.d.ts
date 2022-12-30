/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
import { BuildStatusListInstance } from "./build/buildStatus";
declare type BuildRuntime = "node8" | "node10" | "node12" | "node14" | "node16";
declare type BuildStatus = "building" | "completed" | "failed";
/**
 * Options to pass to create a BuildInstance
 *
 * @property { Array<string> } [assetVersions] The list of Asset Version resource SIDs to include in the Build.
 * @property { Array<string> } [functionVersions] The list of the Function Version resource SIDs to include in the Build.
 * @property { string } [dependencies] A list of objects that describe the Dependencies included in the Build. Each object contains the `name` and `version` of the dependency.
 * @property { string } [runtime] The Runtime version that will be used to run the Build resource when it is deployed.
 */
export interface BuildListInstanceCreateOptions {
    assetVersions?: Array<string>;
    functionVersions?: Array<string>;
    dependencies?: string;
    runtime?: string;
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
export interface BuildListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: BuildInstance, done: (err?: Error) => void) => void;
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
export interface BuildListInstanceOptions {
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
export interface BuildListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface BuildContext {
    buildStatus: BuildStatusListInstance;
    /**
     * Remove a BuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a BuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BuildInstance
     */
    fetch(callback?: (error: Error | null, item?: BuildInstance) => any): Promise<BuildInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BuildContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class BuildContextImpl implements BuildContext {
    protected _version: V1;
    protected _solution: BuildContextSolution;
    protected _uri: string;
    protected _buildStatus?: BuildStatusListInstance;
    constructor(_version: V1, serviceSid: string, sid: string);
    get buildStatus(): BuildStatusListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<BuildInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): BuildContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface BuildPayload extends TwilioResponsePayload {
    builds: BuildResource[];
}
interface BuildResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    status?: BuildStatus;
    asset_versions?: Array<any> | null;
    function_versions?: Array<any> | null;
    dependencies?: Array<any> | null;
    runtime?: BuildRuntime;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    links?: object | null;
}
export declare class BuildInstance {
    protected _version: V1;
    protected _solution: BuildContextSolution;
    protected _context?: BuildContext;
    constructor(_version: V1, payload: BuildResource, serviceSid: string, sid?: string);
    /**
     * The unique string that identifies the Build resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Build resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Build resource is associated with
     */
    serviceSid?: string | null;
    status?: BuildStatus;
    /**
     * The list of Asset Version resource SIDs that are included in the Build
     */
    assetVersions?: Array<any> | null;
    /**
     * The list of Function Version resource SIDs that are included in the Build
     */
    functionVersions?: Array<any> | null;
    /**
     * A list of objects that describe the Dependencies included in the Build
     */
    dependencies?: Array<any> | null;
    runtime?: BuildRuntime;
    /**
     * The ISO 8601 date and time in GMT when the Build resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Build resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the Build resource
     */
    url?: string | null;
    links?: object | null;
    private get _proxy();
    /**
     * Remove a BuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a BuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BuildInstance
     */
    fetch(callback?: (error: Error | null, item?: BuildInstance) => any): Promise<BuildInstance>;
    /**
     * Access the buildStatus.
     */
    buildStatus(): BuildStatusListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        status: BuildStatus | undefined;
        assetVersions: any[] | null | undefined;
        functionVersions: any[] | null | undefined;
        dependencies: any[] | null | undefined;
        runtime: BuildRuntime | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface BuildListInstance {
    (sid: string): BuildContext;
    get(sid: string): BuildContext;
    /**
     * Create a BuildInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BuildInstance
     */
    create(callback?: (error: Error | null, item?: BuildInstance) => any): Promise<BuildInstance>;
    /**
     * Create a BuildInstance
     *
     * @param { BuildListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BuildInstance
     */
    create(params: BuildListInstanceCreateOptions, callback?: (error: Error | null, item?: BuildInstance) => any): Promise<BuildInstance>;
    create(params?: any, callback?: any): Promise<BuildInstance>;
    /**
     * Streams BuildInstance records from the API.
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
    each(callback?: (item: BuildInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams BuildInstance records from the API.
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
     * @param { BuildListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: BuildListInstanceEachOptions, callback?: (item: BuildInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of BuildInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: BuildPage) => any): Promise<BuildPage>;
    /**
     * Retrieve a single target page of BuildInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: BuildPage) => any): Promise<BuildPage>;
    getPage(params?: any, callback?: any): Promise<BuildPage>;
    /**
     * Lists BuildInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: BuildInstance[]) => any): Promise<BuildInstance[]>;
    /**
     * Lists BuildInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BuildListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: BuildListInstanceOptions, callback?: (error: Error | null, items: BuildInstance[]) => any): Promise<BuildInstance[]>;
    list(params?: any, callback?: any): Promise<BuildInstance[]>;
    /**
     * Retrieve a single page of BuildInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: BuildPage) => any): Promise<BuildPage>;
    /**
     * Retrieve a single page of BuildInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { BuildListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: BuildListInstancePageOptions, callback?: (error: Error | null, items: BuildPage) => any): Promise<BuildPage>;
    page(params?: any, callback?: any): Promise<BuildPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BuildSolution {
    serviceSid?: string;
}
export declare function BuildListInstance(version: V1, serviceSid: string): BuildListInstance;
export declare class BuildPage extends Page<V1, BuildPayload, BuildResource, BuildInstance> {
    /**
     * Initialize the BuildPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: BuildSolution);
    /**
     * Build an instance of BuildInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: BuildResource): BuildInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
