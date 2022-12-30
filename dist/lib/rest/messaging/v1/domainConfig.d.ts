/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a DomainConfigInstance
 *
 * @property { Array<string> } messagingServiceSids A list of messagingServiceSids (with prefix MG)
 * @property { string } [fallbackUrl] Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping.
 * @property { string } [callbackUrl] URL to receive click events to your webhook whenever the recipients click on the shortened links
 * @property { string } [messagingServiceSidsAction] An action type for messaging_service_sids operation (ADD, DELETE, REPLACE)
 */
export interface DomainConfigContextUpdateOptions {
    messagingServiceSids: Array<string>;
    fallbackUrl?: string;
    callbackUrl?: string;
    messagingServiceSidsAction?: string;
}
export interface DomainConfigContext {
    /**
     * Fetch a DomainConfigInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DomainConfigInstance
     */
    fetch(callback?: (error: Error | null, item?: DomainConfigInstance) => any): Promise<DomainConfigInstance>;
    /**
     * Update a DomainConfigInstance
     *
     * @param { DomainConfigContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DomainConfigInstance
     */
    update(params: DomainConfigContextUpdateOptions, callback?: (error: Error | null, item?: DomainConfigInstance) => any): Promise<DomainConfigInstance>;
    update(params: any, callback?: any): Promise<DomainConfigInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DomainConfigContextSolution {
    domainSid?: string;
}
export declare class DomainConfigContextImpl implements DomainConfigContext {
    protected _version: V1;
    protected _solution: DomainConfigContextSolution;
    protected _uri: string;
    constructor(_version: V1, domainSid: string);
    fetch(callback?: any): Promise<DomainConfigInstance>;
    update(params: any, callback?: any): Promise<DomainConfigInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DomainConfigContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DomainConfigResource {
    domain_sid?: string | null;
    config_sid?: string | null;
    messaging_service_sids?: Array<string> | null;
    fallback_url?: string | null;
    callback_url?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class DomainConfigInstance {
    protected _version: V1;
    protected _solution: DomainConfigContextSolution;
    protected _context?: DomainConfigContext;
    constructor(_version: V1, payload: DomainConfigResource, domainSid?: string);
    /**
     * The unique string that we created to identify the Domain resource.
     */
    domainSid?: string | null;
    /**
     * The unique string that we created to identify the Domain config (prefix ZK).
     */
    configSid?: string | null;
    /**
     * A list of messagingServiceSids (with prefix MG).
     */
    messagingServiceSids?: Array<string> | null;
    /**
     * We will redirect requests to urls we are unable to identify to this url.
     */
    fallbackUrl?: string | null;
    /**
     * URL to receive click events to your webhook whenever the recipients click on the shortened links.
     */
    callbackUrl?: string | null;
    /**
     * Date this Domain Config was created.
     */
    dateCreated?: Date | null;
    /**
     * Date that this Domain Config was last updated.
     */
    dateUpdated?: Date | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a DomainConfigInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DomainConfigInstance
     */
    fetch(callback?: (error: Error | null, item?: DomainConfigInstance) => any): Promise<DomainConfigInstance>;
    /**
     * Update a DomainConfigInstance
     *
     * @param { DomainConfigContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DomainConfigInstance
     */
    update(params: DomainConfigContextUpdateOptions, callback?: (error: Error | null, item?: DomainConfigInstance) => any): Promise<DomainConfigInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        domainSid: string | null | undefined;
        configSid: string | null | undefined;
        messagingServiceSids: string[] | null | undefined;
        fallbackUrl: string | null | undefined;
        callbackUrl: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DomainConfigListInstance {
    (domainSid: string): DomainConfigContext;
    get(domainSid: string): DomainConfigContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DomainConfigSolution {
}
export declare function DomainConfigListInstance(version: V1): DomainConfigListInstance;
export {};
