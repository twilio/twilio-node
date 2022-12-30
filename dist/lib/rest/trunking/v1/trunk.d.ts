/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { CredentialListListInstance } from "./trunk/credentialList";
import { IpAccessControlListListInstance } from "./trunk/ipAccessControlList";
import { OriginationUrlListInstance } from "./trunk/originationUrl";
import { PhoneNumberListInstance } from "./trunk/phoneNumber";
import { RecordingListInstance } from "./trunk/recording";
declare type TrunkTransferCallerId = "from-transferee" | "from-transferor";
declare type TrunkTransferSetting = "disable-all" | "enable-all" | "sip-only";
/**
 * Options to pass to update a TrunkInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [domainName] The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and `-` and must end with `pstn.twilio.com`. See [Termination Settings](https://www.twilio.com/docs/sip-trunking#termination) for more information.
 * @property { string } [disasterRecoveryUrl] The URL we should call using the `disaster_recovery_method` if an error occurs while sending SIP traffic towards the configured Origination URL. We retrieve TwiML from the URL and execute the instructions like any other normal TwiML call. See [Disaster Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery) for more information.
 * @property { string } [disasterRecoveryMethod] The HTTP method we should use to call the `disaster_recovery_url`. Can be: `GET` or `POST`.
 * @property { TrunkTransferSetting } [transferMode]
 * @property { boolean } [secure] Whether Secure Trunking is enabled for the trunk. If enabled, all calls going through the trunk will be secure using SRTP for media and TLS for signaling. If disabled, then RTP will be used for media. See [Secure Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking) for more information.
 * @property { boolean } [cnamLookupEnabled] Whether Caller ID Name (CNAM) lookup should be enabled for the trunk. If enabled, all inbound calls to the SIP Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
 * @property { TrunkTransferCallerId } [transferCallerId]
 */
export interface TrunkContextUpdateOptions {
    friendlyName?: string;
    domainName?: string;
    disasterRecoveryUrl?: string;
    disasterRecoveryMethod?: string;
    transferMode?: TrunkTransferSetting;
    secure?: boolean;
    cnamLookupEnabled?: boolean;
    transferCallerId?: TrunkTransferCallerId;
}
/**
 * Options to pass to create a TrunkInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [domainName] The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and `-` and must end with `pstn.twilio.com`. See [Termination Settings](https://www.twilio.com/docs/sip-trunking#termination) for more information.
 * @property { string } [disasterRecoveryUrl] The URL we should call using the `disaster_recovery_method` if an error occurs while sending SIP traffic towards the configured Origination URL. We retrieve TwiML from the URL and execute the instructions like any other normal TwiML call. See [Disaster Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery) for more information.
 * @property { string } [disasterRecoveryMethod] The HTTP method we should use to call the `disaster_recovery_url`. Can be: `GET` or `POST`.
 * @property { TrunkTransferSetting } [transferMode]
 * @property { boolean } [secure] Whether Secure Trunking is enabled for the trunk. If enabled, all calls going through the trunk will be secure using SRTP for media and TLS for signaling. If disabled, then RTP will be used for media. See [Secure Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking) for more information.
 * @property { boolean } [cnamLookupEnabled] Whether Caller ID Name (CNAM) lookup should be enabled for the trunk. If enabled, all inbound calls to the SIP Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
 * @property { TrunkTransferCallerId } [transferCallerId]
 */
export interface TrunkListInstanceCreateOptions {
    friendlyName?: string;
    domainName?: string;
    disasterRecoveryUrl?: string;
    disasterRecoveryMethod?: string;
    transferMode?: TrunkTransferSetting;
    secure?: boolean;
    cnamLookupEnabled?: boolean;
    transferCallerId?: TrunkTransferCallerId;
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
export interface TrunkListInstanceEachOptions {
    pageSize?: number;
    callback?: (item: TrunkInstance, done: (err?: Error) => void) => void;
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
export interface TrunkListInstanceOptions {
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
export interface TrunkListInstancePageOptions {
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TrunkContext {
    credentialsLists: CredentialListListInstance;
    ipAccessControlLists: IpAccessControlListListInstance;
    originationUrls: OriginationUrlListInstance;
    phoneNumbers: PhoneNumberListInstance;
    recordings: RecordingListInstance;
    /**
     * Remove a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    fetch(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Update a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    update(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Update a TrunkInstance
     *
     * @param { TrunkContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    update(params: TrunkContextUpdateOptions, callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    update(params?: any, callback?: any): Promise<TrunkInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TrunkContextSolution {
    sid?: string;
}
export declare class TrunkContextImpl implements TrunkContext {
    protected _version: V1;
    protected _solution: TrunkContextSolution;
    protected _uri: string;
    protected _credentialsLists?: CredentialListListInstance;
    protected _ipAccessControlLists?: IpAccessControlListListInstance;
    protected _originationUrls?: OriginationUrlListInstance;
    protected _phoneNumbers?: PhoneNumberListInstance;
    protected _recordings?: RecordingListInstance;
    constructor(_version: V1, sid: string);
    get credentialsLists(): CredentialListListInstance;
    get ipAccessControlLists(): IpAccessControlListListInstance;
    get originationUrls(): OriginationUrlListInstance;
    get phoneNumbers(): PhoneNumberListInstance;
    get recordings(): RecordingListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<TrunkInstance>;
    update(params?: any, callback?: any): Promise<TrunkInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TrunkContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type TrunkDisasterRecoveryMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface TrunkPayload extends TwilioResponsePayload {
    trunks: TrunkResource[];
}
interface TrunkResource {
    account_sid?: string | null;
    domain_name?: string | null;
    disaster_recovery_method?: TrunkDisasterRecoveryMethod;
    disaster_recovery_url?: string | null;
    friendly_name?: string | null;
    secure?: boolean | null;
    recording?: any | null;
    transfer_mode?: TrunkTransferSetting;
    transfer_caller_id?: TrunkTransferCallerId;
    cnam_lookup_enabled?: boolean | null;
    auth_type?: string | null;
    auth_type_set?: Array<string> | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    sid?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class TrunkInstance {
    protected _version: V1;
    protected _solution: TrunkContextSolution;
    protected _context?: TrunkContext;
    constructor(_version: V1, payload: TrunkResource, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique address you reserve on Twilio to which you route your SIP traffic
     */
    domainName?: string | null;
    /**
     * The HTTP method we use to call the disaster_recovery_url
     */
    disasterRecoveryMethod?: TrunkDisasterRecoveryMethod;
    /**
     * The HTTP URL that we call if an error occurs while sending SIP traffic towards your configured Origination URL
     */
    disasterRecoveryUrl?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * Whether Secure Trunking is enabled for the trunk
     */
    secure?: boolean | null;
    /**
     * The recording settings for the trunk
     */
    recording?: any | null;
    transferMode?: TrunkTransferSetting;
    transferCallerId?: TrunkTransferCallerId;
    /**
     * Whether Caller ID Name (CNAM) lookup is enabled for the trunk
     */
    cnamLookupEnabled?: boolean | null;
    /**
     * The types of authentication mapped to the domain
     */
    authType?: string | null;
    /**
     * Reserved
     */
    authTypeSet?: Array<string> | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * The URLs of related resources
     */
    links?: object | null;
    private get _proxy();
    /**
     * Remove a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    fetch(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Update a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    update(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Update a TrunkInstance
     *
     * @param { TrunkContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    update(params: TrunkContextUpdateOptions, callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Access the credentialsLists.
     */
    credentialsLists(): CredentialListListInstance;
    /**
     * Access the ipAccessControlLists.
     */
    ipAccessControlLists(): IpAccessControlListListInstance;
    /**
     * Access the originationUrls.
     */
    originationUrls(): OriginationUrlListInstance;
    /**
     * Access the phoneNumbers.
     */
    phoneNumbers(): PhoneNumberListInstance;
    /**
     * Access the recordings.
     */
    recordings(): RecordingListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        domainName: string | null | undefined;
        disasterRecoveryMethod: TrunkDisasterRecoveryMethod | undefined;
        disasterRecoveryUrl: string | null | undefined;
        friendlyName: string | null | undefined;
        secure: boolean | null | undefined;
        recording: any;
        transferMode: TrunkTransferSetting | undefined;
        transferCallerId: TrunkTransferCallerId | undefined;
        cnamLookupEnabled: boolean | null | undefined;
        authType: string | null | undefined;
        authTypeSet: string[] | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        sid: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TrunkListInstance {
    (sid: string): TrunkContext;
    get(sid: string): TrunkContext;
    /**
     * Create a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    create(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Create a TrunkInstance
     *
     * @param { TrunkListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    create(params: TrunkListInstanceCreateOptions, callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    create(params?: any, callback?: any): Promise<TrunkInstance>;
    /**
     * Streams TrunkInstance records from the API.
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
    each(callback?: (item: TrunkInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TrunkInstance records from the API.
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
     * @param { TrunkListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TrunkListInstanceEachOptions, callback?: (item: TrunkInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TrunkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TrunkPage) => any): Promise<TrunkPage>;
    /**
     * Retrieve a single target page of TrunkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TrunkPage) => any): Promise<TrunkPage>;
    getPage(params?: any, callback?: any): Promise<TrunkPage>;
    /**
     * Lists TrunkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TrunkInstance[]) => any): Promise<TrunkInstance[]>;
    /**
     * Lists TrunkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TrunkListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TrunkListInstanceOptions, callback?: (error: Error | null, items: TrunkInstance[]) => any): Promise<TrunkInstance[]>;
    list(params?: any, callback?: any): Promise<TrunkInstance[]>;
    /**
     * Retrieve a single page of TrunkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TrunkPage) => any): Promise<TrunkPage>;
    /**
     * Retrieve a single page of TrunkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TrunkListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TrunkListInstancePageOptions, callback?: (error: Error | null, items: TrunkPage) => any): Promise<TrunkPage>;
    page(params?: any, callback?: any): Promise<TrunkPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TrunkSolution {
}
export declare function TrunkListInstance(version: V1): TrunkListInstance;
export declare class TrunkPage extends Page<V1, TrunkPayload, TrunkResource, TrunkInstance> {
    /**
     * Initialize the TrunkPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: TrunkSolution);
    /**
     * Build an instance of TrunkInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TrunkResource): TrunkInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
