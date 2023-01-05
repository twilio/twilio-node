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
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { DefaultsListInstance } from "./assistant/defaults";
import { DialogueListInstance } from "./assistant/dialogue";
import { FieldTypeListInstance } from "./assistant/fieldType";
import { ModelBuildListInstance } from "./assistant/modelBuild";
import { QueryListInstance } from "./assistant/query";
import { StyleSheetListInstance } from "./assistant/styleSheet";
import { TaskListInstance } from "./assistant/task";
import { WebhookListInstance } from "./assistant/webhook";

/**
 * Options to pass to update a AssistantInstance
 */
export interface AssistantContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long. */
  friendlyName?: string;
  /** Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored. */
  logQueries?: boolean;
  /** An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique. */
  uniqueName?: string;
  /** Reserved. */
  callbackUrl?: string;
  /** Reserved. */
  callbackEvents?: string;
  /** The JSON string that defines the Assistant\\\'s [style sheet](https://www.twilio.com/docs/autopilot/api/assistant/stylesheet) */
  styleSheet?: any;
  /** A JSON object that defines the Assistant\\\'s [default tasks](https://www.twilio.com/docs/autopilot/api/assistant/defaults) for various scenarios, including initiation actions and fallback tasks. */
  defaults?: any;
  /** A string describing the state of the assistant. */
  developmentStage?: string;
}

/**
 * Options to pass to create a AssistantInstance
 */
export interface AssistantListInstanceCreateOptions {
  /** A descriptive string that you create to describe the new resource. It is not unique and can be up to 255 characters long. */
  friendlyName?: string;
  /** Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored. */
  logQueries?: boolean;
  /** An application-defined string that uniquely identifies the new resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique. */
  uniqueName?: string;
  /** Reserved. */
  callbackUrl?: string;
  /** Reserved. */
  callbackEvents?: string;
  /** The JSON string that defines the Assistant\\\'s [style sheet](https://www.twilio.com/docs/autopilot/api/assistant/stylesheet) */
  styleSheet?: any;
  /** A JSON object that defines the Assistant\\\'s [default tasks](https://www.twilio.com/docs/autopilot/api/assistant/defaults) for various scenarios, including initiation actions and fallback tasks. */
  defaults?: any;
}
/**
 * Options to pass to each
 */
export interface AssistantListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AssistantInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AssistantListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AssistantListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AssistantContext {
  defaults: DefaultsListInstance;
  dialogues: DialogueListInstance;
  fieldTypes: FieldTypeListInstance;
  modelBuilds: ModelBuildListInstance;
  queries: QueryListInstance;
  styleSheet: StyleSheetListInstance;
  tasks: TaskListInstance;
  webhooks: WebhookListInstance;

  /**
   * Remove a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;

  /**
   * Update a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  update(
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;
  /**
   * Update a AssistantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  update(
    params: AssistantContextUpdateOptions,
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;
  update(params?: any, callback?: any): Promise<AssistantInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantContextSolution {
  sid: string;
}

export class AssistantContextImpl implements AssistantContext {
  protected _solution: AssistantContextSolution;
  protected _uri: string;

  protected _defaults?: DefaultsListInstance;
  protected _dialogues?: DialogueListInstance;
  protected _fieldTypes?: FieldTypeListInstance;
  protected _modelBuilds?: ModelBuildListInstance;
  protected _queries?: QueryListInstance;
  protected _styleSheet?: StyleSheetListInstance;
  protected _tasks?: TaskListInstance;
  protected _webhooks?: WebhookListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Assistants/${sid}`;
  }

  get defaults(): DefaultsListInstance {
    this._defaults =
      this._defaults || DefaultsListInstance(this._version, this._solution.sid);
    return this._defaults;
  }

  get dialogues(): DialogueListInstance {
    this._dialogues =
      this._dialogues ||
      DialogueListInstance(this._version, this._solution.sid);
    return this._dialogues;
  }

  get fieldTypes(): FieldTypeListInstance {
    this._fieldTypes =
      this._fieldTypes ||
      FieldTypeListInstance(this._version, this._solution.sid);
    return this._fieldTypes;
  }

  get modelBuilds(): ModelBuildListInstance {
    this._modelBuilds =
      this._modelBuilds ||
      ModelBuildListInstance(this._version, this._solution.sid);
    return this._modelBuilds;
  }

  get queries(): QueryListInstance {
    this._queries =
      this._queries || QueryListInstance(this._version, this._solution.sid);
    return this._queries;
  }

  get styleSheet(): StyleSheetListInstance {
    this._styleSheet =
      this._styleSheet ||
      StyleSheetListInstance(this._version, this._solution.sid);
    return this._styleSheet;
  }

  get tasks(): TaskListInstance {
    this._tasks =
      this._tasks || TaskListInstance(this._version, this._solution.sid);
    return this._tasks;
  }

  get webhooks(): WebhookListInstance {
    this._webhooks =
      this._webhooks || WebhookListInstance(this._version, this._solution.sid);
    return this._webhooks;
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

  fetch(callback?: any): Promise<AssistantInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssistantInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<AssistantInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["logQueries"] !== undefined)
      data["LogQueries"] = serialize.bool(params["logQueries"]);
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["callbackEvents"] !== undefined)
      data["CallbackEvents"] = params["callbackEvents"];
    if (params["styleSheet"] !== undefined)
      data["StyleSheet"] = serialize.object(params["styleSheet"]);
    if (params["defaults"] !== undefined)
      data["Defaults"] = serialize.object(params["defaults"]);
    if (params["developmentStage"] !== undefined)
      data["DevelopmentStage"] = params["developmentStage"];

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
        new AssistantInstance(operationVersion, payload, instance._solution.sid)
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

interface AssistantPayload extends TwilioResponsePayload {
  assistants: AssistantResource[];
}

interface AssistantResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  latest_model_build_sid: string;
  links: object;
  log_queries: boolean;
  development_stage: string;
  needs_model_build: boolean;
  sid: string;
  unique_name: string;
  url: string;
  callback_url: string;
  callback_events: string;
}

export class AssistantInstance {
  protected _solution: AssistantContextSolution;
  protected _context?: AssistantContext;

  constructor(
    protected _version: V1,
    payload: AssistantResource,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.latestModelBuildSid = payload.latest_model_build_sid;
    this.links = payload.links;
    this.logQueries = payload.log_queries;
    this.developmentStage = payload.development_stage;
    this.needsModelBuild = payload.needs_model_build;
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.url = payload.url;
    this.callbackUrl = payload.callback_url;
    this.callbackEvents = payload.callback_events;

    this._solution = { sid: sid || this.sid };
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
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * Reserved
   */
  latestModelBuildSid: string;
  /**
   * A list of the URLs of the Assistant\'s related resources
   */
  links: object;
  /**
   * Whether queries should be logged and kept after training
   */
  logQueries: boolean;
  /**
   * A string describing the state of the assistant.
   */
  developmentStage: string;
  /**
   * Whether model needs to be rebuilt
   */
  needsModelBuild: boolean;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName: string;
  /**
   * The absolute URL of the Assistant resource
   */
  url: string;
  /**
   * Reserved
   */
  callbackUrl: string;
  /**
   * Reserved
   */
  callbackEvents: string;

  private get _proxy(): AssistantContext {
    this._context =
      this._context ||
      new AssistantContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a AssistantInstance
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
   * Fetch a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  update(
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;
  /**
   * Update a AssistantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  update(
    params: AssistantContextUpdateOptions,
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;
  update(params?: any, callback?: any): Promise<AssistantInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the defaults.
   */
  defaults(): DefaultsListInstance {
    return this._proxy.defaults;
  }

  /**
   * Access the dialogues.
   */
  dialogues(): DialogueListInstance {
    return this._proxy.dialogues;
  }

  /**
   * Access the fieldTypes.
   */
  fieldTypes(): FieldTypeListInstance {
    return this._proxy.fieldTypes;
  }

  /**
   * Access the modelBuilds.
   */
  modelBuilds(): ModelBuildListInstance {
    return this._proxy.modelBuilds;
  }

  /**
   * Access the queries.
   */
  queries(): QueryListInstance {
    return this._proxy.queries;
  }

  /**
   * Access the styleSheet.
   */
  styleSheet(): StyleSheetListInstance {
    return this._proxy.styleSheet;
  }

  /**
   * Access the tasks.
   */
  tasks(): TaskListInstance {
    return this._proxy.tasks;
  }

  /**
   * Access the webhooks.
   */
  webhooks(): WebhookListInstance {
    return this._proxy.webhooks;
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
      friendlyName: this.friendlyName,
      latestModelBuildSid: this.latestModelBuildSid,
      links: this.links,
      logQueries: this.logQueries,
      developmentStage: this.developmentStage,
      needsModelBuild: this.needsModelBuild,
      sid: this.sid,
      uniqueName: this.uniqueName,
      url: this.url,
      callbackUrl: this.callbackUrl,
      callbackEvents: this.callbackEvents,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AssistantSolution {}

export interface AssistantListInstance {
  _version: V1;
  _solution: AssistantSolution;
  _uri: string;

  (sid: string): AssistantContext;
  get(sid: string): AssistantContext;

  /**
   * Create a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  create(
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;
  /**
   * Create a AssistantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  create(
    params: AssistantListInstanceCreateOptions,
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;
  create(params?: any, callback?: any): Promise<AssistantInstance>;

  /**
   * Streams AssistantInstance records from the API.
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
    callback?: (item: AssistantInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams AssistantInstance records from the API.
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
   * @param { AssistantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: AssistantListInstanceEachOptions,
    callback?: (item: AssistantInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: AssistantPage) => any
  ): Promise<AssistantPage>;
  /**
   * Retrieve a single target page of AssistantInstance records from the API.
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
    callback?: (error: Error | null, items: AssistantPage) => any
  ): Promise<AssistantPage>;
  getPage(params?: any, callback?: any): Promise<AssistantPage>;
  /**
   * Lists AssistantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AssistantInstance[]) => any
  ): Promise<AssistantInstance[]>;
  /**
   * Lists AssistantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: AssistantListInstanceOptions,
    callback?: (error: Error | null, items: AssistantInstance[]) => any
  ): Promise<AssistantInstance[]>;
  list(params?: any, callback?: any): Promise<AssistantInstance[]>;
  /**
   * Retrieve a single page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AssistantPage) => any
  ): Promise<AssistantPage>;
  /**
   * Retrieve a single page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: AssistantListInstancePageOptions,
    callback?: (error: Error | null, items: AssistantPage) => any
  ): Promise<AssistantPage>;
  page(params?: any, callback?: any): Promise<AssistantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AssistantListInstance(version: V1): AssistantListInstance {
  const instance = ((sid) => instance.get(sid)) as AssistantListInstance;

  instance.get = function get(sid): AssistantContext {
    return new AssistantContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Assistants`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<AssistantInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["logQueries"] !== undefined)
      data["LogQueries"] = serialize.bool(params["logQueries"]);
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["callbackEvents"] !== undefined)
      data["CallbackEvents"] = params["callbackEvents"];
    if (params["styleSheet"] !== undefined)
      data["StyleSheet"] = serialize.object(params["styleSheet"]);
    if (params["defaults"] !== undefined)
      data["Defaults"] = serialize.object(params["defaults"]);

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
      (payload) => new AssistantInstance(operationVersion, payload)
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
  ): Promise<AssistantPage> {
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
        new AssistantPage(operationVersion, payload, instance._solution)
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
  ): Promise<AssistantPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AssistantPage(instance._version, payload, instance._solution)
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

export class AssistantPage extends Page<
  V1,
  AssistantPayload,
  AssistantResource,
  AssistantInstance
> {
  /**
   * Initialize the AssistantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AssistantSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AssistantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssistantResource): AssistantInstance {
    return new AssistantInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
