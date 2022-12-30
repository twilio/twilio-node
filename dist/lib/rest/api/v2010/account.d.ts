/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2010 from "../V2010";
import { AddressListInstance } from "./account/address";
import { ApplicationListInstance } from "./account/application";
import { AuthorizedConnectAppListInstance } from "./account/authorizedConnectApp";
import { AvailablePhoneNumberCountryListInstance } from "./account/availablePhoneNumberCountry";
import { BalanceListInstance } from "./account/balance";
import { CallListInstance } from "./account/call";
import { ConferenceListInstance } from "./account/conference";
import { ConnectAppListInstance } from "./account/connectApp";
import { IncomingPhoneNumberListInstance } from "./account/incomingPhoneNumber";
import { KeyListInstance } from "./account/key";
import { MessageListInstance } from "./account/message";
import { NewKeyListInstance } from "./account/newKey";
import { NewSigningKeyListInstance } from "./account/newSigningKey";
import { NotificationListInstance } from "./account/notification";
import { OutgoingCallerIdListInstance } from "./account/outgoingCallerId";
import { QueueListInstance } from "./account/queue";
import { RecordingListInstance } from "./account/recording";
import { ShortCodeListInstance } from "./account/shortCode";
import { SigningKeyListInstance } from "./account/signingKey";
import { SipListInstance } from "./account/sip";
import { TokenListInstance } from "./account/token";
import { TranscriptionListInstance } from "./account/transcription";
import { UsageListInstance } from "./account/usage";
import { ValidationRequestListInstance } from "./account/validationRequest";
declare type AccountStatus = "active" | "suspended" | "closed";
declare type AccountType = "Trial" | "Full";
/**
 * Options to pass to update a AccountInstance
 *
 * @property { string } [friendlyName] Update the human-readable description of this Account
 * @property { AccountStatus } [status]
 */
export interface AccountContextUpdateOptions {
    friendlyName?: string;
    status?: AccountStatus;
}
/**
 * Options to pass to create a AccountInstance
 *
 * @property { string } [friendlyName] A human readable description of the account to create, defaults to `SubAccount Created at {YYYY-MM-DD HH:MM meridian}`
 */
export interface AccountListInstanceCreateOptions {
    friendlyName?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] Only return the Account resources with friendly names that exactly match this name.
 * @property { AccountStatus } [status] Only return Account resources with the given status. Can be `closed`, `suspended` or `active`.
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
export interface AccountListInstanceEachOptions {
    friendlyName?: string;
    status?: AccountStatus;
    pageSize?: number;
    callback?: (item: AccountInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] Only return the Account resources with friendly names that exactly match this name.
 * @property { AccountStatus } [status] Only return Account resources with the given status. Can be `closed`, `suspended` or `active`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AccountListInstanceOptions {
    friendlyName?: string;
    status?: AccountStatus;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] Only return the Account resources with friendly names that exactly match this name.
 * @property { AccountStatus } [status] Only return Account resources with the given status. Can be `closed`, `suspended` or `active`.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AccountListInstancePageOptions {
    friendlyName?: string;
    status?: AccountStatus;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface AccountContext {
    addresses: AddressListInstance;
    applications: ApplicationListInstance;
    authorizedConnectApps: AuthorizedConnectAppListInstance;
    availablePhoneNumbers: AvailablePhoneNumberCountryListInstance;
    balance: BalanceListInstance;
    calls: CallListInstance;
    conferences: ConferenceListInstance;
    connectApps: ConnectAppListInstance;
    incomingPhoneNumbers: IncomingPhoneNumberListInstance;
    keys: KeyListInstance;
    messages: MessageListInstance;
    newKeys: NewKeyListInstance;
    newSigningKeys: NewSigningKeyListInstance;
    notifications: NotificationListInstance;
    outgoingCallerIds: OutgoingCallerIdListInstance;
    queues: QueueListInstance;
    recordings: RecordingListInstance;
    shortCodes: ShortCodeListInstance;
    signingKeys: SigningKeyListInstance;
    sip: SipListInstance;
    tokens: TokenListInstance;
    transcriptions: TranscriptionListInstance;
    usage: UsageListInstance;
    validationRequests: ValidationRequestListInstance;
    /**
     * Fetch a AccountInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AccountInstance
     */
    fetch(callback?: (error: Error | null, item?: AccountInstance) => any): Promise<AccountInstance>;
    /**
     * Update a AccountInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AccountInstance
     */
    update(callback?: (error: Error | null, item?: AccountInstance) => any): Promise<AccountInstance>;
    /**
     * Update a AccountInstance
     *
     * @param { AccountContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AccountInstance
     */
    update(params: AccountContextUpdateOptions, callback?: (error: Error | null, item?: AccountInstance) => any): Promise<AccountInstance>;
    update(params?: any, callback?: any): Promise<AccountInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AccountContextSolution {
    sid?: string;
}
export declare class AccountContextImpl implements AccountContext {
    protected _version: V2010;
    protected _solution: AccountContextSolution;
    protected _uri: string;
    protected _addresses?: AddressListInstance;
    protected _applications?: ApplicationListInstance;
    protected _authorizedConnectApps?: AuthorizedConnectAppListInstance;
    protected _availablePhoneNumbers?: AvailablePhoneNumberCountryListInstance;
    protected _balance?: BalanceListInstance;
    protected _calls?: CallListInstance;
    protected _conferences?: ConferenceListInstance;
    protected _connectApps?: ConnectAppListInstance;
    protected _incomingPhoneNumbers?: IncomingPhoneNumberListInstance;
    protected _keys?: KeyListInstance;
    protected _messages?: MessageListInstance;
    protected _newKeys?: NewKeyListInstance;
    protected _newSigningKeys?: NewSigningKeyListInstance;
    protected _notifications?: NotificationListInstance;
    protected _outgoingCallerIds?: OutgoingCallerIdListInstance;
    protected _queues?: QueueListInstance;
    protected _recordings?: RecordingListInstance;
    protected _shortCodes?: ShortCodeListInstance;
    protected _signingKeys?: SigningKeyListInstance;
    protected _sip?: SipListInstance;
    protected _tokens?: TokenListInstance;
    protected _transcriptions?: TranscriptionListInstance;
    protected _usage?: UsageListInstance;
    protected _validationRequests?: ValidationRequestListInstance;
    constructor(_version: V2010, sid: string);
    get addresses(): AddressListInstance;
    get applications(): ApplicationListInstance;
    get authorizedConnectApps(): AuthorizedConnectAppListInstance;
    get availablePhoneNumbers(): AvailablePhoneNumberCountryListInstance;
    get balance(): BalanceListInstance;
    get calls(): CallListInstance;
    get conferences(): ConferenceListInstance;
    get connectApps(): ConnectAppListInstance;
    get incomingPhoneNumbers(): IncomingPhoneNumberListInstance;
    get keys(): KeyListInstance;
    get messages(): MessageListInstance;
    get newKeys(): NewKeyListInstance;
    get newSigningKeys(): NewSigningKeyListInstance;
    get notifications(): NotificationListInstance;
    get outgoingCallerIds(): OutgoingCallerIdListInstance;
    get queues(): QueueListInstance;
    get recordings(): RecordingListInstance;
    get shortCodes(): ShortCodeListInstance;
    get signingKeys(): SigningKeyListInstance;
    get sip(): SipListInstance;
    get tokens(): TokenListInstance;
    get transcriptions(): TranscriptionListInstance;
    get usage(): UsageListInstance;
    get validationRequests(): ValidationRequestListInstance;
    fetch(callback?: any): Promise<AccountInstance>;
    update(params?: any, callback?: any): Promise<AccountInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AccountContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AccountPayload extends TwilioResponsePayload {
    accounts: AccountResource[];
}
interface AccountResource {
    auth_token?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    owner_account_sid?: string | null;
    sid?: string | null;
    status?: AccountStatus;
    subresource_uris?: object | null;
    type?: AccountType;
    uri?: string | null;
}
export declare class AccountInstance {
    protected _version: V2010;
    protected _solution: AccountContextSolution;
    protected _context?: AccountContext;
    constructor(_version: V2010, payload: AccountResource, sid?: string);
    /**
     * The authorization token for this account
     */
    authToken?: string | null;
    /**
     * The date this account was created
     */
    dateCreated?: Date | null;
    /**
     * The date this account was last updated
     */
    dateUpdated?: Date | null;
    /**
     * A human readable description of this account
     */
    friendlyName?: string | null;
    /**
     * The unique 34 character id representing the parent of this account
     */
    ownerAccountSid?: string | null;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string | null;
    status?: AccountStatus;
    /**
     * Account Instance Subresources
     */
    subresourceUris?: object | null;
    type?: AccountType;
    /**
     * The URI for this resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Fetch a AccountInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AccountInstance
     */
    fetch(callback?: (error: Error | null, item?: AccountInstance) => any): Promise<AccountInstance>;
    /**
     * Update a AccountInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AccountInstance
     */
    update(callback?: (error: Error | null, item?: AccountInstance) => any): Promise<AccountInstance>;
    /**
     * Update a AccountInstance
     *
     * @param { AccountContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AccountInstance
     */
    update(params: AccountContextUpdateOptions, callback?: (error: Error | null, item?: AccountInstance) => any): Promise<AccountInstance>;
    /**
     * Access the addresses.
     */
    addresses(): AddressListInstance;
    /**
     * Access the applications.
     */
    applications(): ApplicationListInstance;
    /**
     * Access the authorizedConnectApps.
     */
    authorizedConnectApps(): AuthorizedConnectAppListInstance;
    /**
     * Access the availablePhoneNumbers.
     */
    availablePhoneNumbers(): AvailablePhoneNumberCountryListInstance;
    /**
     * Access the balance.
     */
    balance(): BalanceListInstance;
    /**
     * Access the calls.
     */
    calls(): CallListInstance;
    /**
     * Access the conferences.
     */
    conferences(): ConferenceListInstance;
    /**
     * Access the connectApps.
     */
    connectApps(): ConnectAppListInstance;
    /**
     * Access the incomingPhoneNumbers.
     */
    incomingPhoneNumbers(): IncomingPhoneNumberListInstance;
    /**
     * Access the keys.
     */
    keys(): KeyListInstance;
    /**
     * Access the messages.
     */
    messages(): MessageListInstance;
    /**
     * Access the newKeys.
     */
    newKeys(): NewKeyListInstance;
    /**
     * Access the newSigningKeys.
     */
    newSigningKeys(): NewSigningKeyListInstance;
    /**
     * Access the notifications.
     */
    notifications(): NotificationListInstance;
    /**
     * Access the outgoingCallerIds.
     */
    outgoingCallerIds(): OutgoingCallerIdListInstance;
    /**
     * Access the queues.
     */
    queues(): QueueListInstance;
    /**
     * Access the recordings.
     */
    recordings(): RecordingListInstance;
    /**
     * Access the shortCodes.
     */
    shortCodes(): ShortCodeListInstance;
    /**
     * Access the signingKeys.
     */
    signingKeys(): SigningKeyListInstance;
    /**
     * Access the sip.
     */
    sip(): SipListInstance;
    /**
     * Access the tokens.
     */
    tokens(): TokenListInstance;
    /**
     * Access the transcriptions.
     */
    transcriptions(): TranscriptionListInstance;
    /**
     * Access the usage.
     */
    usage(): UsageListInstance;
    /**
     * Access the validationRequests.
     */
    validationRequests(): ValidationRequestListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        authToken: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        ownerAccountSid: string | null | undefined;
        sid: string | null | undefined;
        status: AccountStatus | undefined;
        subresourceUris: object | null | undefined;
        type: AccountType | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AccountListInstance {
    (sid: string): AccountContext;
    get(sid: string): AccountContext;
    /**
     * Create a AccountInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AccountInstance
     */
    create(callback?: (error: Error | null, item?: AccountInstance) => any): Promise<AccountInstance>;
    /**
     * Create a AccountInstance
     *
     * @param { AccountListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AccountInstance
     */
    create(params: AccountListInstanceCreateOptions, callback?: (error: Error | null, item?: AccountInstance) => any): Promise<AccountInstance>;
    create(params?: any, callback?: any): Promise<AccountInstance>;
    /**
     * Streams AccountInstance records from the API.
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
    each(callback?: (item: AccountInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams AccountInstance records from the API.
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
     * @param { AccountListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: AccountListInstanceEachOptions, callback?: (item: AccountInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of AccountInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: AccountPage) => any): Promise<AccountPage>;
    /**
     * Retrieve a single target page of AccountInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: AccountPage) => any): Promise<AccountPage>;
    getPage(params?: any, callback?: any): Promise<AccountPage>;
    /**
     * Lists AccountInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AccountInstance[]) => any): Promise<AccountInstance[]>;
    /**
     * Lists AccountInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AccountListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: AccountListInstanceOptions, callback?: (error: Error | null, items: AccountInstance[]) => any): Promise<AccountInstance[]>;
    list(params?: any, callback?: any): Promise<AccountInstance[]>;
    /**
     * Retrieve a single page of AccountInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AccountPage) => any): Promise<AccountPage>;
    /**
     * Retrieve a single page of AccountInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AccountListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: AccountListInstancePageOptions, callback?: (error: Error | null, items: AccountPage) => any): Promise<AccountPage>;
    page(params?: any, callback?: any): Promise<AccountPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AccountSolution {
}
export declare function AccountListInstance(version: V2010): AccountListInstance;
export declare class AccountPage extends Page<V2010, AccountPayload, AccountResource, AccountInstance> {
    /**
     * Initialize the AccountPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: AccountSolution);
    /**
     * Build an instance of AccountInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AccountResource): AccountInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
