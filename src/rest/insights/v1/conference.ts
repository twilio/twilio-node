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
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { ConferenceParticipantListInstance } from "./conference/conferenceParticipant";

export type ConferenceConferenceEndReason =
  | "last_participant_left"
  | "conference_ended_via_api"
  | "participant_with_end_conference_on_exit_left"
  | "last_participant_kicked"
  | "participant_with_end_conference_on_exit_kicked";

export type ConferenceConferenceStatus =
  | "in_progress"
  | "not_started"
  | "completed"
  | "summary_timeout";

export type ConferenceProcessingState = "complete" | "in_progress" | "timeout";

export type ConferenceRegion =
  | "us1"
  | "us2"
  | "au1"
  | "br1"
  | "ie1"
  | "jp1"
  | "sg1"
  | "de1";

export type ConferenceTag =
  | "invalid_requested_region"
  | "duplicate_identity"
  | "start_failure"
  | "region_configuration_issues"
  | "quality_warnings"
  | "participant_behavior_issues"
  | "high_packet_loss"
  | "high_jitter"
  | "high_latency"
  | "low_mos"
  | "detected_silence"
  | "no_concurrent_participants";

/**
 * Options to pass to each
 */
export interface ConferenceListInstanceEachOptions {
  /** The SID of the conference. */
  conferenceSid?: string;
  /** Custom label for the conference resource, up to 64 characters. */
  friendlyName?: string;
  /** Conference status. */
  status?: string;
  /** Conferences created after the provided timestamp specified in ISO 8601 format */
  createdAfter?: string;
  /** Conferences created before the provided timestamp specified in ISO 8601 format. */
  createdBefore?: string;
  /** Twilio region where the conference media was mixed. */
  mixerRegion?: string;
  /** Tags applied by Twilio for common potential configuration, quality, or performance issues. */
  tags?: string;
  /** Account SID for the subaccount whose resources you wish to retrieve. */
  subaccount?: string;
  /** Potential configuration, behavior, or performance issues detected during the conference. */
  detectedIssues?: string;
  /** Conference end reason; e.g. last participant left, modified by API, etc. */
  endReason?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ConferenceListInstanceOptions {
  /** The SID of the conference. */
  conferenceSid?: string;
  /** Custom label for the conference resource, up to 64 characters. */
  friendlyName?: string;
  /** Conference status. */
  status?: string;
  /** Conferences created after the provided timestamp specified in ISO 8601 format */
  createdAfter?: string;
  /** Conferences created before the provided timestamp specified in ISO 8601 format. */
  createdBefore?: string;
  /** Twilio region where the conference media was mixed. */
  mixerRegion?: string;
  /** Tags applied by Twilio for common potential configuration, quality, or performance issues. */
  tags?: string;
  /** Account SID for the subaccount whose resources you wish to retrieve. */
  subaccount?: string;
  /** Potential configuration, behavior, or performance issues detected during the conference. */
  detectedIssues?: string;
  /** Conference end reason; e.g. last participant left, modified by API, etc. */
  endReason?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ConferenceListInstancePageOptions {
  /** The SID of the conference. */
  conferenceSid?: string;
  /** Custom label for the conference resource, up to 64 characters. */
  friendlyName?: string;
  /** Conference status. */
  status?: string;
  /** Conferences created after the provided timestamp specified in ISO 8601 format */
  createdAfter?: string;
  /** Conferences created before the provided timestamp specified in ISO 8601 format. */
  createdBefore?: string;
  /** Twilio region where the conference media was mixed. */
  mixerRegion?: string;
  /** Tags applied by Twilio for common potential configuration, quality, or performance issues. */
  tags?: string;
  /** Account SID for the subaccount whose resources you wish to retrieve. */
  subaccount?: string;
  /** Potential configuration, behavior, or performance issues detected during the conference. */
  detectedIssues?: string;
  /** Conference end reason; e.g. last participant left, modified by API, etc. */
  endReason?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ConferenceContext {
  conferenceParticipants: ConferenceParticipantListInstance;

  /**
   * Fetch a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConferenceInstance) => any
  ): Promise<ConferenceInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConferenceContextSolution {
  conferenceSid: string;
}

export class ConferenceContextImpl implements ConferenceContext {
  protected _solution: ConferenceContextSolution;
  protected _uri: string;

  protected _conferenceParticipants?: ConferenceParticipantListInstance;

  constructor(protected _version: V1, conferenceSid: string) {
    if (!isValidPathParam(conferenceSid)) {
      throw new Error("Parameter 'conferenceSid' is not valid.");
    }

    this._solution = { conferenceSid };
    this._uri = `/Conferences/${conferenceSid}`;
  }

  get conferenceParticipants(): ConferenceParticipantListInstance {
    this._conferenceParticipants =
      this._conferenceParticipants ||
      ConferenceParticipantListInstance(
        this._version,
        this._solution.conferenceSid
      );
    return this._conferenceParticipants;
  }

  async fetch(
    callback?: (error: Error | null, item?: ConferenceInstance) => any
  ): Promise<ConferenceInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new ConferenceInstance(
        operationVersion,
        payload,
        instance._solution.conferenceSid
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
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

interface ConferencePayload extends TwilioResponsePayload {
  conferences: ConferenceResource[];
}

interface ConferenceResource {
  conference_sid: string;
  account_sid: string;
  friendly_name: string;
  create_time: Date;
  start_time: Date;
  end_time: Date;
  duration_seconds: number;
  connect_duration_seconds: number;
  status: ConferenceConferenceStatus;
  max_participants: number;
  max_concurrent_participants: number;
  unique_participants: number;
  end_reason: ConferenceConferenceEndReason;
  ended_by: string;
  mixer_region: ConferenceRegion;
  mixer_region_requested: ConferenceRegion;
  recording_enabled: boolean;
  detected_issues: any;
  tags: Array<ConferenceTag>;
  tag_info: any;
  processing_state: ConferenceProcessingState;
  url: string;
  links: Record<string, string>;
}

export class ConferenceInstance {
  protected _solution: ConferenceContextSolution;
  protected _context?: ConferenceContext;

  constructor(
    protected _version: V1,
    payload: ConferenceResource,
    conferenceSid?: string
  ) {
    this.conferenceSid = payload.conference_sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.createTime = deserialize.iso8601DateTime(payload.create_time);
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.durationSeconds = deserialize.integer(payload.duration_seconds);
    this.connectDurationSeconds = deserialize.integer(
      payload.connect_duration_seconds
    );
    this.status = payload.status;
    this.maxParticipants = deserialize.integer(payload.max_participants);
    this.maxConcurrentParticipants = deserialize.integer(
      payload.max_concurrent_participants
    );
    this.uniqueParticipants = deserialize.integer(payload.unique_participants);
    this.endReason = payload.end_reason;
    this.endedBy = payload.ended_by;
    this.mixerRegion = payload.mixer_region;
    this.mixerRegionRequested = payload.mixer_region_requested;
    this.recordingEnabled = payload.recording_enabled;
    this.detectedIssues = payload.detected_issues;
    this.tags = payload.tags;
    this.tagInfo = payload.tag_info;
    this.processingState = payload.processing_state;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { conferenceSid: conferenceSid || this.conferenceSid };
  }

  /**
   * The unique SID identifier of the Conference.
   */
  conferenceSid: string;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * Custom label for the conference resource, up to 64 characters.
   */
  friendlyName: string;
  /**
   * Conference creation date and time in ISO 8601 format.
   */
  createTime: Date;
  /**
   * Timestamp in ISO 8601 format when the conference started. Conferences do not start until at least two participants join, at least one of whom has startConferenceOnEnter=true.
   */
  startTime: Date;
  /**
   * Conference end date and time in ISO 8601 format.
   */
  endTime: Date;
  /**
   * Conference duration in seconds.
   */
  durationSeconds: number;
  /**
   * Duration of the between conference start event and conference end event in seconds.
   */
  connectDurationSeconds: number;
  status: ConferenceConferenceStatus;
  /**
   * Maximum number of concurrent participants as specified by the configuration.
   */
  maxParticipants: number;
  /**
   * Actual maximum number of concurrent participants in the conference.
   */
  maxConcurrentParticipants: number;
  /**
   * Unique conference participants based on caller ID.
   */
  uniqueParticipants: number;
  endReason: ConferenceConferenceEndReason;
  /**
   * Call SID of the participant whose actions ended the conference.
   */
  endedBy: string;
  mixerRegion: ConferenceRegion;
  mixerRegionRequested: ConferenceRegion;
  /**
   * Boolean. Indicates whether recording was enabled at the conference mixer.
   */
  recordingEnabled: boolean;
  /**
   * Potential issues detected by Twilio during the conference.
   */
  detectedIssues: any;
  /**
   * Tags for detected conference conditions and participant behaviors which may be of interest.
   */
  tags: Array<ConferenceTag>;
  /**
   * Object. Contains details about conference tags including severity.
   */
  tagInfo: any;
  processingState: ConferenceProcessingState;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Conference.
   */
  links: Record<string, string>;

  private get _proxy(): ConferenceContext {
    this._context =
      this._context ||
      new ConferenceContextImpl(this._version, this._solution.conferenceSid);
    return this._context;
  }

  /**
   * Fetch a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConferenceInstance) => any
  ): Promise<ConferenceInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the conferenceParticipants.
   */
  conferenceParticipants(): ConferenceParticipantListInstance {
    return this._proxy.conferenceParticipants;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      conferenceSid: this.conferenceSid,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      createTime: this.createTime,
      startTime: this.startTime,
      endTime: this.endTime,
      durationSeconds: this.durationSeconds,
      connectDurationSeconds: this.connectDurationSeconds,
      status: this.status,
      maxParticipants: this.maxParticipants,
      maxConcurrentParticipants: this.maxConcurrentParticipants,
      uniqueParticipants: this.uniqueParticipants,
      endReason: this.endReason,
      endedBy: this.endedBy,
      mixerRegion: this.mixerRegion,
      mixerRegionRequested: this.mixerRegionRequested,
      recordingEnabled: this.recordingEnabled,
      detectedIssues: this.detectedIssues,
      tags: this.tags,
      tagInfo: this.tagInfo,
      processingState: this.processingState,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ConferenceSolution {}

export interface ConferenceListInstance {
  _version: V1;
  _solution: ConferenceSolution;
  _uri: string;

  (conferenceSid: string): ConferenceContext;
  get(conferenceSid: string): ConferenceContext;

  /**
   * Streams ConferenceInstance records from the API.
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
   * @param { ConferenceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ConferenceListInstanceEachOptions,
    callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ConferenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ConferencePage) => any
  ): Promise<ConferencePage>;
  /**
   * Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConferenceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ConferenceInstance[]) => any
  ): Promise<ConferenceInstance[]>;
  list(
    params: ConferenceListInstanceOptions,
    callback?: (error: Error | null, items: ConferenceInstance[]) => any
  ): Promise<ConferenceInstance[]>;
  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConferenceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ConferencePage) => any
  ): Promise<ConferencePage>;
  page(
    params: ConferenceListInstancePageOptions,
    callback?: (error: Error | null, items: ConferencePage) => any
  ): Promise<ConferencePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ConferenceListInstance(version: V1): ConferenceListInstance {
  const instance = ((conferenceSid) =>
    instance.get(conferenceSid)) as ConferenceListInstance;

  instance.get = function get(conferenceSid): ConferenceContext {
    return new ConferenceContextImpl(version, conferenceSid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Conferences`;

  instance.page = function page(
    params?:
      | ConferenceListInstancePageOptions
      | ((error: Error | null, items: ConferencePage) => any),
    callback?: (error: Error | null, items: ConferencePage) => any
  ): Promise<ConferencePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["conferenceSid"] !== undefined)
      data["ConferenceSid"] = params["conferenceSid"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["createdAfter"] !== undefined)
      data["CreatedAfter"] = params["createdAfter"];
    if (params["createdBefore"] !== undefined)
      data["CreatedBefore"] = params["createdBefore"];
    if (params["mixerRegion"] !== undefined)
      data["MixerRegion"] = params["mixerRegion"];
    if (params["tags"] !== undefined) data["Tags"] = params["tags"];
    if (params["subaccount"] !== undefined)
      data["Subaccount"] = params["subaccount"];
    if (params["detectedIssues"] !== undefined)
      data["DetectedIssues"] = params["detectedIssues"];
    if (params["endReason"] !== undefined)
      data["EndReason"] = params["endReason"];
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
        new ConferencePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: ConferencePage) => any
  ): Promise<ConferencePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ConferencePage(instance._version, payload, instance._solution)
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

export class ConferencePage extends Page<
  V1,
  ConferencePayload,
  ConferenceResource,
  ConferenceInstance
> {
  /**
   * Initialize the ConferencePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ConferenceSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ConferenceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConferenceResource): ConferenceInstance {
    return new ConferenceInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
