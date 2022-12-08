/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V2010 from "../V2010";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
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

type AccountStatus = "active" | "suspended" | "closed";

type AccountType = "Trial" | "Full";

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
  fetch(
    callback?: (error: Error | null, item?: AccountInstance) => any
  ): Promise<AccountInstance>;

  /**
   * Update a AccountInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AccountInstance
   */
  update(
    callback?: (error: Error | null, item?: AccountInstance) => any
  ): Promise<AccountInstance>;
  /**
   * Update a AccountInstance
   *
   * @param { AccountContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AccountInstance
   */
  update(
    params: AccountContextUpdateOptions,
    callback?: (error: Error | null, item?: AccountInstance) => any
  ): Promise<AccountInstance>;
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

export class AccountContextImpl implements AccountContext {
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

  constructor(protected _version: V2010, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Accounts/${sid}.json`;
  }

  get addresses(): AddressListInstance {
    this._addresses =
      this._addresses || AddressListInstance(this._version, this._solution.sid);
    return this._addresses;
  }

  get applications(): ApplicationListInstance {
    this._applications =
      this._applications ||
      ApplicationListInstance(this._version, this._solution.sid);
    return this._applications;
  }

  get authorizedConnectApps(): AuthorizedConnectAppListInstance {
    this._authorizedConnectApps =
      this._authorizedConnectApps ||
      AuthorizedConnectAppListInstance(this._version, this._solution.sid);
    return this._authorizedConnectApps;
  }

  get availablePhoneNumbers(): AvailablePhoneNumberCountryListInstance {
    this._availablePhoneNumbers =
      this._availablePhoneNumbers ||
      AvailablePhoneNumberCountryListInstance(
        this._version,
        this._solution.sid
      );
    return this._availablePhoneNumbers;
  }

  get balance(): BalanceListInstance {
    this._balance =
      this._balance || BalanceListInstance(this._version, this._solution.sid);
    return this._balance;
  }

  get calls(): CallListInstance {
    this._calls =
      this._calls || CallListInstance(this._version, this._solution.sid);
    return this._calls;
  }

  get conferences(): ConferenceListInstance {
    this._conferences =
      this._conferences ||
      ConferenceListInstance(this._version, this._solution.sid);
    return this._conferences;
  }

  get connectApps(): ConnectAppListInstance {
    this._connectApps =
      this._connectApps ||
      ConnectAppListInstance(this._version, this._solution.sid);
    return this._connectApps;
  }

  get incomingPhoneNumbers(): IncomingPhoneNumberListInstance {
    this._incomingPhoneNumbers =
      this._incomingPhoneNumbers ||
      IncomingPhoneNumberListInstance(this._version, this._solution.sid);
    return this._incomingPhoneNumbers;
  }

  get keys(): KeyListInstance {
    this._keys =
      this._keys || KeyListInstance(this._version, this._solution.sid);
    return this._keys;
  }

  get messages(): MessageListInstance {
    this._messages =
      this._messages || MessageListInstance(this._version, this._solution.sid);
    return this._messages;
  }

  get newKeys(): NewKeyListInstance {
    this._newKeys =
      this._newKeys || NewKeyListInstance(this._version, this._solution.sid);
    return this._newKeys;
  }

  get newSigningKeys(): NewSigningKeyListInstance {
    this._newSigningKeys =
      this._newSigningKeys ||
      NewSigningKeyListInstance(this._version, this._solution.sid);
    return this._newSigningKeys;
  }

  get notifications(): NotificationListInstance {
    this._notifications =
      this._notifications ||
      NotificationListInstance(this._version, this._solution.sid);
    return this._notifications;
  }

  get outgoingCallerIds(): OutgoingCallerIdListInstance {
    this._outgoingCallerIds =
      this._outgoingCallerIds ||
      OutgoingCallerIdListInstance(this._version, this._solution.sid);
    return this._outgoingCallerIds;
  }

  get queues(): QueueListInstance {
    this._queues =
      this._queues || QueueListInstance(this._version, this._solution.sid);
    return this._queues;
  }

  get recordings(): RecordingListInstance {
    this._recordings =
      this._recordings ||
      RecordingListInstance(this._version, this._solution.sid);
    return this._recordings;
  }

  get shortCodes(): ShortCodeListInstance {
    this._shortCodes =
      this._shortCodes ||
      ShortCodeListInstance(this._version, this._solution.sid);
    return this._shortCodes;
  }

  get signingKeys(): SigningKeyListInstance {
    this._signingKeys =
      this._signingKeys ||
      SigningKeyListInstance(this._version, this._solution.sid);
    return this._signingKeys;
  }

  get sip(): SipListInstance {
    this._sip = this._sip || SipListInstance(this._version, this._solution.sid);
    return this._sip;
  }

  get tokens(): TokenListInstance {
    this._tokens =
      this._tokens || TokenListInstance(this._version, this._solution.sid);
    return this._tokens;
  }

  get transcriptions(): TranscriptionListInstance {
    this._transcriptions =
      this._transcriptions ||
      TranscriptionListInstance(this._version, this._solution.sid);
    return this._transcriptions;
  }

  get usage(): UsageListInstance {
    this._usage =
      this._usage || UsageListInstance(this._version, this._solution.sid);
    return this._usage;
  }

  get validationRequests(): ValidationRequestListInstance {
    this._validationRequests =
      this._validationRequests ||
      ValidationRequestListInstance(this._version, this._solution.sid);
    return this._validationRequests;
  }

  fetch(callback?: any): Promise<AccountInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AccountInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<AccountInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["status"] !== undefined) data["Status"] = params["status"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AccountInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface AccountPayload
  extends AccountResource,
    Omit<Page.TwilioResponsePayload, "uri"> {}

interface AccountResource {
  auth_token?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  owner_account_sid?: string | null;
  sid?: string | null;
  status?: AccountStatus;
  subresource_uris?: object | null;
  type?: AccountType;
  uri?: string | null;
}

export class AccountInstance {
  protected _solution: AccountContextSolution;
  protected _context?: AccountContext;

  constructor(
    protected _version: V2010,
    payload: AccountPayload,
    sid?: string
  ) {
    this.authToken = payload.auth_token;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.ownerAccountSid = payload.owner_account_sid;
    this.sid = payload.sid;
    this.status = payload.status;
    this.subresourceUris = payload.subresource_uris;
    this.type = payload.type;
    this.uri = payload.uri;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The authorization token for this account
   */
  authToken?: string | null;
  /**
   * The date this account was created
   */
  dateCreated?: string | null;
  /**
   * The date this account was last updated
   */
  dateUpdated?: string | null;
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

  private get _proxy(): AccountContext {
    this._context =
      this._context ||
      new AccountContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a AccountInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AccountInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AccountInstance) => any
  ): Promise<AccountInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AccountInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AccountInstance
   */
  update(
    callback?: (error: Error | null, item?: AccountInstance) => any
  ): Promise<AccountInstance>;
  /**
   * Update a AccountInstance
   *
   * @param { AccountContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AccountInstance
   */
  update(
    params: AccountContextUpdateOptions,
    callback?: (error: Error | null, item?: AccountInstance) => any
  ): Promise<AccountInstance>;
  update(params?: any, callback?: any): Promise<AccountInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the addresses.
   */
  addresses(): AddressListInstance {
    return this._proxy.addresses;
  }

  /**
   * Access the applications.
   */
  applications(): ApplicationListInstance {
    return this._proxy.applications;
  }

  /**
   * Access the authorizedConnectApps.
   */
  authorizedConnectApps(): AuthorizedConnectAppListInstance {
    return this._proxy.authorizedConnectApps;
  }

  /**
   * Access the availablePhoneNumbers.
   */
  availablePhoneNumbers(): AvailablePhoneNumberCountryListInstance {
    return this._proxy.availablePhoneNumbers;
  }

  /**
   * Access the balance.
   */
  balance(): BalanceListInstance {
    return this._proxy.balance;
  }

  /**
   * Access the calls.
   */
  calls(): CallListInstance {
    return this._proxy.calls;
  }

  /**
   * Access the conferences.
   */
  conferences(): ConferenceListInstance {
    return this._proxy.conferences;
  }

  /**
   * Access the connectApps.
   */
  connectApps(): ConnectAppListInstance {
    return this._proxy.connectApps;
  }

  /**
   * Access the incomingPhoneNumbers.
   */
  incomingPhoneNumbers(): IncomingPhoneNumberListInstance {
    return this._proxy.incomingPhoneNumbers;
  }

  /**
   * Access the keys.
   */
  keys(): KeyListInstance {
    return this._proxy.keys;
  }

  /**
   * Access the messages.
   */
  messages(): MessageListInstance {
    return this._proxy.messages;
  }

  /**
   * Access the newKeys.
   */
  newKeys(): NewKeyListInstance {
    return this._proxy.newKeys;
  }

  /**
   * Access the newSigningKeys.
   */
  newSigningKeys(): NewSigningKeyListInstance {
    return this._proxy.newSigningKeys;
  }

  /**
   * Access the notifications.
   */
  notifications(): NotificationListInstance {
    return this._proxy.notifications;
  }

  /**
   * Access the outgoingCallerIds.
   */
  outgoingCallerIds(): OutgoingCallerIdListInstance {
    return this._proxy.outgoingCallerIds;
  }

  /**
   * Access the queues.
   */
  queues(): QueueListInstance {
    return this._proxy.queues;
  }

  /**
   * Access the recordings.
   */
  recordings(): RecordingListInstance {
    return this._proxy.recordings;
  }

  /**
   * Access the shortCodes.
   */
  shortCodes(): ShortCodeListInstance {
    return this._proxy.shortCodes;
  }

  /**
   * Access the signingKeys.
   */
  signingKeys(): SigningKeyListInstance {
    return this._proxy.signingKeys;
  }

  /**
   * Access the sip.
   */
  sip(): SipListInstance {
    return this._proxy.sip;
  }

  /**
   * Access the tokens.
   */
  tokens(): TokenListInstance {
    return this._proxy.tokens;
  }

  /**
   * Access the transcriptions.
   */
  transcriptions(): TranscriptionListInstance {
    return this._proxy.transcriptions;
  }

  /**
   * Access the usage.
   */
  usage(): UsageListInstance {
    return this._proxy.usage;
  }

  /**
   * Access the validationRequests.
   */
  validationRequests(): ValidationRequestListInstance {
    return this._proxy.validationRequests;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      authToken: this.authToken,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      ownerAccountSid: this.ownerAccountSid,
      sid: this.sid,
      status: this.status,
      subresourceUris: this.subresourceUris,
      type: this.type,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
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
  create(
    callback?: (error: Error | null, item?: AccountInstance) => any
  ): Promise<AccountInstance>;
  /**
   * Create a AccountInstance
   *
   * @param { AccountListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AccountInstance
   */
  create(
    params: AccountListInstanceCreateOptions,
    callback?: (error: Error | null, item?: AccountInstance) => any
  ): Promise<AccountInstance>;
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
  each(
    callback?: (item: AccountInstance, done: (err?: Error) => void) => void
  ): void;
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
  each(
    params?: AccountListInstanceEachOptions,
    callback?: (item: AccountInstance, done: (err?: Error) => void) => void
  ): void;
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
  getPage(
    callback?: (error: Error | null, items: AccountPage) => any
  ): Promise<AccountPage>;
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
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: AccountPage) => any
  ): Promise<AccountPage>;
  getPage(params?: any, callback?: any): Promise<AccountPage>;
  /**
   * Lists AccountInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AccountInstance[]) => any
  ): Promise<AccountInstance[]>;
  /**
   * Lists AccountInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AccountListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: AccountListInstanceOptions,
    callback?: (error: Error | null, items: AccountInstance[]) => any
  ): Promise<AccountInstance[]>;
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
  page(
    callback?: (error: Error | null, items: AccountPage) => any
  ): Promise<AccountPage>;
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
  page(
    params: AccountListInstancePageOptions,
    callback?: (error: Error | null, items: AccountPage) => any
  ): Promise<AccountPage>;
  page(params?: any, callback?: any): Promise<AccountPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AccountSolution {}

interface AccountListInstanceImpl extends AccountListInstance {}
class AccountListInstanceImpl implements AccountListInstance {
  _version?: V2010;
  _solution?: AccountSolution;
  _uri?: string;
}

export function AccountListInstance(version: V2010): AccountListInstance {
  const instance = ((sid) => instance.get(sid)) as AccountListInstanceImpl;

  instance.get = function get(sid): AccountContext {
    return new AccountContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Accounts.json`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<AccountInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new AccountInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<AccountPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new AccountPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<AccountPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new AccountPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

export class AccountPage extends Page<
  V2010,
  AccountPayload,
  AccountResource,
  AccountInstance
> {
  /**
   * Initialize the AccountPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: AccountSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AccountInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AccountPayload): AccountInstance {
    return new AccountInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
