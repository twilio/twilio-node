/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
declare type ServiceWebhookConfigurationMethod = "GET" | "POST";
/**
 * Options to pass to update a WebhookInstance
 *
 * @property { string } [preWebhookUrl] The absolute url the pre-event webhook request should be sent to.
 * @property { string } [postWebhookUrl] The absolute url the post-event webhook request should be sent to.
 * @property { Array<string> } [filters] The list of events that your configured webhook targets will receive. Events not configured here will not fire. Possible values are `onParticipantAdd`, `onParticipantAdded`, `onDeliveryUpdated`, `onConversationUpdated`, `onConversationRemove`, `onParticipantRemove`, `onConversationUpdate`, `onMessageAdd`, `onMessageRemoved`, `onParticipantUpdated`, `onConversationAdded`, `onMessageAdded`, `onConversationAdd`, `onConversationRemoved`, `onParticipantUpdate`, `onMessageRemove`, `onMessageUpdated`, `onParticipantRemoved`, `onMessageUpdate` or `onConversationStateUpdated`.
 * @property { string } [method] The HTTP method to be used when sending a webhook request. One of `GET` or `POST`.
 */
export interface WebhookContextUpdateOptions {
    preWebhookUrl?: string;
    postWebhookUrl?: string;
    filters?: Array<string>;
    method?: string;
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
    chatServiceSid?: string;
}
export declare class WebhookContextImpl implements WebhookContext {
    protected _version: V1;
    protected _solution: WebhookContextSolution;
    protected _uri: string;
    constructor(_version: V1, chatServiceSid: string);
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
    chat_service_sid?: string | null;
    pre_webhook_url?: string | null;
    post_webhook_url?: string | null;
    filters?: Array<string> | null;
    method?: ServiceWebhookConfigurationMethod;
    url?: string | null;
}
export declare class WebhookInstance {
    protected _version: V1;
    protected _solution: WebhookContextSolution;
    protected _context?: WebhookContext;
    constructor(_version: V1, payload: WebhookResource, chatServiceSid: string);
    /**
     * The unique ID of the Account responsible for this service.
     */
    accountSid?: string | null;
    /**
     * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
     */
    chatServiceSid?: string | null;
    /**
     * The absolute url the pre-event webhook request should be sent to.
     */
    preWebhookUrl?: string | null;
    /**
     * The absolute url the post-event webhook request should be sent to.
     */
    postWebhookUrl?: string | null;
    /**
     * The list of events that your configured webhook targets will receive. Events not configured here will not fire.
     */
    filters?: Array<string> | null;
    method?: ServiceWebhookConfigurationMethod;
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
        chatServiceSid: string | null | undefined;
        preWebhookUrl: string | null | undefined;
        postWebhookUrl: string | null | undefined;
        filters: string[] | null | undefined;
        method: ServiceWebhookConfigurationMethod | undefined;
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
    chatServiceSid?: string;
}
export declare function WebhookListInstance(version: V1, chatServiceSid: string): WebhookListInstance;
export {};
