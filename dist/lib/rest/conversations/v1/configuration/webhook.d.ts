/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
declare type ConfigurationWebhookMethod = "GET" | "POST";
declare type ConfigurationWebhookTarget = "webhook" | "flex";
/**
 * Options to pass to update a WebhookInstance
 *
 * @property { string } [method] The HTTP method to be used when sending a webhook request.
 * @property { Array<string> } [filters] The list of webhook event triggers that are enabled for this Service: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`
 * @property { string } [preWebhookUrl] The absolute url the pre-event webhook request should be sent to.
 * @property { string } [postWebhookUrl] The absolute url the post-event webhook request should be sent to.
 * @property { ConfigurationWebhookTarget } [target]
 */
export interface WebhookContextUpdateOptions {
    method?: string;
    filters?: Array<string>;
    preWebhookUrl?: string;
    postWebhookUrl?: string;
    target?: ConfigurationWebhookTarget;
}
export interface WebhookContext {
    /**
     * Fetch a WebhookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    fetch(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Update a WebhookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    update(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Update a WebhookInstance
     *
     * @param { WebhookContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    update(params: WebhookContextUpdateOptions, callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    update(params?: any, callback?: any): Promise<WebhookInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WebhookContextSolution {
}
export declare class WebhookContextImpl implements WebhookContext {
    protected _version: V1;
    protected _solution: WebhookContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(callback?: any): Promise<WebhookInstance>;
    update(params?: any, callback?: any): Promise<WebhookInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): WebhookContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface WebhookResource {
    account_sid?: string | null;
    method?: ConfigurationWebhookMethod;
    filters?: Array<string> | null;
    pre_webhook_url?: string | null;
    post_webhook_url?: string | null;
    target?: ConfigurationWebhookTarget;
    url?: string | null;
}
export declare class WebhookInstance {
    protected _version: V1;
    protected _solution: WebhookContextSolution;
    protected _context?: WebhookContext;
    constructor(_version: V1, payload: WebhookResource);
    /**
     * The unique ID of the Account responsible for this conversation.
     */
    accountSid?: string | null;
    method?: ConfigurationWebhookMethod;
    /**
     * The list of webhook event triggers that are enabled for this Service.
     */
    filters?: Array<string> | null;
    /**
     * The absolute url the pre-event webhook request should be sent to.
     */
    preWebhookUrl?: string | null;
    /**
     * The absolute url the post-event webhook request should be sent to.
     */
    postWebhookUrl?: string | null;
    target?: ConfigurationWebhookTarget;
    /**
     * An absolute URL for this webhook.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a WebhookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    fetch(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Update a WebhookInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    update(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Update a WebhookInstance
     *
     * @param { WebhookContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebhookInstance
     */
    update(params: WebhookContextUpdateOptions, callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        method: ConfigurationWebhookMethod | undefined;
        filters: string[] | null | undefined;
        preWebhookUrl: string | null | undefined;
        postWebhookUrl: string | null | undefined;
        target: ConfigurationWebhookTarget | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface WebhookListInstance {
    (): WebhookContext;
    get(): WebhookContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WebhookSolution {
}
export declare function WebhookListInstance(version: V1): WebhookListInstance;
export {};
