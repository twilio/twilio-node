/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Autopilot
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

/**
 * Options to pass to update a SampleInstance
 */
export interface SampleContextUpdateOptions {
  /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`. */
  language?: string;
  /** The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging). */
  taggedText?: string;
  /** The communication channel from which the sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included. */
  sourceChannel?: string;
}

/**
 * Options to pass to create a SampleInstance
 */
export interface SampleListInstanceCreateOptions {
  /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the new sample. For example: `en-US`. */
  language: string;
  /** The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging). */
  taggedText: string;
  /** The communication channel from which the new sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included. */
  sourceChannel?: string;
}
/**
 * Options to pass to each
 */
export interface SampleListInstanceEachOptions {
  /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`. */
  language?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: SampleInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface SampleListInstanceOptions {
  /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`. */
  language?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SampleListInstancePageOptions {
  /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`. */
  language?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SampleContext {
  /**
   * Remove a SampleInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SampleInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SampleInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;

  /**
   * Update a SampleInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SampleInstance
   */
  update(
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;
  /**
   * Update a SampleInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SampleInstance
   */
  update(
    params: SampleContextUpdateOptions,
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;
  update(params?: any, callback?: any): Promise<SampleInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SampleContextSolution {
  assistantSid: string;
  taskSid: string;
  sid: string;
}

export class SampleContextImpl implements SampleContext {
  protected _solution: SampleContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
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
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<SampleInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SampleInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.taskSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
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
        new SampleInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.taskSid,
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

interface SamplePayload extends TwilioResponsePayload {
  samples: SampleResource[];
}

interface SampleResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  task_sid: string;
  language: string;
  assistant_sid: string;
  sid: string;
  tagged_text: string;
  url: string;
  source_channel: string;
}

export class SampleInstance {
  protected _solution: SampleContextSolution;
  protected _context?: SampleContext;

  constructor(
    protected _version: V1,
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
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The SID of the Task associated with the resource
   */
  taskSid: string;
  /**
   * An ISO language-country string that specifies the language used for the sample
   */
  language: string;
  /**
   * The SID of the Assistant that is the parent of the Task associated with the resource
   */
  assistantSid: string;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The text example of how end users might express the task
   */
  taggedText: string;
  /**
   * The absolute URL of the Sample resource
   */
  url: string;
  /**
   * The communication channel from which the sample was captured
   */
  sourceChannel: string;

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
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a SampleInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SampleInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SampleInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SampleInstance
   */
  update(
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;
  /**
   * Update a SampleInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SampleInstance
   */
  update(
    params: SampleContextUpdateOptions,
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;
  update(params?: any, callback?: any): Promise<SampleInstance> {
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

export interface SampleSolution {
  assistantSid: string;
  taskSid: string;
}

export interface SampleListInstance {
  _version: V1;
  _solution: SampleSolution;
  _uri: string;

  (sid: string): SampleContext;
  get(sid: string): SampleContext;

  /**
   * Create a SampleInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SampleInstance
   */
  create(
    params: SampleListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SampleInstance) => any
  ): Promise<SampleInstance>;
  create(params: any, callback?: any): Promise<SampleInstance>;

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
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: SampleInstance, done: (err?: Error) => void) => void
  ): void;
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
    params?: SampleListInstanceEachOptions,
    callback?: (item: SampleInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SampleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: SamplePage) => any
  ): Promise<SamplePage>;
  /**
   * Retrieve a single target page of SampleInstance records from the API.
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
    callback?: (error: Error | null, items: SamplePage) => any
  ): Promise<SamplePage>;
  getPage(params?: any, callback?: any): Promise<SamplePage>;
  /**
   * Lists SampleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SampleInstance[]) => any
  ): Promise<SampleInstance[]>;
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
    params?: SampleListInstanceOptions,
    callback?: (error: Error | null, items: SampleInstance[]) => any
  ): Promise<SampleInstance[]>;
  list(params?: any, callback?: any): Promise<SampleInstance[]>;
  /**
   * Retrieve a single page of SampleInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SamplePage) => any
  ): Promise<SamplePage>;
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
    params: SampleListInstancePageOptions,
    callback?: (error: Error | null, items: SamplePage) => any
  ): Promise<SamplePage>;
  page(params?: any, callback?: any): Promise<SamplePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SampleListInstance(
  version: V1,
  assistantSid: string,
  taskSid: string
): SampleListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  if (!isValidPathParam(taskSid)) {
    throw new Error("Parameter 'taskSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as SampleListInstance;

  instance.get = function get(sid): SampleContext {
    return new SampleContextImpl(version, assistantSid, taskSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid, taskSid };
  instance._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Samples`;

  instance.create = function create(
    params: any,
    callback?: any
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
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SampleInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.taskSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
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
      (payload) => new SamplePage(operationVersion, payload, instance._solution)
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
  ): Promise<SamplePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SamplePage(instance._version, payload, instance._solution)
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

export class SamplePage extends Page<
  V1,
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
    version: V1,
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
