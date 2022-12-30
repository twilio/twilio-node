/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to update a NotificationInstance
 *
 * @property { boolean } [logEnabled] Weather the notification logging is enabled.
 * @property { boolean } [newMessage.enabled] Whether to send a notification when a new message is added to a conversation. The default is `false`.
 * @property { string } [newMessage.template] The template to use to create the notification text displayed when a new message is added to a conversation and `new_message.enabled` is `true`.
 * @property { string } [newMessage.sound] The name of the sound to play when a new message is added to a conversation and `new_message.enabled` is `true`.
 * @property { boolean } [newMessage.badgeCountEnabled] Whether the new message badge is enabled. The default is `false`.
 * @property { boolean } [addedToConversation.enabled] Whether to send a notification when a participant is added to a conversation. The default is `false`.
 * @property { string } [addedToConversation.template] The template to use to create the notification text displayed when a participant is added to a conversation and `added_to_conversation.enabled` is `true`.
 * @property { string } [addedToConversation.sound] The name of the sound to play when a participant is added to a conversation and `added_to_conversation.enabled` is `true`.
 * @property { boolean } [removedFromConversation.enabled] Whether to send a notification to a user when they are removed from a conversation. The default is `false`.
 * @property { string } [removedFromConversation.template] The template to use to create the notification text displayed to a user when they are removed from a conversation and `removed_from_conversation.enabled` is `true`.
 * @property { string } [removedFromConversation.sound] The name of the sound to play to a user when they are removed from a conversation and `removed_from_conversation.enabled` is `true`.
 * @property { boolean } [newMessage.withMedia.enabled] Whether to send a notification when a new message with media/file attachments is added to a conversation. The default is `false`.
 * @property { string } [newMessage.withMedia.template] The template to use to create the notification text displayed when a new message with media/file attachments is added to a conversation and `new_message.attachments.enabled` is `true`.
 */
export interface NotificationContextUpdateOptions {
    logEnabled?: boolean;
    "newMessage.enabled"?: boolean;
    "newMessage.template"?: string;
    "newMessage.sound"?: string;
    "newMessage.badgeCountEnabled"?: boolean;
    "addedToConversation.enabled"?: boolean;
    "addedToConversation.template"?: string;
    "addedToConversation.sound"?: string;
    "removedFromConversation.enabled"?: boolean;
    "removedFromConversation.template"?: string;
    "removedFromConversation.sound"?: string;
    "newMessage.withMedia.enabled"?: boolean;
    "newMessage.withMedia.template"?: string;
}
export interface NotificationContext {
    /**
     * Fetch a NotificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    fetch(callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    /**
     * Update a NotificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    update(callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    /**
     * Update a NotificationInstance
     *
     * @param { NotificationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    update(params: NotificationContextUpdateOptions, callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    update(params?: any, callback?: any): Promise<NotificationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NotificationContextSolution {
    chatServiceSid?: string;
}
export declare class NotificationContextImpl implements NotificationContext {
    protected _version: V1;
    protected _solution: NotificationContextSolution;
    protected _uri: string;
    constructor(_version: V1, chatServiceSid: string);
    fetch(callback?: any): Promise<NotificationInstance>;
    update(params?: any, callback?: any): Promise<NotificationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): NotificationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface NotificationResource {
    account_sid?: string | null;
    chat_service_sid?: string | null;
    new_message?: any | null;
    added_to_conversation?: any | null;
    removed_from_conversation?: any | null;
    log_enabled?: boolean | null;
    url?: string | null;
}
export declare class NotificationInstance {
    protected _version: V1;
    protected _solution: NotificationContextSolution;
    protected _context?: NotificationContext;
    constructor(_version: V1, payload: NotificationResource, chatServiceSid: string);
    /**
     * The unique ID of the Account responsible for this configuration.
     */
    accountSid?: string | null;
    /**
     * The SID of the Conversation Service that the Configuration applies to.
     */
    chatServiceSid?: string | null;
    /**
     * The Push Notification configuration for New Messages.
     */
    newMessage?: any | null;
    /**
     * The Push Notification configuration for being added to a Conversation.
     */
    addedToConversation?: any | null;
    /**
     * The Push Notification configuration for being removed from a Conversation.
     */
    removedFromConversation?: any | null;
    /**
     * Weather the notification logging is enabled.
     */
    logEnabled?: boolean | null;
    /**
     * An absolute URL for this configuration.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a NotificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    fetch(callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    /**
     * Update a NotificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    update(callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    /**
     * Update a NotificationInstance
     *
     * @param { NotificationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    update(params: NotificationContextUpdateOptions, callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        chatServiceSid: string | null | undefined;
        newMessage: any;
        addedToConversation: any;
        removedFromConversation: any;
        logEnabled: boolean | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface NotificationListInstance {
    (): NotificationContext;
    get(): NotificationContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NotificationSolution {
    chatServiceSid?: string;
}
export declare function NotificationListInstance(version: V1, chatServiceSid: string): NotificationListInstance;
export {};
