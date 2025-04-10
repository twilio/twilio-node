/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Assistants
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

export class AssistantsV1ServiceCreateFeedbackRequest {
  /**
   * The message ID.
   */
  "message_id"?: string;
  /**
   * The score to be given(0-1).
   */
  "score"?: number;
  /**
   * The Session ID.
   */
  "session_id": string;
  /**
   * The text to be given as feedback.
   */
  "text"?: string;
}

/**
 * Options to pass to create a FeedbackInstance
 */
export interface FeedbackListInstanceCreateOptions {
  /**  */
  assistantsV1ServiceCreateFeedbackRequest: AssistantsV1ServiceCreateFeedbackRequest;
}
/**
 * Options to pass to each
 */
export interface FeedbackListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: FeedbackInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface FeedbackListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface FeedbackListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface FeedbackSolution {
  id: string;
}

export interface FeedbackListInstance {
  _version: V1;
  _solution: FeedbackSolution;
  _uri: string;

  /**
   * Create a FeedbackInstance
   *
   * @param params - Body for request
   * @param headers - header params for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FeedbackInstance
   */
  create(
    params: AssistantsV1ServiceCreateFeedbackRequest,
    headers?: any,
    callback?: (error: Error | null, item?: FeedbackInstance) => any
  ): Promise<FeedbackInstance>;

  /**
   * Streams FeedbackInstance records from the API.
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
   * @param { FeedbackListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: FeedbackInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: FeedbackListInstanceEachOptions,
    callback?: (item: FeedbackInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of FeedbackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FeedbackPage) => any
  ): Promise<FeedbackPage>;
  /**
   * Lists FeedbackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FeedbackListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FeedbackInstance[]) => any
  ): Promise<FeedbackInstance[]>;
  list(
    params: FeedbackListInstanceOptions,
    callback?: (error: Error | null, items: FeedbackInstance[]) => any
  ): Promise<FeedbackInstance[]>;
  /**
   * Retrieve a single page of FeedbackInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FeedbackListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FeedbackPage) => any
  ): Promise<FeedbackPage>;
  page(
    params: FeedbackListInstancePageOptions,
    callback?: (error: Error | null, items: FeedbackPage) => any
  ): Promise<FeedbackPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function FeedbackListInstance(
  version: V1,
  id: string
): FeedbackListInstance {
  if (!isValidPathParam(id)) {
    throw new Error("Parameter 'id' is not valid.");
  }

  const instance = {} as FeedbackListInstance;

  instance._version = version;
  instance._solution = { id };
  instance._uri = `/Assistants/${id}/Feedbacks`;

  instance.create = function create(
    params: AssistantsV1ServiceCreateFeedbackRequest,
    headers?: any,
    callback?: (error: Error | null, items: FeedbackInstance) => any
  ): Promise<FeedbackInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    let data: any = {};

    data = params;

    if (headers === null || headers === undefined) {
      headers = {};
    }

    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FeedbackInstance(operationVersion, payload, instance._solution.id)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | FeedbackListInstancePageOptions
      | ((error: Error | null, items: FeedbackPage) => any),
    callback?: (error: Error | null, items: FeedbackPage) => any
  ): Promise<FeedbackPage> {
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
        new FeedbackPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: FeedbackPage) => any
  ): Promise<FeedbackPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new FeedbackPage(instance._version, payload, instance._solution)
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

interface FeedbackPayload extends TwilioResponsePayload {
  feedbacks: FeedbackResource[];
}

interface FeedbackResource {
  assistant_id: string;
  id: string;
  account_sid: string;
  user_sid: string;
  message_id: string;
  score: number;
  session_id: string;
  text: string;
  date_created: Date;
  date_updated: Date;
}

export class FeedbackInstance {
  constructor(protected _version: V1, payload: FeedbackResource, id: string) {
    this.assistantId = payload.assistant_id;
    this.id = payload.id;
    this.accountSid = payload.account_sid;
    this.userSid = payload.user_sid;
    this.messageId = payload.message_id;
    this.score = payload.score;
    this.sessionId = payload.session_id;
    this.text = payload.text;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
  }

  /**
   * The Assistant ID.
   */
  assistantId: string;
  /**
   * The Feedback ID.
   */
  id: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Feedback.
   */
  accountSid: string;
  /**
   * The SID of the User created the Feedback.
   */
  userSid: string;
  /**
   * The Message ID.
   */
  messageId: string;
  /**
   * The Score to provide as Feedback (0-1)
   */
  score: number;
  /**
   * The Session ID.
   */
  sessionId: string;
  /**
   * The text to be given as feedback.
   */
  text: string;
  /**
   * The date and time in GMT when the Feedback was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the Feedback was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      assistantId: this.assistantId,
      id: this.id,
      accountSid: this.accountSid,
      userSid: this.userSid,
      messageId: this.messageId,
      score: this.score,
      sessionId: this.sessionId,
      text: this.text,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class FeedbackPage extends Page<
  V1,
  FeedbackPayload,
  FeedbackResource,
  FeedbackInstance
> {
  /**
   * Initialize the FeedbackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: FeedbackSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FeedbackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FeedbackResource): FeedbackInstance {
    return new FeedbackInstance(this._version, payload, this._solution.id);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
