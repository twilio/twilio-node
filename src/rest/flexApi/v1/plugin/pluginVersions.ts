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

/**
 * Options to pass to fetch a PluginVersionsInstance
 */
export interface PluginVersionsContextFetchOptions {
  /** The Flex-Metadata HTTP request header */
  flexMetadata?: string;
}

/**
 * Options to pass to create a PluginVersionsInstance
 */
export interface PluginVersionsListInstanceCreateOptions {
  /** The Flex Plugin Version\\\'s version. */
  version: string;
  /** The URL of the Flex Plugin Version bundle */
  pluginUrl: string;
  /** The Flex-Metadata HTTP request header */
  flexMetadata?: string;
  /** The changelog of the Flex Plugin Version. */
  changelog?: string;
  /** Whether this Flex Plugin Version requires authorization. */
  private?: boolean;
  /** The version of Flex Plugins CLI used to create this plugin */
  cliVersion?: string;
  /** The validation status of the plugin, indicating whether it has been validated */
  validateStatus?: string;
}
/**
 * Options to pass to each
 */
export interface PluginVersionsListInstanceEachOptions {
  /** The Flex-Metadata HTTP request header */
  flexMetadata?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: PluginVersionsInstance,
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
export interface PluginVersionsListInstanceOptions {
  /** The Flex-Metadata HTTP request header */
  flexMetadata?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface PluginVersionsListInstancePageOptions {
  /** The Flex-Metadata HTTP request header */
  flexMetadata?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface PluginVersionsContext {
  /**
   * Fetch a PluginVersionsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginVersionsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PluginVersionsInstance) => any
  ): Promise<PluginVersionsInstance>;
  /**
   * Fetch a PluginVersionsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginVersionsInstance
   */
  fetch(
    params: PluginVersionsContextFetchOptions,
    callback?: (error: Error | null, item?: PluginVersionsInstance) => any
  ): Promise<PluginVersionsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PluginVersionsContextSolution {
  pluginSid: string;
  sid: string;
}

export class PluginVersionsContextImpl implements PluginVersionsContext {
  protected _solution: PluginVersionsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, pluginSid: string, sid: string) {
    if (!isValidPathParam(pluginSid)) {
      throw new Error("Parameter 'pluginSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { pluginSid, sid };
    this._uri = `/PluginService/Plugins/${pluginSid}/Versions/${sid}`;
  }

  fetch(
    params?:
      | PluginVersionsContextFetchOptions
      | ((error: Error | null, item?: PluginVersionsInstance) => any),
    callback?: (error: Error | null, item?: PluginVersionsInstance) => any
  ): Promise<PluginVersionsInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    headers["Accept"] = "application/json";
    if (params["flexMetadata"] !== undefined)
      headers["Flex-Metadata"] = params["flexMetadata"];

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
        new PluginVersionsInstance(
          operationVersion,
          payload,
          instance._solution.pluginSid,
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

interface PluginVersionsPayload extends TwilioResponsePayload {
  plugin_versions: PluginVersionsResource[];
}

interface PluginVersionsResource {
  sid: string;
  plugin_sid: string;
  account_sid: string;
  version: string;
  plugin_url: string;
  changelog: string;
  private: boolean;
  archived: boolean;
  validated: boolean;
  date_created: Date;
  url: string;
}

export class PluginVersionsInstance {
  protected _solution: PluginVersionsContextSolution;
  protected _context?: PluginVersionsContext;

  constructor(
    protected _version: V1,
    payload: PluginVersionsResource,
    pluginSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.pluginSid = payload.plugin_sid;
    this.accountSid = payload.account_sid;
    this.version = payload.version;
    this.pluginUrl = payload.plugin_url;
    this.changelog = payload.changelog;
    this._private = payload.private;
    this.archived = payload.archived;
    this.validated = payload.validated;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { pluginSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Flex Plugin Version resource.
   */
  sid: string;
  /**
   * The SID of the Flex Plugin resource this Flex Plugin Version belongs to.
   */
  pluginSid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Plugin Version resource and owns this resource.
   */
  accountSid: string;
  /**
   * The unique version of this Flex Plugin Version.
   */
  version: string;
  /**
   * The URL of where the Flex Plugin Version JavaScript bundle is hosted on.
   */
  pluginUrl: string;
  /**
   * A changelog that describes the changes this Flex Plugin Version brings.
   */
  changelog: string;
  /**
   * Whether the Flex Plugin Version is validated. The default value is false.
   */
  _private: boolean;
  /**
   * Whether the Flex Plugin Version is archived. The default value is false.
   */
  archived: boolean;
  validated: boolean;
  /**
   * The date and time in GMT when the Flex Plugin Version was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The absolute URL of the Flex Plugin Version resource.
   */
  url: string;

  private get _proxy(): PluginVersionsContext {
    this._context =
      this._context ||
      new PluginVersionsContextImpl(
        this._version,
        this._solution.pluginSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a PluginVersionsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginVersionsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PluginVersionsInstance) => any
  ): Promise<PluginVersionsInstance>;
  /**
   * Fetch a PluginVersionsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginVersionsInstance
   */
  fetch(
    params: PluginVersionsContextFetchOptions,
    callback?: (error: Error | null, item?: PluginVersionsInstance) => any
  ): Promise<PluginVersionsInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: PluginVersionsInstance) => any
  ): Promise<PluginVersionsInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      pluginSid: this.pluginSid,
      accountSid: this.accountSid,
      version: this.version,
      pluginUrl: this.pluginUrl,
      changelog: this.changelog,
      _private: this._private,
      archived: this.archived,
      validated: this.validated,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PluginVersionsSolution {
  pluginSid: string;
}

export interface PluginVersionsListInstance {
  _version: V1;
  _solution: PluginVersionsSolution;
  _uri: string;

  (sid: string): PluginVersionsContext;
  get(sid: string): PluginVersionsContext;

  /**
   * Create a PluginVersionsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginVersionsInstance
   */
  create(
    params: PluginVersionsListInstanceCreateOptions,
    callback?: (error: Error | null, item?: PluginVersionsInstance) => any
  ): Promise<PluginVersionsInstance>;

  /**
   * Streams PluginVersionsInstance records from the API.
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
   * @param { PluginVersionsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: PluginVersionsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: PluginVersionsListInstanceEachOptions,
    callback?: (
      item: PluginVersionsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of PluginVersionsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: PluginVersionsPage) => any
  ): Promise<PluginVersionsPage>;
  /**
   * Lists PluginVersionsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PluginVersionsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: PluginVersionsInstance[]) => any
  ): Promise<PluginVersionsInstance[]>;
  list(
    params: PluginVersionsListInstanceOptions,
    callback?: (error: Error | null, items: PluginVersionsInstance[]) => any
  ): Promise<PluginVersionsInstance[]>;
  /**
   * Retrieve a single page of PluginVersionsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PluginVersionsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: PluginVersionsPage) => any
  ): Promise<PluginVersionsPage>;
  page(
    params: PluginVersionsListInstancePageOptions,
    callback?: (error: Error | null, items: PluginVersionsPage) => any
  ): Promise<PluginVersionsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PluginVersionsListInstance(
  version: V1,
  pluginSid: string
): PluginVersionsListInstance {
  if (!isValidPathParam(pluginSid)) {
    throw new Error("Parameter 'pluginSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as PluginVersionsListInstance;

  instance.get = function get(sid): PluginVersionsContext {
    return new PluginVersionsContextImpl(version, pluginSid, sid);
  };

  instance._version = version;
  instance._solution = { pluginSid };
  instance._uri = `/PluginService/Plugins/${pluginSid}/Versions`;

  instance.create = function create(
    params: PluginVersionsListInstanceCreateOptions,
    callback?: (error: Error | null, items: PluginVersionsInstance) => any
  ): Promise<PluginVersionsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["version"] === null || params["version"] === undefined) {
      throw new Error("Required parameter \"params['version']\" missing.");
    }

    if (params["pluginUrl"] === null || params["pluginUrl"] === undefined) {
      throw new Error("Required parameter \"params['pluginUrl']\" missing.");
    }

    let data: any = {};

    data["Version"] = params["version"];

    data["PluginUrl"] = params["pluginUrl"];
    if (params["changelog"] !== undefined)
      data["Changelog"] = params["changelog"];
    if (params["private"] !== undefined)
      data["Private"] = serialize.bool(params["private"]);
    if (params["cliVersion"] !== undefined)
      data["CliVersion"] = params["cliVersion"];
    if (params["validateStatus"] !== undefined)
      data["ValidateStatus"] = params["validateStatus"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["flexMetadata"] !== undefined)
      headers["Flex-Metadata"] = params["flexMetadata"];

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PluginVersionsInstance(
          operationVersion,
          payload,
          instance._solution.pluginSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | PluginVersionsListInstancePageOptions
      | ((error: Error | null, items: PluginVersionsPage) => any),
    callback?: (error: Error | null, items: PluginVersionsPage) => any
  ): Promise<PluginVersionsPage> {
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
    if (params["flexMetadata"] !== undefined)
      headers["Flex-Metadata"] = params["flexMetadata"];

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PluginVersionsPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: PluginVersionsPage) => any
  ): Promise<PluginVersionsPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new PluginVersionsPage(instance._version, payload, instance._solution)
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

export class PluginVersionsPage extends Page<
  V1,
  PluginVersionsPayload,
  PluginVersionsResource,
  PluginVersionsInstance
> {
  /**
   * Initialize the PluginVersionsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: PluginVersionsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of PluginVersionsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PluginVersionsResource): PluginVersionsInstance {
    return new PluginVersionsInstance(
      this._version,
      payload,
      this._solution.pluginSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
