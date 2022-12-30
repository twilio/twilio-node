/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type FlexFlowChannelType = "web" | "sms" | "facebook" | "whatsapp" | "line" | "custom";
declare type FlexFlowIntegrationType = "studio" | "external" | "task";
/**
 * Options to pass to update a FlexFlowInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the Flex Flow resource.
 * @property { string } [chatServiceSid] The SID of the chat service.
 * @property { FlexFlowChannelType } [channelType]
 * @property { string } [contactIdentity] The channel contact\\\'s Identity.
 * @property { boolean } [enabled] Whether the new Flex Flow is enabled.
 * @property { FlexFlowIntegrationType } [integrationType]
 * @property { string } [integration.flowSid] The SID of the Studio Flow. Required when `integrationType` is `studio`.
 * @property { string } [integration.url] The URL of the external webhook. Required when `integrationType` is `external`.
 * @property { string } [integration.workspaceSid] The Workspace SID for a new Task. Required when `integrationType` is `task`.
 * @property { string } [integration.workflowSid] The Workflow SID for a new Task. Required when `integrationType` is `task`.
 * @property { string } [integration.channel] The Task Channel SID (TCXXXX) or unique name (e.g., `sms`) to use for the Task that will be created. Applicable and required when `integrationType` is `task`. The default value is `default`.
 * @property { number } [integration.timeout] The Task timeout in seconds for a new Task. Default is 86,400 seconds (24 hours). Optional when `integrationType` is `task`, not applicable otherwise.
 * @property { number } [integration.priority] The Task priority of a new Task. The default priority is 0. Optional when `integrationType` is `task`, not applicable otherwise.
 * @property { boolean } [integration.creationOnMessage] In the context of outbound messaging, defines whether to create a Task immediately (and therefore reserve the conversation to current agent), or delay Task creation until the customer sends the first response. Set to false to create immediately, true to delay Task creation. This setting is only applicable for outbound messaging.
 * @property { boolean } [longLived] When enabled, Flex will keep the chat channel active so that it may be used for subsequent interactions with a contact identity. Defaults to `false`.
 * @property { boolean } [janitorEnabled] When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the associated Task is deleted outside of the Flex UI. Defaults to `false`.
 * @property { number } [integration.retryCount] The number of times to retry the Studio Flow or webhook in case of failure. Takes integer values from 0 to 3 with the default being 3. Optional when `integrationType` is `studio` or `external`, not applicable otherwise.
 */
export interface FlexFlowContextUpdateOptions {
    friendlyName?: string;
    chatServiceSid?: string;
    channelType?: FlexFlowChannelType;
    contactIdentity?: string;
    enabled?: boolean;
    integrationType?: FlexFlowIntegrationType;
    "integration.flowSid"?: string;
    "integration.url"?: string;
    "integration.workspaceSid"?: string;
    "integration.workflowSid"?: string;
    "integration.channel"?: string;
    "integration.timeout"?: number;
    "integration.priority"?: number;
    "integration.creationOnMessage"?: boolean;
    longLived?: boolean;
    janitorEnabled?: boolean;
    "integration.retryCount"?: number;
}
/**
 * Options to pass to create a FlexFlowInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Flex Flow resource.
 * @property { string } chatServiceSid The SID of the chat service.
 * @property { FlexFlowChannelType } channelType
 * @property { string } [contactIdentity] The channel contact\\\'s Identity.
 * @property { boolean } [enabled] Whether the new Flex Flow is enabled.
 * @property { FlexFlowIntegrationType } [integrationType]
 * @property { string } [integration.flowSid] The SID of the Studio Flow. Required when `integrationType` is `studio`.
 * @property { string } [integration.url] The URL of the external webhook. Required when `integrationType` is `external`.
 * @property { string } [integration.workspaceSid] The Workspace SID for a new Task. Required when `integrationType` is `task`.
 * @property { string } [integration.workflowSid] The Workflow SID for a new Task. Required when `integrationType` is `task`.
 * @property { string } [integration.channel] The Task Channel SID (TCXXXX) or unique name (e.g., `sms`) to use for the Task that will be created. Applicable and required when `integrationType` is `task`. The default value is `default`.
 * @property { number } [integration.timeout] The Task timeout in seconds for a new Task. Default is 86,400 seconds (24 hours). Optional when `integrationType` is `task`, not applicable otherwise.
 * @property { number } [integration.priority] The Task priority of a new Task. The default priority is 0. Optional when `integrationType` is `task`, not applicable otherwise.
 * @property { boolean } [integration.creationOnMessage] In the context of outbound messaging, defines whether to create a Task immediately (and therefore reserve the conversation to current agent), or delay Task creation until the customer sends the first response. Set to false to create immediately, true to delay Task creation. This setting is only applicable for outbound messaging.
 * @property { boolean } [longLived] When enabled, Flex will keep the chat channel active so that it may be used for subsequent interactions with a contact identity. Defaults to `false`.
 * @property { boolean } [janitorEnabled] When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the associated Task is deleted outside of the Flex UI. Defaults to `false`.
 * @property { number } [integration.retryCount] The number of times to retry the Studio Flow or webhook in case of failure. Takes integer values from 0 to 3 with the default being 3. Optional when `integrationType` is `studio` or `external`, not applicable otherwise.
 */
export interface FlexFlowListInstanceCreateOptions {
    friendlyName: string;
    chatServiceSid: string;
    channelType: FlexFlowChannelType;
    contactIdentity?: string;
    enabled?: boolean;
    integrationType?: FlexFlowIntegrationType;
    "integration.flowSid"?: string;
    "integration.url"?: string;
    "integration.workspaceSid"?: string;
    "integration.workflowSid"?: string;
    "integration.channel"?: string;
    "integration.timeout"?: number;
    "integration.priority"?: number;
    "integration.creationOnMessage"?: boolean;
    longLived?: boolean;
    janitorEnabled?: boolean;
    "integration.retryCount"?: number;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The `friendly_name` of the Flex Flow resources to read.
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
export interface FlexFlowListInstanceEachOptions {
    friendlyName?: string;
    pageSize?: number;
    callback?: (item: FlexFlowInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The `friendly_name` of the Flex Flow resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface FlexFlowListInstanceOptions {
    friendlyName?: string;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The `friendly_name` of the Flex Flow resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface FlexFlowListInstancePageOptions {
    friendlyName?: string;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface FlexFlowContext {
    /**
     * Remove a FlexFlowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FlexFlowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlexFlowInstance
     */
    fetch(callback?: (error: Error | null, item?: FlexFlowInstance) => any): Promise<FlexFlowInstance>;
    /**
     * Update a FlexFlowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlexFlowInstance
     */
    update(callback?: (error: Error | null, item?: FlexFlowInstance) => any): Promise<FlexFlowInstance>;
    /**
     * Update a FlexFlowInstance
     *
     * @param { FlexFlowContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlexFlowInstance
     */
    update(params: FlexFlowContextUpdateOptions, callback?: (error: Error | null, item?: FlexFlowInstance) => any): Promise<FlexFlowInstance>;
    update(params?: any, callback?: any): Promise<FlexFlowInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FlexFlowContextSolution {
    sid?: string;
}
export declare class FlexFlowContextImpl implements FlexFlowContext {
    protected _version: V1;
    protected _solution: FlexFlowContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<FlexFlowInstance>;
    update(params?: any, callback?: any): Promise<FlexFlowInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FlexFlowContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FlexFlowPayload extends TwilioResponsePayload {
    flex_flows: FlexFlowResource[];
}
interface FlexFlowResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    sid?: string | null;
    friendly_name?: string | null;
    chat_service_sid?: string | null;
    channel_type?: FlexFlowChannelType;
    contact_identity?: string | null;
    enabled?: boolean | null;
    integration_type?: FlexFlowIntegrationType;
    integration?: any | null;
    long_lived?: boolean | null;
    janitor_enabled?: boolean | null;
    url?: string | null;
}
export declare class FlexFlowInstance {
    protected _version: V1;
    protected _solution: FlexFlowContextSolution;
    protected _context?: FlexFlowContext;
    constructor(_version: V1, payload: FlexFlowResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The SID of the chat service
     */
    chatServiceSid?: string | null;
    channelType?: FlexFlowChannelType;
    /**
     * The channel contact\'s Identity
     */
    contactIdentity?: string | null;
    /**
     * Whether the Flex Flow is enabled
     */
    enabled?: boolean | null;
    integrationType?: FlexFlowIntegrationType;
    /**
     * An object that contains specific parameters for the integration
     */
    integration?: any | null;
    /**
     * Re-use this chat channel for future interactions with a contact
     */
    longLived?: boolean | null;
    /**
     * Remove active Proxy sessions if the corresponding Task is deleted.
     */
    janitorEnabled?: boolean | null;
    /**
     * The absolute URL of the Flex Flow resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a FlexFlowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FlexFlowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlexFlowInstance
     */
    fetch(callback?: (error: Error | null, item?: FlexFlowInstance) => any): Promise<FlexFlowInstance>;
    /**
     * Update a FlexFlowInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlexFlowInstance
     */
    update(callback?: (error: Error | null, item?: FlexFlowInstance) => any): Promise<FlexFlowInstance>;
    /**
     * Update a FlexFlowInstance
     *
     * @param { FlexFlowContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlexFlowInstance
     */
    update(params: FlexFlowContextUpdateOptions, callback?: (error: Error | null, item?: FlexFlowInstance) => any): Promise<FlexFlowInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        chatServiceSid: string | null | undefined;
        channelType: FlexFlowChannelType | undefined;
        contactIdentity: string | null | undefined;
        enabled: boolean | null | undefined;
        integrationType: FlexFlowIntegrationType | undefined;
        integration: any;
        longLived: boolean | null | undefined;
        janitorEnabled: boolean | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FlexFlowListInstance {
    (sid: string): FlexFlowContext;
    get(sid: string): FlexFlowContext;
    /**
     * Create a FlexFlowInstance
     *
     * @param { FlexFlowListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlexFlowInstance
     */
    create(params: FlexFlowListInstanceCreateOptions, callback?: (error: Error | null, item?: FlexFlowInstance) => any): Promise<FlexFlowInstance>;
    create(params: any, callback?: any): Promise<FlexFlowInstance>;
    /**
     * Streams FlexFlowInstance records from the API.
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
    each(callback?: (item: FlexFlowInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams FlexFlowInstance records from the API.
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
     * @param { FlexFlowListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: FlexFlowListInstanceEachOptions, callback?: (item: FlexFlowInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of FlexFlowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: FlexFlowPage) => any): Promise<FlexFlowPage>;
    /**
     * Retrieve a single target page of FlexFlowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: FlexFlowPage) => any): Promise<FlexFlowPage>;
    getPage(params?: any, callback?: any): Promise<FlexFlowPage>;
    /**
     * Lists FlexFlowInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FlexFlowInstance[]) => any): Promise<FlexFlowInstance[]>;
    /**
     * Lists FlexFlowInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FlexFlowListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: FlexFlowListInstanceOptions, callback?: (error: Error | null, items: FlexFlowInstance[]) => any): Promise<FlexFlowInstance[]>;
    list(params?: any, callback?: any): Promise<FlexFlowInstance[]>;
    /**
     * Retrieve a single page of FlexFlowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FlexFlowPage) => any): Promise<FlexFlowPage>;
    /**
     * Retrieve a single page of FlexFlowInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FlexFlowListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: FlexFlowListInstancePageOptions, callback?: (error: Error | null, items: FlexFlowPage) => any): Promise<FlexFlowPage>;
    page(params?: any, callback?: any): Promise<FlexFlowPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FlexFlowSolution {
}
export declare function FlexFlowListInstance(version: V1): FlexFlowListInstance;
export declare class FlexFlowPage extends Page<V1, FlexFlowPayload, FlexFlowResource, FlexFlowInstance> {
    /**
     * Initialize the FlexFlowPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: FlexFlowSolution);
    /**
     * Build an instance of FlexFlowInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FlexFlowResource): FlexFlowInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
