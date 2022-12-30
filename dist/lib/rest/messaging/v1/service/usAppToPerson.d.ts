/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to create a UsAppToPersonInstance
 *
 * @property { string } brandRegistrationSid A2P Brand Registration SID
 * @property { string } description A short description of what this SMS campaign does. Min length: 40 characters. Max length: 4096 characters.
 * @property { string } messageFlow Required for all Campaigns. Details around how a consumer opts-in to their campaign, therefore giving consent to receive their messages. If multiple opt-in methods can be used for the same campaign, they must all be listed. 40 character minimum. 2048 character maximum.
 * @property { Array<string> } messageSamples Message samples, at least 1 and up to 5 sample messages (at least 2 for sole proprietor), >=20 chars, <=1024 chars each.
 * @property { string } usAppToPersonUsecase A2P Campaign Use Case. Examples: [ 2FA, EMERGENCY, MARKETING..]
 * @property { boolean } hasEmbeddedLinks Indicates that this SMS campaign will send messages that contain links.
 * @property { boolean } hasEmbeddedPhone Indicates that this SMS campaign will send messages that contain phone numbers.
 * @property { string } [optInMessage] If end users can text in a keyword to start receiving messages from this campaign, the auto-reply messages sent to the end users must be provided. The opt-in response should include the Brand name, confirmation of opt-in enrollment to a recurring message campaign, how to get help, and clear description of how to opt-out. This field is required if end users can text in a keyword to start receiving messages from this campaign. 20 character minimum. 320 character maximum.
 * @property { string } [optOutMessage] Upon receiving the opt-out keywords from the end users, Twilio customers are expected to send back an auto-generated response, which must provide acknowledgment of the opt-out request and confirmation that no further messages will be sent. It is also recommended that these opt-out messages include the brand name. This field is required if managing opt out keywords yourself (i.e. not using Twilio\\\'s Default or Advanced Opt Out features). 20 character minimum. 320 character maximum.
 * @property { string } [helpMessage] When customers receive the help keywords from their end users, Twilio customers are expected to send back an auto-generated response; this may include the brand name and additional support contact information. This field is required if managing help keywords yourself (i.e. not using Twilio\\\'s Default or Advanced Opt Out features). 20 character minimum. 320 character maximum.
 * @property { Array<string> } [optInKeywords] If end users can text in a keyword to start receiving messages from this campaign, those keywords must be provided. This field is required if end users can text in a keyword to start receiving messages from this campaign. Values must be alphanumeric. 255 character maximum.
 * @property { Array<string> } [optOutKeywords] End users should be able to text in a keyword to stop receiving messages from this campaign. Those keywords must be provided. This field is required if managing opt out keywords yourself (i.e. not using Twilio\\\'s Default or Advanced Opt Out features). Values must be alphanumeric. 255 character maximum.
 * @property { Array<string> } [helpKeywords] End users should be able to text in a keyword to receive help. Those keywords must be provided as part of the campaign registration request. This field is required if managing help keywords yourself (i.e. not using Twilio\\\'s Default or Advanced Opt Out features). Values must be alphanumeric. 255 character maximum.
 */
export interface UsAppToPersonListInstanceCreateOptions {
    brandRegistrationSid: string;
    description: string;
    messageFlow: string;
    messageSamples: Array<string>;
    usAppToPersonUsecase: string;
    hasEmbeddedLinks: boolean;
    hasEmbeddedPhone: boolean;
    optInMessage?: string;
    optOutMessage?: string;
    helpMessage?: string;
    optInKeywords?: Array<string>;
    optOutKeywords?: Array<string>;
    helpKeywords?: Array<string>;
}
/**
 * Options to pass to each
 *
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
export interface UsAppToPersonListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: UsAppToPersonInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface UsAppToPersonListInstanceOptions {
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface UsAppToPersonListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface UsAppToPersonContext {
    /**
     * Remove a UsAppToPersonInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a UsAppToPersonInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UsAppToPersonInstance
     */
    fetch(callback?: (error: Error | null, item?: UsAppToPersonInstance) => any): Promise<UsAppToPersonInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UsAppToPersonContextSolution {
    messagingServiceSid?: string;
    sid?: string;
}
export declare class UsAppToPersonContextImpl implements UsAppToPersonContext {
    protected _version: V1;
    protected _solution: UsAppToPersonContextSolution;
    protected _uri: string;
    constructor(_version: V1, messagingServiceSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<UsAppToPersonInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UsAppToPersonContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UsAppToPersonPayload extends TwilioResponsePayload {
    compliance: UsAppToPersonResource[];
}
interface UsAppToPersonResource {
    sid?: string | null;
    account_sid?: string | null;
    brand_registration_sid?: string | null;
    messaging_service_sid?: string | null;
    description?: string | null;
    message_samples?: Array<string> | null;
    us_app_to_person_usecase?: string | null;
    has_embedded_links?: boolean | null;
    has_embedded_phone?: boolean | null;
    campaign_status?: string | null;
    campaign_id?: string | null;
    is_externally_registered?: boolean | null;
    rate_limits?: any | null;
    message_flow?: string | null;
    opt_in_message?: string | null;
    opt_out_message?: string | null;
    help_message?: string | null;
    opt_in_keywords?: Array<string> | null;
    opt_out_keywords?: Array<string> | null;
    help_keywords?: Array<string> | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
    mock?: boolean | null;
}
export declare class UsAppToPersonInstance {
    protected _version: V1;
    protected _solution: UsAppToPersonContextSolution;
    protected _context?: UsAppToPersonContext;
    constructor(_version: V1, payload: UsAppToPersonResource, messagingServiceSid: string, sid?: string);
    /**
     * The unique string that identifies a US A2P Compliance resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * A2P Brand Registration SID
     */
    brandRegistrationSid?: string | null;
    /**
     * The SID of the Messaging Service the resource is associated with
     */
    messagingServiceSid?: string | null;
    /**
     * A short description of what this SMS campaign does
     */
    description?: string | null;
    /**
     * Message samples
     */
    messageSamples?: Array<string> | null;
    /**
     * A2P Campaign Use Case.
     */
    usAppToPersonUsecase?: string | null;
    /**
     * Indicate that this SMS campaign will send messages that contain links
     */
    hasEmbeddedLinks?: boolean | null;
    /**
     * Indicates that this SMS campaign will send messages that contain phone numbers
     */
    hasEmbeddedPhone?: boolean | null;
    /**
     * Campaign status
     */
    campaignStatus?: string | null;
    /**
     * The Campaign Registry (TCR) Campaign ID.
     */
    campaignId?: string | null;
    /**
     * Indicates whether the campaign was registered externally or not
     */
    isExternallyRegistered?: boolean | null;
    /**
     * Rate limit and/or classification set by each carrier
     */
    rateLimits?: any | null;
    /**
     * Consumer opt-in flow
     */
    messageFlow?: string | null;
    /**
     * Opt In Message
     */
    optInMessage?: string | null;
    /**
     * Opt Out Message
     */
    optOutMessage?: string | null;
    /**
     * Help Message
     */
    helpMessage?: string | null;
    /**
     * Opt In Keywords
     */
    optInKeywords?: Array<string> | null;
    /**
     * Opt Out Keywords
     */
    optOutKeywords?: Array<string> | null;
    /**
     * Help Keywords
     */
    helpKeywords?: Array<string> | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The absolute URL of the US App to Person resource
     */
    url?: string | null;
    /**
     * A boolean that specifies whether campaign is a mock or not.
     */
    mock?: boolean | null;
    private get _proxy();
    /**
     * Remove a UsAppToPersonInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a UsAppToPersonInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UsAppToPersonInstance
     */
    fetch(callback?: (error: Error | null, item?: UsAppToPersonInstance) => any): Promise<UsAppToPersonInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        brandRegistrationSid: string | null | undefined;
        messagingServiceSid: string | null | undefined;
        description: string | null | undefined;
        messageSamples: string[] | null | undefined;
        usAppToPersonUsecase: string | null | undefined;
        hasEmbeddedLinks: boolean | null | undefined;
        hasEmbeddedPhone: boolean | null | undefined;
        campaignStatus: string | null | undefined;
        campaignId: string | null | undefined;
        isExternallyRegistered: boolean | null | undefined;
        rateLimits: any;
        messageFlow: string | null | undefined;
        optInMessage: string | null | undefined;
        optOutMessage: string | null | undefined;
        helpMessage: string | null | undefined;
        optInKeywords: string[] | null | undefined;
        optOutKeywords: string[] | null | undefined;
        helpKeywords: string[] | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
        mock: boolean | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UsAppToPersonListInstance {
    (sid: string): UsAppToPersonContext;
    get(sid: string): UsAppToPersonContext;
    /**
     * Create a UsAppToPersonInstance
     *
     * @param { UsAppToPersonListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UsAppToPersonInstance
     */
    create(params: UsAppToPersonListInstanceCreateOptions, callback?: (error: Error | null, item?: UsAppToPersonInstance) => any): Promise<UsAppToPersonInstance>;
    create(params: any, callback?: any): Promise<UsAppToPersonInstance>;
    /**
     * Streams UsAppToPersonInstance records from the API.
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
    each(callback?: (item: UsAppToPersonInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams UsAppToPersonInstance records from the API.
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
     * @param { UsAppToPersonListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: UsAppToPersonListInstanceEachOptions, callback?: (item: UsAppToPersonInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of UsAppToPersonInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: UsAppToPersonPage) => any): Promise<UsAppToPersonPage>;
    /**
     * Retrieve a single target page of UsAppToPersonInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: UsAppToPersonPage) => any): Promise<UsAppToPersonPage>;
    getPage(params?: any, callback?: any): Promise<UsAppToPersonPage>;
    /**
     * Lists UsAppToPersonInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: UsAppToPersonInstance[]) => any): Promise<UsAppToPersonInstance[]>;
    /**
     * Lists UsAppToPersonInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { UsAppToPersonListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: UsAppToPersonListInstanceOptions, callback?: (error: Error | null, items: UsAppToPersonInstance[]) => any): Promise<UsAppToPersonInstance[]>;
    list(params?: any, callback?: any): Promise<UsAppToPersonInstance[]>;
    /**
     * Retrieve a single page of UsAppToPersonInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: UsAppToPersonPage) => any): Promise<UsAppToPersonPage>;
    /**
     * Retrieve a single page of UsAppToPersonInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { UsAppToPersonListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: UsAppToPersonListInstancePageOptions, callback?: (error: Error | null, items: UsAppToPersonPage) => any): Promise<UsAppToPersonPage>;
    page(params?: any, callback?: any): Promise<UsAppToPersonPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UsAppToPersonSolution {
    messagingServiceSid?: string;
}
export declare function UsAppToPersonListInstance(version: V1, messagingServiceSid: string): UsAppToPersonListInstance;
export declare class UsAppToPersonPage extends Page<V1, UsAppToPersonPayload, UsAppToPersonResource, UsAppToPersonInstance> {
    /**
     * Initialize the UsAppToPersonPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: UsAppToPersonSolution);
    /**
     * Build an instance of UsAppToPersonInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: UsAppToPersonResource): UsAppToPersonInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
