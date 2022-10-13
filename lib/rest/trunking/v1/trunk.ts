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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { IpAccessControlListListInstance } from "./trunk/ipAccessControlList";
import { CredentialListListInstance } from "./trunk/credentialList";
import { OriginationUrlListInstance } from "./trunk/originationUrl";
import { PhoneNumberListInstance } from "./trunk/phoneNumber";
import { RecordingListInstance } from "./trunk/recording";


/**
 * Options to pass to create a TrunkInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [domainName] The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and &#x60;-&#x60; and must end with &#x60;pstn.twilio.com&#x60;. See [Termination Settings](https://www.twilio.com/docs/sip-trunking#termination) for more information.
 * @property { string } [disasterRecoveryUrl] The URL we should call using the &#x60;disaster_recovery_method&#x60; if an error occurs while sending SIP traffic towards the configured Origination URL. We retrieve TwiML from the URL and execute the instructions like any other normal TwiML call. See [Disaster Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery) for more information.
 * @property { string } [disasterRecoveryMethod] The HTTP method we should use to call the &#x60;disaster_recovery_url&#x60;. Can be: &#x60;GET&#x60; or &#x60;POST&#x60;.
 * @property { TrunkEnumTransferSetting } [transferMode] 
 * @property { boolean } [secure] Whether Secure Trunking is enabled for the trunk. If enabled, all calls going through the trunk will be secure using SRTP for media and TLS for signaling. If disabled, then RTP will be used for media. See [Secure Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking) for more information.
 * @property { boolean } [cnamLookupEnabled] Whether Caller ID Name (CNAM) lookup should be enabled for the trunk. If enabled, all inbound calls to the SIP Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
 * @property { TrunkEnumTransferCallerId } [transferCallerId] 
 */
export interface TrunkListInstanceCreateOptions {
  friendlyName?: string;
  domainName?: string;
  disasterRecoveryUrl?: string;
  disasterRecoveryMethod?: string;
  transferMode?: TrunkEnumTransferSetting;
  secure?: boolean;
  cnamLookupEnabled?: boolean;
  transferCallerId?: TrunkEnumTransferCallerId;
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




/**
 * Options to pass to update a TrunkInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [domainName] The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and &#x60;-&#x60; and must end with &#x60;pstn.twilio.com&#x60;. See [Termination Settings](https://www.twilio.com/docs/sip-trunking#termination) for more information.
 * @property { string } [disasterRecoveryUrl] The URL we should call using the &#x60;disaster_recovery_method&#x60; if an error occurs while sending SIP traffic towards the configured Origination URL. We retrieve TwiML from the URL and execute the instructions like any other normal TwiML call. See [Disaster Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery) for more information.
 * @property { string } [disasterRecoveryMethod] The HTTP method we should use to call the &#x60;disaster_recovery_url&#x60;. Can be: &#x60;GET&#x60; or &#x60;POST&#x60;.
 * @property { TrunkEnumTransferSetting } [transferMode] 
 * @property { boolean } [secure] Whether Secure Trunking is enabled for the trunk. If enabled, all calls going through the trunk will be secure using SRTP for media and TLS for signaling. If disabled, then RTP will be used for media. See [Secure Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking) for more information.
 * @property { boolean } [cnamLookupEnabled] Whether Caller ID Name (CNAM) lookup should be enabled for the trunk. If enabled, all inbound calls to the SIP Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
 * @property { TrunkEnumTransferCallerId } [transferCallerId] 
 */
export interface TrunkContextUpdateOptions {
  friendlyName?: string;
  domainName?: string;
  disasterRecoveryUrl?: string;
  disasterRecoveryMethod?: string;
  transferMode?: TrunkEnumTransferSetting;
  secure?: boolean;
  cnamLookupEnabled?: boolean;
  transferCallerId?: TrunkEnumTransferCallerId;
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
  create(params?: any, callback?: any): Promise<TrunkInstance>



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

interface TrunkListInstanceImpl extends TrunkListInstance {}
class TrunkListInstanceImpl implements TrunkListInstance {
  _version?: V1;
  _solution?: TrunkSolution;
  _uri?: string;

}

export function TrunkListInstance(version: V1): TrunkListInstance {
  const instance = ((sid) => instance.get(sid)) as TrunkListInstanceImpl;

  instance.get = function get(sid): TrunkContext {
    return new TrunkContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Trunks`;

  instance.create = function create(params?: any, callback?: any): Promise<TrunkInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.domainName !== undefined) data['DomainName'] = params.domainName;
    if (params.disasterRecoveryUrl !== undefined) data['DisasterRecoveryUrl'] = params.disasterRecoveryUrl;
    if (params.disasterRecoveryMethod !== undefined) data['DisasterRecoveryMethod'] = params.disasterRecoveryMethod;
    if (params.transferMode !== undefined) data['TransferMode'] = params.transferMode;
    if (params.secure !== undefined) data['Secure'] = serialize.bool(params.secure);
    if (params.cnamLookupEnabled !== undefined) data['CnamLookupEnabled'] = serialize.bool(params.cnamLookupEnabled);
    if (params.transferCallerId !== undefined) data['TransferCallerId'] = params.transferCallerId;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TrunkInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<TrunkPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TrunkPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<TrunkPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new TrunkPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }



  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export interface TrunkContext {

  ipAccessControlLists: IpAccessControlListListInstance;
  credentialLists: CredentialListListInstance;
  originationUrls: OriginationUrlListInstance;
  phoneNumbers: PhoneNumberListInstance;
  recording: RecordingListInstance;

  /**
   * Remove a TrunkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<boolean>


  /**
   * Fetch a TrunkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrunkInstance
   */
  fetch(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>


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
  update(params?: any, callback?: any): Promise<TrunkInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class TrunkContextImpl implements TrunkContext {
  protected _solution: TrunkSolution;
  protected _uri: string;

  protected _ipAccessControlLists?: IpAccessControlListListInstance;
  protected _credentialLists?: CredentialListListInstance;
  protected _originationUrls?: OriginationUrlListInstance;
  protected _phoneNumbers?: PhoneNumberListInstance;
  protected _recording?: RecordingListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Trunks/${sid}`;
  }

  get ipAccessControlLists(): IpAccessControlListListInstance {
    this._ipAccessControlLists = this._ipAccessControlLists || IpAccessControlListListInstance(this._version, this._solution.sid);
    return this._ipAccessControlLists;
  }

  get credentialLists(): CredentialListListInstance {
    this._credentialLists = this._credentialLists || CredentialListListInstance(this._version, this._solution.sid);
    return this._credentialLists;
  }

  get originationUrls(): OriginationUrlListInstance {
    this._originationUrls = this._originationUrls || OriginationUrlListInstance(this._version, this._solution.sid);
    return this._originationUrls;
  }

  get phoneNumbers(): PhoneNumberListInstance {
    this._phoneNumbers = this._phoneNumbers || PhoneNumberListInstance(this._version, this._solution.sid);
    return this._phoneNumbers;
  }

  get recording(): RecordingListInstance {
    this._recording = this._recording || RecordingListInstance(this._version, this._solution.sid);
    return this._recording;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<TrunkInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new TrunkInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params?: any, callback?: any): Promise<TrunkInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.domainName !== undefined) data['DomainName'] = params.domainName;
    if (params.disasterRecoveryUrl !== undefined) data['DisasterRecoveryUrl'] = params.disasterRecoveryUrl;
    if (params.disasterRecoveryMethod !== undefined) data['DisasterRecoveryMethod'] = params.disasterRecoveryMethod;
    if (params.transferMode !== undefined) data['TransferMode'] = params.transferMode;
    if (params.secure !== undefined) data['Secure'] = serialize.bool(params.secure);
    if (params.cnamLookupEnabled !== undefined) data['CnamLookupEnabled'] = serialize.bool(params.cnamLookupEnabled);
    if (params.transferCallerId !== undefined) data['TransferCallerId'] = params.transferCallerId;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TrunkInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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
export type TrunkDisasterRecoveryMethod = 'HEAD'|'GET'|'POST'|'PATCH'|'PUT'|'DELETE';

interface TrunkPayload extends TrunkResource, Page.TwilioResponsePayload {
}

interface TrunkResource {
  account_sid?: string | null;
  domain_name?: string | null;
  disaster_recovery_method?: TrunkDisasterRecoveryMethod;
  disaster_recovery_url?: string | null;
  friendly_name?: string | null;
  secure?: boolean | null;
  recording?: any | null;
  transfer_mode?: object;
  transfer_caller_id?: object;
  cnam_lookup_enabled?: boolean | null;
  auth_type?: string | null;
  auth_type_set?: Array<string> | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  sid?: string | null;
  url?: string | null;
  links?: object | null;
}

export class TrunkInstance {
  protected _solution: TrunkSolution;
  protected _context?: TrunkContext;

  constructor(protected _version: V1, payload: TrunkPayload, sid?: string) {
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
  transferMode?: object;
  transferCallerId?: object;
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

  private get _proxy(): TrunkContext {
    this._context = this._context || new TrunkContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a TrunkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a TrunkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrunkInstance
   */
  fetch(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>
     {
    return this._proxy.fetch(callback);
  }

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
  update(params?: any, callback?: any): Promise<TrunkInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the ipAccessControlLists.
   */
  ipAccessControlLists(): IpAccessControlListListInstance {
    return this._proxy.ipAccessControlLists;
  }

  /**
   * Access the credentialLists.
   */
  credentialLists(): CredentialListListInstance {
    return this._proxy.credentialLists;
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
   * Access the recording.
   */
  recording(): RecordingListInstance {
    return this._proxy.recording;
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
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface TrunkSolution {
  sid?: string;
}

export class TrunkPage extends Page<V1, TrunkPayload, TrunkResource, TrunkInstance> {
  /**
   * Initialize the TrunkPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: TrunkSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TrunkInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TrunkPayload): TrunkInstance {
    return new TrunkInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

