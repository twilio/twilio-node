/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V3 from "../V3";
declare type ChannelChannelType = "public" | "private";
declare type ChannelWebhookEnabledType = "true" | "false";
/**
 * Options to pass to update a ChannelInstance
 *
 * @property { ChannelWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { ChannelChannelType } [type]
 * @property { string } [messagingServiceSid] The unique ID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) this channel belongs to.
 */
export interface ChannelContextUpdateOptions {
    xTwilioWebhookEnabled?: ChannelWebhookEnabledType;
    type?: ChannelChannelType;
    messagingServiceSid?: string;
}
export interface ChannelContext {
    /**
     * Update a ChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChannelInstance
     */
    update(callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>;
    /**
     * Update a ChannelInstance
     *
     * @param { ChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChannelInstance
     */
    update(params: ChannelContextUpdateOptions, callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>;
    update(params?: any, callback?: any): Promise<ChannelInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ChannelContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class ChannelContextImpl implements ChannelContext {
    protected _version: V3;
    protected _solution: ChannelContextSolution;
    protected _uri: string;
    constructor(_version: V3, serviceSid: string, sid: string);
    update(params?: any, callback?: any): Promise<ChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ChannelContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ChannelResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    friendly_name?: string | null;
    unique_name?: string | null;
    attributes?: string | null;
    type?: ChannelChannelType;
    date_created?: Date | null;
    date_updated?: Date | null;
    created_by?: string | null;
    members_count?: number | null;
    messages_count?: number | null;
    messaging_service_sid?: string | null;
    url?: string | null;
}
export declare class ChannelInstance {
    protected _version: V3;
    protected _solution: ChannelContextSolution;
    protected _context?: ChannelContext;
    constructor(_version: V3, payload: ChannelResource, serviceSid?: string, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The JSON string that stores application-specific data
     */
    attributes?: string | null;
    type?: ChannelChannelType;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The identity of the User that created the channel
     */
    createdBy?: string | null;
    /**
     * The number of Members in the Channel
     */
    membersCount?: number | null;
    /**
     * The number of Messages that have been passed in the Channel
     */
    messagesCount?: number | null;
    /**
     * The unique ID of the Messaging Service this channel belongs to.
     */
    messagingServiceSid?: string | null;
    /**
     * The absolute URL of the Channel resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Update a ChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChannelInstance
     */
    update(callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>;
    /**
     * Update a ChannelInstance
     *
     * @param { ChannelContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChannelInstance
     */
    update(params: ChannelContextUpdateOptions, callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        friendlyName: string | null | undefined;
        uniqueName: string | null | undefined;
        attributes: string | null | undefined;
        type: ChannelChannelType | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        createdBy: string | null | undefined;
        membersCount: number | null | undefined;
        messagesCount: number | null | undefined;
        messagingServiceSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ChannelListInstance {
    (serviceSid: string, sid: string): ChannelContext;
    get(serviceSid: string, sid: string): ChannelContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ChannelSolution {
}
export declare function ChannelListInstance(version: V3): ChannelListInstance;
export {};
