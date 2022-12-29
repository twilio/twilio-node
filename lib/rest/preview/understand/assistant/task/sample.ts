/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Understand from "../../../Understand";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to update a SampleInstance
 *
 * @property { string } [language] An ISO language-country string of the sample.
 * @property { string } [taggedText] The text example of how end-users may express this task. The sample may contain Field tag blocks.
 * @property { string } [sourceChannel] The communication channel the sample was captured. It can be: *voice*, *sms*, *chat*, *alexa*, *google-assistant*, or *slack*. If not included the value will be null
 */
export interface SampleContextUpdateOptions {
  language?: string;
  taggedText?: string;
  sourceChannel?: string;
}

/**
 * Options to pass to create a SampleInstance
 *
 * @property { string } language An ISO language-country string of the sample.
 * @property { string } taggedText The text example of how end-users may express this task. The sample may contain Field tag blocks.
 * @property { string } [sourceChannel] The communication channel the sample was captured. It can be: *voice*, *sms*, *chat*, *alexa*, *google-assistant*, or *slack*. If not included the value will be null
 */
export interface SampleListInstanceCreateOptions {
  language: string;
  taggedText: string;
  sourceChannel?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [language] An ISO language-country string of the sample.
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
export interface SampleListInstanceEachOptions {
  language?: string;
  pageSize?: number;
  callback?: (item: SampleInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [language] An ISO language-country string of the sample.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SampleListInstanceOptions {
  language?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [language] An ISO language-country string of the sample.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SampleListInstancePageOptions {
  language?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SampleContext {
  /**
   * Remove a SampleInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SampleInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SampleInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;

  /**
   * Update a SampleInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SampleInstance
   */
  update(
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;
  /**
   * Update a SampleInstance
   *
   * @param { SampleContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SampleInstance
   */
  update(
    params?:
      | SampleContextUpdateOptions
      | ((error: Error | null, item?: SampleInstance) => any),
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SampleContextSolution {
  assistantSid?: string;
  taskSid?: string;
  sid?: string;
}

export class SampleContextImpl implements SampleContext {
  protected _solution: SampleContextSolution;
  protected _uri: string;

  constructor(
    protected _version: Understand,
    assistantSid: string,
    taskSid: string,
    sid: string
  ) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(taskSid)) {
      throw new Error("Parameter 'taskSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { assistantSid, taskSid, sid };
    this._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Samples/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
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

  fetch(callback?: any): Promise<SampleInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SampleInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.taskSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<SampleInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["language"] !== undefined) data["Language"] = params["language"];
    if (params["taggedText"] !== undefined)
      data["TaggedText"] = params["taggedText"];
    if (params["sourceChannel"] !== undefined)
      data["SourceChannel"] = params["sourceChannel"];

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
        new SampleInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.taskSid,
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

interface SamplePayload extends TwilioResponsePayload {
  samples: SampleResource[];
}

interface SampleResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  task_sid?: string | null;
  language?: string | null;
  assistant_sid?: string | null;
  sid?: string | null;
  tagged_text?: string | null;
  url?: string | null;
  source_channel?: string | null;
}

export class SampleInstance {
  protected _solution: SampleContextSolution;
  protected _context?: SampleContext;

  constructor(
    protected _version: Understand,
    payload: SampleResource,
    assistantSid: string,
    taskSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.taskSid = payload.task_sid;
    this.language = payload.language;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.taggedText = payload.tagged_text;
    this.url = payload.url;
    this.sourceChannel = payload.source_channel;

    this._solution = { assistantSid, taskSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account that created this Sample.
   */
  accountSid?: string | null;
  /**
   * The date that this resource was created
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The unique ID of the Task associated with this Sample.
   */
  taskSid?: string | null;
  /**
   * An ISO language-country string of the sample.
   */
  language?: string | null;
  /**
   * The unique ID of the Assistant.
   */
  assistantSid?: string | null;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * The text example of how end-users may express this task. The sample may contain Field tag blocks.
   */
  taggedText?: string | null;
  url?: string | null;
  /**
   * The communication channel the sample was captured. It can be: voice, sms, chat, alexa, google-assistant, or slack. If not included the value will be null
   */
  sourceChannel?: string | null;

  private get _proxy(): SampleContext {
    this._context =
      this._context ||
      new SampleContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.taskSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a SampleInstance
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
   * Fetch a SampleInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SampleInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SampleInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SampleInstance
   */
  update(
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;
  /**
   * Update a SampleInstance
   *
   * @param { SampleContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SampleInstance
   */
  update(
    params?:
      | SampleContextUpdateOptions
      | ((error: Error | null, item?: SampleInstance) => any),
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      taskSid: this.taskSid,
      language: this.language,
      assistantSid: this.assistantSid,
      sid: this.sid,
      taggedText: this.taggedText,
      url: this.url,
      sourceChannel: this.sourceChannel,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SampleListInstance {
  (sid: string): SampleContext;
  get(sid: string): SampleContext;

  /**
   * Create a SampleInstance
   *
   * @param { SampleListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SampleInstance
   */
  create(
    params: SampleListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;

  /**
   * Streams SampleInstance records from the API.
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
   * @param { SampleListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | SampleListInstanceEachOptions
      | ((item: SampleInstance, done: (err?: Error) => void) => void),
    callback?: (item: SampleInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SampleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SamplePage) => any
  ): Promise<SamplePage>;
  /**
   * Lists SampleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SampleListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | SampleListInstanceOptions
      | ((error: Error | null, items: SampleInstance[]) => any),
    callback?: (error: Error | null, items: SampleInstance[]) => any
  ): Promise<SampleInstance[]>;
  /**
   * Retrieve a single page of SampleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SampleListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | SampleListInstancePageOptions
      | ((error: Error | null, items: SamplePage) => any),
    callback?: (error: Error | null, items: SamplePage) => any
  ): Promise<SamplePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SampleSolution {
  assistantSid?: string;
  taskSid?: string;
}

interface SampleListInstanceImpl extends SampleListInstance {}
class SampleListInstanceImpl implements SampleListInstance {
  _version?: Understand;
  _solution?: SampleSolution;
  _uri?: string;
}

export function SampleListInstance(
  version: Understand,
  assistantSid: string,
  taskSid: string
): SampleListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  if (!isValidPathParam(taskSid)) {
    throw new Error("Parameter 'taskSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as SampleListInstanceImpl;

  instance.get = function get(sid): SampleContext {
    return new SampleContextImpl(version, assistantSid, taskSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid, taskSid };
  instance._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Samples`;

  instance.create = function create(
    params: SampleListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["language"] === null || params["language"] === undefined) {
      throw new Error("Required parameter \"params['language']\" missing.");
    }

    if (params["taggedText"] === null || params["taggedText"] === undefined) {
      throw new Error("Required parameter \"params['taggedText']\" missing.");
    }

    let data: any = {};

    data["Language"] = params["language"];

    data["TaggedText"] = params["taggedText"];
    if (params["sourceChannel"] !== undefined)
      data["SourceChannel"] = params["sourceChannel"];

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
        new SampleInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.taskSid
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
      | SampleListInstancePageOptions
      | ((error: Error | null, item?: SamplePage) => any),
    callback?: (error: Error | null, item?: SamplePage) => any
  ): Promise<SamplePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["language"] !== undefined) data["Language"] = params["language"];
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
      (payload) => new SamplePage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: SamplePage) => any
  ): Promise<SamplePage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new SamplePage(this._version, payload, this._solution)
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

export class SamplePage extends Page<
  Understand,
  SamplePayload,
  SampleResource,
  SampleInstance
> {
  /**
   * Initialize the SamplePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Understand,
    response: Response<string>,
    solution: SampleSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SampleInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SampleResource): SampleInstance {
    return new SampleInstance(
      this._version,
      payload,
      this._solution.assistantSid,
      this._solution.taskSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
