/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
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
import { InteractionChannelInviteListInstance } from "./interactionChannel/interactionChannelInvite";
import { InteractionChannelParticipantListInstance } from "./interactionChannel/interactionChannelParticipant";

type InteractionChannelChannelStatus = "setup" | "active" | "failed" | "closed";

type InteractionChannelStatus = "closed" | "wrapup";

type InteractionChannelType =
  | "voice"
  | "sms"
  | "email"
  | "web"
  | "whatsapp"
  | "chat"
  | "messenger"
  | "gbm";

/**
 * Options to pass to update a InteractionChannelInstance
 */
export interface InteractionChannelContextUpdateOptions {
  /**  */
  status: InteractionChannelStatus;
  /** Optional. The state of associated tasks. If not specified, all tasks will be set to `wrapping`. */
  routing?: any;
}
/**
 * Options to pass to each
 */
export interface InteractionChannelListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: InteractionChannelInstance,
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
export interface InteractionChannelListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface InteractionChannelListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InteractionChannelContext {
  invites: InteractionChannelInviteListInstance;
  participants: InteractionChannelParticipantListInstance;

  /**
   * Fetch a InteractionChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InteractionChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: InteractionChannelInstance) => any
  ): Promise<InteractionChannelInstance>;

  /**
   * Update a InteractionChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InteractionChannelInstance
   */
  update(
    params: InteractionChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: InteractionChannelInstance) => any
  ): Promise<InteractionChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InteractionChannelContextSolution {
  interactionSid: string;
  sid: string;
}

export class InteractionChannelContextImpl
  implements InteractionChannelContext
{
  protected _solution: InteractionChannelContextSolution;
  protected _uri: string;

  protected _invites?: InteractionChannelInviteListInstance;
  protected _participants?: InteractionChannelParticipantListInstance;

  constructor(protected _version: V1, interactionSid: string, sid: string) {
    if (!isValidPathParam(interactionSid)) {
      throw new Error("Parameter 'interactionSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { interactionSid, sid };
    this._uri = `/Interactions/${interactionSid}/Channels/${sid}`;
  }

  get invites(): InteractionChannelInviteListInstance {
    this._invites =
      this._invites ||
      InteractionChannelInviteListInstance(
        this._version,
        this._solution.interactionSid,
        this._solution.sid
      );
    return this._invites;
  }

  get participants(): InteractionChannelParticipantListInstance {
    this._participants =
      this._participants ||
      InteractionChannelParticipantListInstance(
        this._version,
        this._solution.interactionSid,
        this._solution.sid
      );
    return this._participants;
  }

  fetch(
    callback?: (error: Error | null, item?: InteractionChannelInstance) => any
  ): Promise<InteractionChannelInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InteractionChannelInstance(
          operationVersion,
          payload,
          instance._solution.interactionSid,
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
    params:
      | InteractionChannelContextUpdateOptions
      | ((error: Error | null, item?: InteractionChannelInstance) => any),
    callback?: (error: Error | null, item?: InteractionChannelInstance) => any
  ): Promise<InteractionChannelInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];
    if (params["routing"] !== undefined)
      data["Routing"] = serialize.object(params["routing"]);

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
        new InteractionChannelInstance(
          operationVersion,
          payload,
          instance._solution.interactionSid,
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

interface InteractionChannelPayload extends TwilioResponsePayload {
  channels: InteractionChannelResource[];
}

interface InteractionChannelResource {
  sid: string;
  interaction_sid: string;
  type: InteractionChannelType;
  status: InteractionChannelChannelStatus;
  error_code: number;
  error_message: string;
  url: string;
  links: Record<string, string>;
}

export class InteractionChannelInstance {
  protected _solution: InteractionChannelContextSolution;
  protected _context?: InteractionChannelContext;

  constructor(
    protected _version: V1,
    payload: InteractionChannelResource,
    interactionSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.interactionSid = payload.interaction_sid;
    this.type = payload.type;
    this.status = payload.status;
    this.errorCode = deserialize.integer(payload.error_code);
    this.errorMessage = payload.error_message;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { interactionSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The unique string that identifies the resource.
   */
  interactionSid: string;
  type: InteractionChannelType;
  status: InteractionChannelChannelStatus;
  /**
   * The Twilio error code for a failed channel.
   */
  errorCode: number;
  /**
   * The error message for a failed channel.
   */
  errorMessage: string;
  url: string;
  links: Record<string, string>;

  private get _proxy(): InteractionChannelContext {
    this._context =
      this._context ||
      new InteractionChannelContextImpl(
        this._version,
        this._solution.interactionSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a InteractionChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InteractionChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: InteractionChannelInstance) => any
  ): Promise<InteractionChannelInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a InteractionChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InteractionChannelInstance
   */
  update(
    params: InteractionChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: InteractionChannelInstance) => any
  ): Promise<InteractionChannelInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: InteractionChannelInstance) => any
  ): Promise<InteractionChannelInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the invites.
   */
  invites(): InteractionChannelInviteListInstance {
    return this._proxy.invites;
  }

  /**
   * Access the participants.
   */
  participants(): InteractionChannelParticipantListInstance {
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
      interactionSid: this.interactionSid,
      type: this.type,
      status: this.status,
      errorCode: this.errorCode,
      errorMessage: this.errorMessage,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InteractionChannelSolution {
  interactionSid: string;
}

export interface InteractionChannelListInstance {
  _version: V1;
  _solution: InteractionChannelSolution;
  _uri: string;

  (sid: string): InteractionChannelContext;
  get(sid: string): InteractionChannelContext;

  /**
   * Streams InteractionChannelInstance records from the API.
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
   * @param { InteractionChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: InteractionChannelInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: InteractionChannelListInstanceEachOptions,
    callback?: (
      item: InteractionChannelInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of InteractionChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: InteractionChannelPage) => any
  ): Promise<InteractionChannelPage>;
  /**
   * Lists InteractionChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InteractionChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: InteractionChannelInstance[]) => any
  ): Promise<InteractionChannelInstance[]>;
  list(
    params: InteractionChannelListInstanceOptions,
    callback?: (error: Error | null, items: InteractionChannelInstance[]) => any
  ): Promise<InteractionChannelInstance[]>;
  /**
   * Retrieve a single page of InteractionChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InteractionChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: InteractionChannelPage) => any
  ): Promise<InteractionChannelPage>;
  page(
    params: InteractionChannelListInstancePageOptions,
    callback?: (error: Error | null, items: InteractionChannelPage) => any
  ): Promise<InteractionChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InteractionChannelListInstance(
  version: V1,
  interactionSid: string
): InteractionChannelListInstance {
  if (!isValidPathParam(interactionSid)) {
    throw new Error("Parameter 'interactionSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as InteractionChannelListInstance;

  instance.get = function get(sid): InteractionChannelContext {
    return new InteractionChannelContextImpl(version, interactionSid, sid);
  };

  instance._version = version;
  instance._solution = { interactionSid };
  instance._uri = `/Interactions/${interactionSid}/Channels`;

  instance.page = function page(
    params?:
      | InteractionChannelListInstancePageOptions
      | ((error: Error | null, items: InteractionChannelPage) => any),
    callback?: (error: Error | null, items: InteractionChannelPage) => any
  ): Promise<InteractionChannelPage> {
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
      (payload) =>
        new InteractionChannelPage(
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
    callback?: (error: Error | null, items: InteractionChannelPage) => any
  ): Promise<InteractionChannelPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InteractionChannelPage(
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

export class InteractionChannelPage extends Page<
  V1,
  InteractionChannelPayload,
  InteractionChannelResource,
  InteractionChannelInstance
> {
  /**
   * Initialize the InteractionChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: InteractionChannelSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InteractionChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InteractionChannelResource): InteractionChannelInstance {
    return new InteractionChannelInstance(
      this._version,
      payload,
      this._solution.interactionSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
