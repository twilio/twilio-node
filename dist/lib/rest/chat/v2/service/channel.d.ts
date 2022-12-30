/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
import { InviteListInstance } from "./channel/invite";
import { MemberListInstance } from "./channel/member";
import { MessageListInstance } from "./channel/message";
import { WebhookListInstance } from "./channel/webhook";
declare type ChannelChannelType = "public" | "private";
declare type ChannelWebhookEnabledType = "true" | "false";
/**
 * Options to pass to remove a ChannelInstance
 *
 * @property { ChannelWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface ChannelContextRemoveOptions {
    xTwilioWebhookEnabled?: ChannelWebhookEnabledType;
}
/**
 * Options to pass to update a ChannelInstance
 *
 * @property { ChannelWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 256 characters long.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL. This value must be 256 characters or less in length and unique within the Service.
 * @property { string } [attributes] A valid JSON string that contains application-specific data.
 * @property { Date } [dateCreated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was created. The default value is the current time set by the Chat service.  Note that this should only be used in cases where a Channel is being recreated from a backup/separate source.
 * @property { Date } [dateUpdated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was last updated.
 * @property { string } [createdBy] The `identity` of the User that created the channel. Default is: `system`.
 */
export interface ChannelContextUpdateOptions {
    xTwilioWebhookEnabled?: ChannelWebhookEnabledType;
    friendlyName?: string;
    uniqueName?: string;
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    createdBy?: string;
}
/**
 * Options to pass to create a ChannelInstance
 *
 * @property { ChannelWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 * @property { string } [friendlyName] A descriptive string that you create to describe the new resource. It can be up to 64 characters long.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the Channel resource\\\'s `sid` in the URL. This value must be 64 characters or less in length and be unique within the Service.
 * @property { string } [attributes] A valid JSON string that contains application-specific data.
 * @property { ChannelChannelType } [type]
 * @property { Date } [dateCreated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was created. The default value is the current time set by the Chat service.  Note that this should only be used in cases where a Channel is being recreated from a backup/separate source.
 * @property { Date } [dateUpdated] The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was last updated. The default value is `null`. Note that this parameter should only be used in cases where a Channel is being recreated from a backup/separate source  and where a Message was previously updated.
 * @property { string } [createdBy] The `identity` of the User that created the channel. Default is: `system`.
 */
export interface ChannelListInstanceCreateOptions {
    xTwilioWebhookEnabled?: ChannelWebhookEnabledType;
    friendlyName?: string;
    uniqueName?: string;
    attributes?: string;
    type?: ChannelChannelType;
    dateCreated?: Date;
    dateUpdated?: Date;
    createdBy?: string;
}
/**
 * Options to pass to each
 *
 * @property { Array<ChannelChannelType> } [type] The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`.
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
export interface ChannelListInstanceEachOptions {
    type?: Array<ChannelChannelType>;
    pageSize?: number;
    callback?: (item: ChannelInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { Array<ChannelChannelType> } [type] The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ChannelListInstanceOptions {
    type?: Array<ChannelChannelType>;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { Array<ChannelChannelType> } [type] The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ChannelListInstancePageOptions {
    type?: Array<ChannelChannelType>;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ChannelContext {
    invites: InviteListInstance;
    members: MemberListInstance;
    messages: MessageListInstance;
    webhooks: WebhookListInstance;
    /**
     * Remove a ChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a ChannelInstance
     *
     * @param { ChannelContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChannelInstance
     */
    remove(params: ChannelContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    remove(params?: any, callback?: any): Promise<boolean>;
    /**
     * Fetch a ChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>;
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
    protected _version: V2;
    protected _solution: ChannelContextSolution;
    protected _uri: string;
    protected _invites?: InviteListInstance;
    protected _members?: MemberListInstance;
    protected _messages?: MessageListInstance;
    protected _webhooks?: WebhookListInstance;
    constructor(_version: V2, serviceSid: string, sid: string);
    get invites(): InviteListInstance;
    get members(): MemberListInstance;
    get messages(): MessageListInstance;
    get webhooks(): WebhookListInstance;
    remove(params?: any, callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<ChannelInstance>;
    update(params?: any, callback?: any): Promise<ChannelInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ChannelContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ChannelPayload extends TwilioResponsePayload {
    channels: ChannelResource[];
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
    url?: string | null;
    links?: object | null;
}
export declare class ChannelInstance {
    protected _version: V2;
    protected _solution: ChannelContextSolution;
    protected _context?: ChannelContext;
    constructor(_version: V2, payload: ChannelResource, serviceSid: string, sid?: string);
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
     * The absolute URL of the Channel resource
     */
    url?: string | null;
    /**
     * Absolute URLs to access the Members, Messages , Invites and, if it exists, the last Message for the Channel
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a ChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a ChannelInstance
     *
     * @param { ChannelContextRemoveOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChannelInstance
     */
    remove(params: ChannelContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChannelInstance
     */
    fetch(callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>;
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
     * Access the invites.
     */
    invites(): InviteListInstance;
    /**
     * Access the members.
     */
    members(): MemberListInstance;
    /**
     * Access the messages.
     */
    messages(): MessageListInstance;
    /**
     * Access the webhooks.
     */
    webhooks(): WebhookListInstance;
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
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ChannelListInstance {
    (sid: string): ChannelContext;
    get(sid: string): ChannelContext;
    /**
     * Create a ChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChannelInstance
     */
    create(callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>;
    /**
     * Create a ChannelInstance
     *
     * @param { ChannelListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ChannelInstance
     */
    create(params: ChannelListInstanceCreateOptions, callback?: (error: Error | null, item?: ChannelInstance) => any): Promise<ChannelInstance>;
    create(params?: any, callback?: any): Promise<ChannelInstance>;
    /**
     * Streams ChannelInstance records from the API.
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
    each(callback?: (item: ChannelInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ChannelInstance records from the API.
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
     * @param { ChannelListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ChannelListInstanceEachOptions, callback?: (item: ChannelInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
    /**
     * Retrieve a single target page of ChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
    getPage(params?: any, callback?: any): Promise<ChannelPage>;
    /**
     * Lists ChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ChannelInstance[]) => any): Promise<ChannelInstance[]>;
    /**
     * Lists ChannelInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ChannelListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ChannelListInstanceOptions, callback?: (error: Error | null, items: ChannelInstance[]) => any): Promise<ChannelInstance[]>;
    list(params?: any, callback?: any): Promise<ChannelInstance[]>;
    /**
     * Retrieve a single page of ChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
    /**
     * Retrieve a single page of ChannelInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ChannelListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ChannelListInstancePageOptions, callback?: (error: Error | null, items: ChannelPage) => any): Promise<ChannelPage>;
    page(params?: any, callback?: any): Promise<ChannelPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ChannelSolution {
    serviceSid?: string;
}
export declare function ChannelListInstance(version: V2, serviceSid: string): ChannelListInstance;
export declare class ChannelPage extends Page<V2, ChannelPayload, ChannelResource, ChannelInstance> {
    /**
     * Initialize the ChannelPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: ChannelSolution);
    /**
     * Build an instance of ChannelInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ChannelResource): ChannelInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
