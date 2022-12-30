/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
import { WebhookListInstance } from "./configuration/webhook";
/**
 * Options to pass to update a ConfigurationInstance
 *
 * @property { string } [defaultChatServiceSid] The SID of the default [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to use when creating a conversation.
 * @property { string } [defaultMessagingServiceSid] The SID of the default [Messaging Service](https://www.twilio.com/docs/sms/services/api) to use when creating a conversation.
 * @property { string } [defaultInactiveTimer] Default ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute.
 * @property { string } [defaultClosedTimer] Default ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes.
 */
export interface ConfigurationContextUpdateOptions {
    defaultChatServiceSid?: string;
    defaultMessagingServiceSid?: string;
    defaultInactiveTimer?: string;
    defaultClosedTimer?: string;
}
export interface ConfigurationContext {
    /**
     * Fetch a ConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
    /**
     * Update a ConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConfigurationInstance
     */
    update(callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
    /**
     * Update a ConfigurationInstance
     *
     * @param { ConfigurationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConfigurationInstance
     */
    update(params: ConfigurationContextUpdateOptions, callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
    update(params?: any, callback?: any): Promise<ConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConfigurationContextSolution {
}
export declare class ConfigurationContextImpl implements ConfigurationContext {
    protected _version: V1;
    protected _solution: ConfigurationContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(callback?: any): Promise<ConfigurationInstance>;
    update(params?: any, callback?: any): Promise<ConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ConfigurationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ConfigurationResource {
    account_sid?: string | null;
    default_chat_service_sid?: string | null;
    default_messaging_service_sid?: string | null;
    default_inactive_timer?: string | null;
    default_closed_timer?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class ConfigurationInstance {
    protected _version: V1;
    protected _solution: ConfigurationContextSolution;
    protected _context?: ConfigurationContext;
    constructor(_version: V1, payload: ConfigurationResource);
    /**
     * The SID of the Account responsible for this configuration.
     */
    accountSid?: string | null;
    /**
     * The SID of the default Conversation Service that every new conversation is associated with.
     */
    defaultChatServiceSid?: string | null;
    /**
     * The SID of the default Messaging Service that every new conversation is associated with.
     */
    defaultMessagingServiceSid?: string | null;
    /**
     * Default ISO8601 duration when conversation will be switched to `inactive` state.
     */
    defaultInactiveTimer?: string | null;
    /**
     * Default ISO8601 duration when conversation will be switched to `closed` state.
     */
    defaultClosedTimer?: string | null;
    /**
     * An absolute URL for this global configuration.
     */
    url?: string | null;
    /**
     * Absolute URLs to access the webhook and default service configurations.
     */
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a ConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
    /**
     * Update a ConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConfigurationInstance
     */
    update(callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
    /**
     * Update a ConfigurationInstance
     *
     * @param { ConfigurationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConfigurationInstance
     */
    update(params: ConfigurationContextUpdateOptions, callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        defaultChatServiceSid: string | null | undefined;
        defaultMessagingServiceSid: string | null | undefined;
        defaultInactiveTimer: string | null | undefined;
        defaultClosedTimer: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ConfigurationListInstance {
    (): ConfigurationContext;
    get(): ConfigurationContext;
    webhooks: WebhookListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConfigurationSolution {
}
export declare function ConfigurationListInstance(version: V1): ConfigurationListInstance;
export {};
