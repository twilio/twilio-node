/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Proxy
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { MessageInteractionListInstance } from "./participant/messageInteraction";


/**
 * Options to pass to create a ParticipantInstance
 *
 * @property { string } identifier The phone number of the Participant.
 * @property { string } [friendlyName] The string that you assigned to describe the participant. This value must be 255 characters or fewer. **This value should not have PII.**
 * @property { string } [proxyIdentifier] The proxy phone number to use for the Participant. If not specified, Proxy will select a number from the pool.
 * @property { string } [proxyIdentifierSid] The SID of the Proxy Identifier to assign to the Participant.
 * @property { boolean } [failOnParticipantConflict] [Experimental] For accounts with the ProxyAllowParticipantConflict account flag, setting to true enables per-request opt-in to allowing Proxy to reject a Participant create request that could cause the same Identifier/ProxyIdentifier pair to be active in multiple Sessions. Depending on the context, this could be a 409 error (Twilio error code 80623) or a 400 error (Twilio error code 80604). If not provided, requests will be allowed to succeed and a Debugger notification (80802) will be emitted. Having multiple, active Participants with the same Identifier/ProxyIdentifier pair causes calls and messages from affected Participants to be routed incorrectly. Please note, the default behavior for accounts without the ProxyAllowParticipantConflict flag is to reject the request as described.  This will eventually be the default for all accounts.
 */
export interface ParticipantListInstanceCreateOptions {
  identifier: string;
  friendlyName?: string;
  proxyIdentifier?: string;
  proxyIdentifierSid?: string;
  failOnParticipantConflict?: boolean;
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
export interface ParticipantListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
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
export interface ParticipantListInstanceOptions {
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
export interface ParticipantListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface ParticipantListInstance {
  (sid: string): ParticipantContext;
  get(sid: string): ParticipantContext;


  /**
   * Create a ParticipantInstance
   *
   * @param { ParticipantListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  create(params: ParticipantListInstanceCreateOptions, callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>;
  create(params: any, callback?: any): Promise<ParticipantInstance>



  /**
   * Streams ParticipantInstance records from the API.
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
  each(callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ParticipantInstance records from the API.
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
   * @param { ParticipantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ParticipantListInstanceEachOptions, callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  getPage(params?: any, callback?: any): Promise<ParticipantPage>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ParticipantListInstanceOptions, callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
  list(params?: any, callback?: any): Promise<ParticipantInstance[]>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ParticipantListInstancePageOptions, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  page(params?: any, callback?: any): Promise<ParticipantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface ParticipantListInstanceImpl extends ParticipantListInstance {}
class ParticipantListInstanceImpl implements ParticipantListInstance {
  _version?: V1;
  _solution?: ParticipantSolution;
  _uri?: string;

}

export function ParticipantListInstance(version: V1, serviceSid: string, sessionSid: string): ParticipantListInstance {
  const instance = ((sid) => instance.get(sid)) as ParticipantListInstanceImpl;

  instance.get = function get(sid): ParticipantContext {
    return new ParticipantContextImpl(version, serviceSid, sessionSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid, sessionSid };
  instance._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Participants`;

  instance.create = function create(params: any, callback?: any): Promise<ParticipantInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.identifier === null || params.identifier === undefined) {
      throw new Error('Required parameter "params.identifier" missing.');
    }

    const data: any = {};

    data['Identifier'] = params.identifier;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.proxyIdentifier !== undefined) data['ProxyIdentifier'] = params.proxyIdentifier;
    if (params.proxyIdentifierSid !== undefined) data['ProxyIdentifierSid'] = params.proxyIdentifierSid;
    if (params.failOnParticipantConflict !== undefined) data['FailOnParticipantConflict'] = serialize.bool(params.failOnParticipantConflict);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ParticipantInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sessionSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<ParticipantPage> {
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
    
    operationPromise = operationPromise.then(payload => new ParticipantPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ParticipantPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ParticipantPage(this._version, payload, this._solution));
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


export interface ParticipantContext {

  messageInteractions: MessageInteractionListInstance;

  /**
   * Remove a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<boolean>


  /**
   * Fetch a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  fetch(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class ParticipantContextImpl implements ParticipantContext {
  protected _solution: ParticipantSolution;
  protected _uri: string;

  protected _messageInteractions?: MessageInteractionListInstance;

  constructor(protected _version: V1, serviceSid: string, sessionSid: string, sid: string) {
    this._solution = { serviceSid, sessionSid, sid };
    this._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Participants/${sid}`;
  }

  get messageInteractions(): MessageInteractionListInstance {
    this._messageInteractions = this._messageInteractions || MessageInteractionListInstance(this._version, this._solution.serviceSid, this._solution.sessionSid, this._solution.sid);
    return this._messageInteractions;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<ParticipantInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new ParticipantInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sessionSid, this._solution.sid));
    

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

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantResource {
  sid?: string | null;
  session_sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  identifier?: string | null;
  proxy_identifier?: string | null;
  proxy_identifier_sid?: string | null;
  date_deleted?: Date | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class ParticipantInstance {
  protected _solution: ParticipantSolution;
  protected _context?: ParticipantContext;

  constructor(protected _version: V1, payload: ParticipantPayload, serviceSid: string, sessionSid: string, sid?: string) {
    this.sid = payload.sid;
    this.sessionSid = payload.session_sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.identifier = payload.identifier;
    this.proxyIdentifier = payload.proxy_identifier;
    this.proxyIdentifierSid = payload.proxy_identifier_sid;
    this.dateDeleted = deserialize.iso8601DateTime(payload.date_deleted);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sessionSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the resource\'s parent Session
   */
  sessionSid?: string | null;
  /**
   * The SID of the resource\'s parent Service
   */
  serviceSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the participant
   */
  friendlyName?: string | null;
  /**
   * The phone number or channel identifier of the Participant
   */
  identifier?: string | null;
  /**
   * The phone number or short code of the participant\'s partner
   */
  proxyIdentifier?: string | null;
  /**
   * The SID of the Proxy Identifier assigned to the Participant
   */
  proxyIdentifierSid?: string | null;
  /**
   * The ISO 8601 date the Participant was removed
   */
  dateDeleted?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Participant resource
   */
  url?: string | null;
  /**
   * The URLs to resources related the participant
   */
  links?: object | null;

  private get _proxy(): ParticipantContext {
    this._context = this._context || new ParticipantContextImpl(this._version, this._solution.serviceSid, this._solution.sessionSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  fetch(callback?: (error: Error | null, item?: ParticipantInstance) => any): Promise<ParticipantInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the messageInteractions.
   */
  messageInteractions(): MessageInteractionListInstance {
    return this._proxy.messageInteractions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      sessionSid: this.sessionSid, 
      serviceSid: this.serviceSid, 
      accountSid: this.accountSid, 
      friendlyName: this.friendlyName, 
      identifier: this.identifier, 
      proxyIdentifier: this.proxyIdentifier, 
      proxyIdentifierSid: this.proxyIdentifierSid, 
      dateDeleted: this.dateDeleted, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface ParticipantSolution {
  serviceSid?: string;
  sessionSid?: string;
  sid?: string;
}

export class ParticipantPage extends Page<V1, ParticipantPayload, ParticipantResource, ParticipantInstance> {
  /**
   * Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ParticipantSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ParticipantPayload): ParticipantInstance {
    return new ParticipantInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.sessionSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

