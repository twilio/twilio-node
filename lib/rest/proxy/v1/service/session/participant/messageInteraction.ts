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
import Page from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V1 from "../../../../V1";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");



type MessageInteractionType = 'message'|'voice'|'unknown';

type MessageInteractionResourceStatus = 'accepted'|'answered'|'busy'|'canceled'|'completed'|'deleted'|'delivered'|'delivery-unknown'|'failed'|'in-progress'|'initiated'|'no-answer'|'queued'|'received'|'receiving'|'ringing'|'scheduled'|'sending'|'sent'|'undelivered'|'unknown';


/**
 * Options to pass to create a MessageInteractionInstance
 *
 * @property { string } [body] The message to send to the participant
 * @property { Array<string> } [mediaUrl] Reserved. Not currently supported.
 */
export interface MessageInteractionListInstanceCreateOptions {
  body?: string;
  mediaUrl?: Array<string>;
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
export interface MessageInteractionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void;
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
export interface MessageInteractionListInstanceOptions {
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
export interface MessageInteractionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface MessageInteractionContext {


  /**
   * Fetch a MessageInteractionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInteractionInstance
   */
  fetch(callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MessageInteractionContextSolution {
  serviceSid?: string;
  sessionSid?: string;
  participantSid?: string;
  sid?: string;
}

export class MessageInteractionContextImpl implements MessageInteractionContext {
  protected _solution: MessageInteractionContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, serviceSid: string, sessionSid: string, participantSid: string, sid: string) {
    this._solution = { serviceSid, sessionSid, participantSid, sid };
    this._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Participants/${participantSid}/MessageInteractions/${sid}`;
  }

  fetch(callback?: any): Promise<MessageInteractionInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new MessageInteractionInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sessionSid, this._solution.participantSid, this._solution.sid));
    

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

interface MessageInteractionPayload extends MessageInteractionResource, Page.TwilioResponsePayload {
}

interface MessageInteractionResource {
  sid?: string | null;
  session_sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  data?: string | null;
  type?: MessageInteractionType;
  participant_sid?: string | null;
  inbound_participant_sid?: string | null;
  inbound_resource_sid?: string | null;
  inbound_resource_status?: MessageInteractionResourceStatus;
  inbound_resource_type?: string | null;
  inbound_resource_url?: string | null;
  outbound_participant_sid?: string | null;
  outbound_resource_sid?: string | null;
  outbound_resource_status?: MessageInteractionResourceStatus;
  outbound_resource_type?: string | null;
  outbound_resource_url?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class MessageInteractionInstance {
  protected _solution: MessageInteractionContextSolution;
  protected _context?: MessageInteractionContext;

  constructor(protected _version: V1, payload: MessageInteractionPayload, serviceSid: string, sessionSid: string, participantSid: string, sid?: string) {
    this.sid = payload.sid;
    this.sessionSid = payload.session_sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.data = payload.data;
    this.type = payload.type;
    this.participantSid = payload.participant_sid;
    this.inboundParticipantSid = payload.inbound_participant_sid;
    this.inboundResourceSid = payload.inbound_resource_sid;
    this.inboundResourceStatus = payload.inbound_resource_status;
    this.inboundResourceType = payload.inbound_resource_type;
    this.inboundResourceUrl = payload.inbound_resource_url;
    this.outboundParticipantSid = payload.outbound_participant_sid;
    this.outboundResourceSid = payload.outbound_resource_sid;
    this.outboundResourceStatus = payload.outbound_resource_status;
    this.outboundResourceType = payload.outbound_resource_type;
    this.outboundResourceUrl = payload.outbound_resource_url;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { serviceSid, sessionSid, participantSid, sid: sid || this.sid };
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
   * A JSON string that includes the message body sent to the participant
   */
  data?: string | null;
  type?: MessageInteractionType;
  /**
   * The SID of the Participant resource
   */
  participantSid?: string | null;
  /**
   * Always empty for Message Interactions
   */
  inboundParticipantSid?: string | null;
  /**
   * Always empty for Message Interactions
   */
  inboundResourceSid?: string | null;
  inboundResourceStatus?: MessageInteractionResourceStatus;
  /**
   * Always empty for Message Interactions
   */
  inboundResourceType?: string | null;
  /**
   * Always empty for Message Interactions
   */
  inboundResourceUrl?: string | null;
  /**
   * The SID of the outbound Participant resource
   */
  outboundParticipantSid?: string | null;
  /**
   * The SID of the outbound Message resource
   */
  outboundResourceSid?: string | null;
  outboundResourceStatus?: MessageInteractionResourceStatus;
  /**
   * The outbound resource type
   */
  outboundResourceType?: string | null;
  /**
   * The URL of the Twilio message resource
   */
  outboundResourceUrl?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the MessageInteraction resource
   */
  url?: string | null;

  private get _proxy(): MessageInteractionContext {
    this._context = this._context || new MessageInteractionContextImpl(this._version, this._solution.serviceSid, this._solution.sessionSid, this._solution.participantSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a MessageInteractionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInteractionInstance
   */
  fetch(callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>
     {
    return this._proxy.fetch(callback);
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
      data: this.data, 
      type: this.type, 
      participantSid: this.participantSid, 
      inboundParticipantSid: this.inboundParticipantSid, 
      inboundResourceSid: this.inboundResourceSid, 
      inboundResourceStatus: this.inboundResourceStatus, 
      inboundResourceType: this.inboundResourceType, 
      inboundResourceUrl: this.inboundResourceUrl, 
      outboundParticipantSid: this.outboundParticipantSid, 
      outboundResourceSid: this.outboundResourceSid, 
      outboundResourceStatus: this.outboundResourceStatus, 
      outboundResourceType: this.outboundResourceType, 
      outboundResourceUrl: this.outboundResourceUrl, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface MessageInteractionListInstance {
  (sid: string): MessageInteractionContext;
  get(sid: string): MessageInteractionContext;


  /**
   * Create a MessageInteractionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInteractionInstance
   */
  create(callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>;
  /**
   * Create a MessageInteractionInstance
   *
   * @param { MessageInteractionListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MessageInteractionInstance
   */
  create(params: MessageInteractionListInstanceCreateOptions, callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>;
  create(params?: any, callback?: any): Promise<MessageInteractionInstance>



  /**
   * Streams MessageInteractionInstance records from the API.
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
  each(callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams MessageInteractionInstance records from the API.
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
   * @param { MessageInteractionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: MessageInteractionListInstanceEachOptions, callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MessageInteractionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
  /**
   * Retrieve a single target page of MessageInteractionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
  getPage(params?: any, callback?: any): Promise<MessageInteractionPage>;
  /**
   * Lists MessageInteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: MessageInteractionInstance[]) => any): Promise<MessageInteractionInstance[]>;
  /**
   * Lists MessageInteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageInteractionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: MessageInteractionListInstanceOptions, callback?: (error: Error | null, items: MessageInteractionInstance[]) => any): Promise<MessageInteractionInstance[]>;
  list(params?: any, callback?: any): Promise<MessageInteractionInstance[]>;
  /**
   * Retrieve a single page of MessageInteractionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
  /**
   * Retrieve a single page of MessageInteractionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageInteractionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: MessageInteractionListInstancePageOptions, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
  page(params?: any, callback?: any): Promise<MessageInteractionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MessageInteractionSolution {
  serviceSid?: string;
  sessionSid?: string;
  participantSid?: string;
}

interface MessageInteractionListInstanceImpl extends MessageInteractionListInstance {}
class MessageInteractionListInstanceImpl implements MessageInteractionListInstance {
  _version?: V1;
  _solution?: MessageInteractionSolution;
  _uri?: string;

}

export function MessageInteractionListInstance(version: V1, serviceSid: string, sessionSid: string, participantSid: string): MessageInteractionListInstance {
  const instance = ((sid) => instance.get(sid)) as MessageInteractionListInstanceImpl;

  instance.get = function get(sid): MessageInteractionContext {
    return new MessageInteractionContextImpl(version, serviceSid, sessionSid, participantSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid, sessionSid, participantSid };
  instance._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Participants/${participantSid}/MessageInteractions`;

  instance.create = function create(params?: any, callback?: any): Promise<MessageInteractionInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.body !== undefined) data['Body'] = params.body;
    if (params.mediaUrl !== undefined) data['MediaUrl'] = serialize.map(params.mediaUrl, ((e) => e));

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new MessageInteractionInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sessionSid, this._solution.participantSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<MessageInteractionPage> {
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
    
    operationPromise = operationPromise.then(payload => new MessageInteractionPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<MessageInteractionPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new MessageInteractionPage(this._version, payload, this._solution));
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


export class MessageInteractionPage extends Page<V1, MessageInteractionPayload, MessageInteractionResource, MessageInteractionInstance> {
/**
* Initialize the MessageInteractionPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: MessageInteractionSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of MessageInteractionInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: MessageInteractionPayload): MessageInteractionInstance {
    return new MessageInteractionInstance(
    this._version,
    payload,
        this._solution.serviceSid,
        this._solution.sessionSid,
        this._solution.participantSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

