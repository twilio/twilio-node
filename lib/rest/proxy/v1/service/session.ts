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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { InteractionListInstance } from "./session/interaction";
import { ParticipantListInstance } from "./session/participant";

type SessionMode = "message-only" | "voice-only" | "voice-and-message";

type SessionStatus = "open" | "in-progress" | "closed" | "failed" | "unknown";

/**
 * Options to pass to update a SessionInstance
 *
 * @property { Date } [dateExpiry] The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value.
 * @property { number } [ttl] The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session\\\'s last Interaction.
 * @property { SessionStatus } [status]
 */
export interface SessionContextUpdateOptions {
  dateExpiry?: Date;
  ttl?: number;
  status?: SessionStatus;
}

/**
 * Options to pass to create a SessionInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. **This value should not have PII.**
 * @property { Date } [dateExpiry] The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value.
 * @property { number } [ttl] The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session\\\'s last Interaction.
 * @property { SessionMode } [mode]
 * @property { SessionStatus } [status]
 * @property { Array<any> } [participants] The Participant objects to include in the new session.
 */
export interface SessionListInstanceCreateOptions {
  uniqueName?: string;
  dateExpiry?: Date;
  ttl?: number;
  mode?: SessionMode;
  status?: SessionStatus;
  participants?: Array<any>;
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
export interface SessionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: SessionInstance, done: (err?: Error) => void) => void;
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
export interface SessionListInstanceOptions {
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
export interface SessionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SessionContext {
  interactions: InteractionListInstance;
  participants: ParticipantListInstance;

  /**
   * Remove a SessionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SessionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SessionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance>;

  /**
   * Update a SessionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SessionInstance
   */
  update(
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance>;
  /**
   * Update a SessionInstance
   *
   * @param { SessionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SessionInstance
   */
  update(
    params: SessionContextUpdateOptions,
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SessionContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class SessionContextImpl implements SessionContext {
  protected _solution: SessionContextSolution;
  protected _uri: string;

  protected _interactions?: InteractionListInstance;
  protected _participants?: ParticipantListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Sessions/${sid}`;
  }

  get interactions(): InteractionListInstance {
    this._interactions =
      this._interactions ||
      InteractionListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._interactions;
  }

  get participants(): ParticipantListInstance {
    this._participants =
      this._participants ||
      ParticipantListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._participants;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SessionInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | SessionContextUpdateOptions
      | ((error: Error | null, item?: SessionInstance) => any),
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: SessionInstance) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dateExpiry"] !== undefined)
      data["DateExpiry"] = serialize.iso8601DateTime(params["dateExpiry"]);
    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];
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
        new SessionInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.sid
        )
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

interface SessionPayload extends TwilioResponsePayload {
  sessions: SessionResource[];
}

interface SessionResource {
  sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  date_started?: Date | null;
  date_ended?: Date | null;
  date_last_interaction?: Date | null;
  date_expiry?: Date | null;
  unique_name?: string | null;
  status?: SessionStatus;
  closed_reason?: string | null;
  ttl?: number | null;
  mode?: SessionMode;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class SessionInstance {
  protected _solution: SessionContextSolution;
  protected _context?: SessionContext;

  constructor(
    protected _version: V1,
    payload: SessionResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.dateStarted = deserialize.iso8601DateTime(payload.date_started);
    this.dateEnded = deserialize.iso8601DateTime(payload.date_ended);
    this.dateLastInteraction = deserialize.iso8601DateTime(
      payload.date_last_interaction
    );
    this.dateExpiry = deserialize.iso8601DateTime(payload.date_expiry);
    this.uniqueName = payload.unique_name;
    this.status = payload.status;
    this.closedReason = payload.closed_reason;
    this.ttl = deserialize.integer(payload.ttl);
    this.mode = payload.mode;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the resource\'s parent Service
   */
  serviceSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The ISO 8601 date when the Session started
   */
  dateStarted?: Date | null;
  /**
   * The ISO 8601 date when the Session ended
   */
  dateEnded?: Date | null;
  /**
   * The ISO 8601 date when the Session last had an interaction
   */
  dateLastInteraction?: Date | null;
  /**
   * The ISO 8601 date when the Session should expire
   */
  dateExpiry?: Date | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  status?: SessionStatus;
  /**
   * The reason the Session ended
   */
  closedReason?: string | null;
  /**
   * When the session will expire
   */
  ttl?: number | null;
  mode?: SessionMode;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Session resource
   */
  url?: string | null;
  /**
   * The URLs of resources related to the Session
   */
  links?: object | null;

  private get _proxy(): SessionContext {
    this._context =
      this._context ||
      new SessionContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a SessionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a SessionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SessionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SessionInstance
   *
   * @param { SessionContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SessionInstance
   */
  update(
    params?: SessionContextUpdateOptions,
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the interactions.
   */
  interactions(): InteractionListInstance {
    return this._proxy.interactions;
  }

  /**
   * Access the participants.
   */
  participants(): ParticipantListInstance {
    return this._proxy.participants;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      dateStarted: this.dateStarted,
      dateEnded: this.dateEnded,
      dateLastInteraction: this.dateLastInteraction,
      dateExpiry: this.dateExpiry,
      uniqueName: this.uniqueName,
      status: this.status,
      closedReason: this.closedReason,
      ttl: this.ttl,
      mode: this.mode,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SessionListInstance {
  (sid: string): SessionContext;
  get(sid: string): SessionContext;

  /**
   * Create a SessionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SessionInstance
   */
  create(
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance>;
  /**
   * Create a SessionInstance
   *
   * @param { SessionListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SessionInstance
   */
  create(
    params: SessionListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance>;

  /**
   * Streams SessionInstance records from the API.
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
   * @param { SessionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: SessionInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: SessionListInstanceEachOptions,
    callback?: (item: SessionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SessionPage) => any
  ): Promise<SessionPage>;
  /**
   * Lists SessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SessionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SessionInstance[]) => any
  ): Promise<SessionInstance[]>;
  list(
    params: SessionListInstanceOptions,
    callback?: (error: Error | null, items: SessionInstance[]) => any
  ): Promise<SessionInstance[]>;
  /**
   * Retrieve a single page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SessionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SessionPage) => any
  ): Promise<SessionPage>;
  page(
    params: SessionListInstancePageOptions,
    callback?: (error: Error | null, items: SessionPage) => any
  ): Promise<SessionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SessionSolution {
  serviceSid?: string;
}

interface SessionListInstanceImpl extends SessionListInstance {}
class SessionListInstanceImpl implements SessionListInstance {
  _version?: V1;
  _solution?: SessionSolution;
  _uri?: string;
}

export function SessionListInstance(
  version: V1,
  serviceSid: string
): SessionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as SessionListInstanceImpl;

  instance.get = function get(sid): SessionContext {
    return new SessionContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Sessions`;

  instance.create = function create(
    params?:
      | SessionListInstanceCreateOptions
      | ((error: Error | null, item?: SessionInstance) => any),
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: SessionInstance) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["dateExpiry"] !== undefined)
      data["DateExpiry"] = serialize.iso8601DateTime(params["dateExpiry"]);
    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];
    if (params["mode"] !== undefined) data["Mode"] = params["mode"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["participants"] !== undefined)
      data["Participants"] = serialize.map(params["participants"], (e) =>
        serialize.object(e)
      );

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
      (payload) =>
        new SessionInstance(
          operationVersion,
          payload,
          this._solution.serviceSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | SessionListInstancePageOptions
      | ((error: Error | null, item?: SessionPage) => any),
    callback?: (error: Error | null, item?: SessionPage) => any
  ): Promise<SessionPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: SessionPage) => any;
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
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new SessionPage(operationVersion, payload, this._solution)
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
    targetUrl: string,
    callback?: (error: Error | null, items: SessionPage) => any
  ): Promise<SessionPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new SessionPage(this._version, payload, this._solution)
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

export class SessionPage extends Page<
  V1,
  SessionPayload,
  SessionResource,
  SessionInstance
> {
  /**
   * Initialize the SessionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SessionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SessionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SessionResource): SessionInstance {
    return new SessionInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
