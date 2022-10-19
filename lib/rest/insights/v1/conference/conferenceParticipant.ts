/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

type ConferenceParticipantProcessingState = 'complete'|'in_progress'|'timeout';

type ConferenceParticipantCallDirection = 'inbound'|'outbound';

type ConferenceParticipantRegion = 'us1'|'us2'|'au1'|'br1'|'ie1'|'jp1'|'sg1'|'de1';

type ConferenceParticipantCallStatus = 'answered'|'completed'|'busy'|'fail'|'noanswer'|'ringing'|'canceled';

type ConferenceParticipantCallType = 'carrier'|'client'|'sip';

type ConferenceParticipantJitterBufferSize = 'large'|'small'|'medium'|'off';

/**
 * Options to pass to each
 *
 * @property { string } [participantSid] The unique SID identifier of the Participant.
 * @property { string } [label] User-specified label for a participant.
 * @property { string } [events] Conference events generated by application or participant activity; e.g. &#x60;hold&#x60;, &#x60;mute&#x60;, etc.
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
export interface ConferenceParticipantListInstanceEachOptions {
  participantSid?: string;
  label?: string;
  events?: string;
  pageSize?: number;
  callback?: (item: ConferenceParticipantInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [participantSid] The unique SID identifier of the Participant.
 * @property { string } [label] User-specified label for a participant.
 * @property { string } [events] Conference events generated by application or participant activity; e.g. &#x60;hold&#x60;, &#x60;mute&#x60;, etc.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ConferenceParticipantListInstanceOptions {
  participantSid?: string;
  label?: string;
  events?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [participantSid] The unique SID identifier of the Participant.
 * @property { string } [label] User-specified label for a participant.
 * @property { string } [events] Conference events generated by application or participant activity; e.g. &#x60;hold&#x60;, &#x60;mute&#x60;, etc.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ConferenceParticipantListInstancePageOptions {
  participantSid?: string;
  label?: string;
  events?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



/**
 * Options to pass to fetch a ConferenceParticipantInstance
 *
 * @property { string } [events] Conference events generated by application or participant activity; e.g. &#x60;hold&#x60;, &#x60;mute&#x60;, etc.
 * @property { string } [metrics] Object. Contains participant call quality metrics.
 */
export interface ConferenceParticipantContextFetchOptions {
  events?: string;
  metrics?: string;
}

export interface ConferenceParticipantListInstance {
  (participantSid: string): ConferenceParticipantContext;
  get(participantSid: string): ConferenceParticipantContext;



  /**
   * Streams ConferenceParticipantInstance records from the API.
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
  each(callback?: (item: ConferenceParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ConferenceParticipantInstance records from the API.
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
   * @param { ConferenceParticipantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ConferenceParticipantListInstanceEachOptions, callback?: (item: ConferenceParticipantInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ConferenceParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ConferenceParticipantPage) => any): Promise<ConferenceParticipantPage>;
  /**
   * Retrieve a single target page of ConferenceParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ConferenceParticipantPage) => any): Promise<ConferenceParticipantPage>;
  getPage(params?: any, callback?: any): Promise<ConferenceParticipantPage>;
  /**
   * Lists ConferenceParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ConferenceParticipantInstance[]) => any): Promise<ConferenceParticipantInstance[]>;
  /**
   * Lists ConferenceParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConferenceParticipantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ConferenceParticipantListInstanceOptions, callback?: (error: Error | null, items: ConferenceParticipantInstance[]) => any): Promise<ConferenceParticipantInstance[]>;
  list(params?: any, callback?: any): Promise<ConferenceParticipantInstance[]>;
  /**
   * Retrieve a single page of ConferenceParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ConferenceParticipantPage) => any): Promise<ConferenceParticipantPage>;
  /**
   * Retrieve a single page of ConferenceParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConferenceParticipantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ConferenceParticipantListInstancePageOptions, callback?: (error: Error | null, items: ConferenceParticipantPage) => any): Promise<ConferenceParticipantPage>;
  page(params?: any, callback?: any): Promise<ConferenceParticipantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConferenceParticipantSolution {
  conferenceSid?: string;
}

interface ConferenceParticipantListInstanceImpl extends ConferenceParticipantListInstance {}
class ConferenceParticipantListInstanceImpl implements ConferenceParticipantListInstance {
  _version?: V1;
  _solution?: ConferenceParticipantSolution;
  _uri?: string;

}

export function ConferenceParticipantListInstance(version: V1, conferenceSid: string): ConferenceParticipantListInstance {
  const instance = ((participantSid) => instance.get(participantSid)) as ConferenceParticipantListInstanceImpl;

  instance.get = function get(participantSid): ConferenceParticipantContext {
    return new ConferenceParticipantContextImpl(version, conferenceSid, participantSid);
  }

  instance._version = version;
  instance._solution = { conferenceSid };
  instance._uri = `/Conferences/${conferenceSid}/Participants`;

  instance.page = function page(params?: any, callback?: any): Promise<ConferenceParticipantPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.participantSid !== undefined) data['ParticipantSid'] = params.participantSid;
    if (params.label !== undefined) data['Label'] = params.label;
    if (params.events !== undefined) data['Events'] = params.events;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ConferenceParticipantPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ConferenceParticipantPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ConferenceParticipantPage(this._version, payload, this._solution));
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


export interface ConferenceParticipantContext {


  /**
   * Fetch a ConferenceParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConferenceParticipantInstance
   */
  fetch(callback?: (error: Error | null, item?: ConferenceParticipantInstance) => any): Promise<ConferenceParticipantInstance>;
  /**
   * Fetch a ConferenceParticipantInstance
   *
   * @param { ConferenceParticipantContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConferenceParticipantInstance
   */
  fetch(params: ConferenceParticipantContextFetchOptions, callback?: (error: Error | null, item?: ConferenceParticipantInstance) => any): Promise<ConferenceParticipantInstance>;
  fetch(params?: any, callback?: any): Promise<ConferenceParticipantInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConferenceParticipantContextSolution {
  conferenceSid?: string;
  participantSid?: string;
}

export class ConferenceParticipantContextImpl implements ConferenceParticipantContext {
  protected _solution: ConferenceParticipantContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, conferenceSid: string, participantSid: string) {
    this._solution = { conferenceSid, participantSid };
    this._uri = `/Conferences/${conferenceSid}/Participants/${participantSid}`;
  }

  fetch(params?: any, callback?: any): Promise<ConferenceParticipantInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.events !== undefined) data['Events'] = params.events;
    if (params.metrics !== undefined) data['Metrics'] = params.metrics;

    const headers: any = {};

    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ConferenceParticipantInstance(operationVersion, payload, this._solution.conferenceSid, this._solution.participantSid));
    

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

interface ConferenceParticipantPayload extends ConferenceParticipantResource, Page.TwilioResponsePayload {
}

interface ConferenceParticipantResource {
  participant_sid?: string | null;
  label?: string | null;
  conference_sid?: string | null;
  call_sid?: string | null;
  account_sid?: string | null;
  call_direction?: ConferenceParticipantCallDirection;
  from?: string | null;
  to?: string | null;
  call_status?: ConferenceParticipantCallStatus;
  country_code?: string | null;
  is_moderator?: boolean | null;
  join_time?: Date | null;
  leave_time?: Date | null;
  duration_seconds?: number | null;
  outbound_queue_length?: number | null;
  outbound_time_in_queue?: number | null;
  jitter_buffer_size?: ConferenceParticipantJitterBufferSize;
  is_coach?: boolean | null;
  coached_participants?: Array<string> | null;
  participant_region?: ConferenceParticipantRegion;
  conference_region?: ConferenceParticipantRegion;
  call_type?: ConferenceParticipantCallType;
  processing_state?: ConferenceParticipantProcessingState;
  properties?: any | null;
  events?: any | null;
  metrics?: any | null;
  url?: string | null;
}

export class ConferenceParticipantInstance {
  protected _solution: ConferenceParticipantContextSolution;
  protected _context?: ConferenceParticipantContext;

  constructor(protected _version: V1, payload: ConferenceParticipantPayload, conferenceSid: string, participantSid?: string) {
    this.participantSid = payload.participant_sid;
    this.label = payload.label;
    this.conferenceSid = payload.conference_sid;
    this.callSid = payload.call_sid;
    this.accountSid = payload.account_sid;
    this.callDirection = payload.call_direction;
    this.from = payload.from;
    this.to = payload.to;
    this.callStatus = payload.call_status;
    this.countryCode = payload.country_code;
    this.isModerator = payload.is_moderator;
    this.joinTime = deserialize.iso8601DateTime(payload.join_time);
    this.leaveTime = deserialize.iso8601DateTime(payload.leave_time);
    this.durationSeconds = deserialize.integer(payload.duration_seconds);
    this.outboundQueueLength = deserialize.integer(payload.outbound_queue_length);
    this.outboundTimeInQueue = deserialize.integer(payload.outbound_time_in_queue);
    this.jitterBufferSize = payload.jitter_buffer_size;
    this.isCoach = payload.is_coach;
    this.coachedParticipants = payload.coached_participants;
    this.participantRegion = payload.participant_region;
    this.conferenceRegion = payload.conference_region;
    this.callType = payload.call_type;
    this.processingState = payload.processing_state;
    this.properties = payload.properties;
    this.events = payload.events;
    this.metrics = payload.metrics;
    this.url = payload.url;

    this._solution = { conferenceSid, participantSid: participantSid || this.participantSid };
  }

  /**
   * SID for this participant.
   */
  participantSid?: string | null;
  /**
   * The user-specified label of this participant.
   */
  label?: string | null;
  /**
   * Conference SID.
   */
  conferenceSid?: string | null;
  /**
   * Unique SID identifier of the call.
   */
  callSid?: string | null;
  /**
   * Account SID.
   */
  accountSid?: string | null;
  callDirection?: ConferenceParticipantCallDirection;
  /**
   * Caller ID of the calling party.
   */
  from?: string | null;
  /**
   * Called party.
   */
  to?: string | null;
  callStatus?: ConferenceParticipantCallStatus;
  /**
   * ISO alpha-2 country code of the participant.
   */
  countryCode?: string | null;
  /**
   * Boolean. Indicates whether participant had startConferenceOnEnter=true or endConferenceOnExit=true.
   */
  isModerator?: boolean | null;
  /**
   * ISO 8601 timestamp of participant join event.
   */
  joinTime?: Date | null;
  /**
   * ISO 8601 timestamp of participant leave event.
   */
  leaveTime?: Date | null;
  /**
   * Participant durations in seconds.
   */
  durationSeconds?: number | null;
  /**
   * Estimated time in queue at call creation.
   */
  outboundQueueLength?: number | null;
  /**
   * Actual time in queue (seconds).
   */
  outboundTimeInQueue?: number | null;
  jitterBufferSize?: ConferenceParticipantJitterBufferSize;
  /**
   * Boolean. Indicated whether participant was a coach.
   */
  isCoach?: boolean | null;
  /**
   * Call SIDs coached by this participant.
   */
  coachedParticipants?: Array<string> | null;
  participantRegion?: ConferenceParticipantRegion;
  conferenceRegion?: ConferenceParticipantRegion;
  callType?: ConferenceParticipantCallType;
  processingState?: ConferenceParticipantProcessingState;
  /**
   * Participant properties and metadata.
   */
  properties?: any | null;
  /**
   * Object containing information of actions taken by participants. Nested resource URLs.
   */
  events?: any | null;
  /**
   * Object. Contains participant quality metrics.
   */
  metrics?: any | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;

  private get _proxy(): ConferenceParticipantContext {
    this._context = this._context || new ConferenceParticipantContextImpl(this._version, this._solution.conferenceSid, this._solution.participantSid);
    return this._context;
  }

  /**
   * Fetch a ConferenceParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConferenceParticipantInstance
   */
  fetch(callback?: (error: Error | null, item?: ConferenceParticipantInstance) => any): Promise<ConferenceParticipantInstance>;
  /**
   * Fetch a ConferenceParticipantInstance
   *
   * @param { ConferenceParticipantContextFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConferenceParticipantInstance
   */
  fetch(params: ConferenceParticipantContextFetchOptions, callback?: (error: Error | null, item?: ConferenceParticipantInstance) => any): Promise<ConferenceParticipantInstance>;
  fetch(params?: any, callback?: any): Promise<ConferenceParticipantInstance>
     {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      participantSid: this.participantSid, 
      label: this.label, 
      conferenceSid: this.conferenceSid, 
      callSid: this.callSid, 
      accountSid: this.accountSid, 
      callDirection: this.callDirection, 
      from: this.from, 
      to: this.to, 
      callStatus: this.callStatus, 
      countryCode: this.countryCode, 
      isModerator: this.isModerator, 
      joinTime: this.joinTime, 
      leaveTime: this.leaveTime, 
      durationSeconds: this.durationSeconds, 
      outboundQueueLength: this.outboundQueueLength, 
      outboundTimeInQueue: this.outboundTimeInQueue, 
      jitterBufferSize: this.jitterBufferSize, 
      isCoach: this.isCoach, 
      coachedParticipants: this.coachedParticipants, 
      participantRegion: this.participantRegion, 
      conferenceRegion: this.conferenceRegion, 
      callType: this.callType, 
      processingState: this.processingState, 
      properties: this.properties, 
      events: this.events, 
      metrics: this.metrics, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class ConferenceParticipantPage extends Page<V1, ConferenceParticipantPayload, ConferenceParticipantResource, ConferenceParticipantInstance> {
  /**
   * Initialize the ConferenceParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ConferenceParticipantSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ConferenceParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConferenceParticipantPayload): ConferenceParticipantInstance {
    return new ConferenceParticipantInstance(
      this._version,
      payload,
      this._solution.conferenceSid,
      this._solution.participantSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

