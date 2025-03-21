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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export type ConferenceParticipantCallDirection = "inbound" | "outbound";

export type ConferenceParticipantCallStatus =
  | "answered"
  | "completed"
  | "busy"
  | "fail"
  | "noanswer"
  | "ringing"
  | "canceled";

export type ConferenceParticipantCallType = "carrier" | "client" | "sip";

export type ConferenceParticipantJitterBufferSize =
  | "large"
  | "small"
  | "medium"
  | "off";

export type ConferenceParticipantProcessingState =
  | "complete"
  | "in_progress"
  | "timeout";

export type ConferenceParticipantRegion =
  | "us1"
  | "us2"
  | "au1"
  | "br1"
  | "ie1"
  | "jp1"
  | "sg1"
  | "de1"
  | "in1";

/**
 * Options to pass to fetch a ConferenceParticipantInstance
 */
export interface ConferenceParticipantContextFetchOptions {
  /** Conference events generated by application or participant activity; e.g. `hold`, `mute`, etc. */
  events?: string;
  /** Object. Contains participant call quality metrics. */
  metrics?: string;
}
/**
 * Options to pass to each
 */
export interface ConferenceParticipantListInstanceEachOptions {
  /** The unique SID identifier of the Participant. */
  participantSid?: string;
  /** User-specified label for a participant. */
  label?: string;
  /** Conference events generated by application or participant activity; e.g. `hold`, `mute`, etc. */
  events?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: ConferenceParticipantInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ConferenceParticipantListInstanceOptions {
  /** The unique SID identifier of the Participant. */
  participantSid?: string;
  /** User-specified label for a participant. */
  label?: string;
  /** Conference events generated by application or participant activity; e.g. `hold`, `mute`, etc. */
  events?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ConferenceParticipantListInstancePageOptions {
  /** The unique SID identifier of the Participant. */
  participantSid?: string;
  /** User-specified label for a participant. */
  label?: string;
  /** Conference events generated by application or participant activity; e.g. `hold`, `mute`, etc. */
  events?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ConferenceParticipantContext {
  /**
   * Fetch a ConferenceParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceParticipantInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: ConferenceParticipantInstance
    ) => any
  ): Promise<ConferenceParticipantInstance>;
  /**
   * Fetch a ConferenceParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceParticipantInstance
   */
  fetch(
    params: ConferenceParticipantContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: ConferenceParticipantInstance
    ) => any
  ): Promise<ConferenceParticipantInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConferenceParticipantContextSolution {
  conferenceSid: string;
  participantSid: string;
}

export class ConferenceParticipantContextImpl
  implements ConferenceParticipantContext
{
  protected _solution: ConferenceParticipantContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    conferenceSid: string,
    participantSid: string
  ) {
    if (!isValidPathParam(conferenceSid)) {
      throw new Error("Parameter 'conferenceSid' is not valid.");
    }

    if (!isValidPathParam(participantSid)) {
      throw new Error("Parameter 'participantSid' is not valid.");
    }

    this._solution = { conferenceSid, participantSid };
    this._uri = `/Conferences/${conferenceSid}/Participants/${participantSid}`;
  }

  fetch(
    params?:
      | ConferenceParticipantContextFetchOptions
      | ((error: Error | null, item?: ConferenceParticipantInstance) => any),
    callback?: (
      error: Error | null,
      item?: ConferenceParticipantInstance
    ) => any
  ): Promise<ConferenceParticipantInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["events"] !== undefined) data["Events"] = params["events"];
    if (params["metrics"] !== undefined) data["Metrics"] = params["metrics"];

    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ConferenceParticipantInstance(
          operationVersion,
          payload,
          instance._solution.conferenceSid,
          instance._solution.participantSid
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

interface ConferenceParticipantPayload extends TwilioResponsePayload {
  participants: ConferenceParticipantResource[];
}

interface ConferenceParticipantResource {
  participant_sid: string;
  label: string;
  conference_sid: string;
  call_sid: string;
  account_sid: string;
  call_direction: ConferenceParticipantCallDirection;
  from: string;
  to: string;
  call_status: ConferenceParticipantCallStatus;
  country_code: string;
  is_moderator: boolean;
  join_time: Date;
  leave_time: Date;
  duration_seconds: number;
  outbound_queue_length: number;
  outbound_time_in_queue: number;
  jitter_buffer_size: ConferenceParticipantJitterBufferSize;
  is_coach: boolean;
  coached_participants: Array<string>;
  participant_region: ConferenceParticipantRegion;
  conference_region: ConferenceParticipantRegion;
  call_type: ConferenceParticipantCallType;
  processing_state: ConferenceParticipantProcessingState;
  properties: Record<string, object>;
  events: Record<string, object>;
  metrics: Record<string, object>;
  url: string;
}

export class ConferenceParticipantInstance {
  protected _solution: ConferenceParticipantContextSolution;
  protected _context?: ConferenceParticipantContext;

  constructor(
    protected _version: V1,
    payload: ConferenceParticipantResource,
    conferenceSid: string,
    participantSid?: string
  ) {
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
    this.outboundQueueLength = deserialize.integer(
      payload.outbound_queue_length
    );
    this.outboundTimeInQueue = deserialize.integer(
      payload.outbound_time_in_queue
    );
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

    this._solution = {
      conferenceSid,
      participantSid: participantSid || this.participantSid,
    };
  }

  /**
   * SID for this participant.
   */
  participantSid: string;
  /**
   * The user-specified label of this participant.
   */
  label: string;
  /**
   * The unique SID identifier of the Conference.
   */
  conferenceSid: string;
  /**
   * Unique SID identifier of the call that generated the Participant resource.
   */
  callSid: string;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  callDirection: ConferenceParticipantCallDirection;
  /**
   * Caller ID of the calling party.
   */
  from: string;
  /**
   * Called party.
   */
  to: string;
  callStatus: ConferenceParticipantCallStatus;
  /**
   * ISO alpha-2 country code of the participant based on caller ID or called number.
   */
  countryCode: string;
  /**
   * Boolean. Indicates whether participant had startConferenceOnEnter=true or endConferenceOnExit=true.
   */
  isModerator: boolean;
  /**
   * ISO 8601 timestamp of participant join event.
   */
  joinTime: Date;
  /**
   * ISO 8601 timestamp of participant leave event.
   */
  leaveTime: Date;
  /**
   * Participant durations in seconds.
   */
  durationSeconds: number;
  /**
   * Add Participant API only. Estimated time in queue at call creation.
   */
  outboundQueueLength: number;
  /**
   * Add Participant API only. Actual time in queue in seconds.
   */
  outboundTimeInQueue: number;
  jitterBufferSize: ConferenceParticipantJitterBufferSize;
  /**
   * Boolean. Indicated whether participant was a coach.
   */
  isCoach: boolean;
  /**
   * Call SIDs coached by this participant.
   */
  coachedParticipants: Array<string>;
  participantRegion: ConferenceParticipantRegion;
  conferenceRegion: ConferenceParticipantRegion;
  callType: ConferenceParticipantCallType;
  processingState: ConferenceParticipantProcessingState;
  /**
   * Participant properties and metadata.
   */
  properties: Record<string, object>;
  /**
   * Object containing information of actions taken by participants. Contains a dictionary of URL links to nested resources of this Conference Participant.
   */
  events: Record<string, object>;
  /**
   * Object. Contains participant call quality metrics.
   */
  metrics: Record<string, object>;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): ConferenceParticipantContext {
    this._context =
      this._context ||
      new ConferenceParticipantContextImpl(
        this._version,
        this._solution.conferenceSid,
        this._solution.participantSid
      );
    return this._context;
  }

  /**
   * Fetch a ConferenceParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceParticipantInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: ConferenceParticipantInstance
    ) => any
  ): Promise<ConferenceParticipantInstance>;
  /**
   * Fetch a ConferenceParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceParticipantInstance
   */
  fetch(
    params: ConferenceParticipantContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: ConferenceParticipantInstance
    ) => any
  ): Promise<ConferenceParticipantInstance>;

  fetch(
    params?: any,
    callback?: (
      error: Error | null,
      item?: ConferenceParticipantInstance
    ) => any
  ): Promise<ConferenceParticipantInstance> {
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
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ConferenceParticipantSolution {
  conferenceSid: string;
}

export interface ConferenceParticipantListInstance {
  _version: V1;
  _solution: ConferenceParticipantSolution;
  _uri: string;

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
   * @param { ConferenceParticipantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: ConferenceParticipantInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: ConferenceParticipantListInstanceEachOptions,
    callback?: (
      item: ConferenceParticipantInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of ConferenceParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ConferenceParticipantPage) => any
  ): Promise<ConferenceParticipantPage>;
  /**
   * Lists ConferenceParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConferenceParticipantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: ConferenceParticipantInstance[]
    ) => any
  ): Promise<ConferenceParticipantInstance[]>;
  list(
    params: ConferenceParticipantListInstanceOptions,
    callback?: (
      error: Error | null,
      items: ConferenceParticipantInstance[]
    ) => any
  ): Promise<ConferenceParticipantInstance[]>;
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
  page(
    callback?: (error: Error | null, items: ConferenceParticipantPage) => any
  ): Promise<ConferenceParticipantPage>;
  page(
    params: ConferenceParticipantListInstancePageOptions,
    callback?: (error: Error | null, items: ConferenceParticipantPage) => any
  ): Promise<ConferenceParticipantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ConferenceParticipantListInstance(
  version: V1,
  conferenceSid: string
): ConferenceParticipantListInstance {
  if (!isValidPathParam(conferenceSid)) {
    throw new Error("Parameter 'conferenceSid' is not valid.");
  }

  const instance = ((participantSid) =>
    instance.get(participantSid)) as ConferenceParticipantListInstance;

  instance.get = function get(participantSid): ConferenceParticipantContext {
    return new ConferenceParticipantContextImpl(
      version,
      conferenceSid,
      participantSid
    );
  };

  instance._version = version;
  instance._solution = { conferenceSid };
  instance._uri = `/Conferences/${conferenceSid}/Participants`;

  instance.page = function page(
    params?:
      | ConferenceParticipantListInstancePageOptions
      | ((error: Error | null, items: ConferenceParticipantPage) => any),
    callback?: (error: Error | null, items: ConferenceParticipantPage) => any
  ): Promise<ConferenceParticipantPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["participantSid"] !== undefined)
      data["ParticipantSid"] = params["participantSid"];
    if (params["label"] !== undefined) data["Label"] = params["label"];
    if (params["events"] !== undefined) data["Events"] = params["events"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ConferenceParticipantPage(
          operationVersion,
          payload,
          instance._solution
        )
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
    callback?: (error: Error | null, items: ConferenceParticipantPage) => any
  ): Promise<ConferenceParticipantPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ConferenceParticipantPage(
          instance._version,
          payload,
          instance._solution
        )
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

export class ConferenceParticipantPage extends Page<
  V1,
  ConferenceParticipantPayload,
  ConferenceParticipantResource,
  ConferenceParticipantInstance
> {
  /**
   * Initialize the ConferenceParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ConferenceParticipantSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ConferenceParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: ConferenceParticipantResource
  ): ConferenceParticipantInstance {
    return new ConferenceParticipantInstance(
      this._version,
      payload,
      this._solution.conferenceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
