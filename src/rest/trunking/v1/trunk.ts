/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trunking
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { CredentialListListInstance } from "./trunk/credentialList";
import { IpAccessControlListListInstance } from "./trunk/ipAccessControlList";
import { OriginationUrlListInstance } from "./trunk/originationUrl";
import { PhoneNumberListInstance } from "./trunk/phoneNumber";
import { RecordingListInstance } from "./trunk/recording";

export type TrunkTransferCallerId = "from-transferee" | "from-transferor";

export type TrunkTransferSetting = "disable-all" | "enable-all" | "sip-only";

/**
 * Options to pass to update a TrunkInstance
 */
export interface TrunkContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and `-` and must end with `pstn.twilio.com`. See [Termination Settings](https://www.twilio.com/docs/sip-trunking#termination) for more information. */
  domainName?: string;
  /** The URL we should call using the `disaster_recovery_method` if an error occurs while sending SIP traffic towards the configured Origination URL. We retrieve TwiML from the URL and execute the instructions like any other normal TwiML call. See [Disaster Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery) for more information. */
  disasterRecoveryUrl?: string;
  /** The HTTP method we should use to call the `disaster_recovery_url`. Can be: `GET` or `POST`. */
  disasterRecoveryMethod?: string;
  /**  */
  transferMode?: TrunkTransferSetting;
  /** Whether Secure Trunking is enabled for the trunk. If enabled, all calls going through the trunk will be secure using SRTP for media and TLS for signaling. If disabled, then RTP will be used for media. See [Secure Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking) for more information. */
  secure?: boolean;
  /** Whether Caller ID Name (CNAM) lookup should be enabled for the trunk. If enabled, all inbound calls to the SIP Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information. */
  cnamLookupEnabled?: boolean;
  /**  */
  transferCallerId?: TrunkTransferCallerId;
}

/**
 * Options to pass to create a TrunkInstance
 */
export interface TrunkListInstanceCreateOptions {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and `-` and must end with `pstn.twilio.com`. See [Termination Settings](https://www.twilio.com/docs/sip-trunking#termination) for more information. */
  domainName?: string;
  /** The URL we should call using the `disaster_recovery_method` if an error occurs while sending SIP traffic towards the configured Origination URL. We retrieve TwiML from the URL and execute the instructions like any other normal TwiML call. See [Disaster Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery) for more information. */
  disasterRecoveryUrl?: string;
  /** The HTTP method we should use to call the `disaster_recovery_url`. Can be: `GET` or `POST`. */
  disasterRecoveryMethod?: string;
  /**  */
  transferMode?: TrunkTransferSetting;
  /** Whether Secure Trunking is enabled for the trunk. If enabled, all calls going through the trunk will be secure using SRTP for media and TLS for signaling. If disabled, then RTP will be used for media. See [Secure Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking) for more information. */
  secure?: boolean;
  /** Whether Caller ID Name (CNAM) lookup should be enabled for the trunk. If enabled, all inbound calls to the SIP Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information. */
  cnamLookupEnabled?: boolean;
  /**  */
  transferCallerId?: TrunkTransferCallerId;
}
/**
 * Options to pass to each
 */
export interface TrunkListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: TrunkInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface TrunkListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TrunkListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
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
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrunkInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance>;

  /**
   * Update a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrunkInstance
   */
  update(
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance>;
  /**
   * Update a TrunkInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrunkInstance
   */
  update(
    params: TrunkContextUpdateOptions,
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrunkContextSolution {
  sid: string;
}

export class TrunkContextImpl implements TrunkContext {
  protected _solution: TrunkContextSolution;
  protected _uri: string;

  protected _credentialsLists?: CredentialListListInstance;
  protected _ipAccessControlLists?: IpAccessControlListListInstance;
  protected _originationUrls?: OriginationUrlListInstance;
  protected _phoneNumbers?: PhoneNumberListInstance;
  protected _recordings?: RecordingListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Trunks/${sid}`;
  }

  get credentialsLists(): CredentialListListInstance {
    this._credentialsLists =
      this._credentialsLists ||
      CredentialListListInstance(this._version, this._solution.sid);
    return this._credentialsLists;
  }

  get ipAccessControlLists(): IpAccessControlListListInstance {
    this._ipAccessControlLists =
      this._ipAccessControlLists ||
      IpAccessControlListListInstance(this._version, this._solution.sid);
    return this._ipAccessControlLists;
  }

  get originationUrls(): OriginationUrlListInstance {
    this._originationUrls =
      this._originationUrls ||
      OriginationUrlListInstance(this._version, this._solution.sid);
    return this._originationUrls;
  }

  get phoneNumbers(): PhoneNumberListInstance {
    this._phoneNumbers =
      this._phoneNumbers ||
      PhoneNumberListInstance(this._version, this._solution.sid);
    return this._phoneNumbers;
  }

  get recordings(): RecordingListInstance {
    this._recordings =
      this._recordings ||
      RecordingListInstance(this._version, this._solution.sid);
    return this._recordings;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TrunkInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | TrunkContextUpdateOptions
      | ((error: Error | null, item?: TrunkInstance) => any),
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["domainName"] !== undefined)
      data["DomainName"] = params["domainName"];
    if (params["disasterRecoveryUrl"] !== undefined)
      data["DisasterRecoveryUrl"] = params["disasterRecoveryUrl"];
    if (params["disasterRecoveryMethod"] !== undefined)
      data["DisasterRecoveryMethod"] = params["disasterRecoveryMethod"];
    if (params["transferMode"] !== undefined)
      data["TransferMode"] = params["transferMode"];
    if (params["secure"] !== undefined)
      data["Secure"] = serialize.bool(params["secure"]);
    if (params["cnamLookupEnabled"] !== undefined)
      data["CnamLookupEnabled"] = serialize.bool(params["cnamLookupEnabled"]);
    if (params["transferCallerId"] !== undefined)
      data["TransferCallerId"] = params["transferCallerId"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TrunkInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
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

interface TrunkPayload extends TwilioResponsePayload {
  trunks: TrunkResource[];
}

interface TrunkResource {
  account_sid: string;
  domain_name: string;
  disaster_recovery_method: string;
  disaster_recovery_url: string;
  friendly_name: string;
  secure: boolean;
  recording: any;
  transfer_mode: TrunkTransferSetting;
  transfer_caller_id: TrunkTransferCallerId;
  cnam_lookup_enabled: boolean;
  auth_type: string;
  auth_type_set: Array<string>;
  date_created: Date;
  date_updated: Date;
  sid: string;
  url: string;
  links: Record<string, string>;
}

export class TrunkInstance {
  protected _solution: TrunkContextSolution;
  protected _context?: TrunkContext;

  constructor(protected _version: V1, payload: TrunkResource, sid?: string) {
    this.accountSid = payload.account_sid;
    this.domainName = payload.domain_name;
    this.disasterRecoveryMethod = payload.disaster_recovery_method;
    this.disasterRecoveryUrl = payload.disaster_recovery_url;
    this.friendlyName = payload.friendly_name;
    this.secure = payload.secure;
    this.recording = payload.recording;
    this.transferMode = payload.transfer_mode;
    this.transferCallerId = payload.transfer_caller_id;
    this.cnamLookupEnabled = payload.cnam_lookup_enabled;
    this.authType = payload.auth_type;
    this.authTypeSet = payload.auth_type_set;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.sid = payload.sid;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Trunk resource.
   */
  accountSid: string;
  /**
   * The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and `-` and must end with `pstn.twilio.com`. See [Termination Settings](https://www.twilio.com/docs/sip-trunking#termination) for more information.
   */
  domainName: string;
  /**
   * The HTTP method we use to call the `disaster_recovery_url`. Can be: `GET` or `POST`.
   */
  disasterRecoveryMethod: string;
  /**
   * The URL we call using the `disaster_recovery_method` if an error occurs while sending SIP traffic towards the configured Origination URL. We retrieve TwiML from this URL and execute the instructions like any other normal TwiML call. See [Disaster Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery) for more information.
   */
  disasterRecoveryUrl: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * Whether Secure Trunking is enabled for the trunk. If enabled, all calls going through the trunk will be secure using SRTP for media and TLS for signaling. If disabled, then RTP will be used for media. See [Secure Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking) for more information.
   */
  secure: boolean;
  /**
   * The recording settings for the trunk. Can be: `do-not-record`, `record-from-ringing`, `record-from-answer`. If set to `record-from-ringing` or `record-from-answer`, all calls going through the trunk will be recorded. The only way to change recording parameters is on a sub-resource of a Trunk after it has been created. e.g.`/Trunks/[Trunk_SID]/Recording -XPOST -d\'Mode=record-from-answer\'`. See [Recording](https://www.twilio.com/docs/sip-trunking#recording) for more information.
   */
  recording: any;
  transferMode: TrunkTransferSetting;
  transferCallerId: TrunkTransferCallerId;
  /**
   * Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the SIP Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
   */
  cnamLookupEnabled: boolean;
  /**
   * The types of authentication mapped to the domain. Can be: `IP_ACL` and `CREDENTIAL_LIST`. If both are mapped, the values are returned in a comma delimited list. If empty, the domain will not receive any traffic.
   */
  authType: string;
  /**
   * Reserved.
   */
  authTypeSet: Array<string>;
  /**
   * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The unique string that we created to identify the Trunk resource.
   */
  sid: string;
  /**
   * The absolute URL of the resource.
   */
  url: string;
  /**
   * The URLs of related resources.
   */
  links: Record<string, string>;

  private get _proxy(): TrunkContext {
    this._context =
      this._context || new TrunkContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrunkInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrunkInstance
   */
  update(
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance>;
  /**
   * Update a TrunkInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrunkInstance
   */
  update(
    params: TrunkContextUpdateOptions,
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the credentialsLists.
   */
  credentialsLists(): CredentialListListInstance {
    return this._proxy.credentialsLists;
  }

  /**
   * Access the ipAccessControlLists.
   */
  ipAccessControlLists(): IpAccessControlListListInstance {
    return this._proxy.ipAccessControlLists;
  }

  /**
   * Access the originationUrls.
   */
  originationUrls(): OriginationUrlListInstance {
    return this._proxy.originationUrls;
  }

  /**
   * Access the phoneNumbers.
   */
  phoneNumbers(): PhoneNumberListInstance {
    return this._proxy.phoneNumbers;
  }

  /**
   * Access the recordings.
   */
  recordings(): RecordingListInstance {
    return this._proxy.recordings;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      domainName: this.domainName,
      disasterRecoveryMethod: this.disasterRecoveryMethod,
      disasterRecoveryUrl: this.disasterRecoveryUrl,
      friendlyName: this.friendlyName,
      secure: this.secure,
      recording: this.recording,
      transferMode: this.transferMode,
      transferCallerId: this.transferCallerId,
      cnamLookupEnabled: this.cnamLookupEnabled,
      authType: this.authType,
      authTypeSet: this.authTypeSet,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      sid: this.sid,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TrunkSolution {}

export interface TrunkListInstance {
  _version: V1;
  _solution: TrunkSolution;
  _uri: string;

  (sid: string): TrunkContext;
  get(sid: string): TrunkContext;

  /**
   * Create a TrunkInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrunkInstance
   */
  create(
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance>;
  /**
   * Create a TrunkInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrunkInstance
   */
  create(
    params: TrunkListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TrunkInstance) => any
  ): Promise<TrunkInstance>;

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
  each(
    callback?: (item: TrunkInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: TrunkListInstanceEachOptions,
    callback?: (item: TrunkInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of TrunkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TrunkPage) => any
  ): Promise<TrunkPage>;
  /**
   * Lists TrunkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrunkListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: TrunkInstance[]) => any
  ): Promise<TrunkInstance[]>;
  list(
    params: TrunkListInstanceOptions,
    callback?: (error: Error | null, items: TrunkInstance[]) => any
  ): Promise<TrunkInstance[]>;
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
  page(
    callback?: (error: Error | null, items: TrunkPage) => any
  ): Promise<TrunkPage>;
  page(
    params: TrunkListInstancePageOptions,
    callback?: (error: Error | null, items: TrunkPage) => any
  ): Promise<TrunkPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TrunkListInstance(version: V1): TrunkListInstance {
  const instance = ((sid) => instance.get(sid)) as TrunkListInstance;

  instance.get = function get(sid): TrunkContext {
    return new TrunkContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Trunks`;

  instance.create = function create(
    params?:
      | TrunkListInstanceCreateOptions
      | ((error: Error | null, items: TrunkInstance) => any),
    callback?: (error: Error | null, items: TrunkInstance) => any
  ): Promise<TrunkInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["domainName"] !== undefined)
      data["DomainName"] = params["domainName"];
    if (params["disasterRecoveryUrl"] !== undefined)
      data["DisasterRecoveryUrl"] = params["disasterRecoveryUrl"];
    if (params["disasterRecoveryMethod"] !== undefined)
      data["DisasterRecoveryMethod"] = params["disasterRecoveryMethod"];
    if (params["transferMode"] !== undefined)
      data["TransferMode"] = params["transferMode"];
    if (params["secure"] !== undefined)
      data["Secure"] = serialize.bool(params["secure"]);
    if (params["cnamLookupEnabled"] !== undefined)
      data["CnamLookupEnabled"] = serialize.bool(params["cnamLookupEnabled"]);
    if (params["transferCallerId"] !== undefined)
      data["TransferCallerId"] = params["transferCallerId"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new TrunkInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | TrunkListInstancePageOptions
      | ((error: Error | null, items: TrunkPage) => any),
    callback?: (error: Error | null, items: TrunkPage) => any
  ): Promise<TrunkPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new TrunkPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TrunkPage) => any
  ): Promise<TrunkPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new TrunkPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class TrunkPage extends Page<
  V1,
  TrunkPayload,
  TrunkResource,
  TrunkInstance
> {
  /**
   * Initialize the TrunkPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: TrunkSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TrunkInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TrunkResource): TrunkInstance {
    return new TrunkInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
