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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a QueryInstance
 *
 * @property { string } [sampleSid] The SID of an optional reference to the [Sample](https://www.twilio.com/docs/autopilot/api/task-sample) created from the query.
 * @property { string } [status] The new status of the resource. Can be: `pending-review`, `reviewed`, or `discarded`
 */
export interface QueryContextUpdateOptions {
  sampleSid?: string;
  status?: string;
}

/**
 * Options to pass to create a QueryInstance
 *
 * @property { string } language The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the new query. For example: `en-US`.
 * @property { string } query The end-user\\\'s natural language input. It can be up to 2048 characters long.
 * @property { string } [tasks] The list of tasks to limit the new query to. Tasks are expressed as a comma-separated list of task `unique_name` values. For example, `task-unique_name-1, task-unique_name-2`. Listing specific tasks is useful to constrain the paths that a user can take.
 * @property { string } [modelBuild] The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 */
export interface QueryListInstanceCreateOptions {
  language: string;
  query: string;
  tasks?: string;
  modelBuild?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`.
 * @property { string } [modelBuild] The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 * @property { string } [status] The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded`
 * @property { string } [dialogueSid] The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
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
export interface QueryListInstanceEachOptions {
  language?: string;
  modelBuild?: string;
  status?: string;
  dialogueSid?: string;
  pageSize?: number;
  callback?: (item: QueryInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`.
 * @property { string } [modelBuild] The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 * @property { string } [status] The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded`
 * @property { string } [dialogueSid] The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface QueryListInstanceOptions {
  language?: string;
  modelBuild?: string;
  status?: string;
  dialogueSid?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [language] The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`.
 * @property { string } [modelBuild] The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 * @property { string } [status] The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded`
 * @property { string } [dialogueSid] The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface QueryListInstancePageOptions {
  language?: string;
  modelBuild?: string;
  status?: string;
  dialogueSid?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface QueryContext {
  /**
   * Remove a QueryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a QueryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: QueryInstance) => any
  ): Promise<QueryInstance>;

  /**
   * Update a QueryInstance
   *
   * @param { QueryContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  update(
    params?:
      | QueryContextUpdateOptions
      | ((error: Error | null, item?: QueryInstance) => any),
    callback?: (error: Error | null, item?: QueryInstance) => any
  ): Promise<QueryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface QueryContextSolution {
  assistantSid?: string;
  sid?: string;
}

export class QueryContextImpl implements QueryContext {
  protected _solution: QueryContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, assistantSid: string, sid: string) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { assistantSid, sid };
    this._uri = `/Assistants/${assistantSid}/Queries/${sid}`;
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

  fetch(callback?: any): Promise<QueryInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new QueryInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<QueryInstance> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: QueryInstance) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["sampleSid"] !== undefined)
      data["SampleSid"] = params["sampleSid"];
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
        new QueryInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
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

interface QueryPayload extends TwilioResponsePayload {
  queries: QueryResource[];
}

interface QueryResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  results?: any | null;
  language?: string | null;
  model_build_sid?: string | null;
  query?: string | null;
  sample_sid?: string | null;
  assistant_sid?: string | null;
  sid?: string | null;
  status?: string | null;
  url?: string | null;
  source_channel?: string | null;
  dialogue_sid?: string | null;
}

export class QueryInstance {
  protected _solution: QueryContextSolution;
  protected _context?: QueryContext;

  constructor(
    protected _version: V1,
    payload: QueryResource,
    assistantSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.results = payload.results;
    this.language = payload.language;
    this.modelBuildSid = payload.model_build_sid;
    this.query = payload.query;
    this.sampleSid = payload.sample_sid;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.status = payload.status;
    this.url = payload.url;
    this.sourceChannel = payload.source_channel;
    this.dialogueSid = payload.dialogue_sid;

    this._solution = { assistantSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The natural language analysis results that include the Task recognized and a list of identified Fields
   */
  results?: any | null;
  /**
   * The ISO language-country string that specifies the language used by the Query
   */
  language?: string | null;
  /**
   * The SID of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) queried
   */
  modelBuildSid?: string | null;
  /**
   * The end-user\'s natural language input
   */
  query?: string | null;
  /**
   * The SID of an optional reference to the Sample created from the query
   */
  sampleSid?: string | null;
  /**
   * The SID of the Assistant that is the parent of the resource
   */
  assistantSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The status of the Query
   */
  status?: string | null;
  /**
   * The absolute URL of the Query resource
   */
  url?: string | null;
  /**
   * The communication channel from where the end-user input came
   */
  sourceChannel?: string | null;
  /**
   * The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
   */
  dialogueSid?: string | null;

  private get _proxy(): QueryContext {
    this._context =
      this._context ||
      new QueryContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a QueryInstance
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
   * Fetch a QueryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: QueryInstance) => any
  ): Promise<QueryInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a QueryInstance
   *
   * @param { QueryContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  update(
    params?:
      | QueryContextUpdateOptions
      | ((error: Error | null, item?: QueryInstance) => any),
    callback?: (error: Error | null, item?: QueryInstance) => any
  ): Promise<QueryInstance> {
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
      results: this.results,
      language: this.language,
      modelBuildSid: this.modelBuildSid,
      query: this.query,
      sampleSid: this.sampleSid,
      assistantSid: this.assistantSid,
      sid: this.sid,
      status: this.status,
      url: this.url,
      sourceChannel: this.sourceChannel,
      dialogueSid: this.dialogueSid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface QueryListInstance {
  (sid: string): QueryContext;
  get(sid: string): QueryContext;

  /**
   * Create a QueryInstance
   *
   * @param { QueryListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  create(
    params: QueryListInstanceCreateOptions,
    callback?: (error: Error | null, item?: QueryInstance) => any
  ): Promise<QueryInstance>;

  /**
   * Streams QueryInstance records from the API.
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
   * @param { QueryListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | QueryListInstanceEachOptions
      | ((item: QueryInstance, done: (err?: Error) => void) => void),
    callback?: (item: QueryInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of QueryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: QueryPage) => any
  ): Promise<QueryPage>;
  /**
   * Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { QueryListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | QueryListInstanceOptions
      | ((error: Error | null, items: QueryInstance[]) => any),
    callback?: (error: Error | null, items: QueryInstance[]) => any
  ): Promise<QueryInstance[]>;
  /**
   * Retrieve a single page of QueryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { QueryListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | QueryListInstancePageOptions
      | ((error: Error | null, items: QueryPage) => any),
    callback?: (error: Error | null, items: QueryPage) => any
  ): Promise<QueryPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface QuerySolution {
  assistantSid?: string;
}

interface QueryListInstanceImpl extends QueryListInstance {}
class QueryListInstanceImpl implements QueryListInstance {
  _version?: V1;
  _solution?: QuerySolution;
  _uri?: string;
}

export function QueryListInstance(
  version: V1,
  assistantSid: string
): QueryListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as QueryListInstanceImpl;

  instance.get = function get(sid): QueryContext {
    return new QueryContextImpl(version, assistantSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/Queries`;

  instance.create = function create(
    params: QueryListInstanceCreateOptions,
    callback?: (error: Error | null, item?: QueryInstance) => any
  ): Promise<QueryInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["language"] === null || params["language"] === undefined) {
      throw new Error("Required parameter \"params['language']\" missing.");
    }

    if (params["query"] === null || params["query"] === undefined) {
      throw new Error("Required parameter \"params['query']\" missing.");
    }

    let data: any = {};

    data["Language"] = params["language"];

    data["Query"] = params["query"];
    if (params["tasks"] !== undefined) data["Tasks"] = params["tasks"];
    if (params["modelBuild"] !== undefined)
      data["ModelBuild"] = params["modelBuild"];

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
        new QueryInstance(
          operationVersion,
          payload,
          this._solution.assistantSid
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
      | QueryListInstancePageOptions
      | ((error: Error | null, item?: QueryPage) => any),
    callback?: (error: Error | null, item?: QueryPage) => any
  ): Promise<QueryPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: QueryPage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["language"] !== undefined) data["Language"] = params["language"];
    if (params["modelBuild"] !== undefined)
      data["ModelBuild"] = params["modelBuild"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["dialogueSid"] !== undefined)
      data["DialogueSid"] = params["dialogueSid"];
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
      (payload) => new QueryPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: QueryPage) => any
  ): Promise<QueryPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new QueryPage(this._version, payload, this._solution)
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

export class QueryPage extends Page<
  V1,
  QueryPayload,
  QueryResource,
  QueryInstance
> {
  /**
   * Initialize the QueryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: QuerySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of QueryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: QueryResource): QueryInstance {
    return new QueryInstance(
      this._version,
      payload,
      this._solution.assistantSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
