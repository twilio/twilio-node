/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type UserChannelChannelStatus = "joined" | "invited" | "not_participating";

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
export interface UserChannelListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void;
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
export interface UserChannelListInstanceOptions {
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
export interface UserChannelListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface UserChannelSolution {
  serviceSid: string;
  userSid: string;
}

export interface UserChannelListInstance {
  _version: V1;
  _solution: UserChannelSolution;
  _uri: string;

  /**
   * Streams UserChannelInstance records from the API.
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
  each(
    callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams UserChannelInstance records from the API.
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
   * @param { UserChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: UserChannelListInstanceEachOptions,
    callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of UserChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: UserChannelPage) => any
  ): Promise<UserChannelPage>;
  /**
   * Retrieve a single target page of UserChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: UserChannelPage) => any
  ): Promise<UserChannelPage>;
  getPage(params?: any, callback?: any): Promise<UserChannelPage>;
  /**
   * Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: UserChannelInstance[]) => any
  ): Promise<UserChannelInstance[]>;
  /**
   * Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: UserChannelListInstanceOptions,
    callback?: (error: Error | null, items: UserChannelInstance[]) => any
  ): Promise<UserChannelInstance[]>;
  list(params?: any, callback?: any): Promise<UserChannelInstance[]>;
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: UserChannelPage) => any
  ): Promise<UserChannelPage>;
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: UserChannelListInstancePageOptions,
    callback?: (error: Error | null, items: UserChannelPage) => any
  ): Promise<UserChannelPage>;
  page(params?: any, callback?: any): Promise<UserChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function UserChannelListInstance(
  version: V1,
  serviceSid: string,
  userSid: string
): UserChannelListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(userSid)) {
    throw new Error("Parameter 'userSid' is not valid.");
  }

  const instance = {} as UserChannelListInstance;

  instance._version = version;
  instance._solution = { serviceSid, userSid };
  instance._uri = `/Services/${serviceSid}/Users/${userSid}/Channels`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<UserChannelPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
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
        new UserChannelPage(operationVersion, payload, instance._solution)
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
    targetUrl?: any,
    callback?: any
  ): Promise<UserChannelPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new UserChannelPage(instance._version, payload, instance._solution)
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

interface UserChannelPayload extends TwilioResponsePayload {
  channels: UserChannelResource[];
}

interface UserChannelResource {
  account_sid: string;
  service_sid: string;
  channel_sid: string;
  member_sid: string;
  status: UserChannelChannelStatus;
  last_consumed_message_index: number;
  unread_messages_count: number;
  links: object;
}

export class UserChannelInstance {
  constructor(
    protected _version: V1,
    payload: UserChannelResource,
    serviceSid: string,
    userSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.channelSid = payload.channel_sid;
    this.memberSid = payload.member_sid;
    this.status = payload.status;
    this.lastConsumedMessageIndex = deserialize.integer(
      payload.last_consumed_message_index
    );
    this.unreadMessagesCount = deserialize.integer(
      payload.unread_messages_count
    );
    this.links = payload.links;
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid: string;
  /**
   * The SID of the Channel the resource belongs to
   */
  channelSid: string;
  /**
   * The SID of the User as a Member in the Channel
   */
  memberSid: string;
  status: UserChannelChannelStatus;
  /**
   * The index of the last Message in the Channel the Member has read
   */
  lastConsumedMessageIndex: number;
  /**
   * The number of unread Messages in the Channel for the User
   */
  unreadMessagesCount: number;
  /**
   * Absolute URLs to access the Members, Messages , Invites and, if it exists, the last Message for the Channel
   */
  links: object;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      channelSid: this.channelSid,
      memberSid: this.memberSid,
      status: this.status,
      lastConsumedMessageIndex: this.lastConsumedMessageIndex,
      unreadMessagesCount: this.unreadMessagesCount,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class UserChannelPage extends Page<
  V1,
  UserChannelPayload,
  UserChannelResource,
  UserChannelInstance
> {
  /**
   * Initialize the UserChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: UserChannelSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of UserChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserChannelResource): UserChannelInstance {
    return new UserChannelInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.userSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
