/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type ConfigurationAddressAutoCreationType = "webhook" | "studio" | "default";
declare type ConfigurationAddressMethod = "GET" | "POST";
declare type ConfigurationAddressType = "sms" | "whatsapp" | "messenger" | "gbm";
/**
 * Options to pass to update a AddressConfigurationInstance
 *
 * @property { string } [friendlyName] The human-readable name of this configuration, limited to 256 characters. Optional.
 * @property { boolean } [autoCreation.enabled] Enable/Disable auto-creating conversations for messages to this address
 * @property { ConfigurationAddressAutoCreationType } [autoCreation.type]
 * @property { string } [autoCreation.conversationServiceSid] Conversation Service for the auto-created conversation. If not set, the conversation is created in the default service.
 * @property { string } [autoCreation.webhookUrl] For type `webhook`, the url for the webhook request.
 * @property { ConfigurationAddressMethod } [autoCreation.webhookMethod]
 * @property { Array<string> } [autoCreation.webhookFilters] The list of events, firing webhook event for this Conversation. Values can be any of the following: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationStateUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`, `onDeliveryUpdated`
 * @property { string } [autoCreation.studioFlowSid] For type `studio`, the studio flow SID where the webhook should be sent to.
 * @property { number } [autoCreation.studioRetryCount] For type `studio`, number of times to retry the webhook request
 */
export interface AddressConfigurationContextUpdateOptions {
    friendlyName?: string;
    "autoCreation.enabled"?: boolean;
    "autoCreation.type"?: ConfigurationAddressAutoCreationType;
    "autoCreation.conversationServiceSid"?: string;
    "autoCreation.webhookUrl"?: string;
    "autoCreation.webhookMethod"?: ConfigurationAddressMethod;
    "autoCreation.webhookFilters"?: Array<string>;
    "autoCreation.studioFlowSid"?: string;
    "autoCreation.studioRetryCount"?: number;
}
/**
 * Options to pass to create a AddressConfigurationInstance
 *
 * @property { ConfigurationAddressType } type
 * @property { string } address The unique address to be configured. The address can be a whatsapp address or phone number
 * @property { string } [friendlyName] The human-readable name of this configuration, limited to 256 characters. Optional.
 * @property { boolean } [autoCreation.enabled] Enable/Disable auto-creating conversations for messages to this address
 * @property { ConfigurationAddressAutoCreationType } [autoCreation.type]
 * @property { string } [autoCreation.conversationServiceSid] Conversation Service for the auto-created conversation. If not set, the conversation is created in the default service.
 * @property { string } [autoCreation.webhookUrl] For type `webhook`, the url for the webhook request.
 * @property { ConfigurationAddressMethod } [autoCreation.webhookMethod]
 * @property { Array<string> } [autoCreation.webhookFilters] The list of events, firing webhook event for this Conversation. Values can be any of the following: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationStateUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`, `onDeliveryUpdated`
 * @property { string } [autoCreation.studioFlowSid] For type `studio`, the studio flow SID where the webhook should be sent to.
 * @property { number } [autoCreation.studioRetryCount] For type `studio`, number of times to retry the webhook request
 */
export interface AddressConfigurationListInstanceCreateOptions {
    type: ConfigurationAddressType;
    address: string;
    friendlyName?: string;
    "autoCreation.enabled"?: boolean;
    "autoCreation.type"?: ConfigurationAddressAutoCreationType;
    "autoCreation.conversationServiceSid"?: string;
    "autoCreation.webhookUrl"?: string;
    "autoCreation.webhookMethod"?: ConfigurationAddressMethod;
    "autoCreation.webhookFilters"?: Array<string>;
    "autoCreation.studioFlowSid"?: string;
    "autoCreation.studioRetryCount"?: number;
}
/**
 * Options to pass to each
 *
 * @property { string } [type] Filter the address configurations by its type. This value can be one of: `whatsapp`, `sms`.
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
export interface AddressConfigurationListInstanceEachOptions {
    type?: string;
    pageSize?: number;
    callback?: (item: AddressConfigurationInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [type] Filter the address configurations by its type. This value can be one of: `whatsapp`, `sms`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AddressConfigurationListInstanceOptions {
    type?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [type] Filter the address configurations by its type. This value can be one of: `whatsapp`, `sms`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AddressConfigurationListInstancePageOptions {
    type?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AddressConfigurationContext {
    /**
     * Remove a AddressConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AddressConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: AddressConfigurationInstance) => any): Promise<AddressConfigurationInstance>;
    /**
     * Update a AddressConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressConfigurationInstance
     */
    update(callback?: (error: Error | null, item?: AddressConfigurationInstance) => any): Promise<AddressConfigurationInstance>;
    /**
     * Update a AddressConfigurationInstance
     *
     * @param { AddressConfigurationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressConfigurationInstance
     */
    update(params: AddressConfigurationContextUpdateOptions, callback?: (error: Error | null, item?: AddressConfigurationInstance) => any): Promise<AddressConfigurationInstance>;
    update(params?: any, callback?: any): Promise<AddressConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AddressConfigurationContextSolution {
    sid?: string;
}
export declare class AddressConfigurationContextImpl implements AddressConfigurationContext {
    protected _version: V1;
    protected _solution: AddressConfigurationContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<AddressConfigurationInstance>;
    update(params?: any, callback?: any): Promise<AddressConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AddressConfigurationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AddressConfigurationPayload extends TwilioResponsePayload {
    address_configurations: AddressConfigurationResource[];
}
interface AddressConfigurationResource {
    sid?: string | null;
    account_sid?: string | null;
    type?: string | null;
    address?: string | null;
    friendly_name?: string | null;
    auto_creation?: any | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class AddressConfigurationInstance {
    protected _version: V1;
    protected _solution: AddressConfigurationContextSolution;
    protected _context?: AddressConfigurationContext;
    constructor(_version: V1, payload: AddressConfigurationResource, sid?: string);
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    /**
     * The unique ID of the Account the address belongs to.
     */
    accountSid?: string | null;
    /**
     * Type of Address.
     */
    type?: string | null;
    /**
     * The unique address to be configured.
     */
    address?: string | null;
    /**
     * The human-readable name of this configuration.
     */
    friendlyName?: string | null;
    /**
     * Auto Creation configuration for the address.
     */
    autoCreation?: any | null;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date | null;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date | null;
    /**
     * An absolute URL for this address configuration.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a AddressConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AddressConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: AddressConfigurationInstance) => any): Promise<AddressConfigurationInstance>;
    /**
     * Update a AddressConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressConfigurationInstance
     */
    update(callback?: (error: Error | null, item?: AddressConfigurationInstance) => any): Promise<AddressConfigurationInstance>;
    /**
     * Update a AddressConfigurationInstance
     *
     * @param { AddressConfigurationContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressConfigurationInstance
     */
    update(params: AddressConfigurationContextUpdateOptions, callback?: (error: Error | null, item?: AddressConfigurationInstance) => any): Promise<AddressConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        type: string | null | undefined;
        address: string | null | undefined;
        friendlyName: string | null | undefined;
        autoCreation: any;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AddressConfigurationListInstance {
    (sid: string): AddressConfigurationContext;
    get(sid: string): AddressConfigurationContext;
    /**
     * Create a AddressConfigurationInstance
     *
     * @param { AddressConfigurationListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AddressConfigurationInstance
     */
    create(params: AddressConfigurationListInstanceCreateOptions, callback?: (error: Error | null, item?: AddressConfigurationInstance) => any): Promise<AddressConfigurationInstance>;
    create(params: any, callback?: any): Promise<AddressConfigurationInstance>;
    /**
     * Streams AddressConfigurationInstance records from the API.
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
    each(callback?: (item: AddressConfigurationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AddressConfigurationInstance records from the API.
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
     * @param { AddressConfigurationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AddressConfigurationListInstanceEachOptions, callback?: (item: AddressConfigurationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AddressConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AddressConfigurationPage) => any): Promise<AddressConfigurationPage>;
    /**
     * Retrieve a single target page of AddressConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AddressConfigurationPage) => any): Promise<AddressConfigurationPage>;
    getPage(params?: any, callback?: any): Promise<AddressConfigurationPage>;
    /**
     * Lists AddressConfigurationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AddressConfigurationInstance[]) => any): Promise<AddressConfigurationInstance[]>;
    /**
     * Lists AddressConfigurationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AddressConfigurationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AddressConfigurationListInstanceOptions, callback?: (error: Error | null, items: AddressConfigurationInstance[]) => any): Promise<AddressConfigurationInstance[]>;
    list(params?: any, callback?: any): Promise<AddressConfigurationInstance[]>;
    /**
     * Retrieve a single page of AddressConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AddressConfigurationPage) => any): Promise<AddressConfigurationPage>;
    /**
     * Retrieve a single page of AddressConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AddressConfigurationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AddressConfigurationListInstancePageOptions, callback?: (error: Error | null, items: AddressConfigurationPage) => any): Promise<AddressConfigurationPage>;
    page(params?: any, callback?: any): Promise<AddressConfigurationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AddressConfigurationSolution {
}
export declare function AddressConfigurationListInstance(version: V1): AddressConfigurationListInstance;
export declare class AddressConfigurationPage extends Page<V1, AddressConfigurationPayload, AddressConfigurationResource, AddressConfigurationInstance> {
    /**
     * Initialize the AddressConfigurationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: AddressConfigurationSolution);
    /**
     * Build an instance of AddressConfigurationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AddressConfigurationResource): AddressConfigurationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
