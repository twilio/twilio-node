/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
import { NotificationListInstance } from "./configuration/notification";
import { WebhookListInstance } from "./configuration/webhook";
/**
 * Options to pass to update a ConfigurationInstance
 *
 * @property { string } [defaultConversationCreatorRoleSid] The conversation-level role assigned to a conversation creator when they join a new conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
 * @property { string } [defaultConversationRoleSid] The conversation-level role assigned to users when they are added to a conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
 * @property { string } [defaultChatServiceRoleSid] The service-level role assigned to users when they are added to the service. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
 * @property { boolean } [reachabilityEnabled] Whether the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) is enabled for this Conversations Service. The default is `false`.
 */
export interface ConfigurationContextUpdateOptions {
    defaultConversationCreatorRoleSid?: string;
    defaultConversationRoleSid?: string;
    defaultChatServiceRoleSid?: string;
    reachabilityEnabled?: boolean;
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
    chatServiceSid?: string;
}
export declare class ConfigurationContextImpl implements ConfigurationContext {
    protected _version: V1;
    protected _solution: ConfigurationContextSolution;
    protected _uri: string;
    constructor(_version: V1, chatServiceSid: string);
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
    chat_service_sid?: string | null;
    default_conversation_creator_role_sid?: string | null;
    default_conversation_role_sid?: string | null;
    default_chat_service_role_sid?: string | null;
    url?: string | null;
    links?: object | null;
    reachability_enabled?: boolean | null;
}
export declare class ConfigurationInstance {
    protected _version: V1;
    protected _solution: ConfigurationContextSolution;
    protected _context?: ConfigurationContext;
    constructor(_version: V1, payload: ConfigurationResource, chatServiceSid: string);
    /**
     * The unique string that identifies the resource
     */
    chatServiceSid?: string | null;
    /**
     * The role assigned to a conversation creator user when they join a new conversation
     */
    defaultConversationCreatorRoleSid?: string | null;
    /**
     * The role assigned to users when they are added to a conversation
     */
    defaultConversationRoleSid?: string | null;
    /**
     * The service role assigned to users when they are added to the service
     */
    defaultChatServiceRoleSid?: string | null;
    /**
     * An absolute URL for this service configuration.
     */
    url?: string | null;
    /**
     * Absolute URL to access the push notifications configuration of this service.
     */
    links?: object | null;
    /**
     * Whether the Reachability Indicator feature is enabled for this Conversations Service
     */
    reachabilityEnabled?: boolean | null;
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
        chatServiceSid: string | null | undefined;
        defaultConversationCreatorRoleSid: string | null | undefined;
        defaultConversationRoleSid: string | null | undefined;
        defaultChatServiceRoleSid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
        reachabilityEnabled: boolean | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ConfigurationListInstance {
    (): ConfigurationContext;
    get(): ConfigurationContext;
    notifications: NotificationListInstance;
    webhooks: WebhookListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConfigurationSolution {
    chatServiceSid?: string;
}
export declare function ConfigurationListInstance(version: V1, chatServiceSid: string): ConfigurationListInstance;
export {};
