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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { AuthTypesListInstance } from "./domain/authTypes";
import { CredentialListMappingListInstance } from "./domain/credentialListMapping";
import { IpAccessControlListMappingListInstance } from "./domain/ipAccessControlListMapping";

/**
 * Options to pass to update a DomainInstance
 */
export interface DomainContextUpdateOptions {
  /** A descriptive string that you created to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  voiceFallbackMethod?: string;
  /** The URL that we should call when an error occurs while retrieving or executing the TwiML requested by `voice_url`. */
  voiceFallbackUrl?: string;
  /** The HTTP method we should use to call `voice_url` */
  voiceMethod?: string;
  /** The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`. */
  voiceStatusCallbackMethod?: string;
  /** The URL that we should call to pass status parameters (such as call ended) to your application. */
  voiceStatusCallbackUrl?: string;
  /** The URL we should call when the domain receives a call. */
  voiceUrl?: string;
  /** Whether to allow SIP Endpoints to register with the domain to receive calls. Can be `true` or `false`. `true` allows SIP Endpoints to register with the domain to receive calls, `false` does not. */
  sipRegistration?: boolean;
  /** The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and \\\"-\\\" and must end with `sip.twilio.com`. */
  domainName?: string;
  /** Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on the domain from phone numbers with validated addresses. */
  emergencyCallingEnabled?: boolean;
  /** Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be negotiated on all incoming calls to this sip domain. */
  secure?: boolean;
  /** The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be associated with. */
  byocTrunkSid?: string;
  /** Whether an emergency caller sid is configured for the domain. If present, this phone number will be used as the callback for the emergency call. */
  emergencyCallerSid?: string;
}

/**
 * Options to pass to create a DomainInstance
 */
export interface DomainListInstanceCreateOptions {
  /** The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and \\\"-\\\" and must end with `sip.twilio.com`. */
  domainName: string;
  /** A descriptive string that you created to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** The URL we should when the domain receives a call. */
  voiceUrl?: string;
  /** The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`. */
  voiceMethod?: string;
  /** The URL that we should call when an error occurs while retrieving or executing the TwiML from `voice_url`. */
  voiceFallbackUrl?: string;
  /** The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`. */
  voiceFallbackMethod?: string;
  /** The URL that we should call to pass status parameters (such as call ended) to your application. */
  voiceStatusCallbackUrl?: string;
  /** The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`. */
  voiceStatusCallbackMethod?: string;
  /** Whether to allow SIP Endpoints to register with the domain to receive calls. Can be `true` or `false`. `true` allows SIP Endpoints to register with the domain to receive calls, `false` does not. */
  sipRegistration?: boolean;
  /** Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on the domain from phone numbers with validated addresses. */
  emergencyCallingEnabled?: boolean;
  /** Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be negotiated on all incoming calls to this sip domain. */
  secure?: boolean;
  /** The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be associated with. */
  byocTrunkSid?: string;
  /** Whether an emergency caller sid is configured for the domain. If present, this phone number will be used as the callback for the emergency call. */
  emergencyCallerSid?: string;
}
/**
 * Options to pass to each
 */
export interface DomainListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: DomainInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface DomainListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface DomainListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface DomainContext {
  auth: AuthTypesListInstance;
  credentialListMappings: CredentialListMappingListInstance;
  ipAccessControlListMappings: IpAccessControlListMappingListInstance;

  /**
   * Remove a DomainInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a DomainInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DomainInstance) => any
  ): Promise<DomainInstance>;

  /**
   * Update a DomainInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainInstance
   */
  update(
    callback?: (error: Error | null, item?: DomainInstance) => any
  ): Promise<DomainInstance>;
  /**
   * Update a DomainInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainInstance
   */
  update(
    params: DomainContextUpdateOptions,
    callback?: (error: Error | null, item?: DomainInstance) => any
  ): Promise<DomainInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DomainContextSolution {
  accountSid: string;
  sid: string;
}

export class DomainContextImpl implements DomainContext {
  protected _solution: DomainContextSolution;
  protected _uri: string;

  protected _auth?: AuthTypesListInstance;
  protected _credentialListMappings?: CredentialListMappingListInstance;
  protected _ipAccessControlListMappings?: IpAccessControlListMappingListInstance;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/SIP/Domains/${sid}.json`;
  }

  get auth(): AuthTypesListInstance {
    this._auth =
      this._auth ||
      AuthTypesListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._auth;
  }

  get credentialListMappings(): CredentialListMappingListInstance {
    this._credentialListMappings =
      this._credentialListMappings ||
      CredentialListMappingListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._credentialListMappings;
  }

  get ipAccessControlListMappings(): IpAccessControlListMappingListInstance {
    this._ipAccessControlListMappings =
      this._ipAccessControlListMappings ||
      IpAccessControlListMappingListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._ipAccessControlListMappings;
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
    callback?: (error: Error | null, item?: DomainInstance) => any
  ): Promise<DomainInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DomainInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | DomainContextUpdateOptions
      | ((error: Error | null, item?: DomainInstance) => any),
    callback?: (error: Error | null, item?: DomainInstance) => any
  ): Promise<DomainInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["voiceFallbackMethod"] !== undefined)
      data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
    if (params["voiceFallbackUrl"] !== undefined)
      data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
    if (params["voiceMethod"] !== undefined)
      data["VoiceMethod"] = params["voiceMethod"];
    if (params["voiceStatusCallbackMethod"] !== undefined)
      data["VoiceStatusCallbackMethod"] = params["voiceStatusCallbackMethod"];
    if (params["voiceStatusCallbackUrl"] !== undefined)
      data["VoiceStatusCallbackUrl"] = params["voiceStatusCallbackUrl"];
    if (params["voiceUrl"] !== undefined) data["VoiceUrl"] = params["voiceUrl"];
    if (params["sipRegistration"] !== undefined)
      data["SipRegistration"] = serialize.bool(params["sipRegistration"]);
    if (params["domainName"] !== undefined)
      data["DomainName"] = params["domainName"];
    if (params["emergencyCallingEnabled"] !== undefined)
      data["EmergencyCallingEnabled"] = serialize.bool(
        params["emergencyCallingEnabled"]
      );
    if (params["secure"] !== undefined)
      data["Secure"] = serialize.bool(params["secure"]);
    if (params["byocTrunkSid"] !== undefined)
      data["ByocTrunkSid"] = params["byocTrunkSid"];
    if (params["emergencyCallerSid"] !== undefined)
      data["EmergencyCallerSid"] = params["emergencyCallerSid"];

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
        new DomainInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
        )
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

interface DomainPayload extends TwilioResponsePayload {
  domains: DomainResource[];
}

interface DomainResource {
  account_sid: string;
  api_version: string;
  auth_type: string;
  date_created: Date;
  date_updated: Date;
  domain_name: string;
  friendly_name: string;
  sid: string;
  uri: string;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_status_callback_method: string;
  voice_status_callback_url: string;
  voice_url: string;
  subresource_uris: Record<string, string>;
  sip_registration: boolean;
  emergency_calling_enabled: boolean;
  secure: boolean;
  byoc_trunk_sid: string;
  emergency_caller_sid: string;
}

export class DomainInstance {
  protected _solution: DomainContextSolution;
  protected _context?: DomainContext;

  constructor(
    protected _version: V2010,
    payload: DomainResource,
    accountSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.authType = payload.auth_type;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.domainName = payload.domain_name;
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;
    this.uri = payload.uri;
    this.voiceFallbackMethod = payload.voice_fallback_method;
    this.voiceFallbackUrl = payload.voice_fallback_url;
    this.voiceMethod = payload.voice_method;
    this.voiceStatusCallbackMethod = payload.voice_status_callback_method;
    this.voiceStatusCallbackUrl = payload.voice_status_callback_url;
    this.voiceUrl = payload.voice_url;
    this.subresourceUris = payload.subresource_uris;
    this.sipRegistration = payload.sip_registration;
    this.emergencyCallingEnabled = payload.emergency_calling_enabled;
    this.secure = payload.secure;
    this.byocTrunkSid = payload.byoc_trunk_sid;
    this.emergencyCallerSid = payload.emergency_caller_sid;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resource.
   */
  accountSid: string;
  /**
   * The API version used to process the call.
   */
  apiVersion: string;
  /**
   * The types of authentication you have mapped to your domain. Can be: `IP_ACL` and `CREDENTIAL_LIST`. If you have both defined for your domain, both will be returned in a comma delimited string. If `auth_type` is not defined, the domain will not be able to receive any traffic.
   */
  authType: string;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and \"-\" and must end with `sip.twilio.com`.
   */
  domainName: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The unique string that that we created to identify the SipDomain resource.
   */
  sid: string;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
   */
  voiceFallbackMethod: string;
  /**
   * The URL that we call when an error occurs while retrieving or executing the TwiML requested from `voice_url`.
   */
  voiceFallbackUrl: string;
  /**
   * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
   */
  voiceMethod: string;
  /**
   * The HTTP method we use to call `voice_status_callback_url`. Either `GET` or `POST`.
   */
  voiceStatusCallbackMethod: string;
  /**
   * The URL that we call to pass status parameters (such as call ended) to your application.
   */
  voiceStatusCallbackUrl: string;
  /**
   * The URL we call using the `voice_method` when the domain receives a call.
   */
  voiceUrl: string;
  /**
   * A list of mapping resources associated with the SIP Domain resource identified by their relative URIs.
   */
  subresourceUris: Record<string, string>;
  /**
   * Whether to allow SIP Endpoints to register with the domain to receive calls.
   */
  sipRegistration: boolean;
  /**
   * Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on the domain from phone numbers with validated addresses.
   */
  emergencyCallingEnabled: boolean;
  /**
   * Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be negotiated on all incoming calls to this sip domain.
   */
  secure: boolean;
  /**
   * The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be associated with.
   */
  byocTrunkSid: string;
  /**
   * Whether an emergency caller sid is configured for the domain. If present, this phone number will be used as the callback for the emergency call.
   */
  emergencyCallerSid: string;

  private get _proxy(): DomainContext {
    this._context =
      this._context ||
      new DomainContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a DomainInstance
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
   * Fetch a DomainInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DomainInstance) => any
  ): Promise<DomainInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DomainInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainInstance
   */
  update(
    callback?: (error: Error | null, item?: DomainInstance) => any
  ): Promise<DomainInstance>;
  /**
   * Update a DomainInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainInstance
   */
  update(
    params: DomainContextUpdateOptions,
    callback?: (error: Error | null, item?: DomainInstance) => any
  ): Promise<DomainInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: DomainInstance) => any
  ): Promise<DomainInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the auth.
   */
  auth(): AuthTypesListInstance {
    return this._proxy.auth;
  }

  /**
   * Access the credentialListMappings.
   */
  credentialListMappings(): CredentialListMappingListInstance {
    return this._proxy.credentialListMappings;
  }

  /**
   * Access the ipAccessControlListMappings.
   */
  ipAccessControlListMappings(): IpAccessControlListMappingListInstance {
    return this._proxy.ipAccessControlListMappings;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      apiVersion: this.apiVersion,
      authType: this.authType,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      domainName: this.domainName,
      friendlyName: this.friendlyName,
      sid: this.sid,
      uri: this.uri,
      voiceFallbackMethod: this.voiceFallbackMethod,
      voiceFallbackUrl: this.voiceFallbackUrl,
      voiceMethod: this.voiceMethod,
      voiceStatusCallbackMethod: this.voiceStatusCallbackMethod,
      voiceStatusCallbackUrl: this.voiceStatusCallbackUrl,
      voiceUrl: this.voiceUrl,
      subresourceUris: this.subresourceUris,
      sipRegistration: this.sipRegistration,
      emergencyCallingEnabled: this.emergencyCallingEnabled,
      secure: this.secure,
      byocTrunkSid: this.byocTrunkSid,
      emergencyCallerSid: this.emergencyCallerSid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DomainSolution {
  accountSid: string;
}

export interface DomainListInstance {
  _version: V2010;
  _solution: DomainSolution;
  _uri: string;

  (sid: string): DomainContext;
  get(sid: string): DomainContext;

  /**
   * Create a DomainInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainInstance
   */
  create(
    params: DomainListInstanceCreateOptions,
    callback?: (error: Error | null, item?: DomainInstance) => any
  ): Promise<DomainInstance>;

  /**
   * Streams DomainInstance records from the API.
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
   * @param { DomainListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: DomainInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: DomainListInstanceEachOptions,
    callback?: (item: DomainInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of DomainInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DomainPage) => any
  ): Promise<DomainPage>;
  /**
   * Lists DomainInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DomainListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DomainInstance[]) => any
  ): Promise<DomainInstance[]>;
  list(
    params: DomainListInstanceOptions,
    callback?: (error: Error | null, items: DomainInstance[]) => any
  ): Promise<DomainInstance[]>;
  /**
   * Retrieve a single page of DomainInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DomainListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DomainPage) => any
  ): Promise<DomainPage>;
  page(
    params: DomainListInstancePageOptions,
    callback?: (error: Error | null, items: DomainPage) => any
  ): Promise<DomainPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DomainListInstance(
  version: V2010,
  accountSid: string
): DomainListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as DomainListInstance;

  instance.get = function get(sid): DomainContext {
    return new DomainContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains.json`;

  instance.create = function create(
    params: DomainListInstanceCreateOptions,
    callback?: (error: Error | null, items: DomainInstance) => any
  ): Promise<DomainInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["domainName"] === null || params["domainName"] === undefined) {
      throw new Error("Required parameter \"params['domainName']\" missing.");
    }

    let data: any = {};

    data["DomainName"] = params["domainName"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["voiceUrl"] !== undefined) data["VoiceUrl"] = params["voiceUrl"];
    if (params["voiceMethod"] !== undefined)
      data["VoiceMethod"] = params["voiceMethod"];
    if (params["voiceFallbackUrl"] !== undefined)
      data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
    if (params["voiceFallbackMethod"] !== undefined)
      data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
    if (params["voiceStatusCallbackUrl"] !== undefined)
      data["VoiceStatusCallbackUrl"] = params["voiceStatusCallbackUrl"];
    if (params["voiceStatusCallbackMethod"] !== undefined)
      data["VoiceStatusCallbackMethod"] = params["voiceStatusCallbackMethod"];
    if (params["sipRegistration"] !== undefined)
      data["SipRegistration"] = serialize.bool(params["sipRegistration"]);
    if (params["emergencyCallingEnabled"] !== undefined)
      data["EmergencyCallingEnabled"] = serialize.bool(
        params["emergencyCallingEnabled"]
      );
    if (params["secure"] !== undefined)
      data["Secure"] = serialize.bool(params["secure"]);
    if (params["byocTrunkSid"] !== undefined)
      data["ByocTrunkSid"] = params["byocTrunkSid"];
    if (params["emergencyCallerSid"] !== undefined)
      data["EmergencyCallerSid"] = params["emergencyCallerSid"];

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
      (payload) =>
        new DomainInstance(
          operationVersion,
          payload,
          instance._solution.accountSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | DomainListInstancePageOptions
      | ((error: Error | null, items: DomainPage) => any),
    callback?: (error: Error | null, items: DomainPage) => any
  ): Promise<DomainPage> {
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
      (payload) => new DomainPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: DomainPage) => any
  ): Promise<DomainPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DomainPage(instance._version, payload, instance._solution)
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

export class DomainPage extends Page<
  V2010,
  DomainPayload,
  DomainResource,
  DomainInstance
> {
  /**
   * Initialize the DomainPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: DomainSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DomainInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DomainResource): DomainInstance {
    return new DomainInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
