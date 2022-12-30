/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a ExportConfigurationInstance
 *
 * @property { boolean } [enabled] If true, Twilio will automatically generate every day\\\'s file when the day is over.
 * @property { string } [webhookUrl] Stores the URL destination for the method specified in webhook_method.
 * @property { string } [webhookMethod] Sets whether Twilio should call a webhook URL when the automatic generation is complete, using GET or POST. The actual destination is set in the webhook_url
 */
export interface ExportConfigurationContextUpdateOptions {
    enabled?: boolean;
    webhookUrl?: string;
    webhookMethod?: string;
}
export interface ExportConfigurationContext {
    /**
     * Fetch a ExportConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExportConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: ExportConfigurationInstance) => any): Promise<ExportConfigurationInstance>;
    /**
     * Update a ExportConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExportConfigurationInstance
     */
    update(callback?: (error: Error | null, item?: ExportConfigurationInstance) => any): Promise<ExportConfigurationInstance>;
    /**
     * Update a ExportConfigurationInstance
     *
     * @param { ExportConfigurationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExportConfigurationInstance
     */
    update(params: ExportConfigurationContextUpdateOptions, callback?: (error: Error | null, item?: ExportConfigurationInstance) => any): Promise<ExportConfigurationInstance>;
    update(params?: any, callback?: any): Promise<ExportConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExportConfigurationContextSolution {
    resourceType?: string;
}
export declare class ExportConfigurationContextImpl implements ExportConfigurationContext {
    protected _version: V1;
    protected _solution: ExportConfigurationContextSolution;
    protected _uri: string;
    constructor(_version: V1, resourceType: string);
    fetch(callback?: any): Promise<ExportConfigurationInstance>;
    update(params?: any, callback?: any): Promise<ExportConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ExportConfigurationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ExportConfigurationResource {
    enabled?: boolean | null;
    webhook_url?: string | null;
    webhook_method?: string | null;
    resource_type?: string | null;
    url?: string | null;
}
export declare class ExportConfigurationInstance {
    protected _version: V1;
    protected _solution: ExportConfigurationContextSolution;
    protected _context?: ExportConfigurationContext;
    constructor(_version: V1, payload: ExportConfigurationResource, resourceType?: string);
    /**
     * Whether files are automatically generated
     */
    enabled?: boolean | null;
    /**
     * URL targeted at export
     */
    webhookUrl?: string | null;
    /**
     * Whether to GET or POST to the webhook url
     */
    webhookMethod?: string | null;
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType?: string | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a ExportConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExportConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: ExportConfigurationInstance) => any): Promise<ExportConfigurationInstance>;
    /**
     * Update a ExportConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExportConfigurationInstance
     */
    update(callback?: (error: Error | null, item?: ExportConfigurationInstance) => any): Promise<ExportConfigurationInstance>;
    /**
     * Update a ExportConfigurationInstance
     *
     * @param { ExportConfigurationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExportConfigurationInstance
     */
    update(params: ExportConfigurationContextUpdateOptions, callback?: (error: Error | null, item?: ExportConfigurationInstance) => any): Promise<ExportConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        enabled: boolean | null | undefined;
        webhookUrl: string | null | undefined;
        webhookMethod: string | null | undefined;
        resourceType: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ExportConfigurationListInstance {
    (resourceType: string): ExportConfigurationContext;
    get(resourceType: string): ExportConfigurationContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExportConfigurationSolution {
}
export declare function ExportConfigurationListInstance(version: V1): ExportConfigurationListInstance;
export {};
